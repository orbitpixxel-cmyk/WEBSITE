"use client";


import TechStackRow from "@/components/TechStackRow";
import { Safari } from "@/components/ui/Safari";


export default function VideoPreviewSection() {
  return (
    <div className="mx-auto mt-12 w-full max-w-5xl">
      <div className="w-full">
        <div className="relative w-full group">
          <Safari
            className="w-full"
            url="https://pixxelorbit.com"
            videoSrc="/herovideo.mp4"
          />
        </div>
        <TechStackRow />
      </div>
    </div>
  );
}
