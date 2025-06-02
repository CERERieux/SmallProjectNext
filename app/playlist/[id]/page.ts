import { notFound, redirect } from "next/navigation";

interface PlaylistPageParams {
  params: { id: string };
}

const PLAYLISTS = [
  "https://www.youtube.com/playlist?list=PLwMOB9Os2H-EhfJraPlKdwjRG9zUzgIW0",
  "https://www.youtube.com/playlist?list=PLwMOB9Os2H-HAZOY9cYVye0kydZME8hll",
  "https://www.youtube.com/playlist?list=PLwMOB9Os2H-GRbukjARnAZ471I-pzeCCY",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/playlist?list=PLwMOB9Os2H-Fnh-J6cdWRC9jCkyN60jHE",
];

export default function PlaylistPage({ params }: PlaylistPageParams) {
  const { id } = params;
  const playlist = Number(id);
  if (playlist < 1 || playlist > 5) {
    notFound();
  }
  redirect(PLAYLISTS[playlist - 1]);
}
