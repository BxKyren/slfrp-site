import React from "react";
import { useParams, Link } from "react-router-dom";
import { newsData } from "./newsData.js";
import { Container, GlassCard } from "../App.jsx";

export default function NewsArticle() {
  const { id } = useParams();
  const article = newsData.find((n) => n.id === id);

  if (!article) {
    return (
      <Container>
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold mb-3">Article not found</h2>
          <Link to="/news" className="text-blue-600 underline">Back to News</Link>
        </div>
      </Container>
    );
  }

  return (
    <main className="bg-blue-50/40 min-h-screen">
      <section className="relative h-56 flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: `url(${article.img})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 -z-10" />
        <Container>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow mb-6">
            {article.title}
          </h1>
        </Container>
      </section>

      <Container>
        <GlassCard className="p-6 -mt-10">
          <article className="prose prose-blue max-w-none">
            <p className="text-blue-800 whitespace-pre-wrap">{article.body}</p>
          </article>
        </GlassCard>
        <div className="py-8">
          <Link to="/news" className="text-blue-600 underline">← Back to News</Link>
        </div>
      </Container>
    </main>
  );
}
