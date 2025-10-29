import React from "react";

export default function Button({
  as: Tag = "a",
  href,
  children,
  className = "",
  onClick,
  to,
}) {
  return (
    <Tag
      href={href}
      to={to}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-poppins font-semibold tracking-wide transition
                shadow-sm ring-1 ring-blue-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 bg-blue-600 text-white
                ${className}`}
    >
      {children}
    </Tag>
  );
}