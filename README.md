

## 토이프로젝트 IN MAC OS
<img src = "https://github.com/user-attachments/assets/03e2a9eb-1e7b-40bd-96a0-c3ff3371e855" width="700" height="500">

#### 맥 OS UI에 계산기, 날씨앱을 실제 아이콘과 유사하게 담은 토이프로젝트입니다.

  
## ✍️ 개요

- 📄 프로젝트 명: TOY Project IN Mac OS
- 📅 개발 기간: 2024.06.27-2024.07.11
- 🔨 도구: NextJS, Typescript, TwilwindCSS, MongoDBM, zustand
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


### 계산기 앱

<img src = "https://github.com/user-attachments/assets/7f50fb74-c50f-4190-bd7c-227356eb1c6e" width="270" height="300">

- 🔎 **기본 연산**: 덧셈, 뺄셈, 곱셈, 나눗셈
- ✨ **그 외**: 부호 변경, 백분율 계산 등
### 날씨 앱

<img src = "https://github.com/user-attachments/assets/059871ae-2d39-4c1f-ad86-8788cf872b68" width="450" height="300">

   
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
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

[http://localhost:3000](http://localhost:3000) 

