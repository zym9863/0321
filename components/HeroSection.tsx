export default function HeroSection({
  title,
  subtitle,
  date,
  gradient,
  icon,
}: {
  title: string;
  subtitle: string;
  date: string;
  gradient: string;
  icon: string;
}) {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center text-white"
      style={{ background: gradient }}
    >
      <span className="animate-fade-in-up text-6xl md:text-8xl">{icon}</span>
      <h1 className="animate-fade-in-up animate-delay-200 mt-6 text-4xl font-bold md:text-6xl">
        {title}
      </h1>
      <p className="animate-fade-in-up animate-delay-400 mt-4 max-w-2xl text-lg opacity-90 md:text-xl">
        {subtitle}
      </p>
      <p className="animate-fade-in-up animate-delay-600 mt-4 text-sm tracking-widest opacity-60">
        {date}
      </p>
    </section>
  );
}
