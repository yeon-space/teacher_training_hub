# 🏫 Yeon_space | 연수 안내 및 자료 허브

> **AI와 함께 코딩 없이 만드는 나만의 교실 도구!**  
> 교사 대상 연수 프로그램의 커리큘럼, 강의 슬라이드, 실습 파일 다운로드 및 가이드를 제공하는 단일 페이지 웹 애플리케이션(SPA)입니다.

---

## 🌟 주요 특징

- **핸드드로잉 & 벤토그리드 디자인**: 연필 질감과 손그림 느낌의 일러스트(SVG/이미지), 부드러운 베이지톤(#FDFBF7) 테마, 세련된 벤토 그리드(Bento Grid) 레이아웃을 통해 따뜻하고 직관적인 사용자 경험을 선사합니다.
- **단계별 커리큘럼 안내 (Stage 1~7)**:
  - **Stage 1**: 안티그라비티 IDE vs 앱의 차이점 및 사용 목적 비교
  - **Stage 2**: 배포(Deploy)의 개념과 교실 환경에서의 활용 필요성
  - **Stage 3**: 깃허브(GitHub) 계정 생성 및 안티그라비티 연동법
  - **Stage 4 (실습)**: '추억의 뽑기판' 다운로드 및 배포, 모바일 앱(PWA/홈화면 추가) 설치
  - **Stage 5 (실습)**: 안티그라비티 앱에서 자연어로 돌림판을 직접 커스텀하고 배포하기
  - **Stage 6 (실습)**: 기획안을 바탕으로 나만의 미션 타이머 앱 자율 제작 및 배포
  - **Stage 7**: 연수 마무리, Q&A 및 교실 적용 아이디어 공유
- **반응형 웹 지원**: 데스크톱 화면뿐만 아니라 교실의 태블릿, 스마트폰, TV 화면에서도 최적화된 레이아웃으로 열람할 수 있습니다.
- **실습 파일 및 슬라이드 연동**: 각 단계별 필요한 실습 템플릿(zip) 다운로드 링크와 슬라이드 뷰어가 내장되어 있습니다.

---

## 📂 프로젝트 구조

```text
teacher_training_hub/
├── index.html       # 메인 웹 페이지 (HTML, Tailwind CSS, Vanilla JS, 데이터 통합)
├── extract.js       # index.html에서 스크립트 부분을 추출하기 위한 유틸리티 Node.js 스크립트
├── images/          # 단계별 대표 일러스트 및 배경 이미지 폴더
│   ├── stage1.png / stage1.jpg
│   ├── stage2.png / stage2.jpg
│   └── stage3.jpg
└── README.md        # 프로젝트 설명서 (본 파일)
```

---

## 🚀 로컬 실행 방법

이 프로젝트는 서버 사이드 빌드 과정이 필요 없는 순수 정적(Static) 웹사이트입니다.

1. 본 저장소를 클론하거나 다운로드합니다.
   ```bash
   git clone https://github.com/[사용자_계정]/teacher_training_hub.git
   ```
2. 웹 브라우저에서 `index.html` 파일을 직접 더블 클릭하여 실행하거나, VS Code의 `Live Server` 익스텐션 또는 아래 명령어를 사용하여 로컬 서버를 구동합니다.
   ```bash
   # Python이 설치된 경우
   python -m http.server 8000
   
   # Node.js가 설치된 경우
   npx serve .
   ```
3. 웹 브라우저에서 `http://localhost:8000` (또는 지정된 포트)로 접속합니다.

---

## 🌐 배포 방법 (GitHub Pages)

본 프로젝트는 깃허브 페이지(GitHub Pages)를 통해 쉽게 무료로 배포할 수 있습니다.

1. 깃허브(GitHub)에 새 레포지토리를 생성합니다.
2. 프로젝트 파일들을 원격 저장소에 푸시합니다.
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/[사용자_계정]/[레포지토리_이름].git
   git push -u origin main
   ```
3. 레포지토리의 **Settings** -> **Pages** 메뉴로 이동합니다.
4. **Build and deployment** 항목의 Source를 `Deploy from a branch`로 설정하고, Branch를 `main` (또는 `master`) / `/ (root)` 폴더로 설정한 후 **Save**를 클릭합니다.
5. 몇 분 뒤 상단에 생성되는 `https://[사용자_계정].github.io/[레포지토리_이름]/` 주소로 접속합니다.

---

## 🛠️ 기술 스택

- **Markup & Layout**: HTML5, Semantic Elements
- **Styling**: Tailwind CSS (CDN 연동), Custom CSS (Hand-drawn Border-radius, Bento Cards)
- **Script**: Vanilla JavaScript (SPA View Router, Carousel Slider, Data Binding)
- **Fonts**: Noto Sans KR (Google Fonts)
