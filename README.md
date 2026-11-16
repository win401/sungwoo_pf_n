# 이성우 포트폴리오

웹 퍼블리싱과 프론트엔드 UI 개발 경험을 소개하는 개인 포트폴리오입니다. 반응형 화면, 인터랙션, 프로젝트별 문제와 담당 역할을 정리했습니다.

- **포트폴리오:** https://sungwoo-pf-n.vercel.app/
- **퍼블리싱 작품집:** https://win401.github.io/SungWoo-s-Portfolio/

## 주요 구성

| 영역 | 내용 |
| --- | --- |
| About | 소개와 개발 방향 |
| Skills | 화면 구현과 개발에 활용하는 기술 |
| Projects | 실무·개인 프로젝트 카드와 상세 페이지 |
| Contact | Formspree 기반 문의 폼 |

프로젝트 상세 페이지는 `/projects/[id]` 경로로 구성되며, 프로젝트 데이터는 `data/projects.ts`에서 관리합니다. 프로젝트마다 담당 역할, 해결하려던 문제, 주요 구현 내용, 배운 점과 관련 링크를 정리합니다.

> 이 저장소는 각 프로젝트를 소개하는 **포트폴리오 웹사이트**입니다. 소개된 서비스의 전체 소스 코드나 백엔드가 모두 포함된 저장소는 아닙니다. 별도 저장소가 공개된 프로젝트는 상세 페이지의 GitHub 링크에서 확인할 수 있습니다.

## 기술 구성

- **Next.js 16 / React 19:** App Router 기반 페이지 구성
- **TypeScript:** 컴포넌트와 프로젝트 데이터 타입 정의
- **Tailwind CSS 4:** 반응형 레이아웃과 스타일
- **React Icons:** 기술 및 링크 아이콘
- **AOS:** 스크롤 인터랙션
- **Formspree:** 문의 폼 전송 연동
- **Vercel:** 웹사이트 배포

프로젝트 상세에 표시된 Cloud Run, Cloud SQL, FastAPI 등의 기술은 **해당 소개 프로젝트의 기술**이며, 이 포트폴리오 자체의 실행 의존성과는 구분됩니다.

## 로컬 실행

Node.js **20.9 이상**과 npm이 필요합니다. 저장소에 포함된 `package-lock.json`을 기준으로 설치합니다.

```bash
git clone https://github.com/win401/sungwoo_pf_n.git
cd sungwoo_pf_n
npm ci
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다. 다른 서비스가 3000번 포트를 사용 중이면 다음처럼 포트를 지정할 수 있습니다.

```bash
npm run dev -- --port 3001
```

### 검사 및 빌드

```bash
# 코드 스타일 검사
npm run lint

# TypeScript 타입 검사
npx tsc --noEmit --incremental false

# 배포용 빌드
npm run build

# 빌드 결과를 로컬에서 실행
npm run start
```

`npm run start`는 먼저 생성한 빌드 결과를 실행합니다. 파일을 수정하며 확인할 때는 `npm run dev`를 사용하세요. 현재 `package.json`에는 별도의 자동화 테스트 명령이 정의되어 있지 않습니다.

## 디렉터리 구조

```text
app/
├── page.tsx                 # 메인 페이지 섹션 조합
├── layout.tsx               # 공통 레이아웃과 메타데이터
├── globals.css              # 전역 스타일
├── fonts/                   # 로컬 폰트
└── projects/[id]/page.tsx    # 프로젝트 상세 페이지
components/                  # 소개·기술·프로젝트·문의 등 UI 컴포넌트
data/projects.ts             # 프로젝트 데이터와 타입
public/images/               # 프로필·프로젝트 이미지
```

## 내용 수정 방법

- **소개:** `components/About.tsx`
- **기술:** `components/Skills.tsx`
- **프로젝트 내용·대표 이미지 경로·외부 링크:** `data/projects.ts`
- **카드·상세 화면:** `components/ProjectCard.tsx`, `app/projects/[id]/page.tsx`
- **문의 폼:** `components/Contact.tsx` 및 `app/page.tsx`의 `formId`
- **페이지 제목·설명:** `app/layout.tsx`

문의 폼을 다른 용도로 재사용할 때는 본인의 Formspree 폼 ID로 변경해야 합니다. 전송 시 입력값이 Formspree로 전달되므로 실제 문의 전송과 수신 확인은 별도로 점검하세요.

## 배포 및 확인

현재 공개 사이트는 Vercel에서 운영합니다. 배포 전 타입 검사와 빌드를 확인하고, 배포 후에는 홈·상세 페이지·이미지·모바일 레이아웃·외부 링크를 점검합니다.

로컬 파일 수정, GitHub 반영, Vercel 배포는 서로 다른 단계입니다. 로컬에서만 바꾼 내용은 GitHub에 자동 반영되지 않으며, CLI로 별도 배포한 결과와 저장소의 최신 커밋이 다를 수 있습니다. 배포할 브랜치와 포함할 파일을 확인한 뒤 진행하세요.

## 작업물 설명과 공개 범위

팀 작업은 본인의 참여 범위를 구분하고, 개인 실습은 구현·검증한 범위와 남은 과제를 구분해 설명합니다.

회사·고객 관련 화면과 자료는 공개 권한 및 기밀정보 포함 여부를 확인해야 합니다. 설명용 재구성 이미지나 가상 데이터를 사용한 경우에는 실제 운영 화면과 혼동되지 않도록 표시합니다. 이미지 변형만으로 공개 권한이 확보되는 것은 아닙니다.

## 프로젝트 설명 관리

FitNote를 포함한 프로젝트 상세는 `app/projects/[id]/page.tsx`의 공통 레이아웃을 사용합니다. 내용은 `data/projects.ts`에서 수정하며, 문제·담당 역할·주요 구현·기획에서 구현까지·참여 범위·회고 순서로 표시합니다.
