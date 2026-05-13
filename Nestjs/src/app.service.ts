import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getContent() {
    return {
      title: "React + NestJS Demo",
      subtitle: "前端已成功访问后端接口",
      items: [
        "后端接口: GET /api/content",
        "前端页面: 移动端卡片布局",
        "部署方式: GitHub Actions 自动构建"
      ]
    };
  }
}
