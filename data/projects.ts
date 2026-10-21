// data/projects.ts
export type Project = {
  id: string;
  title: string;
  imageSrc: string;
  imageFit?: "cover" | "contain";
  category?: "work" | "personal";
  tags: string[];
  summary: string;
  period?: string;
  role: string;
  problem?: string;
  highlights?: string[];
  learnings?: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "mower-control-center",
    title: "자율주행 잔디깎이 관제 시스템",
    category: "work",
    imageSrc: "/images/mower-laptop-mockup.png",
    imageFit: "contain",
    tags: ["React", "TypeScript", "Vite", "Leaflet"],
    summary:
      "지도에서 작업 구역과 경로를 관리하고, 잔디깎이 장비의 상태와 작업 이력을 확인하는 관제 서비스입니다.",
    role:
      "AI 코딩 도구를 활용한 팀 개발에 참여해 화면·API 연동을 개선하고 CSS와 사용자 안내를 조정했습니다.",
    problem:
      "장비 상태를 화면에서 주기적으로 확인하는 과정에서 조회 로직과 화면 상태가 흩어질 수 있었고, 지도 경로 입력 오류와 API 실패 상황도 사용자가 알아차리기 어려웠습니다.",
    highlights: [
      "서버 상태 조회를 TanStack Query의 queryKey·enabled·refetchInterval 기반으로 정리하고, 연관 데이터 조회 흐름을 연결했습니다.",
      "지도 클릭과 좌표 입력 검증을 통합하고, 오류가 남아 있으면 저장을 막도록 해 잘못된 입력을 줄였습니다.",
    ],
    learnings:
      "서버 상태 갱신 조건과 입력 검증을 화면 흐름에 맞춰 다뤘습니다.",
  },
  {
    id: "floating-solar-dashboard",
    title: "부유형 태양광 관제 플랫폼",
    category: "work",
    imageSrc: "/images/floating-solar-device-mockup.png",
    imageFit: "contain",
    tags: ["React", "TypeScript", "Recharts", "Spring Boot"],
    summary:
      "발전 현황, 구조물 안전, 기상 정보와 정비 일정을 한곳에서 확인하는 부유형 태양광 관제 플랫폼입니다.",
    role:
      "팀의 AI 보조 개발 과정에서 관제 화면의 데이터 조회·표시 개선에 참여했습니다. 제가 맡아 확인한 사례는 데이터 상태 판별, 조회 요청 정리, 툴팁 표시와 CSS 조정입니다.",
    problem:
      "계측값이 늦게 도착하거나 정상적으로 0인 경우를 단순한 미수신과 구분하기 어려우면, 운영자가 데이터를 잘못 해석할 수 있었습니다.",
    highlights: [
      "미수신·지연·정상 0 상태를 구분해 화면에 표시하고, 마지막 지연값을 툴팁에서 확인할 수 있도록 보완했습니다.",
      "동일한 계측 원문을 반복 조회하던 흐름을 요청당 한 번으로 정리하고, 반올림 누적 차이를 피하도록 원문 조회와 집계를 분리했습니다.",
    ],
    learnings:
      "관제 화면에서는 값뿐 아니라 데이터의 상태와 갱신 시점도 함께 전달해야 한다는 점을 배웠습니다. 관련 변경에는 상태 구분 회귀 테스트와 조회 호출 횟수 테스트가 추가됐습니다.",
  },
  {
    id: "bus-log",
    title: "배차 관리 시스템",
    imageSrc: "/images/dispatch-devices-mockup.png",
    imageFit: "contain",
    tags: ["Next.js", "TypeScript", "React", "Tailwind", "Supabase"],
    summary:
      "전세버스 현장의 배차 전달과 운행 실적 기록을 한곳에서 관리하는 웹 서비스입니다.",
    role: "서비스 화면 구현 및 사용자 흐름 설계",
    problem:
      "카카오톡 배차 메시지와 종이 일지에 의존하던 운행 업무를, 관리자와 기사가 같은 상태를 확인할 수 있는 흐름으로 정리했습니다.",
    highlights: [
      "관리자가 고정 배차 프리셋으로 기사별 배차를 일괄 전송",
      "기사가 모바일에서 운행 상태와 출발·도착 정보를 빠르게 입력",
      "Supabase Realtime으로 관리자와 기사 화면의 상태를 동기화",
      "월말 정산을 위한 운행 데이터 확인과 엑셀 출력",
    ],
    learnings:
      "현장 업무를 기능으로 옮길 때는 화면 수보다 사용자가 하루 동안 어떤 순서로 행동하는지 먼저 정리하는 것이 중요하다는 점을 배웠습니다.",
    githubUrl: "https://github.com/win401/bus-log-project",
  },
  {
    id: "fitnote-trainer",
    title: "FitNote Trainer",
    imageSrc: "/images/fitnote-devices-mockup.png",
    imageFit: "contain",
    tags: ["Next.js", "TypeScript", "FastAPI", "Python", "OpenAI"],
    summary:
      "트레이너의 수업 기록과 회원의 자세 분석·피드백을 연결하는 헬스케어 관리 서비스입니다.",
    role: "프론트엔드 화면 구현 및 AI 기능 연동 경험",
    problem:
      "수업 기록, 자세 분석 결과, 회원 피드백이 분리되어 관리되는 문제를 트레이너용 관리 도구와 회원용 포털로 나누어 풀었습니다.",
    highlights: [
      "트레이너용 관리 화면과 회원용 모바일 포털을 역할에 맞게 분리",
      "FastAPI·SQLite 기반 데이터와 Next.js 화면 연동",
      "OpenAI API를 활용한 수업 메모 요약과 리포트 생성",
      "YOLO pose 기반 자세 분석 결과를 화면에서 확인하는 흐름 구성",
    ],
    learnings:
      "AI 기능은 결과를 보여주는 것에서 끝나지 않고, 사용자가 이해하고 다음 행동을 정할 수 있는 화면 흐름까지 설계해야 한다는 점을 배웠습니다.",
    githubUrl: "https://github.com/win401/health_care_coachBack",
  },
  {
    id: "seller-detail-page-automation",
    title: "Seller DetailPage Automation",
    imageSrc: "/images/seller-devices-mockup.png",
    imageFit: "contain",
    tags: ["Next.js", "TypeScript", "Supabase", "AI SDK"],
    summary:
      "상품 정보와 이미지를 입력하면 AI가 상세페이지 문구와 구성 초안을 만드는 셀러용 제작 도구입니다.",
    role: "AI 생성 흐름을 사용자가 수정 가능한 편집 화면으로 구현",
    problem:
      "초보 셀러가 판매 문구와 상세페이지 구성을 직접 만드는 데 드는 시간과 제작 비용을 줄이는 것을 목표로 했습니다.",
    highlights: [
      "상품 정보 입력과 이미지 업로드를 바탕으로 한 상세페이지 제작 흐름",
      "분석·기획·제작·검수 단계의 AI 에이전트 파이프라인",
      "섹션 순서와 문구를 사용자가 직접 수정하는 편집 경험",
      "Supabase에 프로젝트·초안 버전·생성 기록을 저장하고 PNG ZIP으로 내보내기",
    ],
    learnings:
      "생성형 AI 결과를 그대로 보여주기보다, 사용자가 결과를 검토하고 수정하며 신뢰할 수 있게 만드는 편집 경험이 중요하다는 점을 배웠습니다.",
    githubUrl: "https://github.com/win401/seller_detailPage_automation",
  },
  {
    id: "helinox",
    title: "Helinox",
    imageSrc: "/images/helinox.png",
    tags: ["Next.js", "TypeScript", "React", "Tailwind", "GSAP"],
    summary: "브랜드의 분위기와 제품 정보를 웹 인터랙션으로 표현한 리뉴얼 프로젝트입니다.",
    role: "브랜드 페이지 UI 및 인터랙션 구현",
    problem: "제품의 특징과 브랜드 인상을 자연스럽게 전달하는 반응형 웹 경험을 구현했습니다.",
    highlights: [
      "반응형 레이아웃 구현",
      "GSAP 기반 인터랙션 적용",
      "제품 정보와 브랜드 콘텐츠의 시각적 계층 구성",
    ],
    learnings: "브랜드 웹사이트에서는 콘텐츠의 우선순위와 움직임의 속도가 사용자의 인상에 직접 영향을 준다는 점을 배웠습니다.",
    liveUrl: "https://helinox-pf.vercel.app/",
  },
  {
    id: "universal",
    title: "Universal",
    imageSrc: "/images/universal.png",
    tags: ["HTML", "CSS", "JS"],
    summary: "HTML, CSS, JavaScript로 구현한 반응형 브랜드 웹 프로젝트입니다.",
    role: "반응형 UI 및 프론트엔드 인터랙션 구현",
    problem: "정적인 디자인 시안을 다양한 화면 크기에서도 읽기 좋은 웹페이지로 구현했습니다.",
    highlights: [
      "반응형 레이아웃 구현",
      "HTML·CSS 기반 시각 요소 구성",
      "JavaScript를 활용한 사용자 인터랙션 적용",
    ],
    learnings: "기본 웹 기술을 정확히 다루는 것이 이후 프레임워크 기반 개발의 토대가 된다는 점을 확인한 프로젝트입니다.",
    liveUrl: "https://win401.github.io/SungWoo-s-Portfolio/project3/project3.html",
  },
];
