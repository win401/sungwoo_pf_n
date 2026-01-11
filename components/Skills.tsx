import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="font-nav tracking-tight text-[28px] sm:text-[32px] md:text-[40px] text-[#444444]">
          Skills
        </h2>

        <div
          className="
            mt-8 grid gap-8
            grid-cols-1
            min-[900px]:grid-cols-2
            text-[#666666]
          "
        >
          <div>
            <h3 className="font-nav text-[24px] sm:text-[32px] text-[#444444]">
              Markup & Accessibility
            </h3>
            <p className="mt-2 text-[14px] sm:text-[18px] leading-relaxed max-w-[420px] break-keep break-words">
              Semantic HTML 기반의 구조 설계와 접근성을 고려한 마크업을
              구현합니다.
            </p>
          </div>

          <div>
            <h3 className="font-nav text-[24px] sm:text-[32px] text-[#444444]">
              Layout & Responsive UI
            </h3>
            <p className="mt-2 text-[14px] sm:text-[18px] leading-relaxed max-w-[420px] break-keep break-words">
              Grid와 Flex를 활용해 다양한 해상도에서도 안정적인 반응형 UI를
              구성합니다.
            </p>
          </div>

          <div>
            <h3 className="font-nav text-[24px] sm:text-[32px] text-[#444444]">
              Interaction & Motion
            </h3>
            <p className="mt-2 text-[14px] sm:text-[18px] leading-relaxed max-w-[420px] break-keep break-words">
              CSS와 JavaScript를 활용한 과하지 않은 인터랙션과 마이크로 모션을
              구현합니다.
            </p>
          </div>

          <div>
            <h3 className="font-nav text-[24px] sm:text-[32px] text-[#444444]">
              Frontend Workflow
            </h3>
            <p className="mt-2 text-[14px] sm:text-[18px] leading-relaxed max-w-[420px] break-keep break-words">
              Next.js 환경에서 컴포넌트 단위 퍼블리싱과 협업을 고려한 작업
              흐름을 경험했습니다.
            </p>
          </div>
        </div>

        <div className="mt-10 text-[#666666] text-sm sm:text-base flex justify-end">
          HTML · CSS · Tailwind · JavaScript · Next.js · Git · Figma
        </div>
      </div>
    </Section>
  );
}
