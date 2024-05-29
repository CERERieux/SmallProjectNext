import Image from "next/image";
import { Metadata } from "next";
import TabsInfo from "./TabsInfo";
import HeaderApp from "./HeaderApp";

export const metadata: Metadata = {
  title: "Welcome to my page!",
  description: "A site I made to learn Next.js where I share some stuff!",
};

export default function Home() {
  return (
    <main>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:8rem_8rem] dark:bg-slate-900"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 flex min-h-screen flex-col items-center gap-20 overflow-y-auto bg-[radial-gradient(circle_200px_at_0%_50%,#45d4,transparent),radial-gradient(circle_250px_at_100%_60%,#0ca4,transparent),radial-gradient(circle_300px_at_30%_0%,#6CCB2044,transparent),radial-gradient(circle_150px_at_20%_80%,#ee116639,transparent),radial-gradient(circle_200px_at_75%_15%,#ff99002a,transparent),radial-gradient(circle_250px_at_60%_85%,#88449940,transparent)] px-10 py-8 dark:text-slate-100">
        <HeaderApp />
        <article className="flex w-[800px] flex-col items-center justify-center gap-4 rounded-md bg-white/50 p-6 dark:bg-transparent/40 dark:backdrop-blur-sm [&_p]:whitespace-pre-wrap">
          <h2 className="text-xl">Why I did this?</h2>
          <p>
            {`This is a mini project I started on May 21st, I wanted and needed to learn Next.js and here I am.
I had in mind to do a page where I could code the classic Create, Read, Update and Delete and learn how this works.
`}
          </p>
          <p>
            {`For that reason I thought of doing a page where people can send me comments about anything and I could reply back if I could (and if I want).
Also this way people can send me longer messages if they want. Mostly in the case where they can’t do it because where they find me isn’t possible (like in some games) or don’t want to add me on my socials but maybe they want to share something, this way I can read it and give them a bit more space to type the message.
(Also, if this does good enough, I could put it in my portfolio hahaha)
`}
          </p>
          <p>
            {`Due to the date I put on myself to finish (before May 30th), I couldn’t add much beyond the comment section. But I decided to share a bit of myself in the Gallery!
It’s a “gallery” that includes some of my drawings I did in 2022-2023 with some notes I added. Feel free to check it out but don’t expect good art from there.
`}
          </p>
          <p>
            {`And for now I decided to do a section that includes some songs that I would like to share and a section where if you know something similar to it, feel free to recommend it in the comments!
Maybe with the time I add more to my website or maybe not, I still need to learn other stuff so I’m able to apply to more jobs haha… And even if I can, I don’t know what to add right now.
(I could add my sudoku and shortener url I did for my portfolio here or even a simple blog but since I’m using a free plan to host this, maybe isn’t a good idea but I’ll think about it later.)
`}
          </p>
          <p>
            {`Thanks for checking out my page and feel free to look around this little place I did in a few days!
(Now I understand why Next.js is used, it’s ok but right now I feel more comfortable doing the entire apps with the classic MERN stack, maybe with time I would prefer Next but not now heh)

You can check the other places through the navigation menu on the top or clicking in the buttons below this section. :)

`}
          </p>
        </article>
        <TabsInfo />
      </div>
    </main>
  );
}
