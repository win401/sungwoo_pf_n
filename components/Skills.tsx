import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills">
      <h2 className="font-nav text-[40px] tracking-tight">Skills</h2>
      <div className="grid grid-cols-2 mx-auto gap-[30px] mt-[30px] ml-[200px]">
        <div>
          <h3 className="font-nav text-[32px]">Markup & Accessibility</h3>
          <p className="text-[18px]">
            Semantic HTML 기반의 구조 설계와
            <br />
            접근성을 고려한 마크업을 구현합니다.
          </p>
        </div>

        <div>
          <h3 className="font-nav text-[32px]">Layout & Responsive UI</h3>
          <p className="text-[18px]">
            Grid와 Flex를 활용해 다양한 해상도에서도
            <br />
            안정적인 반응형 UI를 구성합니다.
          </p>
        </div>

        <div>
          <h3 className="font-nav text-[32px]">Interaction & Motion</h3>
          <p className="text-[18px]">
            CSS와 JavaScript를 활용한 과하지 않은 인터랙션과
            <br />
            마이크로 모션을 구현합니다.
          </p>
        </div>

        <div>
          <h3 className="font-nav text-[32px]">Frontend Workflow</h3>
          <p className="text-[18px]">
            Next.js 환경에서 컴포넌트 단위 퍼블리싱과 협업을
            <br />
            고려한 작업 흐름을 경험했습니다.
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-[30px]">
        <p>HTML · CSS · Tailwind · JS · Next.js · Git · Figma</p>
      </div>
    </Section>
  );
}
