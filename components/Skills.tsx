import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills">
      <div className="w-full">
        <h2 className="font-nav tracking-tight text-[32px] sm:text-[36px] md:text-[44px] lg:text-[48px] text-[#444444] mb-12 sm:mb-16">
          Skills
        </h2>

        <div
          className="
            grid gap-10 sm:gap-12
            grid-cols-1
            md:grid-cols-2
            text-[#666666]
          "
        >
          <div className="space-y-3">
            <h3 className="font-nav text-[26px] sm:text-[30px] md:text-[34px] text-[#444444]">
              Markup & Accessibility
            </h3>
            <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[1.8] break-keep">
              Semantic HTML 기반의 구조 설계와 접근성을 고려한 마크업을
              구현합니다.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-nav text-[26px] sm:text-[30px] md:text-[34px] text-[#444444]">
              Layout & Responsive UI
            </h3>
            <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[1.8] break-keep">
              Grid와 Flex를 활용해 다양한 해상도에서도 안정적인 반응형 UI를
              구성합니다.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-nav text-[26px] sm:text-[30px] md:text-[34px] text-[#444444]">
              Interaction & Motion
            </h3>
            <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[1.8] break-keep">
              CSS와 JavaScript를 활용한 과하지 않은 인터랙션과 마이크로 모션을
              구현합니다.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-nav text-[26px] sm:text-[30px] md:text-[34px] text-[#444444]">
              Frontend Workflow
            </h3>
            <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[1.8] break-keep">
              Next.js 환경에서 컴포넌트 단위 퍼블리싱과 협업을 고려한 작업
              흐름을 경험했습니다.
            </p>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#E5E5E5]">
          <p className="text-[#666666] text-[15px] sm:text-[16px] text-center md:text-right">
            HTML · CSS · Tailwind · JavaScript · Next.js · Git · Figma
          </p>
        </div>
      </div>
    </Section>
  );
}
