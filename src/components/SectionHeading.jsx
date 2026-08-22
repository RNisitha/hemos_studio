export function SectionHeading({ eyebrow, title, align = "left" }) {
  return (
    <header className={align === "center" ? "text-center" : ""}>
      {eyebrow ? (
        <p className="eyebrow">{eyebrow}</p>
      ) : null}
      <h2 className="display text-3xl leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h2>
    </header>
  );
}
