import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fafafa] pb-16">
      <header className="border-b border-black/10 bg-[#EAF4EE]">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:h-[72px] sm:px-8">
          <Link href="/" className="font-title text-lg text-[#2F6F4E] sm:text-xl">
            SUNGWOO
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2F6F4E] transition-colors hover:text-[#1E4F3A]"
          >
            <FaArrowLeft aria-hidden />
            Projects
          </Link>
        </div>
      </header>

      <article className="mx-auto w-full max-w-6xl px-5 pt-10 sm:px-8 sm:pt-16">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
            <Image src={project.imageSrc} alt={`${project.title} 대표 화면`} fill priority className={project.imageFit === "contain" ? "object-contain" : "object-cover"} />
          </div>

          <div>
            <p className="text-sm font-semibold text-[#2F6F4E]">{project.category === "work" ? "실무 프로젝트" : "PROJECT CASE STUDY"}</p>
            <h1 className="mt-3 text-3xl font-semibold text-[#333] sm:text-4xl">{project.title}</h1>
            <p className="mt-5 text-base leading-7 text-black/70">{project.summary}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-[#EAF4EE] px-3 py-1.5 text-sm font-medium text-[#2F6F4E]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#2F6F4E] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1E4F3A]"
                >
                  서비스 보기 <FaArrowUpRightFromSquare aria-hidden />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-black/15 bg-white px-4 py-2.5 text-sm font-semibold text-black/75 transition-colors hover:bg-black/5"
                >
                  GitHub <FaGithub aria-hidden />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className={`mt-16 grid gap-10 border-t border-black/10 pt-12 ${project.problem ? "md:grid-cols-2" : ""}`}>
          {project.problem && <section>
            <p className="text-sm font-semibold text-[#2F6F4E]">PROBLEM</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#333]">해결하려던 문제</h2>
            <p className="mt-4 leading-7 text-black/70">{project.problem}</p>
          </section>}
          <section>
            <p className="text-sm font-semibold text-[#2F6F4E]">MY ROLE</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#333]">담당한 일</h2>
            <p className="mt-4 leading-7 text-black/70">{project.role}</p>
          </section>
        </div>

        {!!project.highlights?.length && <section className="mt-14 border-t border-black/10 pt-12">
          <p className="text-sm font-semibold text-[#2F6F4E]">HIGHLIGHTS</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#333]">주요 구현</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="border-l-2 border-[#2F6F4E] bg-white px-4 py-4 leading-6 text-black/75 shadow-sm">
                {highlight}
              </li>
            ))}
          </ul>
        </section>}

        {project.learnings && <section className="mt-14 border-t border-black/10 pt-12">
          <p className="text-sm font-semibold text-[#2F6F4E]">RETROSPECTIVE</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#333]">프로젝트를 통해 배운 점</h2>
          <p className="mt-4 max-w-3xl leading-7 text-black/70">{project.learnings}</p>
        </section>}
      </article>
    </main>
  );
}
