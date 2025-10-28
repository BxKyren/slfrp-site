import React from "react";

export default function DivisionsSection() {
  const divisions = [
    {
      name: "Traffic Division",
      href: "/divisions/traffic",
      desc: "Enforcing road safety and responding to incidents across London.",
      img: "/images/traffic.jpg",
    },
    {
      name: "Criminal Investigation Division (CID)",
      href: "/divisions/cid",
      desc: "Handling serious crime investigations and detective operations.",
      img: "/images/cid.jpg",
    },
    {
      name: "Dog Support Unit",
      href: "/divisions/dog-unit",
      desc: "Providing specialist support with trained police dogs for patrol and search.",
      img: "/images/dogunit.jpg",
    },
    {
      name: "Armed Response Unit (ARU)",
      href: "/divisions/armed-response",
      desc: "Responding to incidents involving firearms and critical threats.",
      img: "/images/armed.jpg",
    },
    {
      name: "Forensics Division",
      href: "/divisions/forensics",
      desc: "Examining evidence and supporting investigations through scientific analysis.",
      img: "/images/forensics.jpg",
    },
    {
      name: "Community Policing",
      href: "/divisions/community",
      desc: "Building relationships with the public and promoting local safety.",
      img: "/images/community.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Divisions of the Metropolitan Police Service
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((div) => (
            <a
              key={div.name}
              href={div.href}
              className="group bg-gray-50 rounded-2xl overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={div.img}
                alt={div.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-700">
                  {div.name}
                </h3>
                <p className="text-gray-600">{div.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
