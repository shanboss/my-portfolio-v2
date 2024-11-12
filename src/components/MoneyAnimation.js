export default function MoneyAnimation({ text = "$$$" }) {
  return (
    <div className="animate-money overflow-hidden">
      {text.split("").map((char, index) => (
        <span
          className={char === "-" ? "text-red-400" : "text-yellow-200"}
          key={index}
          style={{ animationDelay: `${index * 0.2}s` }} // Adjust 0.2s to change the stagger effect
        >
          {char}
        </span>
      ))}
    </div>
  );
}
