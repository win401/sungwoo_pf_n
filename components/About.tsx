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
            lg:grid-cols-[auto_1fr]
            lg:gap-8
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
              <p className="break-keep text-[17px] sm:text-[18px] md:text-[20px] text-[#444444] font-medium">
                &quot;디자인의 의도를 이해하고, 인터랙션으로 생동감을 불어넣는 퍼블리셔 이성우입니다.&quot;
              </p>

              <p className="break-keep">
                산업디자인을 전공하며 기른 시각적 감각을 바탕으로, 디자인의 아주
                작은 디테일까지 웹상에 온전히 구현해 내는 것에 큰 보람을
                느낍니다. 특히 프론트엔드 환경에서 놓치기 쉬운 미세한 동적
                리듬감이나 레이아웃의 균형을 정교하게 다듬는 것을 즐깁니다.
              </p>

              <p className="break-keep">
                저는 AI 기반 도구를 능숙하게 활용하여 반복적인
                코딩 시간을 단축하고, 그만큼 확보된 시간을 사용자 경험의 완성도를
                높이는 디테일 작업에 쏟습니다. 기술적 제약에 갇히지 않고 디자인
                본연의 가치를 최대한 끌어낼 수 있는, 믿음직한 파트너로서 함께
                성장하고 싶습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
