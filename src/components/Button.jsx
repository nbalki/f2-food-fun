export function Button({ children, className }) {
  return (
    <button className={`transition font-semibold ${className}`}>
      {children}
    </button>
  );
}
