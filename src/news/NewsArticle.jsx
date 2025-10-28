import React from "react";
import { useParams, Link } from "react-router-dom";
import { newsData } from "./newsData.js";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../App.jsx";

export default function NewsArticle() {
  const { id } = useParams();
  const article = newsData.find((item) => item.id === parseInt(id));

  if (!article)
    return (
      <Container>
        <p className="text-center text-red-700 mt-20">Article not found.</p>
      </Container>
    );

  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-white text-blue-900 min-h-screen"
    >
      <Container>
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-blue-700 hover:underline mb-6"
        >
          <ArrowLeft size={18} /> Back to News
        </Link>

        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <img
          src={article.img}
          alt={article.title}
          className="rounded-2xl shadow-md w-full max-w-3xl mb-8"
        />
        <div
          className="prose max-w-3xl text-blue-800"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </Container>
    </motion.main>
  );
}
