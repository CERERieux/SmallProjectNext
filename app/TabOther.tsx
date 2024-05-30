import { TabsContent } from "@/components/ui/tabs";

export default function TabOther() {
  return (
    <TabsContent
      value="other"
      className={`flex h-[470px] flex-col gap-10 rounded-md bg-white/50 px-8 py-6 text-sm data-[state=inactive]:hidden dark:bg-transparent/40 dark:backdrop-blur-sm [&_p]:whitespace-pre-wrap`}
    >
      <p>{`This tab is to share music from other stuff I like
Instead of trying to fill this with text or a list, better I do and share another playlist with songs to show more about it.
Maybe I forget to add stuff to this one but I think this way is more fun or quick!`}</p>
      <p className="self-center">
        You can look at the{" "}
        <a
          href={"/playlist/1"}
          className="text-blue-400 underline dark:text-yellow-400"
          target="_blank"
          rel="noreferrer noopener"
        >
          third playlist here.
        </a>
      </p>
      <p>{`(Also, not necessarily I know much about the thing I put in the playlist, maybe I put it because I liked the song or I played/watched that thing a while ago and right now I don’t remember much :) 
And a few songs from the 1st tab are here)`}</p>
      <p>{`If you listened to any playlist or just read what was in these tabs, thanks for your time. (^-^)
I hope you could enjoy 1 song from those 3 playlists, if not, well, better luck next time haha.
`}</p>
    </TabsContent>
  );
}
