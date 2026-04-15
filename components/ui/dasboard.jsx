import { useState, useEffect, useRef, useCallback } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const INITIAL_TASKS = [
    { id: 1, name: "Follow up with Acme Inc.", desc: "Send proposal and schedule meeting", priority: "high", due: "Due Today", done: false },
    { id: 2, name: "Prepare quarterly report", desc: "Compile sales data and forecasts", priority: "medium", due: "Due Tomorrow", done: false },
    { id: 3, name: "Update customer profiles", desc: "Verify contact information and preferences", priority: "low", due: "Due Oct 15", done: true },
];

const INITIAL_LEADS = [
    { id: 1, status: "Success", email: "ken99@yahoo.com", amount: 316 },
    { id: 2, status: "Success", email: "abe45@gmail.com", amount: 242 },
    { id: 3, status: "Processing", email: "monserrat44@gmail.com", amount: 837 },
    { id: 4, status: "Success", email: "silas22@gmail.com", amount: 874 },
    { id: 5, status: "Failed", email: "carmella@hotmail.com", amount: 721 },
    { id: 6, status: "Pending", email: "derek.wu@outlook.com", amount: 540 },
    { id: 7, status: "Success", email: "priya.sharma@gmail.com", amount: 1203 },
    { id: 8, status: "Failed", email: "carlos.m@yahoo.com", amount: 388 },
];

const PIPELINE = [
    { name: "Lead", deals: 235, val: "$420,500", pct: 38, color: "#38bdf8", shadow: "rgba(56,189,248,.4)" },
    { name: "Qualified", deals: 146, val: "$267,800", pct: 24, color: "#a78bfa", shadow: "rgba(167,139,250,.4)" },
    { name: "Proposal", deals: 84, val: "$192,400", pct: 18, color: "#34d399", shadow: "rgba(52,211,153,.4)" },
    { name: "Negotiation", deals: 52, val: "$129,600", pct: 12, color: "#64748b", shadow: "none" },
    { name: "Closed Won", deals: 36, val: "$87,200", pct: 8, color: "#475569", shadow: "none" },
];

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const PRESETS = [
    { key: "today", label: "Today" },
    { key: "yesterday", label: "Yesterday" },
    { key: "week", label: "This Week" },
    { key: "7days", label: "Last 7 Days" },
    { key: "28days", label: "Last 28 Days" },
    { key: "month", label: "This Month" },
    { key: "lastmonth", label: "Last Month" },
    { key: "year", label: "This Year" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmtDate(d) {
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function applyPreset(key) {
    const n = new Date(); n.setHours(0, 0, 0, 0);
    let s = new Date(n), e = new Date(n);
    if (key === "yesterday") { s.setDate(s.getDate() - 1); e = new Date(s); }
    else if (key === "week") { s.setDate(n.getDate() - n.getDay()); }
    else if (key === "7days") { s.setDate(s.getDate() - 6); }
    else if (key === "28days") { s.setDate(s.getDate() - 27); }
    else if (key === "month") { s = new Date(n.getFullYear(), n.getMonth(), 1); }
    else if (key === "lastmonth") { s = new Date(n.getFullYear(), n.getMonth() - 1, 1); e = new Date(n.getFullYear(), n.getMonth(), 0); }
    else if (key === "year") { s = new Date(n.getFullYear(), 0, 1); }
    return { start: s, end: e };
}

// ─── Styles (css-in-js object map) ───────────────────────────────────────────

const css = {
    // root vars injected via <style> tag below
};

// ─── Sub-components ───────────────────────────────────────────────────────────

/* Stars Canvas */
function StarCanvas() {
    const ref = useRef(null);
    useEffect(() => {
        const c = ref.current;
        const ctx = c.getContext("2d");
        const parent = c.parentElement;
        let stars = [], raf;
        function resize() {
            c.width = parent.clientWidth; c.height = parent.clientHeight;
            stars = Array.from({ length: 200 }, () => ({
                x: Math.random() * c.width, y: Math.random() * c.height,
                r: Math.random() * 1.2 + .2, o: Math.random() * .6 + .1,
                sp: Math.random() * .5 + .05, ph: Math.random() * Math.PI * 2
            }));
        }
        function draw() {
            ctx.clearRect(0, 0, c.width, c.height);
            const t = Date.now() / 1000;
            stars.forEach(s => {
                const a = s.o * (0.5 + 0.5 * Math.sin(t * s.sp + s.ph));
                ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(148,163,184,${a})`; ctx.fill();
            });
            raf = requestAnimationFrame(draw);
        }
        const ro = new ResizeObserver(resize);
        ro.observe(parent);
        resize(); draw();
        return () => { cancelAnimationFrame(raf); ro.disconnect(); };
    }, []);
    return <canvas ref={ref} style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}

/* SVG Defs */
function SvgDefs() {
    return (
        <svg width="0" height="0" style={{ position: "absolute" }}>
            <defs>
                <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
                <linearGradient id="dg1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity=".9" /><stop offset="100%" stopColor="#0ea5e9" stopOpacity=".7" />
                </linearGradient>
                <linearGradient id="dg2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity=".9" /><stop offset="100%" stopColor="#7c3aed" stopOpacity=".7" />
                </linearGradient>
                <linearGradient id="dg3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#34d399" stopOpacity=".9" /><stop offset="100%" stopColor="#059669" stopOpacity=".7" />
                </linearGradient>
                <linearGradient id="dg4" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#94a3b8" stopOpacity=".7" /><stop offset="100%" stopColor="#64748b" stopOpacity=".5" />
                </linearGradient>
            </defs>
        </svg>
    );
}

/* Toast */
function Toast({ msg, visible }) {
    return (
        <div className={`toast-el${visible ? " show" : ""}`}>{msg}</div>
    );
}

/* Date Picker */
function DatePicker({ onClose }) {
    const [year, setYear] = useState(2026);
    const [month, setMonth] = useState(3);
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const [picking, setPicking] = useState(false);
    const [activePreset, setActivePreset] = useState("28days");
    const [label, setLabel] = useState("18 Mar 2026 – 14 Apr 2026");

    function navigate(d) {
        let m = month + d, y = year;
        if (m < 0) { m = 11; y--; }
        if (m > 11) { m = 0; y++; }
        setMonth(m); setYear(y);
    }

    function clickDay(y2, m2, d2) {
        const t = new Date(y2, m2, d2).getTime();
        if (!picking || !start) {
            setStart(t); setEnd(null); setPicking(true);
        } else {
            setEnd(t); setPicking(false);
            const s = new Date(Math.min(start, t)), e = new Date(Math.max(start, t));
            setLabel(s.getTime() === e.getTime() ? fmtDate(s) : `${fmtDate(s)} – ${fmtDate(e)}`);
            setActivePreset("");
            onClose(s, e, s.getTime() === e.getTime() ? fmtDate(s) : `${fmtDate(s)} – ${fmtDate(e)}`);
        }
    }

    function doPreset(key) {
        const { start: s, end: e } = applyPreset(key);
        setStart(s.getTime()); setEnd(e.getTime()); setPicking(false);
        const lbl = s.getTime() === e.getTime() ? fmtDate(s) : `${fmtDate(s)} – ${fmtDate(e)}`;
        setLabel(lbl); setActivePreset(key);
        setYear(s.getFullYear()); setMonth(s.getMonth());
        onClose(s, e, lbl);
    }

    // Build calendar cells
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const fd = new Date(year, month, 1).getDay();
    const dim = new Date(year, month + 1, 0).getDate();
    const dip = new Date(year, month, 0).getDate();
    const cells = [];
    for (let i = 0; i < fd; i++) cells.push({ d: dip - fd + 1 + i, other: true });
    for (let i = 1; i <= dim; i++) cells.push({ d: i, other: false });
    while (cells.length % 7) cells.push({ d: cells.length - dim - fd + 1, other: true });

    const s2 = start && end ? Math.min(start, end) : start;
    const e2 = start && end ? Math.max(start, end) : null;

    return (
        <div className="dp-dd show">
            <div className="dp-presets">
                {PRESETS.map(p => (
                    <button key={p.key} className={`dp-p${activePreset === p.key ? " active" : ""}`} onClick={() => doPreset(p.key)}>{p.label}</button>
                ))}
            </div>
            <div className="dp-cal">
                <div className="dp-nav">
                    <button className="dp-nb" onClick={() => navigate(-1)}>&#8249;</button>
                    <span className="dp-title">{MONTHS[month]} {year}</span>
                    <button className="dp-nb" onClick={() => navigate(1)}>&#8250;</button>
                </div>
                <div className="dp-grid">
                    {DAY_NAMES.map(d => <div key={d} className="dp-dh">{d}</div>)}
                    {cells.map((c, i) => {
                        if (c.other) return <div key={i} className="dp-d dp-o"><div className="dp-di">{c.d}</div></div>;
                        const dt = new Date(year, month, c.d); dt.setHours(0, 0, 0, 0);
                        let cls = "dp-d";
                        if (dt.getTime() === today.getTime()) cls += " dp-today";
                        if (s2 && e2) {
                            if (dt.getTime() === s2) cls += " dp-rs";
                            else if (dt.getTime() === e2) cls += " dp-re";
                            else if (dt > new Date(s2) && dt < new Date(e2)) cls += " dp-ir";
                        } else if (s2 && dt.getTime() === s2) cls += " dp-sel";
                        return (
                            <div key={i} className={cls} onClick={() => clickDay(year, month, c.d)}>
                                <div className="dp-di">{c.d}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

/* Stat Cards */
function StatCards() {
    return (
        <div className="stats-row">
            {/* Target */}
            <div className="scard">
                <div className="sc-title">Your target is incomplete</div>
                <div className="tgt-body">
                    <svg className="ring-svg" viewBox="0 0 62 62">
                        <circle className="ring-bg" cx="31" cy="31" r="24" />
                        <circle className="ring-fg" cx="31" cy="31" r="24" />
                        <text className="ring-lbl" x="31" y="31">×48</text>
                    </svg>
                    <div className="tgt-desc">
                        You have completed <span className="tgt-pct">48%</span> of the given target, you can also check your status
                    </div>
                </div>
            </div>
            {/* Customers */}
            <div className="scard">
                <div className="sc-head">
                    <div>
                        <div className="sc-lbl">Total Customers</div>
                        <div className="sc-val">1890</div>
                        <div className="sc-chg up">+10.4% from last month</div>
                    </div>
                    <div className="sc-icon">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* Deals */}
            <div className="scard">
                <div className="sc-head">
                    <div>
                        <div className="sc-lbl">Total Deals</div>
                        <div className="sc-val">1,300</div>
                        <div className="sc-chg dn">-0.8% from last month</div>
                    </div>
                    <div className="sc-icon">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-4 0v2" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* Revenue */}
            <div className="scard">
                <div className="sc-head">
                    <div>
                        <div className="sc-lbl">Total Revenue</div>
                        <div className="sc-val">$435,578</div>
                        <div className="sc-chg up">+20.1% from last month</div>
                    </div>
                    <div className="sc-icon">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" /><polyline points="8 21 12 17 16 21" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* Donut / Leads by Source */
function LeadsSource({ onToast }) {
    return (
        <div className="panel">
            <div className="p-head">
                <div className="p-title">Leads by Source</div>
                <button className="btn-out" onClick={() => onToast("📊 Exporting…")}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                    </svg>Export
                </button>
            </div>
            <div className="donut-wrap">
                <svg viewBox="0 0 140 140" width="164" height="164">
                    <circle cx="70" cy="70" r="50" fill="none" stroke="url(#dg1)" strokeWidth="22" strokeDasharray="92.4 221.76" strokeDashoffset="78.54" style={{ animation: "dashIn 1.2s .4s ease both" }} />
                    <circle cx="70" cy="70" r="50" fill="none" stroke="url(#dg2)" strokeWidth="22" strokeDasharray="96.4 217.76" strokeDashoffset="-13.86" style={{ animation: "dashIn 1.2s .55s ease both" }} />
                    <circle cx="70" cy="70" r="50" fill="none" stroke="url(#dg3)" strokeWidth="22" strokeDasharray="67.2 246.96" strokeDashoffset="-110.26" style={{ animation: "dashIn 1.2s .7s ease both" }} />
                    <circle cx="70" cy="70" r="50" fill="none" stroke="url(#dg4)" strokeWidth="22" strokeDasharray="58.1 256.06" strokeDashoffset="-177.46" style={{ animation: "dashIn 1.2s .85s ease both" }} />
                </svg>
                <div className="donut-ct"><div className="donut-big">935</div><div className="donut-sm">Leads</div></div>
            </div>
            <div className="leg-row">
                {[
                    { color: "#38bdf8", shadow: "rgba(56,189,248,.6)", label: "SOCIAL", val: 275 },
                    { color: "#a78bfa", shadow: "rgba(167,139,250,.6)", label: "EMAIL", val: 200 },
                    { color: "#34d399", shadow: "rgba(52,211,153,.6)", label: "CALL", val: 287 },
                    { color: "#94a3b8", shadow: "none", label: "OTHERS", val: 173 },
                ].map(l => (
                    <div key={l.label} className="leg">
                        <div className="leg-top">
                            <span className="leg-dot" style={{ background: l.color, boxShadow: l.shadow !== "none" ? `0 0 6px ${l.shadow}` : undefined }} />
                            <span className="leg-lbl">{l.label}</span>
                        </div>
                        <div className="leg-val">{l.val}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* Tasks Panel */
function TasksPanel({ onToast }) {
    const [tasks, setTasks] = useState(INITIAL_TASKS);
    const [modalOpen, setModalOpen] = useState(false);
    const [form, setForm] = useState({ title: "", desc: "", priority: "medium", due: "", assigned: "" });
    const [titleErr, setTitleErr] = useState(false);

    function toggleTask(id) { setTasks(ts => ts.map(t => t.id === id ? { ...t, done: !t.done } : t)); }
    function delTask(id) { setTasks(ts => ts.filter(t => t.id !== id)); onToast("Task deleted"); }

    function openModal() {
        setForm({ title: "", desc: "", priority: "medium", due: "", assigned: "" });
        setTitleErr(false); setModalOpen(true);
    }

    function submitTask() {
        if (!form.title.trim()) { setTitleErr(true); return; }
        const due = form.due ? "Due " + new Date(form.due + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "";
        setTasks(ts => [{ id: Date.now(), name: form.title.trim(), desc: form.desc.trim(), priority: form.priority, due, done: false }, ...ts]);
        setModalOpen(false);
        onToast("✦ Task added successfully");
    }

    return (
        <>
            <div className="panel">
                <div className="p-head" style={{ marginBottom: 2 }}>
                    <div className="p-title">Tasks</div>
                    <button className="btn-out" onClick={openModal}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
                        </svg>Add Task
                    </button>
                </div>
                <div className="p-sub">Track and manage your upcoming tasks.</div>
                <div className="task-list">
                    {tasks.length === 0 ? (
                        <div style={{ textAlign: "center", padding: "24px", color: "var(--text3)", fontSize: 13 }}>No tasks yet. Click "Add Task" ✦</div>
                    ) : tasks.map(t => (
                        <div key={t.id} className={`task-item${t.done ? " done" : ""}`}>
                            <div className="trow">
                                <div className={`tcb${t.done ? " on" : ""}`} onClick={() => toggleTask(t.id)} />
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div className="tname">{t.name}</div>
                                    {t.desc && <div className="tdesc">{t.desc}</div>}
                                </div>
                                <button className="dbtn" onClick={() => delTask(t.id)}>✕</button>
                            </div>
                            <div className="tmeta">
                                <span className={`tag ${t.priority}`}>{cap(t.priority)}</span>
                                {t.due && <span className="tdue">{t.due}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <div className={`overlay${modalOpen ? " show" : ""}`} onClick={e => { if (e.target.classList.contains("overlay")) setModalOpen(false); }}>
                <div className="modal" onClick={e => e.stopPropagation()}>
                    <div className="modal-t">
                        Add New Task
                        <button className="modal-x" onClick={() => setModalOpen(false)}>✕</button>
                    </div>
                    <div className="fg">
                        <label className="fl">Task Title *</label>
                        <input className="fi2" style={titleErr ? { borderColor: "var(--red)" } : {}} placeholder="e.g. Follow up with client"
                            value={form.title} onChange={e => { setForm(f => ({ ...f, title: e.target.value })); setTitleErr(false) }} />
                    </div>
                    <div className="fg">
                        <label className="fl">Description</label>
                        <textarea className="fta" placeholder="Add more details…" value={form.desc} onChange={e => setForm(f => ({ ...f, desc: e.target.value }))} />
                    </div>
                    <div className="frow">
                        <div className="fg">
                            <label className="fl">Priority</label>
                            <select className="fs" value={form.priority} onChange={e => setForm(f => ({ ...f, priority: e.target.value }))}>
                                <option value="high">🔴 High</option>
                                <option value="medium">🟡 Medium</option>
                                <option value="low">🟢 Low</option>
                            </select>
                        </div>
                        <div className="fg">
                            <label className="fl">Due Date</label>
                            <input className="fi2" type="date" value={form.due} onChange={e => setForm(f => ({ ...f, due: e.target.value }))} />
                        </div>
                    </div>
                    <div className="fg">
                        <label className="fl">Assigned To</label>
                        <input className="fi2" placeholder="e.g. John Smith" value={form.assigned} onChange={e => setForm(f => ({ ...f, assigned: e.target.value }))} />
                    </div>
                    <div className="mfoot">
                        <button className="btn-cc" onClick={() => setModalOpen(false)}>Cancel</button>
                        <button className="btn-ok" onClick={submitTask}>Add Task</button>
                    </div>
                </div>
            </div>
        </>
    );
}

/* Pipeline */
function PipelinePanel() {
    return (
        <div className="panel">
            <div className="p-title" style={{ marginBottom: 2 }}>Sales Pipeline</div>
            <div className="p-sub">Current deals in your sales pipeline.</div>
            <div className="pipe-bar">
                {[
                    { w: "38%", bg: "linear-gradient(90deg,#38bdf8,#0ea5e9)" },
                    { w: "24%", bg: "linear-gradient(90deg,#a78bfa,#7c3aed)" },
                    { w: "18%", bg: "linear-gradient(90deg,#34d399,#059669)" },
                    { w: "12%", bg: "#475569" },
                    { w: "8%", bg: "#334155" },
                ].map((s, i) => <div key={i} className="pseg" style={{ width: s.w, background: s.bg }} />)}
            </div>
            <div className="pipe-list">
                {PIPELINE.map(p => (
                    <div key={p.name} className="prow">
                        <div className="ptip">{p.name} · {p.deals} deals · {p.val}</div>
                        <div className="pdot" style={{ background: p.color, boxShadow: p.shadow !== "none" ? `0 0 8px ${p.shadow}` : undefined }} />
                        <div className="pinfo">
                            <div className="pname">{p.name}</div>
                            <div className="pdeals">{p.deals} deals · {p.val}</div>
                        </div>
                        <div className="mtrack"><div className="mfill" style={{ width: `${p.pct}%`, background: p.color }} /></div>
                        <div className="ppct">{p.pct}%</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* Leads Table */
function LeadsTable({ onToast }) {
    const [leads] = useState(INITIAL_LEADS);
    const [filter, setFilter] = useState("");
    const [sortKey, setSortKey] = useState("");
    const [sortDir, setSortDir] = useState(1);
    const [page, setPage] = useState(0);
    const [selSet, setSelSet] = useState(new Set());
    const PER = 5;

    const filtered = leads
        .filter(l => l.email.toLowerCase().includes(filter.toLowerCase()) || l.status.toLowerCase().includes(filter.toLowerCase()) || String(l.amount).includes(filter))
        .sort((a, b) => sortKey ? (typeof a[sortKey] === "string" ? a[sortKey].localeCompare(b[sortKey]) * sortDir : (a[sortKey] - b[sortKey]) * sortDir) : 0);

    const pageData = filtered.slice(page * PER, (page + 1) * PER);
    const maxPage = Math.max(0, Math.ceil(filtered.length / PER) - 1);

    function doSort(key) {
        if (sortKey === key) setSortDir(d => d * -1); else { setSortKey(key); setSortDir(1); }
        setPage(0);
    }

    function toggleSel(id, on) {
        setSelSet(s => { const n = new Set(s); on ? n.add(id) : n.delete(id); return n; });
    }

    function selAll(checked) {
        setSelSet(s => {
            const n = new Set(s);
            pageData.forEach(l => checked ? n.add(l.id) : n.delete(l.id));
            return n;
        });
    }

    const allChecked = pageData.length > 0 && pageData.every(l => selSet.has(l.id));

    const statusClass = { Success: "success", Processing: "processing", Failed: "failed", Pending: "pending" };

    return (
        <div className="leads-section">
            <div className="leads-panel">
                <div className="leads-top">
                    <div className="leads-t2">Leads</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <input className="fi" placeholder="Filter leads..." value={filter}
                            onChange={e => { setFilter(e.target.value); setPage(0); setSelSet(new Set()); }} />
                        <button className="btn-cols" onClick={() => onToast("Column editor coming soon")}>
                            Columns <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
                        </button>
                    </div>
                </div>
                <div style={{ overflowX: "auto" }}>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: 36 }}><input type="checkbox" className="rcb" checked={allChecked} onChange={e => selAll(e.target.checked)} /></th>
                                <th className="s" onClick={() => doSort("status")}>Status</th>
                                <th className="s" onClick={() => doSort("email")}>Email ⇅</th>
                                <th className="s" onClick={() => doSort("amount")}>Amount</th>
                                <th style={{ width: 40 }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {pageData.length === 0 ? (
                                <tr><td colSpan="5" style={{ textAlign: "center", padding: "22px", color: "var(--text3)" }}>No leads found</td></tr>
                            ) : pageData.map(l => (
                                <tr key={l.id}>
                                    <td><input type="checkbox" className="rcb" checked={selSet.has(l.id)} onChange={e => toggleSel(l.id, e.target.checked)} /></td>
                                    <td><span className={`badge ${statusClass[l.status] || ""}`}>{l.status}</span></td>
                                    <td>{l.email}</td>
                                    <td style={{ fontVariantNumeric: "tabular-nums" }}>${l.amount.toFixed(2)}</td>
                                    <td><button className="actbtn" onClick={() => onToast(`Actions: ${l.email}`)}>···</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="tbl-foot">
                    <span>{selSet.size} of {filtered.length} row(s) selected.</span>
                    <div>
                        <button className="bpg" onClick={() => setPage(p => Math.max(0, p - 1))}>Previous</button>
                        <button className="bpg" onClick={() => setPage(p => Math.min(maxPage, p + 1))}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Global CSS ───────────────────────────────────────────────────────────────

const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
.crm-dashboard-root *,.crm-dashboard-root *::before,.crm-dashboard-root *::after{box-sizing:border-box;margin:0;padding:0}
.crm-dashboard-root {
  --bg:#f0f9ff;--bg2:#dbeafe;--bg3:#bfdbfe;
  --surface:#ffffff;--surface2:#eff6ff;--surface3:#dbeafe;
  --border:#bfdbfe;--border2:#93c5fd;--border-glow:rgba(59,130,246,.25);
  --text1:#1e3a8a;--text2:#3b82f6;--text3:#60a5fa;
  --accent:#3b82f6;--accent2:#2563eb;
  --accent-glow:rgba(59,130,246,.35);--accent-glow2:rgba(59,130,246,.08);
  --green:#1e3a8a;--red:#ef4444;--amber:#f59e0b;--purple:#2563eb;
  --r:12px;--rs:8px;--rxs:6px;--font:'Inter',system-ui,sans-serif;
  font-family:var(--font);background:var(--bg);color:var(--text1);font-size:13.5px;line-height:1.4;
  height:100%;width:100%;position:relative;overflow:hidden;
}
.crm-dashboard-root button,.crm-dashboard-root input,.crm-dashboard-root select,.crm-dashboard-root textarea{font-family:var(--font);cursor:pointer}
.crm-dashboard-root ::-webkit-scrollbar{width:4px;height:4px}
.crm-dashboard-root ::-webkit-scrollbar-track{background:transparent}
.crm-dashboard-root ::-webkit-scrollbar-thumb{background:var(--border2);border-radius:99px}
.app{display:flex;height:100%;position:relative;z-index:1}
.main{flex:1;display:flex;flex-direction:column;overflow:hidden;min-width:0}
.page-wrap{flex:1;overflow-y:auto;padding:22px 26px}
@keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
.page-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;animation:fadeUp .4s ease both}
.page-title{font-size:20px;font-weight:800;letter-spacing:-.5px}
.page-hdr-r{display:flex;align-items:center;gap:10px;position:relative}
.drb{display:flex;align-items:center;gap:7px;background:var(--surface);border:1px solid var(--border2);border-radius:var(--rs);padding:8px 14px;font-size:12.5px;font-weight:500;color:var(--text2);cursor:pointer;transition:all .2s;user-select:none}
.drb:hover,.drb.open{border-color:var(--accent);color:var(--text1);box-shadow:0 0 12px var(--accent-glow2)}
.btn-dl{background:linear-gradient(135deg,var(--accent2),#0284c7);color:#fff;border:none;border-radius:var(--rs);padding:8px 18px;font-size:13px;font-weight:700;transition:all .2s;box-shadow:0 0 20px rgba(14,165,233,.3)}
.btn-dl:hover{box-shadow:0 0 32px rgba(14,165,233,.55);transform:translateY(-1px)}
.dp-dd{position:absolute;top:calc(100% + 8px);right:0;background:var(--surface2);border:1px solid var(--border2);border-radius:var(--r);box-shadow:0 16px 48px rgba(0,0,0,.7),0 0 0 1px var(--border-glow);display:none;z-index:500;overflow:hidden;animation:fadeUp .2s ease both}
.dp-dd.show{display:flex}
.dp-presets{width:148px;border-right:1px solid var(--border);padding:8px}
.dp-p{display:block;width:100%;text-align:left;background:none;border:none;border-radius:var(--rxs);padding:8px 12px;font-size:12.5px;font-weight:500;color:var(--text2);transition:all .15s}
.dp-p:hover{background:var(--surface3);color:var(--text1)}
.dp-p.active{background:var(--surface3);color:var(--accent);font-weight:600;border-left:2px solid var(--accent)}
.dp-cal{padding:14px 16px;min-width:264px}
.dp-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.dp-title{font-size:13.5px;font-weight:700;color:var(--text1)}
.dp-nb{width:28px;height:28px;border-radius:var(--rxs);border:1px solid var(--border2);background:none;color:var(--text2);display:flex;align-items:center;justify-content:center;font-size:14px;transition:all .15s}
.dp-nb:hover{border-color:var(--accent);color:var(--accent)}
.dp-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}
.dp-dh{text-align:center;font-size:10.5px;font-weight:600;color:var(--text3);padding:4px 0 6px}
.dp-d{text-align:center;border-radius:var(--rxs);cursor:pointer;font-size:12px;height:30px;display:flex;align-items:center;justify-content:center;transition:all .12s}
.dp-d:hover:not(.dp-o){background:var(--surface3)}
.dp-d.dp-o{color:var(--text3);pointer-events:none}
.dp-d.dp-today .dp-di{background:var(--accent);color:#000;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;box-shadow:0 0 10px var(--accent-glow)}
.dp-d.dp-sel .dp-di,.dp-d.dp-rs .dp-di,.dp-d.dp-re .dp-di{background:var(--accent);color:#000;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700}
.dp-d.dp-ir{background:rgba(56,189,248,.08)}
.dp-di{width:26px;height:26px;display:flex;align-items:center;justify-content:center}
.stats-row{display:grid;grid-template-columns:1.15fr 1fr 1fr 1fr;gap:14px;margin-bottom:16px}
.scard{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:20px 22px;transition:all .25s;position:relative;overflow:hidden;animation:fadeUp .4s ease both}
.scard::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at top left,rgba(56,189,248,.04),transparent 60%);pointer-events:none}
.scard:hover{border-color:var(--border2);transform:translateY(-2px);box-shadow:0 8px 32px rgba(0,0,0,.3),0 0 0 1px var(--border-glow)}
.scard:nth-child(1){animation-delay:.05s}.scard:nth-child(2){animation-delay:.1s}.scard:nth-child(3){animation-delay:.15s}.scard:nth-child(4){animation-delay:.2s}
.sc-head{display:flex;justify-content:space-between;align-items:flex-start}
.sc-lbl{font-size:12px;font-weight:500;color:var(--text2);margin-bottom:7px}
.sc-val{font-size:28px;font-weight:800;letter-spacing:-1.2px;line-height:1;color:var(--text1)}
.sc-chg{font-size:12px;font-weight:600;margin-top:5px}
.up{color:var(--green)}.dn{color:var(--red)}
.sc-icon{width:38px;height:38px;background:var(--surface2);border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--accent);flex-shrink:0;box-shadow:0 0 12px var(--accent-glow2)}
.sc-title{font-size:14.5px;font-weight:700;letter-spacing:-.3px;margin-bottom:8px;color:var(--text1)}
.tgt-body{display:flex;align-items:center;gap:14px;margin-top:6px}
.ring-svg{width:64px;height:64px;transform:rotate(-90deg);flex-shrink:0}
.ring-bg{fill:none;stroke:var(--surface3);stroke-width:5}
.ring-fg{fill:none;stroke:url(#rg);stroke-width:5;stroke-linecap:round;stroke-dasharray:160;stroke-dashoffset:83;animation:ringIn 1.5s ease-out .3s both}
@keyframes ringIn{from{stroke-dashoffset:160}to{stroke-dashoffset:83}}
.ring-lbl{fill:var(--accent);font-size:9px;font-weight:700;font-family:var(--font);transform:rotate(90deg);transform-origin:31px 31px;text-anchor:middle;dominant-baseline:middle}
.tgt-desc{font-size:12.5px;color:var(--text2);line-height:1.55}
.tgt-pct{color:var(--amber);font-weight:700}
.grid3{display:grid;grid-template-columns:1fr 1.25fr 1fr;gap:14px;margin-bottom:16px}
.panel{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:20px 22px;position:relative;overflow:hidden;animation:fadeUp .4s ease both}
.panel::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at top right,rgba(56,189,248,.03),transparent 70%);pointer-events:none}
.panel:hover{border-color:var(--border2)}
.panel:nth-child(1){animation-delay:.2s}.panel:nth-child(2){animation-delay:.25s}.panel:nth-child(3){animation-delay:.3s}
.p-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}
.p-title{font-size:14px;font-weight:700;letter-spacing:-.25px;color:var(--text1)}
.p-sub{font-size:12px;color:var(--text3);margin-bottom:14px}
.btn-out{background:var(--surface2);border:1px solid var(--border2);border-radius:var(--rs);padding:6px 13px;font-size:12px;font-weight:600;color:var(--text1);display:flex;align-items:center;gap:6px;transition:all .2s}
.btn-out:hover{border-color:var(--accent);color:var(--accent);box-shadow:0 0 10px var(--accent-glow2)}
.donut-wrap{display:flex;justify-content:center;margin:8px 0 14px;position:relative}
.donut-ct{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none}
.donut-big{font-size:22px;font-weight:800;letter-spacing:-1px;line-height:1;color:var(--text1)}
.donut-sm{font-size:11px;color:var(--text3);margin-top:1px}
.leg-row{display:flex;justify-content:space-between;padding:0 4px}
.leg{text-align:center}
.leg-top{display:flex;align-items:center;justify-content:center;gap:4px;margin-bottom:2px}
.leg-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
.leg-lbl{font-size:10px;font-weight:600;color:var(--text3);letter-spacing:.4px}
.leg-val{font-size:13.5px;font-weight:700;color:var(--text1)}
.task-list{display:flex;flex-direction:column;gap:8px}
.task-item{border:1px solid var(--border);border-radius:var(--rs);padding:11px 13px;transition:all .15s;cursor:pointer;position:relative;overflow:hidden}
.task-item::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:transparent;transition:background .2s}
.task-item:hover{background:var(--surface2);border-color:var(--border2)}
.task-item:hover::before{background:var(--accent)}
.task-item.done{opacity:.4}
.trow{display:flex;align-items:flex-start;gap:9px}
.tcb{width:16px;height:16px;border:1.5px solid var(--border2);border-radius:4px;flex-shrink:0;margin-top:1px;display:flex;align-items:center;justify-content:center;transition:all .15s;background:var(--surface);cursor:pointer}
.tcb:hover{border-color:var(--accent)}
.tcb.on{background:var(--accent);border-color:var(--accent);box-shadow:0 0 8px var(--accent-glow)}
.tcb.on::after{content:'✓';color:#000;font-size:9px;font-weight:800}
.tname{font-size:13px;font-weight:600;color:var(--text1)}
.task-item.done .tname{text-decoration:line-through;color:var(--text3)}
.tdesc{font-size:11.5px;color:var(--text3);margin-top:1px}
.task-item.done .tdesc{text-decoration:line-through}
.tmeta{display:flex;align-items:center;gap:7px;margin-top:7px}
.tag{font-size:10.5px;font-weight:700;padding:2px 9px;border-radius:20px}
.tag.high{background:rgba(248,113,113,.15);color:var(--red);border:1px solid rgba(248,113,113,.25)}
.tag.medium{background:rgba(251,191,36,.12);color:var(--amber);border:1px solid rgba(251,191,36,.25)}
.tag.low{background:rgba(52,211,153,.12);color:var(--green);border:1px solid rgba(52,211,153,.25)}
.tdue{font-size:11.5px;color:var(--text3)}
.dbtn{background:none;border:none;color:var(--text3);font-size:14px;cursor:pointer;padding:2px 4px;border-radius:4px;line-height:1;transition:color .12s;margin-left:auto}
.dbtn:hover{color:var(--red)}
.pipe-bar{height:9px;border-radius:99px;overflow:hidden;display:flex;margin-bottom:18px}
.pseg{height:100%}
.pipe-list{display:flex;flex-direction:column;gap:12px}
.prow{display:flex;align-items:center;gap:9px;cursor:default;position:relative}
.pdot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.pinfo{flex:1}
.pname{font-size:12.5px;font-weight:600;color:var(--text1)}
.pdeals{font-size:11px;color:var(--text3)}
.mtrack{width:70px;height:5px;background:var(--surface3);border-radius:99px;overflow:hidden;flex-shrink:0}
.mfill{height:100%;border-radius:99px;transition:width .8s cubic-bezier(.34,1.56,.64,1)}
.ppct{font-size:12px;font-weight:700;color:var(--text2);width:30px;text-align:right}
.ptip{position:absolute;left:50px;top:-46px;background:var(--surface2);color:var(--text1);border:1px solid var(--border2);border-radius:var(--rs);padding:7px 12px;font-size:12px;font-weight:600;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .15s;z-index:100;box-shadow:0 4px 16px rgba(0,0,0,.4)}
.ptip::after{content:'';position:absolute;bottom:-5px;left:16px;width:9px;height:9px;background:var(--surface2);transform:rotate(45deg);border-right:1px solid var(--border2);border-bottom:1px solid var(--border2)}
.prow:hover .ptip{opacity:1}
.leads-section{margin-top:0}
.leads-panel{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);animation:fadeUp .4s .35s ease both;overflow:hidden}
.leads-top{display:flex;align-items:center;justify-content:space-between;padding:16px 18px 14px;gap:10px;flex-wrap:wrap}
.leads-t2{font-size:14px;font-weight:700;color:var(--text1)}
.fi{background:var(--surface2);border:1px solid var(--border);border-radius:var(--rs);padding:7px 12px;font-size:13px;color:var(--text1);outline:none;width:210px;transition:all .2s}
.fi::placeholder{color:var(--text3)}
.fi:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-glow2)}
.btn-cols{background:var(--surface2);border:1px solid var(--border2);border-radius:var(--rs);padding:7px 12px;font-size:12px;font-weight:600;color:var(--text1);display:flex;align-items:center;gap:5px;transition:all .2s}
.btn-cols:hover{border-color:var(--accent);color:var(--accent)}
table{width:100%;border-collapse:collapse}
thead th{text-align:left;font-size:11px;font-weight:600;color:var(--text3);padding:9px 12px;border-bottom:1px solid var(--border);text-transform:uppercase;letter-spacing:.5px;white-space:nowrap}
thead th.s{cursor:pointer;user-select:none;transition:color .15s}
thead th.s:hover{color:var(--accent)}
tbody tr{border-bottom:1px solid var(--border);transition:background .1s}
tbody tr:last-child{border-bottom:none}
tbody tr:hover{background:var(--surface2)}
tbody td{padding:11px 12px;font-size:13px;color:var(--text1)}
.badge{display:inline-block;padding:2px 10px;border-radius:20px;font-size:11px;font-weight:700;letter-spacing:.2px}
.badge.success{background:rgba(52,211,153,.12);color:var(--green);border:1px solid rgba(52,211,153,.25)}
.badge.processing{background:rgba(56,189,248,.12);color:var(--accent);border:1px solid rgba(56,189,248,.25)}
.badge.failed{background:rgba(248,113,113,.12);color:var(--red);border:1px solid rgba(248,113,113,.25)}
.badge.pending{background:rgba(251,191,36,.12);color:var(--amber);border:1px solid rgba(251,191,36,.25)}
.rcb{accent-color:var(--accent);cursor:pointer;width:14px;height:14px}
.actbtn{background:none;border:none;color:var(--text3);font-size:16px;letter-spacing:2px;padding:2px 6px;border-radius:4px;line-height:1;transition:all .12s}
.actbtn:hover{color:var(--accent);background:var(--surface3)}
.tbl-foot{display:flex;align-items:center;justify-content:space-between;padding:11px 14px;font-size:12px;color:var(--text3);border-top:1px solid var(--border)}
.bpg{background:none;border:none;font-size:12.5px;font-weight:500;color:var(--text3);padding:5px 12px;border-radius:var(--rxs);transition:all .15s;cursor:pointer}
.bpg:hover{background:var(--surface2);color:var(--text1)}
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.7);backdrop-filter:blur(4px);z-index:800;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .2s}
.overlay.show{opacity:1;pointer-events:all}
.modal{background:var(--surface2);border-radius:var(--r);padding:26px;width:420px;max-width:calc(100vw - 32px);border:1px solid var(--border2);box-shadow:0 24px 64px rgba(0,0,0,.7),0 0 0 1px var(--border-glow);transform:translateY(16px) scale(.97);transition:transform .2s;position:relative;overflow:hidden}
.modal::before{content:'';position:absolute;top:-80px;right:-80px;width:200px;height:200px;background:radial-gradient(circle,rgba(56,189,248,.07),transparent 70%);pointer-events:none}
.overlay.show .modal{transform:translateY(0) scale(1)}
.modal-t{font-size:16px;font-weight:800;letter-spacing:-.4px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;color:var(--text1)}
.modal-x{background:none;border:none;color:var(--text3);font-size:18px;line-height:1;padding:3px;border-radius:4px;transition:all .12s;cursor:pointer}
.modal-x:hover{color:var(--red);background:rgba(248,113,113,.1)}
.fg{margin-bottom:14px}
.fl{display:block;font-size:11px;font-weight:600;color:var(--text2);margin-bottom:5px;letter-spacing:.3px;text-transform:uppercase}
.fi2,.fs,.fta{width:100%;background:var(--surface);border:1px solid var(--border2);border-radius:var(--rs);padding:9px 12px;font-size:13px;color:var(--text1);outline:none;transition:all .2s}
.fi2::placeholder,.fta::placeholder{color:var(--text3)}
.fi2:focus,.fs:focus,.fta:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-glow2);background:var(--surface2)}
.fta{resize:vertical;min-height:70px}
.fs{appearance:none;cursor:pointer}
.frow{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.mfoot{display:flex;gap:8px;justify-content:flex-end;margin-top:20px;padding-top:18px;border-top:1px solid var(--border)}
.btn-cc{background:var(--surface);border:1px solid var(--border2);border-radius:var(--rs);padding:8px 18px;font-size:13px;font-weight:600;color:var(--text2);transition:all .15s;cursor:pointer}
.btn-cc:hover{color:var(--text1)}
.btn-ok{background:linear-gradient(135deg,var(--accent2),#0284c7);color:#fff;border:none;border-radius:var(--rs);padding:8px 22px;font-size:13px;font-weight:700;transition:all .2s;box-shadow:0 0 16px rgba(14,165,233,.3);cursor:pointer}
.btn-ok:hover{box-shadow:0 0 28px rgba(14,165,233,.55);transform:translateY(-1px)}
.toast-el{position:fixed;bottom:24px;right:24px;background:var(--surface2);color:var(--text1);border:1px solid var(--border2);border-radius:var(--rs);padding:11px 18px;font-size:13px;font-weight:600;z-index:900;transform:translateY(60px);opacity:0;transition:all .3s cubic-bezier(.34,1.56,.64,1);box-shadow:0 8px 24px rgba(0,0,0,.4),0 0 0 1px var(--border-glow)}
.toast-el.show{transform:translateY(0);opacity:1}
@keyframes dashIn{from{opacity:0;stroke-dasharray:0 314.16}to{opacity:1}}
@media(max-width:960px){.stats-row{grid-template-columns:1fr 1fr}.grid3{grid-template-columns:1fr}}
`;

// ─── App ──────────────────────────────────────────────────────────────────────

export default function CRMDashboard() {
    const [toast, setToast] = useState({ msg: "", visible: false });
    const [dpOpen, setDpOpen] = useState(false);
    const [dateLabel, setDateLabel] = useState("18 Mar 2026 – 14 Apr 2026");
    const toastTimer = useRef(null);
    const dpRef = useRef(null);
    const drbRef = useRef(null);

    function doToast(msg) {
        setToast({ msg, visible: true });
        clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToast(t => ({ ...t, visible: false })), 2800);
    }

    // Close datepicker on outside click
    useEffect(() => {
        function handler(e) {
            if (dpRef.current && !dpRef.current.contains(e.target) && drbRef.current && !drbRef.current.contains(e.target)) {
                setDpOpen(false);
            }
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    function onDpClose(s, e, lbl) {
        setDateLabel(lbl);
        setDpOpen(false);
    }

    return (
        <div className="crm-dashboard-root">
            <style>{GLOBAL_CSS}</style>
            <StarCanvas />
            <SvgDefs />
            <div className="app">
                <div className="main">
                    <div className="page-wrap">
                        {/* Header */}
                        <div className="page-hdr">
                            <h1 className="page-title">PIXELORBIT</h1>
                            <div className="page-hdr-r">
                                <button ref={drbRef} className={`drb${dpOpen ? " open" : ""}`} onClick={() => setDpOpen(o => !o)}>
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    <span>{dateLabel}</span>
                                </button>
                                {dpOpen && (
                                    <div ref={dpRef} style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, zIndex: 500 }}>
                                        <DatePicker onClose={onDpClose} />
                                    </div>
                                )}
                                <button className="btn-dl" onClick={() => doToast("📥 Downloading report…")}>Download</button>
                            </div>
                        </div>

                        {/* Stat Cards */}
                        <StatCards />

                        {/* 3-col grid */}
                        <div className="grid3">
                            <LeadsSource onToast={doToast} />
                            <TasksPanel onToast={doToast} />
                            <PipelinePanel />
                        </div>

                        {/* Leads Table */}
                        <LeadsTable onToast={doToast} />
                    </div>
                </div>
            </div>

            <Toast msg={toast.msg} visible={toast.visible} />
        </div>
    );
}