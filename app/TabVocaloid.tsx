import { TabsContent } from "@/components/ui/tabs";
import Link from "next/link";

export default function TabVocaloid() {
  return (
    <TabsContent
      value="vocaloid"
      className={`flex h-[470px] flex-col gap-8 rounded-md bg-white/50 px-8 py-6 text-sm data-[state=inactive]:hidden dark:bg-transparent/40 dark:backdrop-blur-sm [&_p]:whitespace-pre-wrap`}
    >
      <p>
        {`Last year I did a playlist with 65 Vocaloid songs. 
Thanks to Project Sekai, I wanted to revisit my old playlist and felt like picking some out there to share.
I thought about sharing more Vocaloid songs in a list here but I think if I do that, it would be better if I add them to the playlist.
Right now I prefer to just share it as I did it at that time. `}
      </p>
      <p className="self-center">
        You can look at this in the next{" "}
        <a
          href={"/playlist/1"}
          className="text-blue-400 underline dark:text-yellow-400"
          target="_blank"
          rel="noreferrer noopener"
        >
          Youtube Playlist!
        </a>
      </p>
      <p>{`And I did a second playlist!
Here I dump all the songs I share in my profile of that game, this way I know what I have shared. I don't know how many songs I’ll share through my profile but still growing slowly.
(Likely would be bigger if I wouldn’t forget to update it each 3-4 days instead of each week lol And maybe some songs will overlap with the other playlists...)
`}</p>
      <p className="self-center">
        You can look at the{" "}
        <a
          href={"/playlist/2"}
          className="text-blue-400 underline dark:text-yellow-400"
          target="_blank"
          rel="noreferrer noopener"
        >
          second playlist here.
        </a>
      </p>
      <p>{`(And as a side note:
Something that makes me laugh about Project Sekai is, despite listening to Vocaloid for a long time, most of the time when a song is added I’m like “What is this? I don’t know it”, then I see the song is popular and I feel like I'm under a rock hahaha
At the same time, most of the songs I know probably won’t be added, but I’m happy that I can keep discovering new songs thanks to this game. I like most of the songs in the game and some have turned into my favorites (^-^) )
`}</p>
    </TabsContent>
  );
}
