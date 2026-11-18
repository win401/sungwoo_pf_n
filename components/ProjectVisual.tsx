import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = Pick<Project, "imageSrc" | "imageFit" | "imageFrame"> & {
  title: string;
  priority?: boolean;
  className?: string;
};

export default function ProjectVisual({ imageSrc, imageFit, imageFrame, title, priority, className = "" }: Props) {
  if (imageFrame === "phone") {
    return (
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#eee9df" }}>
        <div className={className} style={{ position: "relative", height: "87%", aspectRatio: "390 / 844", border: "6px solid #252a27", borderRadius: 22, overflow: "hidden", boxShadow: "0 12px 26px #12282030", background: "#f7f2e8" }}>
          <Image src={imageSrc} alt={`${title} 실제 모바일 화면`} fill priority={priority} sizes="(max-width: 640px) 150px, 300px" style={{ objectFit: "cover" }} />
        </div>
      </div>
    );
  }
  return <Image src={imageSrc} alt={`${title} 대표 화면`} fill priority={priority} className={`${imageFit === "contain" ? "object-contain" : "object-cover"} ${className}`} />;
}
