export default function InfoSection({
  paragraphs,
  bgColor,
}: {
  paragraphs: string[];
  bgColor: string;
}) {
  return (
    <section className="relative px-6 py-24 md:py-32 bg-[#050505] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:gap-24">
        <div className="lg:w-1/3">
          <div className="sticky top-24">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
              The Context
            </h2>
            <div className="mt-8 h-px w-full bg-neutral-800" />
          </div>
        </div>
        
        <div className="space-y-12 lg:w-2/3">
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className={`text-xl font-light leading-relaxed tracking-wide sm:text-2xl sm:leading-loose ${
                i === 0 ? "text-white" : "text-neutral-400"
              }`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
