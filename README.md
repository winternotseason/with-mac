

## 토이프로젝트 IN MAC OS
<img src = "https://github.com/user-attachments/assets/03e2a9eb-1e7b-40bd-96a0-c3ff3371e855" width="700" height="500">

#### 맥 OS UI에 계산기, 날씨앱을 실제 아이콘과 유사하게 담은 토이프로젝트입니다.

  
## ✍️ 개요

- 📄 프로젝트 명: TOY Project IN Mac OS
- 📅 개발 기간: 2024.07.09-2024.07.11
- 🔨 도구: NextJS, Typescript, TwilwindCSS, zustand
- 👩🏻‍💻 개발자: 황서연 (개인개발)


   
## 💾 배포 주소

   
## ⚒️ 기술 스택

### Environment
![Visual Studio Code](https://img.shields.io/badge/visual%20studio%20code-297ACC?style=flat-square&logo=visualstudiocode&logoColor=white)
![GitHub](https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=white)

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)

### Development
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![NextJS](https://img.shields.io/badge/NextJS-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/Mongodb-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Zustand](https://img.shields.io/badge/zustand-5B4524?style=flat-square&logo=&logoColor=white)




## 🔑 주요 기능
### 메인 화면

<img width="1000" alt="스크린샷 2024-07-13 20 47 54" src="https://github.com/user-attachments/assets/c804ea76-1d9c-4f3c-be3a-12027ce9cbaa">


- NextJS의 기능인 Parallel routes와 Intercepting routes 기능을 결합하여 토이프로젝트 아이콘을 클릭하면 실제 앱이 실행되는 것처럼 모달창으로 보여지도록 구현
### 계산기 앱

<img width="1000" alt="스크린샷 2024-07-13 20 47 59" src="https://github.com/user-attachments/assets/ecd2c39f-81a6-46d6-b206-f091c75ff3e4">


- 실제 MAC OS 계산기 앱 UI 디자인을 참고하여 구성하였으며, 실제 계산기 처럼 동작하도록 기능별 로직들을 경험해보며 직접 구현 

### 날씨 앱

<img width="306" alt="스크린샷 2024-07-13 21 54 27" src="https://github.com/user-attachments/assets/83e3fa00-adfc-4ad6-8801-f1f68f6eaa68">
<img width="306" alt="스크린샷 2024-07-13 21 54 32" src="https://github.com/user-attachments/assets/772e12df-a231-4a50-b5e8-99a32e9181ac">
<img width="306" alt="스크린샷 2024-07-13 21 54 36" src="https://github.com/user-attachments/assets/0584aeed-f546-40d6-bbf9-96426969c3db">

- openweathermap API를 활용하여 서울, 도쿄, 뉴욕, 런던, 파리의 실시간 날씨를 동적으로 그에 맞게 변하는 배경화면과 함께 보여줌

   
## 📁 파일 구조
```
📦app
 ┣ 📂(using-modal)
 ┃ ┣ 📂@modal
 ┃ ┃ ┣ 📂(.)calculator
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂(.)weather
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜default.tsx
 ┃ ┣ 📂calculator
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂weather
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂_component
 ┃ ┣ 📂weather
 ┃ ┃ ┣ 📜weatherBar.tsx
 ┃ ┃ ┗ 📜weatherContent.tsx
 ┃ ┣ 📜app-icon.tsx
 ┃ ┣ 📜mac-header.tsx
 ┃ ┣ 📜main-header.tsx
 ┃ ┗ 📜main-nav.tsx
 ┣ 📂api
 ┣ 📂services
 ┃ ┗ 📜weatherApi.ts
 ┣ 📂store
 ┃ ┗ 📜weatherStore.ts
 ┣ 📜favicon.ico
 ┣ 📜globals.css
 ┗ 📜layout.tsx
```

## 시작 가이드

```bash
$ git clone https://github.com/winternotseason/with-mac.git
```

```bash
npm install
```

```bash
npm run dev
```


