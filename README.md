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

## GitHub 前端页面地址

已配置 GitHub Pages 自动部署前端（`main` 分支触发）：

- 预计访问地址：`https://jerry-mengjie.github.io/demos/`

首次访问前，请在仓库 `Settings -> Pages` 中确认 Source 为 `GitHub Actions`。

## 线上前后端联通（GitHub + Render）

为了让 GitHub Pages 页面不再请求本地接口，需要部署 NestJS 到公网（已加入 Render 配置）：

### 1) 创建 Render 服务

- 登录 Render，选择 `New +` -> `Blueprint`
- 连接仓库 `jerry-mengjie/demos`
- 选择仓库根目录的 `render.yaml` 创建服务
- 创建完成后会得到一个后端地址，例如 `https://demos-nest-api.onrender.com`
- 可访问 `https://<你的后端域名>/api/health` 验证后端在线

### 2) 配置 GitHub Pages 前端 API 地址

- 打开仓库 `Settings -> Secrets and variables -> Actions -> Variables`
- 新建变量：`VITE_API_URL`，值填你的 Render 后端地址（不带结尾 `/`）
- 例如：`https://demos-nest-api.onrender.com`

### 3) 触发部署

- 后端：先在 Render 服务里创建 Deploy Hook，并在 GitHub `Secrets` 新建
  `RENDER_DEPLOY_HOOK_URL`，然后运行 `Deploy Backend to Render` 工作流（或推送 `Nestjs/` 代码自动触发）
- 前端：`Deploy Frontend to Pages` 工作流（推送 `main` 自动触发）

部署成功后，你的在线页面会通过 `VITE_API_URL/api/content` 获取内容。
