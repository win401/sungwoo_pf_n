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
          <div className="space-y-3" data-aos="fade-up" data-aos-delay="0">
            <h3 className="font-nav text-[26px] sm:text-[30px] md:text-[34px] text-[#444444]">
              Markup & Accessibility
            </h3>
            <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[1.8] break-keep">
              Semantic HTML 기반의 구조 설계와 접근성을 고려한 마크업을
              구현합니다.
            </p>
          </div>

          <div className="space-y-3" data-aos="fade-up" data-aos-delay="80">
            <h3 className="font-nav text-[26px] sm:text-[30px] md:text-[34px] text-[#444444]">
              Layout & Responsive UI
            </h3>
            <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[1.8] break-keep">
              CSS Grid와 Flex를 활용해 반응형 레이아웃을 구성하고, 화면 크기에
              맞춰 간격과 정렬을 직접 조정합니다.
            </p>
          </div>

          <div className="space-y-3" data-aos="fade-up" data-aos-delay="160">
            <h3 className="font-nav text-[26px] sm:text-[30px] md:text-[34px] text-[#444444]">
              Interaction & Motion
            </h3>
            <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[1.8] break-keep">
              CSS, JavaScript, GSAP을 활용한 스크롤 연동 애니메이션과 과하지 않은
              인터랙션을 구현합니다.
            </p>
          </div>

          <div className="space-y-3" data-aos="fade-up" data-aos-delay="240">
            <h3 className="font-nav text-[26px] sm:text-[30px] md:text-[34px] text-[#444444]">
              React & TypeScript
            </h3>
            <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[1.8] break-keep">
              React·TypeScript 기반 프로젝트에서 AI 코딩 도구를 활용한 화면
              구현과 API 연동을 경험했습니다. CSS를 직접 수정하고 팀 피드백을
              반영하며 UI를 개선합니다.
            </p>
          </div>
        </div>

        <div
          className="mt-12 sm:mt-16 pt-8 border-t border-[#E5E5E5]"
          data-aos="fade-up"
          data-aos-delay="320"
        >
          <p className="text-[#666666] text-[15px] sm:text-[16px] text-center md:text-right">
            React · TypeScript · JavaScript · HTML · CSS · Next.js · GSAP · Git · Figma
          </p>
        </div>
      </div>
    </Section>
  );
}
