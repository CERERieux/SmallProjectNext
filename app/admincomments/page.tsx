import { auth } from "@/auth";
import { Suspense } from "react";
import CommentArea from "./CommentArea";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default async function PageAdminComments() {
  const session = await auth();
  const admin = session?.user?.name || "";

  return admin != null ? (
    <main className="flex h-screen w-screen flex-col items-center gap-8 overflow-y-auto bg-gradient-to-b from-sky-800 to-black/50 px-8 py-4">
      <h1 className="rounded-xl bg-slate-50/80 px-4 py-1 text-2xl text-sky-950 shadow-md shadow-black/30 backdrop-blur-sm">
        Comment Center!
      </h1>
      <Suspense fallback={<h2 className="text-xl text-white">Loading...</h2>}>
        <CommentArea />
      </Suspense>
      <ToastContainer />
    </main>
  ) : (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-2 bg-red-700">
      <h1 className="text-xl text-white">ERROR!</h1>
      <h2 className="text-white">
        Somehow you are here despite not being admin... Please let me know how
        you did it.
      </h2>
    </div>
  );
}
