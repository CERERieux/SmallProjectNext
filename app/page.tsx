import { Metadata } from "next";
import { dosis } from "./ui/fonts";
import TabsInfo from "./TabsInfo";
import HeaderApp from "./HeaderApp";
import GalleryButton from "./ui/GalleryButton";
import CommentsButton from "./ui/CommentsButton";
import NavMainPage from "./ui/NavMainPage";

export const metadata: Metadata = {
  title: "Welcome to my page!",
  description: "A site I made to learn Next.js where I share some stuff!",
};

export default function Home() {
  return (
    <main className={dosis.className}>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:8rem_8rem] dark:bg-slate-900"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 flex min-h-screen flex-col items-center gap-20 overflow-y-auto bg-[radial-gradient(circle_200px_at_0%_50%,#45d4,transparent),radial-gradient(circle_250px_at_100%_60%,#0ca4,transparent),radial-gradient(circle_300px_at_30%_0%,#6CCB2044,transparent),radial-gradient(circle_150px_at_20%_80%,#ee116639,transparent),radial-gradient(circle_200px_at_75%_15%,#ff99002a,transparent),radial-gradient(circle_250px_at_60%_85%,#88449940,transparent)] px-10 pb-8 dark:text-slate-100">
        <NavMainPage />
        <HeaderApp />
        <article className="flex flex-col items-center justify-center gap-4 rounded-md bg-white/50 p-6 lg:w-[800px] dark:bg-transparent/40 dark:backdrop-blur-sm [&_p]:whitespace-pre-wrap [&_p]:text-lg">
          <h2 className="text-center text-3xl text-red-500">Why I did this?</h2>
          <p>
            {`This is a mini project I started on May 21st, I wanted`}{" "}
            <span className="line-through">and needed</span>{" "}
            {`to learn Next.js and here I am.
I had in mind to do a page where I could code the classic Create, Read, Update and Delete to learn how this framework works.
`}
          </p>
          <p>
            {`Due to the date I put on myself to finish (before May 30th), originally I couldn’t add much beyond the comment section. But I decided to share a bit of myself in the Gallery!
It’s a “gallery” that includes some of my drawings I did in 2022-2023 with some notes I added. Feel free to check it out but don’t expect good art from there.
`}
          </p>
          <p>
            {`And I decided to add a section that includes some songs that I would like to share below this block. 
Thanks for checking out my page and feel free to look around this little place originally I did in a few days!
Maybe in the next few months I’ll start to modify this to fit a bit of my game development journey here, such as my blog or something like that since I want to make this my personal website.
`}
          </p>
          <p>
            {`You can check the other places through the navigation menu on the top or clicking in the buttons below this section.
`}
          </p>
        </article>
        <div className="flex flex-col items-center justify-center gap-10 sm:flex-row lg:w-[800px]">
          <GalleryButton />
          <CommentsButton />
        </div>
        <TabsInfo />
        <p className="whitespace-pre-wrap rounded-lg bg-white/40 px-6 py-2 text-center text-sm dark:bg-transparent/40 dark:backdrop-blur-sm">
          {`(I spent more time doing the content of the page than the functionality...)\nBase backgrounds were made by`}{" "}
          <a
            href={"https://bg.ibelick.com/"}
            className="text-blue-400 underline dark:text-yellow-400"
            target="_blank"
            rel="noreferrer noopener"
          >
            Ibelick
          </a>
          !
        </p>
      </div>
    </main>
  );
}
