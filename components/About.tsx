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
                &quot;UI 구현부터 클라우드 배포 흐름까지 이해하는 프론트엔드 개발자 이성우입니다.&quot;
              </p>

              <p className="break-keep">
                산업디자인을 전공하며 기른 시각적 감각을 바탕으로, 화면 위에서
                디자인 의도를 정확하게 구현하는 일에 큰 보람을 느낍니다. 단순히
                보기 좋은 화면을 만드는 데서 그치지 않고, 구조적인 마크업과
                반응형 레이아웃, 자연스러운 인터랙션까지 함께 설계하는 프론트엔드
                작업을 지향합니다.
              </p>

              <p className="break-keep">
                웹 퍼블리싱 경험을 바탕으로 관제 대시보드의 UI 개발에 참여했습니다.
                개인 프로젝트에서는 GitHub Actions와 Google
                Cloud Run을 활용한 배포 과정을 실습하고 있습니다. 화면 구현뿐 아니라
                코드 변경이 서비스에 반영되는 과정까지 이해하는 개발자로 성장하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
