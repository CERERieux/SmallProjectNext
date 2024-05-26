import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="absolute inset-0 -z-10 flex h-full w-full flex-col items-center justify-center overflow-y-auto bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-slate-900">
      <div className="flex w-[500px] flex-col items-center rounded-2xl bg-transparent/90 px-6 py-4">
        <FaceFrownIcon className="w-10 text-gray-400" />
        <h2 className="text-xl font-semibold dark:text-white">404 Not Found</h2>
        <p className="dark:text-white">Could not find the requested comment.</p>
        <Link
          href="/admincomments"
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        >
          Go Back
        </Link>
      </div>
    </main>
  );
}
