import Section from "./Section";
import Image from "next/image";

export default function About() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 gap-6 md:gap-1 md:grid-cols-2 md:items-end">
        {/* 프로필 사진 */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/pf_og.png"
            alt="나의 프로필 사진"
            width={301}
            height={432}
            className="rounded-[5px] object-cover"
            priority
          />
        </div>

        {/* {나의 소개글} */}
        <div className="md:-ml-50">
          <h2 className="font-nav text-[40px] tracking-tight">About me</h2>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-black/80">
            안녕하세요 저는 구조와 완성도를 중시하는 웹 퍼블리셔 이성우 입니다.
          </p>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-black/80">
            시맨틱 마크업과 접근성을 기반으로, 디자인 의도를 정확히 해석하고
            구조적으로 <br />
            구현하는 작업을 합니다.
          </p>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-black/80">
            Grid와 Flex를 활용한 반응형 레이아웃, 컴포넌트 단위 퍼블리싱을 통해
            유지보수를 고려합니다.
          </p>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-black/80">
            Next.js, React.js 환경에서도 퍼블리싱 작업이 가능하며, 프론트엔드
            개발자와의
            <br /> 협업을 자연스럽게 이어갈 수 있는 작업 방식을 지향합니다.
          </p>
        </div>
      </div>
    </Section>
  );
}
