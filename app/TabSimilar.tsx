import { TabsContent } from "@/components/ui/tabs";

export default function TabSimilar() {
  return (
    <TabsContent
      value="similar"
      className={`flex h-[470px] flex-col gap-6 rounded-md bg-white/50 px-8 py-6 text-sm data-[state=inactive]:hidden dark:bg-transparent/40 dark:backdrop-blur-sm [&_p]:whitespace-pre-wrap`}
    >
      <p>{`If you know about something that has similar vibes to any of the stuff listed in this tab, whether is a game, songs or anything in general, feel free to recommend it!
I really like those and I’m bad at searching or I struggle to find more of them.`}</p>
      <ul className="flex w-full flex-wrap items-center justify-center gap-10 text-orange-600 dark:text-pink-200">
        <li>TJ.hangneil - Apollo</li>
        <li>TJ.hangneil - Ozma</li>
        <li>TJ.hangneil x sasakure.UK - Raputa</li>
        <li>sasakure.UK - X.E.N.O</li>
        <li>ZUNTATA - Good-bye my earth</li>
        <li>ZUNTATA - Departure</li>
        <li>ZUNTATA - SELF</li>
        <li>Sibelius Violin Concerto</li>
        <li>Nagazeri - Owarimonogatari OST</li>
        <li>Kikuo - Contact, Contact, In Contact</li>
        <li>NieR Re[in]carnation: Original Soundtrack #2</li>
        <li>Three - Ego Rock</li>
        <li>Haraguchi Sasuke - Akotoba</li>
        <li>Mushihimesama Futari OST - Sky of Fragrant Souls</li>
      </ul>
      <p>{`The next ones, I like them enough to want a bit more even if I don't listen to that genre or outside that single song. 
(Most of them were recommended by other people in the old GBF crew I was part of):`}</p>
      <ul className="flex w-full flex-wrap items-center justify-center gap-10 text-cyan-700 dark:text-cyan-200">
        <li>Furihata Ai - City</li>
        <li>PSYQUI feat. mikanzil - エンドロール</li>
        <li>PSYQUI - Vital Error</li>
        <li>MikitoP - ESPR</li>
        <li>Hirose Kohmi - promise</li>
        <li>STRAWBERRY GIRLS - First Kiss</li>
        <li>Motorhead - Ace of Spades</li>
        <li>
          The Reign of Kindo - The Hero, The Saint, The Tyrant, & The Terrorist
        </li>
      </ul>
      <p>
        {" "}
        I think this is enough for both lists{" "}
        <span className="line-through">(but I could fill those more)</span>.
        Maybe give it a listen to all these songs or feel free to recommend
        anything, maybe I&apos;ll look it up. :)
      </p>
    </TabsContent>
  );
}
