# React + NestJS Fullstack Demo

这个仓库包含两个 demo：

- `React/`: React 移动端页面 demo（Vite）
- `Nestjs/`: NestJS 后端接口 demo

## 功能

- 后端提供接口：`GET /api/content`
- 前端启动后请求后端接口并展示页面内容
- GitHub Actions 自动安装依赖并构建前后端，保证在 GitHub 上可跑通

## 本地运行

### 1) 启动后端

```bash
cd Nestjs
npm install
npm run start:dev
```

默认监听：`http://localhost:3000`

### 2) 启动前端

```bash
cd React
npm install
npm run dev
```

默认访问：`http://localhost:5173`

前端会请求 `http://localhost:3000/api/content`（开发环境通过 Vite 代理访问 `/api/content`）。

## GitHub 运行说明

推送到 GitHub 后会自动触发 `Fullstack CI`：

- 构建 React
- 构建 NestJS

在仓库的 Actions 页面可查看执行结果。
