# 餐廳清單

可以瀏覽、查詢已經登記在網站內的餐廳相關資訊

## Features - 產品功能

- 使用者可以在首頁看到所有餐廳與它們的簡單資料：
  - 餐廳照片
  - 餐廳名稱
  - 餐廳分類
  - 餐廳評分
- 使用者可以再點進去看餐廳的詳細資訊：
  - 類別
  - 地址
  - 電話
  - 描述
  - 圖片
- 使用者可以透過搜尋餐廳名稱來找到特定的餐廳

## Environment SetUp - 環境建置

1. [Node.js](https://nodejs.org/en/) (版本使用 10.15.0) - JavaScript 執行環境
2. [npm](https://nodejs.org/en/) (版本使用 6.4.1) - Node.js 的套件管理器
3. [Express](https://www.npmjs.com/package/express) (版本使用 4.17.1) - 應用程式架構
4. [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) (版本使用 5.2.0) - 模板引擎
5. [Nodemon](https://www.npmjs.com/package/nodemon) - 伺服器輔助

## Use Tools - 使用工具

- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
- [Express](https://www.npmjs.com/package/express) - 應用程式架構
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - 模板引擎

## Installing - 專案安裝流程

1. 開啟終端機(Terminal) 或 (Git Bash) 到欲存放專案的本機位置並執行:

```
git clone https://github.com/Allen-TaiLin/restaurant-list-remote.git
```

2. 開啟終端機(Terminal) 或 (Git Bash)，進入到存放此專案的資料夾

```
cd restaurant_list
```

3. 安裝 npm 套件

```
在 Git Bash 或 (Terminal) 輸入 npm init -y
```

4. 安裝 express 套件

```
在 Git Bash 或 (Terminal) 輸入 npm i express
```

5. 安裝 nodemon 套件

```
在 Git Bash 或 (Terminal) 輸入 npm install -g nodemon
```

6. 安裝  express-handlebars 套件

```
在 Git Bash (Terminal) 輸入 npm i express-handlebars
```

7. 啟動伺服器，執行 app.js 檔案

```
npm run dev
```

8. 當終端顯示出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
Express is listening on http://localhost:3000
```



