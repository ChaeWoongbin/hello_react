# React 공부 및 예제용
1) React 프로젝트 생성
    - npx create-react-app hello_react

2) MUI 패키지 설치
    - npm install @mui/material @emotion/react @emotion/styled

3) 컴포넌트 파일 생성
  목표)
  -Appbar메뉴 3개
  -메인화면
  -로그인
  -메뉴1
    - 하위1-1
    - 하위1-2
  -메뉴2
    - 하위2-1
  -메뉴3
  -프로필

4) 라우터 설정
   - npm i react-router-dom
   - 메인화면, 로그인, 프로필, About 하위1-, 하위2- 부분을 라우터로 이동 가능하게 할 것
   - 메뉴1,2는 Drawer로 처리

5) Appbar 추가
   - npm i @mui/icons-material
   - Home은 / , Menu1,2는 하위 1번 라우팅( Menu의 경우 추후 삭제 예정, Drawer)

6) 로그인 페이지작성

7) 로그인, 로그아웃, 접근제어 구현
   - 로그인 사용시 API 통신 필요 계정정보 -> API
   - API 통신을 위한 AXOIS 설치
   - npm install axios

9) Private,Public Route 구현
   - auth_route 폴더
   - Private, Public Route 추가

10) Drawer 추가
   - 상단 메뉴 추가