import { Suspense } from "react";

interface UpdateCommentsParams {
  params: { id: string };
}
export default function PageUpdateComments({ params }: UpdateCommentsParams) {
  console.log(params.id);
  return (
    <main className="absolute inset-0 -z-10 flex h-full w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-slate-900">
      <Suspense></Suspense>
    </main>
  );
}
