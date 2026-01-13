import Section from "./Section";
import Image from "next/image";

export default function About() {
  return (
    <Section id="about">
      <div className="w-full">
        <div
          className="
            grid grid-cols-1 gap-12
            items-center
            lg:grid-cols-2
            lg:gap-16
            lg:items-end
          "
        >
          {/* 프로필 사진 */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <Image
                src="/images/pf_og.png"
                alt="나의 프로필 사진"
                width={301}
                height={432}
                className="w-[240px] sm:w-[280px] lg:w-[301px] rounded-lg object-cover shadow-lg"
                priority
              />
            </div>
          </div>

          {/* 소개글 */}
          <div className="space-y-6 lg:space-y-7">
            <h2 className="font-nav tracking-tight text-[32px] sm:text-[36px] md:text-[44px] lg:text-[48px] text-[#444444]">
              About me
            </h2>

            <div className="space-y-5 text-[15px] sm:text-[16px] md:text-[18px] leading-[1.8] text-[#666666] max-w-[540px] lg:max-w-none">
              <p className="break-keep">
                안녕하세요 저는 구조와 완성도를 중시하는 웹 퍼블리셔 이성우
                입니다.
              </p>

              <p className="break-keep">
                시맨틱 마크업과 접근성을 기반으로, 디자인 의도를 정확히 해석하고
                구조적으로 구현하는 작업을 합니다.
              </p>

              <p className="break-keep">
                Grid와 Flex를 활용한 반응형 레이아웃, 컴포넌트 단위 퍼블리싱을
                통해 유지보수를 고려합니다.
              </p>

              <p className="break-keep">
                Next.js, React.js 환경에서도 퍼블리싱 작업이 가능하며, 프론트엔드
                개발자와의 협업을 자연스럽게 이어갈 수 있는 작업 방식을
                지향합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
