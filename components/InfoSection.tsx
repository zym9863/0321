export default function InfoSection({
  paragraphs,
  bgColor,
}: {
  paragraphs: string[];
  bgColor: string;
}) {
  return (
    <section
      className="px-6 py-20 md:py-28"
      style={{ backgroundColor: bgColor }}
    >
      <div className="mx-auto max-w-3xl space-y-6">
        {paragraphs.map((text, i) => (
          <p
            key={i}
            className="text-lg leading-relaxed text-gray-800 md:text-xl"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
