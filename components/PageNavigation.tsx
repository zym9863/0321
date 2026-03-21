import Link from "next/link";

export default function PageNavigation({
  prevPage,
  nextPage,
}: {
  prevPage?: { href: string; label: string };
  nextPage?: { href: string; label: string };
}) {
  return (
    <nav className="flex items-center justify-between px-6 py-8">
      <div>
        {prevPage && (
          <Link
            href={prevPage.href}
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            ← {prevPage.label}
          </Link>
        )}
      </div>
      <Link
        href="/"
        className="text-sm font-medium text-white/70 transition-colors hover:text-white"
      >
        首页
      </Link>
      <div>
        {nextPage && (
          <Link
            href={nextPage.href}
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            {nextPage.label} →
          </Link>
        )}
      </div>
    </nav>
  );
}
