# 🌍 TimeBridge

**글로벌 협업을 위한 현대적인 세계시계 애플리케이션**

TimeBridge는 원격 팀과 글로벌 협업을 위해 설계된 직관적이고 아름다운 세계시계 애플리케이션입니다. 여러 도시의 현재 시간을 한눈에 확인할 수 있으며, 각 도시의 업무 시간과 휴식 시간을 시각적으로 구분하여 표시합니다.

![TimeBridge Screenshot](https://via.placeholder.com/800x400/667eea/ffffff?text=TimeBridge+Screenshot)

## ✨ 주요 기능

### 🌐 **세계시계**
- 선택한 도시들의 실시간 현재 시간 표시
- 12시간/24시간 형식 지원
- 각 도시별 고유한 색상 테마
- 업무시간, 저녁, 밤, 아침, 주말 상태 표시

### 🎨 **현대적인 디자인**
- 깔끔하고 직관적인 사용자 인터페이스
- 다크모드/라이트모드 지원
- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 부드러운 애니메이션과 호버 효과

### 🌍 **다국어 지원**
- 한국어/영어 지원
- 각 도시의 현지 언어로 표시

### ⚙️ **개인화 설정**
- 원하는 도시 추가/제거
- 설정 자동 저장 (로컬 스토리지)
- 사용자별 맞춤 설정

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
```bash
git clone https://github.com/dduddu1214/time-bridge.git
cd time-bridge
```

2. **의존성 설치**
```bash
npm install
# 또는
yarn install
```

3. **개발 서버 실행**
```bash
npm run dev
# 또는
yarn dev
```

4. **브라우저에서 확인**
```
http://localhost:5173
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 🛠️ 기술 스택

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks + Local Storage
- **Internationalization**: Custom translation system

## 📁 프로젝트 구조

```
timeBridge/
├── public/                 # 정적 파일
├── src/
│   ├── components/         # React 컴포넌트
│   │   ├── CityCard.tsx   # 도시 카드 컴포넌트
│   │   ├── CitySelector.tsx # 도시 선택 컴포넌트
│   │   ├── Clock.tsx      # 시계 컴포넌트
│   │   ├── LanguageToggle.tsx # 언어 전환
│   │   └── ThemeToggle.tsx # 테마 전환
│   ├── hooks/             # 커스텀 훅
│   │   ├── useCurrentTime.ts # 현재 시간 훅
│   │   └── useLocalStorage.ts # 로컬 스토리지 훅
│   ├── types/             # TypeScript 타입 정의
│   ├── utils/             # 유틸리티 함수
│   │   ├── cityData.ts    # 도시 데이터
│   │   ├── timeUtils.ts   # 시간 관련 유틸리티
│   │   └── translations.ts # 번역 데이터
│   ├── App.tsx           # 메인 앱 컴포넌트
│   └── main.tsx          # 앱 진입점
├── package.json
├── tailwind.config.js    # Tailwind CSS 설정
└── vite.config.ts        # Vite 설정
```

## 🌍 지원하는 도시

현재 지원하는 주요 도시들:

- 🇰🇷 **서울** (Seoul)
- 🇯🇵 **도쿄** (Tokyo)
- 🇺🇸 **뉴욕** (New York)
- 🇺🇸 **로스앤젤레스** (Los Angeles)
- 🇬🇧 **런던** (London)
- 🇫🇷 **파리** (Paris)
- 🇦🇺 **시드니** (Sydney)
- 🇸🇬 **싱가포르** (Singapore)
- 🇭🇰 **홍콩** (Hong Kong)
- 🇦🇪 **두바이** (Dubai)
- 🇩🇪 **베를린** (Berlin)
- 🇨🇦 **토론토** (Toronto)

## 🎨 사용자 인터페이스

### 메인 화면
- **세계시계 탭**: 선택한 도시들의 현재 시간 표시
- **도시 관리 탭**: 도시 추가/제거 및 설정

### 기능
- **시간 형식 전환**: 12시간/24시간 형식 토글
- **언어 전환**: 한국어/영어 전환
- **테마 전환**: 라이트모드/다크모드 전환
- **도시 관리**: 원하는 도시 추가/제거

## 🔧 개발 가이드

### 새로운 도시 추가하기

1. `src/utils/cityData.ts` 파일에서 도시 정보 추가
2. `src/components/CityCard.tsx`에서 도시별 색상 스타일 추가
3. 번역 파일에 도시 이름 추가

### 새로운 언어 추가하기

1. `src/utils/translations.ts`에서 새로운 언어 추가
2. `src/types/index.ts`에서 언어 타입 업데이트
3. 언어 전환 로직 수정

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면:

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 👨‍💻 개발자

**devdduddu** ❤️

- GitHub: [@devdduddu](https://github.com/dduddu1214)
- Email: your.email@example.com

## 🙏 감사의 말

- [React](https://reactjs.org/) - 훌륭한 프론트엔드 프레임워크
- [Tailwind CSS](https://tailwindcss.com/) - 유틸리티 우선 CSS 프레임워크
- [Lucide](https://lucide.dev/) - 아름다운 아이콘 라이브러리
- [Vite](https://vitejs.dev/) - 빠른 빌드 도구

---

**TimeBridge** - 글로벌 협업을 위한 완벽한 도구 🌍✨