import React, { useState } from "react";
import { newsData } from "./newsData.js";

export default function NewsEditor() {
  const [news, setNews] = useState(newsData);
  const [newItem, setNewItem] = useState({
    title: "",
    desc: "",
    img: "",
    content: "",
  });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!newItem.title || !newItem.img) return alert("Please fill all fields!");
    const newNews = [...news, { ...newItem, id: news.length + 1 }];
    setNews(newNews);
    alert("✅ News item added (temporary - not saved to file)");
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">
        Add a News Article
      </h2>
      <div className="grid gap-4">
        <input
          name="title"
          placeholder="Title"
          value={newItem.title}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />
        <input
          name="desc"
          placeholder="Short description"
          value={newItem.desc}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />
        <input
          name="img"
          placeholder="Image URL"
          value={newItem.img}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />
        <textarea
          name="content"
          placeholder="Full article HTML or text"
          value={newItem.content}
          onChange={handleChange}
          className="border rounded-lg p-3 h-40"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
        >
          Add Article
        </button>
      </div>
    </div>
  );
}
