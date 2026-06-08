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
                &quot;UI 구현과 인터랙션에 강점을 가진 프론트엔드 개발자 이성우입니다.&quot;
              </p>

              <p className="break-keep">
                산업디자인을 전공하며 기른 시각적 감각을 바탕으로, 화면 위에서
                디자인 의도를 정확하게 구현하는 일에 큰 보람을 느낍니다. 단순히
                보기 좋은 화면을 만드는 데서 그치지 않고, 구조적인 마크업과
                반응형 레이아웃, 자연스러운 인터랙션까지 함께 설계하는 프론트엔드
                작업을 지향합니다.
              </p>

              <p className="break-keep">
                저는 사용자가 직접 마주하는 디테일에 민감합니다. 스크롤 흐름,
                컴포넌트 간 간격, 전환 애니메이션의 속도처럼 작은 차이가 경험의
                완성도를 바꾼다고 믿기 때문입니다. React와 Next.js 환경에서도 이런
                감각을 살려, 디자인과 개발 사이를 안정적으로 연결하는 개발자로
                성장하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
