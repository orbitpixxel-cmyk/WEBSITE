import React from 'react';
import { Lock, FileText, Server } from 'lucide-react';
import Section from './Section';
import Container from './Container';

const stats = [
  { value: '0', label: 'Security incidents' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Security monitoring' },
  { value: '<1hr', label: 'Incident response' }
];

const features = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data is encrypted at rest and in transit using AES-256 and TLS 1.3. Your intellectual property and sensitive information never leave your control.',
    tags: ['AES-256 encryption', 'TLS 1.3', 'Zero-knowledge architecture']
  },
  {
    icon: FileText,
    title: 'Complete Audit Trail',
    description: 'Every action is logged and timestamped with immutable audit trails. Full visibility into AI model decisions for regulatory compliance and governance.',
    tags: ['Immutable logs', 'Decision transparency', 'Export capabilities']
  },
  {
    icon: Server,
    title: 'Enterprise Infrastructure',
    description: 'Deployed on hardened infrastructure with 99.99% uptime SLA. Multi-region redundancy ensures your AI systems are always available.',
    tags: ['99.99% uptime SLA', 'Multi-region', 'Auto-failover']
  }
];

export default function WhatWeProvide() {
  return (
    <Section className="bg-black text-white py-24 md:py-32">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Enterprise-grade <span className="text-blue-500">security</span> by default
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
            Your data security is non-negotiable. Every TrueHorizon solution is built on a foundation of industry-leading security practices and compliance standards.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 md:mb-32">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
              <span className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                {stat.value}
              </span>
              <span className="text-zinc-500 text-sm font-medium uppercase tracking-wider text-center md:text-left">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-6 p-3 bg-zinc-900/50 rounded-xl w-fit border border-zinc-800/50">
                <feature.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-8 mb-auto">
                {feature.description}
              </p>
              
              {/* Badges/Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {feature.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1 bg-zinc-900 text-zinc-500 text-xs font-medium rounded-full border border-zinc-800/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
