### 12버전과의 호환을 위해 pages 폴더에 더해 app 폴더가 추가되었다. 동일한 경로라면 한군데서만 정의하는것이 좋다.

### app 또는 pages 폴더안에 폴더이름을 정하고 page.tsx로 만들면 해당경로로 자동 라우팅된다. 중첩 라우팅도 가능

### 동적 라우팅을 위해선 폴더명을 대괄호로 감싸고 내가 원하는 키워드를 넣으면 되는데 보통 slug를 많이 쓴다.

### 소괄호는 라우팅에는 포함되지 않고 코드 상 폴더 정리

### 동적 라우팅 할 때 props를 사용해서 필요한 페이지에서 사용 props이름은 폴더명 키워드와 동일하게 가져간다.

### seo를 위해 HTML의 헤더에 메타데이터를 담을 수 있다. 현재 프로젝트는 페이지 전반에 걸쳐 메타데이터를 보여주기위해 layout.tsx에 만들었다.

### 제품별 다양한 메타데이터를 보여주기 위해 product -> [slug]에도 메타데이터를 만들어 주었다. generateMetaData 이용

### hydration: NextJS는 먼저 빠르게 보이는 정적인 페이지의 HTMl을 보내준다. 그 뒤에 이 뒤에 필요한 react library와 코드를 보내주면 컴포넌트로 렌더링 해줘서 사용자의 이벤트를 처리할 수 있게 된다.

### TTV와 TTI를 줄여나가는 것이 중요

### app의 page.tsx는 기본적으로 서버 컴포넌트 node api를 사용할 수 있지만 hooks는 사용할 수 없음

### client 컴포넌트는 use client로 클라이언트 컴포넌트임을 명시

### 클라이언트 컴포넌트라고 client side rendering이 된다는 말이 아니라 브라우저에서 실행되는 동작을 처리하는 코드가 클라이언트 컴포넌트다. 그래서 처음에 받아오는 정적인 HTML에는 클라이언트 컴포넌트도 포함이 되어있지만 HTML 이벤트는 처리되지 않는다. 이벤트 처리는 hydration 이후 가능

### ISR을 위한 revalidate 변수 사용 설정하지 않으면 빌드된 데이터가 리패치되지 않음

### Nextjs로 풀스택 웹앱을 만들 수 있는 것은 Routing handler가 있기 때문

### loading.tsx는 내부적으로 React Suspense를 사용한다.

### image를 넣을 때는 nextjs에서 제공해주는 Image 태그를 사용하고 로컬이 아닌 주소로 이미지를 src로 할 때는 width와 heigt를 명시하고 next.config에 등록해줘야한다.

### redirect 시킬 때에도 next.config.js에 async redirects() 함수를 만들고 배열을 반환하는 식으로 등록한다.

### rewrite를 이용하면 프로젝트 구조와 다르게 URL을 덮어씌울 수 있다. 프로젝트 구조를 노출 시키지 않는 효과

### middleware를 특정 경로에 대해서만 실행시키려면 middleware.tsx에서 config를 export해주어야 한다. matcher에 배열형태로
