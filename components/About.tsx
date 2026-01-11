import Section from "./Section";
import Image from "next/image";

export default function About() {
  return (
    <Section id="about">
      <div className="w-full">
        <div
          className="
            grid grid-cols-1 gap-8
            justify-items-center
            min-[1090px]:grid-cols-2
            min-[1090px]:items-end
            min-[1090px]:gap-10
            min-[1090px]:justify-items-stretch
          "
        >
          {/* 프로필 사진 */}
          <div className="flex justify-center min-[1090px]:justify-start">
            <Image
              src="/images/pf_og.png"
              alt="나의 프로필 사진"
              width={301}
              height={432}
              className="w-[240px] sm:w-[301px] rounded-[5px] object-cover"
              priority
            />
          </div>

          {/* 소개글 */}
          <div className="min-w-0 min-[1090px]:text-left">
            <h2 className="font-nav tracking-tight text-[28px] sm:text-[32px] md:text-[40px] text-[#444444] text-left">
              About me
            </h2>

            <p className="mt-3 sm:mt-4 md:mt-6 text-[14px] sm:text-[15px] md:text-[18px] leading-[1.6] text-[#666666] max-w-[520px] mx-auto min-[1090px]:mx-0 break-keep break-words">
              안녕하세요 저는 구조와 완성도를 중시하는 웹 퍼블리셔 이성우
              입니다.
            </p>

            <p className="mt-3 sm:mt-4 md:mt-6 text-[14px] sm:text-[15px] md:text-[18px] leading-[1.6] text-[#666666] max-w-[520px] mx-auto min-[1090px]:mx-0 break-keep break-words">
              시맨틱 마크업과 접근성을 기반으로, 디자인 의도를 정확히 해석하고
              구조적으로 구현하는 작업을 합니다.
            </p>

            <p className="mt-3 sm:mt-4 md:mt-6 text-[14px] sm:text-[15px] md:text-[18px] leading-[1.6] text-[#666666] max-w-[520px] mx-auto min-[1090px]:mx-0 break-keep break-words">
              Grid와 Flex를 활용한 반응형 레이아웃, 컴포넌트 단위 퍼블리싱을
              통해 유지보수를 고려합니다.
            </p>

            <p className="mt-3 sm:mt-4 md:mt-6 text-[14px] sm:text-[15px] md:text-[18px] leading-[1.6] text-[#666666] max-w-[520px] mx-auto min-[1090px]:mx-0 break-keep break-words">
              Next.js, React.js 환경에서도 퍼블리싱 작업이 가능하며, 프론트엔드
              개발자와의 협업을 자연스럽게 이어갈 수 있는 작업 방식을
              지향합니다.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
