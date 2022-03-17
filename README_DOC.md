## 1. Chạy dự án
  
  ```bash
  npm start
  npm run dev:ssr
  ```
  
## 2. Cài đặt Universal
  
  Link <https://angular.io/guide/universal>
  ```bash
  ng add @nguniversal/express-engine
  ```
  Dùng universal 

  Bổ sung vào file server.ts các global cho browser: 
  ```javascript
  const domino = require('domino');
  const fs = require('fs');
  const path = require('path');
  const template = fs.readFileSync(path.join(distFolder, 'index.html')).toString();
  const win = domino.createWindow(template.toString());
  global['window'] = win;
  global['document'] = win.document;
  global['self'] = win
  global['IDBIndex'] = win.IDBIndex
  global['document'] = win.document
  global['navigator'] = win.navigator
  global['getComputedStyle'] = win.getComputedStyle;
  ```
  <!-- Chỉnh file angular.json
  ```bash
  build => options => "outputPath": "dist/functions/browser",
  server => options => "outputPath": "dist/functions/server",
  ``` -->
  Chỉnh file server.ts
  ```bash
  const distFolder = join(process.cwd(), 'dist/functions/browser');
  =>
  const websiteFileLocation = environment.production ? 'browser' : 'dist/functions/browser';
  const distFolder = join(process.cwd(), websiteFileLocation);
  ```
## 3. Build production
  ```bash
  ng build
  npm run build:ssr (build with universal)
  ```
## 4. Một số config
  Chỉnh file angular.json
  Build max file
  ```bash
  budgets => 
  "maximumWarning": "2mb",
  "maximumError": "5mb"
  ```
  ## 5. Public source lên firebase  
  Hướng dẫn
  https://www.tiepphan.com/angular-trong-5-phut-deploy-angular-application-firebase-hosting/
  
  Universal on firebase 
  https://fireship.io/lessons/angular-universal-firebase/
  
  Tạo tài khoản firebase 
  https://console.firebase.google.com/project/angular-demo-72618/hosting/sites

  ```bash
  npm run build:ssr
  npm i -g firebase-tools

  firebase login (firebase logout)
  
  firebase init (choose host)
    - Functions: Configure a Cloud Functions directory and its files
    - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
    - Hosting: Set up GitHub Action deploys

  firebase deploy --only hosting
  ```
  

 ## 6. Cấu hình public firebase
Deploy firebase 

0. Cài đặt firebase cli
npm install -g firebase-tools

1. Đăng nhập firebase
firebase login

2. Cấu hình build lên firebase
firebase init

3. Xem danh sách project trên firebase account
firebase projects:list

4. Sử dụng project trên firebase account để deploy
firebase use nodejs-ebdf6

5. Deploy lên firebase
firebase deploy --only hosting
