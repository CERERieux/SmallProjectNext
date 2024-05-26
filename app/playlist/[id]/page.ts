import { notFound, redirect } from "next/navigation";

interface PlaylistPageParams {
  params: { id: string };
}

export default function PlaylistPage({ params }: PlaylistPageParams) {
  const { id } = params;
  const playlist = Number(id);
  if (playlist < 1 || playlist > 2) {
    notFound();
  }
  if (playlist === 1) {
    redirect(
      "https://www.youtube.com/playlist?list=PLwMOB9Os2H-EhfJraPlKdwjRG9zUzgIW0",
    );
  } else if (playlist === 2) {
    redirect(
      "https://www.youtube.com/playlist?list=PLwMOB9Os2H-HAZOY9cYVye0kydZME8hll",
    );
  }
}
