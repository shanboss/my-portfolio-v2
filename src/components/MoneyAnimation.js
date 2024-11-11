export default function MoneyAnimation() {
  const numberOfSpans = 21;
  console.log("Find a way to make me money".length);
  return (
    <div className="animate-money">
      {Array.from({ length: numberOfSpans }).map((_, index) => (
        <span
          className="text-green-500"
          key={index}
          style={{ animationDelay: `${index * 0.2}s` }} // Adjust 0.5s to change the stagger effect
        >
          $
        </span>
      ))}
    </div>
  );
}
