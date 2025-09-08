import React from "react";

export default function Button({ children, variant = "primary", onClick, href }) {
  const base = "px-6 py-2 rounded-lg font-semibold inline-block";
  const styles =
    variant === "primary"
      ? "bg-red-600 text-white hover:bg-red-700 shadow-lg"
      : "bg-yellow-400 text-gray-900 hover:bg-yellow-500";

  const className = `${base} ${styles}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
