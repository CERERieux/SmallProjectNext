import { notFound, redirect } from "next/navigation";

interface PlaylistPageParams {
  params: { id: string };
}

const PLAYLISTS = [
  "https://www.youtube.com/playlist?list=PLwMOB9Os2H-EhfJraPlKdwjRG9zUzgIW0",
  "https://www.youtube.com/playlist?list=PLwMOB9Os2H-HAZOY9cYVye0kydZME8hll",
  "https://www.youtube.com/playlist?list=PLwMOB9Os2H-GRbukjARnAZ471I-pzeCCY",
];

export default function PlaylistPage({ params }: PlaylistPageParams) {
  const { id } = params;
  const playlist = Number(id);
  if (playlist < 1 || playlist > 3) {
    notFound();
  }
  redirect(PLAYLISTS[playlist - 1]);
}
