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
  Chỉnh file angular.json
  ```bash
  build => options => "outputPath": "dist/functions/browser",
  server => options => "outputPath": "dist/functions/server",
  ```
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
