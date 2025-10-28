import React, { useState } from "react";
import { Container, GlassCard } from "../App.jsx";
import { newsData as initialData } from "./newsData.js";

export default function NewsEditor() {
  const [news, setNews] = useState(initialData);
  const [form, setForm] = useState({
    id: "001",
    img: "https://live.staticflickr.com/65535/54880830406_9d3a5e2065_b.jpg",
    title: "Serving London Frontline Roleplay Website in Beta",
    desc: "The website is currently in BETA mode. Please check out more information on this article!",
    body: "donut_tv has been working extremely hard in making the website. But we still have quite a while! We are looking to also get a portal for you players. To navigate easily through patrols etc. Stay Tuned 👀",
  });

  const addCard = (e) => {
    e.preventDefault();
    if (!form.id || !form.title) return;
    setNews([{ ...form }, ...news]);
    setForm({ id: "", img: "", title: "", desc: "", body: "" });
  };

  return (
    <main className="bg-blue-50/40 min-h-screen py-12">
      <Container>
        <h1 className="text-3xl font-bold mb-6">News Editor</h1>
        <GlassCard className="p-6 mb-10">
          <form onSubmit={addCard} className="grid gap-4 md:grid-cols-2">
            <input className="border rounded-xl px-3 py-2" placeholder="id (url-safe)" value={form.id} onChange={(e)=>setForm({...form, id:e.target.value})} />
            <input className="border rounded-xl px-3 py-2" placeholder="image url" value={form.img} onChange={(e)=>setForm({...form, img:e.target.value})} />
            <input className="border rounded-xl px-3 py-2 md:col-span-2" placeholder="title" value={form.title} onChange={(e)=>setForm({...form, title:e.target.value})} />
            <input className="border rounded-xl px-3 py-2 md:col-span-2" placeholder="short description" value={form.desc} onChange={(e)=>setForm({...form, desc:e.target.value})} />
            <textarea className="border rounded-xl px-3 py-2 md:col-span-2" rows="6" placeholder="article body (markdown or text)" value={form.body} onChange={(e)=>setForm({...form, body:e.target.value})} />
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-2 md:col-span-2">Add card</button>
          </form>
        </GlassCard>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => (
            <GlassCard key={n.id}>
              <img src={n.img} alt={n.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{n.title}</h3>
                <p className="text-sm text-blue-700">{n.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </main>
  );
}
