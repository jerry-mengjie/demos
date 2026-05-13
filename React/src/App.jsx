import { useEffect, useState } from "react";

const apiBase = import.meta.env.VITE_API_URL || "";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function loadContent() {
      try {
        setLoading(true);
        const response = await fetch(`${apiBase}/api/content`);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err.message || "请求失败");
      } finally {
        setLoading(false);
      }
    }

    loadContent();
  }, []);

  return (
    <main className="mobile-page">
      <section className="card">
        <h1>{loading ? "加载中..." : content?.title || "移动端 Demo"}</h1>
        <p className="subtitle">
          {error
            ? `请求后端失败: ${error}`
            : content?.subtitle || "React 已成功连接 NestJS 接口"}
        </p>
        <ul>
          {(content?.items || ["准备中"]).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
