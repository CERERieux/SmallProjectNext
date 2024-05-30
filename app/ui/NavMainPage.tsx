import Link from "next/link";

export default function NavMainPage() {
  return (
    <nav className="sticky top-2 z-30 mx-auto flex items-center justify-center *:bg-slate-700/20 *:text-sm *:backdrop-blur-sm">
      <Link
        href="/#topMainPage"
        className="flex w-20 justify-center rounded-l-xl border border-black px-2 py-1 transition-all hover:bg-sky-500 hover:text-white"
      >
        Home
      </Link>
      <Link
        href="/comments"
        className="flex w-20 justify-center border border-x-0 border-black px-2 py-1 transition-all hover:bg-sky-500 hover:text-white"
      >
        Comments
      </Link>
      <Link
        href="/gallery"
        className="flex w-20 justify-center rounded-r-xl border border-r-0 border-black px-2 py-1 transition-all hover:bg-sky-500 hover:text-white"
      >
        Gallery
      </Link>
    </nav>
  );
}
