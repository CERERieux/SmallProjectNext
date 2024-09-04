"use client";
import { useEffect, useState } from "react";
import ImageContainer from "./ImageContainer";
import AsideContainer from "./AsideContainer";
import Button from "../ui/Button";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { shadowIntoLight } from "../ui/fonts";

const IMAGE_DATA = {
  1: {
    imgName: "drawing1.webp",
    alt: "Hat Kid from A Hat in Time.",
    width: 800,
    height: 600,
    description: `I started to draw on 12 May of 2022.\n
I followed 2 tutorials on the Clip Paint Studio page, I drew this and a cat.
This is my 1st drawing I did on PC, in high school I bought a tablet and never used it until that day haha (It’s a Wacom Intuos cth-480)

Around this time I was playing A Hat in Time and I wanted to do something. I had in mind an emote for Discord but I felt drawing on a tablet was hard so I gave up on that idea but I finished it.
I struggled to do this but I liked it :)
`,
  },
  2: {
    imgName: "drawing4.webp",
    alt: "Apollo Justice from Ace Attorney.",
    width: 724,
    height: 1023,
    description: `At the start of June I did my 4th drawing :D 
It took me like 4 days.

I wanted to do more drawings about things I like and I picked Apollo. I only played the 1st Ace Attorney from case 1 to 3 (I should finish it someday), the 5th one and I watched the 4th from gameplays when I was in middle school.

I really struggled with the arms and hands, it was already hard to do something and the crossed arms pose destroyed me… But somehow I finished and I thought it was ok when I finished 
(But at times when I look at my drawings, I can’t avoid but laugh a bit for the hands hahaha)
`,
  },
  3: {
    imgName: "drawing5.webp",
    alt: "Hu Tao from Genshin Impact.",
    width: 724,
    height: 1023,
    description: `After finishing that, a person who I used to talk to recommended that I draw this character
(Because I asked who to draw)
I took 4-5 days to finish this one.

I have never played Genshin and probably never will (and probably most of gachas due lack of time), I already struggle to make space for stuff I’m interested in :(
I didn’t try it on release because my phone and PC aren't good enough so I skipped it heh

I liked how it looked and I thought it was ok, just a bit hard to draw for the details since I was starting. I don’t know what she does but I thought this pose would be cute.
`,
  },
  4: {
    imgName: "drawing8.webp",
    alt: "Sengoku Nadeko from Monogatari Series.",
    width: 724,
    height: 1023,
    description: `I did this in mid July, it took me 2-3 days.
It’s my 8th drawing and the 2nd time I tried to draw Nadeko :)

I wanted to do a better drawing and try new stuff with the hands, I thought of her “praying”. I tried to add tears but I failed and decided to remove those.
I don’t know why I did the head like that but later I started to not make that error again, I think it would look better with the head change.
I tried to do it but I would have to change a lot of stuff since I already put color and stuff so I left it like this.

I like Monogatari Series (and it made me cry a lot a few times) ^^
(I know the continuation is going to air soon but I’m going to wait, I’m watching other stuff right now)
`,
  },
  5: {
    imgName: "drawing10.webp",
    alt: "OC of a friend from Monster Hunter Rise for birthday.",
    width: 1360,
    height: 962,
    description: `This was my 10th drawing.
It took me 12 days, since it was a gift to a friend I used to appreciate a lot, I took more time than usual to ensure a better result.

I had to fix a lot of stuff here and there.
Here I started to only put colors when the line art actually looks ok to proceed, because I had to fix it even with color and was a bit of a pain haha.
It was the most “complex” drawing I did at that point, not only was the person, I had to add 2 cats and try to do a better background. But it was really fun to do :)

It’s based on their Monster Hunter Rise character.
I tried to 100% the game but it takes a lot of time and playing alone at a long pace, the grind starts to feel a bit dull. But I had a lot of fun in Rise/Sunbreak ^^
`,
  },
  6: {
    imgName: "drawing11.webp",
    alt: "Aubrey from OMORI.",
    width: 724,
    height: 1023,
    description: `At the start of September, I did my 11th drawing! :)
I took 4 days to finish this one.

I wanted to keep improving on poses like crossed arms and hugs so I put Aubrey hugging a rabbit plushie, also I wanted to see her smiling. For some reason I ended up doing this too wide and I realized too late, well, I realized when I finished hahaha

I started to realize that I focus too much in small parts and not too much in the whole drawing, mostly because I spent too much time zooming in on the part I was working on, which is funny because I read about it and my mind didn’t learn about it until this drawing.
Remember to have references and put it in a place you can see at times. And started to think I’m bad at backgrounds, I thought this one looks better without it…

I finished OMORI and I wanted to do a drawing that included everyone but I thought I would never finish it, then decided to only do this one.
That game is an experience, I love it for a variety of reasons.
Later that month I did the 100% and it was really good to see all the game :)
`,
  },
  7: {
    imgName: "drawing14.webp",
    alt: "Sui from Granblue Fantasy.",
    width: 1360,
    height: 962,
    description: `This drawing…
I started at the end of October and forced myself to finish it before the year ended.
I finished on 30th of December haha, I could finish it on time ^^

It’s Sui from Granblue Fantasy!
I really liked the event story where she appears. I liked it so much that I wanted to draw her. 

I wanted to try a full body drawing or try to make the character smaller and fit more of it. It was complicated because it was the 1st time I drew the parts below the torso and it was hard to imagine the pose since most of the references I could find didn’t match what I wanted. I think I drew the legs smaller than I should so it looks a bit weird. 
Also it was the 1st time I drew an instrument, all was challenging. The wood texture and other stuff. Also I did try to make a more complicated background, which doesn't look as I wanted but I tried.

I took a lot of time because a lot of stuff was happening around that time...
I did finish the line art before I took that long pause of almost 2 months so I only needed to color it.
Despite all this, I had fun when I returned to finish it :)
`,
  },
  8: {
    imgName: "drawing15.webp",
    alt: "Sketches of Yoisaki Kanade from Project Sekai.",
    width: 724,
    height: 1023,
    description: `After that long pause I couldn’t do much, I forgot how to draw haha
Using the pen felt weird like at the start of my “journey”, and before the pause, I was drawing less and less...

I was already playing Project Sekai and looking at fan art from time to time, so I thought in doing 1 drawing.
But first I needed to feel good again at drawing, I started to doodle at the start of January. 
I set the goal of doing a daily doodle, or filling a white paper of small drawings.

This was the 1st day.
`,
  },
  9: {
    imgName: "drawing19.webp",
    alt: "Sketches of Hoshino Ichika from Project Sekai.",
    width: 724,
    height: 1023,
    description: `This is day 5, I started to add color slowly and trying to be more conscious about how and why it looks like it looks.
(I decided to put the colorless version)

I used the cards as reference and tried to copy them just by looking.
`,
  },
  10: {
    imgName: "drawing24.webp",
    alt: "Sketches of Azusawa Kohane from Project Sekai.",
    width: 724,
    height: 1023,
    description: `Day 10.
For some reason I started to use more white space and couldn’t make them smaller, I felt weird trying to do small drawings and eventually I only could do big…

I don’t know why, I just kept moving my hands. The color I added was quick and only to see if the drawing is ok. Sometimes the line art looks good but when color is added, you can see where it’s weird.

The pause helped to forget some bad habits and to understand some stuff better, so it wasn’t too bad.
`,
  },
  11: {
    imgName: "drawing36.webp",
    alt: "Kanade with twin tails and school uniform waiting for noodles",
    width: 724,
    height: 1023,
    description: `I did this on day 22 :)

It was already the start of February. Between those 12 days I traced some cards a bit to understand better the lines of the face since I was having a bit of trouble, somehow it helped my brain and started to do better heads without tracing.

After keep doing little stuff for almost a month, I wanted to try again doing single drawings as before, and I started with Kanade, I wanted to try doing twintails so I thought of this scenario.
(That day I thought of Saki playing with Kanade's hair while she waited for her noodles)
`,
  },
  12: {
    imgName: "drawing40.webp",
    alt: "Drawing for Kanade birthday.",
    width: 724,
    height: 1023,
    description: `“Guess what. It’s the start of February, Kanade's birthday is close” 
I thought 2 days before 10th.

I rushed a drawing, my 1st full drawing, like I did months ago. For all the days I doodled around I could be faster, usually I took 4 days, now only 2 which was good to feel.
“I'm still bad at doing backgrounds so I’m glad the Empty Sekai is that empty so it’s “easier” ” 
But I still did a bad background lol
(Good thing the colorful paper and balloons are there to cover that hah)

I already had my Twitter art account opened, I uploaded a very few drawings and never put a text or hashtag until I started to share the ones from this game.
With this specific drawing I decided to use the hashtags and try to be visible. Somehow this was my most liked drawing with 4 likes :D (and the 1st one in get a like)

It felt weird if I’m honest, the idea that someone that I don’t know liked what I did, felt nice but strange… I didn’t think much about it outside that day but enjoyed the feeling.
And I started to really like what I was doing, I felt I was improving in a good direction, I used this one as my pfp for some days.`,
  },
  13: {
    imgName: "drawing41.webp",
    alt: "Broken reflection of Asahina Mafuyu.",
    width: 724,
    height: 1023,
    description: `The last drawing gave me confidence to try more “complex” drawings or try again doing constantly full drawings.

After a little rest I did the next drawing, this took me 4 days and if I count all the drawings and doodles I did until that day, this should be the 41st.
I wanted to do a broken mirror since I saw a tutorial of how to do 1 and I thought in Mafuyu so I mixed them.

I had trouble coloring her hair, I rarely thought about it and since her hair isn’t that simple, I couldn’t do a good job there. 
Also, when I finished, I thought it can be confusing to enjoy it at first glance or don’t send a strong message or a clear one. From this one I tried to do better at expressing what I wanted but I think I failed. But I was happy to see the result, I liked what I did.
`,
  },
  14: {
    imgName: "drawing42.webp",
    alt: "Kohane listening to music in the hallway.",
    width: 724,
    height: 1023,
    description: `My 42nd drawing.
I started to take 4 days as before.

I started to realize that I make the head bigger than the body, so I tried to make it smaller.
I wanted to draw Kohane humming while enjoying her music, so I did this. Later I thought the pose it’s weird or I haven’t seen someone walking while grabbing their phone like this so maybe it’s a bit strange.
(And maybe wireless earphones would be better now that I think about it...)

Also, for me the point of this drawing was to try to do a better background, a bad bg can make the whole drawing worse so I wanted to get better at it while I keep practicing characters.
I think it was better than the past ones, maybe if I did a better job at the books, would look better.
`,
  },
  15: {
    imgName: "drawing43.webp",
    alt: "Kanade Goodbye Declaration cover.",
    width: 1360,
    height: 962,
    description: `The 43rd drawing.
I wanted to do a simple drawing so I just did Kanade doing the Goodbye Declaration pose, also I was listening to the song and thought this.

I didn’t understand the pose until later when I had to fix the whole arm that goes behind the head lol
I couldn’t draw the pose correctly but I ended with something ok.
Once I did the base, I started to try to understand the shadows better since I struggle with it a lot in the clothes. I always ask myself “Why does it go like that? I don’t understand despite it looks good”

(Recently, even if I don’t draw, I have been putting more attention to it and while I think now I could do better shadows, I still think some shadows don’t make sense even if I see those in real life but maybe I’m just dumb.)

I think I did a good job with the jacket but no with the hand behind the head, though I didn’t move the drawing more because I couldn’t make it better so I moved on to a new one.
`,
  },
  16: {
    imgName: "drawing44.webp",
    alt: "Ichika and her cactus art.",
    width: 724,
    height: 1023,
    description: `As the third to last, my 44th drawing. I took 5 days
This is my favorite one and I feel is my best one ^^

It was already March and this is a continuation/”remake” of a doodle I did in the month I was “practicing”.
I thought in a scenario where the school asks the students to draw on a canvas something they like. Miku would be the pick here but at that time I read the dialog where Ichika shows the photo of her cactus to Shiho and for that reason I pick the cactus.

I wanted to try doing a more happy expression and I feel it was a good result. Maybe the background isn’t that good and the rendering can be done better, but I'm really happy with this one :) 

(I thought of doing this as a series and have a reason to draw all the characters but I never did it, but I think it could be good)
`,
  },
  17: {
    imgName: "drawing44_2.webp",
    alt: "Ichika holding a canvas while staring you.",
    width: 724,
    height: 1023,
    description: `It’s funny to see that if I remove the bright from that drawing, can look yandere-ish haha
So that extra day I took was to just remove elements and move the drawing around to be able to use it as pfp if I feel it one day

I also thought of putting the paint in her hand as red paint but I thought it was too much effort for something like this or would be better to do another drawing if I wanted to keep going with the idea.
`,
  },
  18: {
    imgName: "drawing45.webp",
    alt: "Kanade running away from Mafuyu.",
    width: 724,
    height: 1023,
    description: `As the second to last, my 45th drawing

I wanted to try to do something in “motion” or add a bit of perspective and I remembered the N25 Setsubun dialog where Kanade can’t run anymore.
I thought of a continuation where the excuse is to make Kanade do exercise and a good place to run is the Empty Sekai.

I think it is good as the 1st try doing this kind of drawing, could be done a lot better but as a starter I’m happy with it. Also tried another new expression which is fear and had a lot of fun doing this one just for the idea of Mafuyu chasing Kanade.
`,
  },
  19: {
    imgName: "drawing45_2.webp",
    alt: "Ena, Mizuki and N25 Miku reaction to last image.",
    width: 561,
    height: 805,
    description: `I added the rest of N25 in the background and I put it here to make it visible since the quality of the image is low.

Angry Ena, Laughing Mizuki and Happy Miku.
`,
  },
  20: {
    imgName: "drawing46.webp",
    alt: "Mizuki watching anime.",
    width: 1360,
    height: 962,
    description: `And as for my last drawing and the 46th, it’s Mizuki watching anime!
It took 5 days to finish it :) (Near the end of March)

This time I wanted to try night illumination again and do more N25 drawings. This came to my mind because of the normal seasonal lines and also I wanted to do a joyful expression.

It was fun to do, I struggled with the hands and the couch position. I messed up the skirt flow and I realized late when I was coloring the pattern on it… I don’t know why I did the back hair like that and it was difficult to do the whole hair. But this time I think the background is good enough or I felt good with it.

Honestly, I didn’t think that this would be my last drawing, I still had like 3 “sketches” I wanted to do, but after this one, I felt good with what I have done until that point. It is not the best but I felt proud of my results and I still am :) 

After that I decided to continue learning programming since I felt I could keep going with it.
One day I'll go back to drawing, I still want to and I want to learn other stuff but right now I still have to do other stuff

Thank you for your time, whether you read all this or just looked quickly through all this, have a nice day!
`,
  },
};

export default function CarrouselContainer() {
  const [viewGallery, setViewGallery] = useState(false);
  const [carrouselIndex, setCarrouselIndex] =
    useState<keyof typeof IMAGE_DATA>(1);
  const [image, setImage] = useState({
    imgName: "drawing1.webp",
    alt: "Hat Kid from A Hat in Time.",
    width: 800,
    height: 600,
  });

  useEffect(() => {
    setImage({
      imgName: IMAGE_DATA[carrouselIndex].imgName,
      alt: IMAGE_DATA[carrouselIndex].alt,
      width: IMAGE_DATA[carrouselIndex].width,
      height: IMAGE_DATA[carrouselIndex].height,
    });
  }, [carrouselIndex]);

  const handleCarrousel = (numberToAdd: number) => {
    if (carrouselIndex + numberToAdd < 1) setCarrouselIndex(20);
    else if (carrouselIndex + numberToAdd > 20) setCarrouselIndex(1);
    else {
      const newIndex = (carrouselIndex +
        numberToAdd) as keyof typeof IMAGE_DATA;
      setCarrouselIndex(newIndex);
    }
  };

  const handleViewGallery = () => {
    setViewGallery(!viewGallery);
  };

  return viewGallery ? (
    <>
      <button
        onClick={handleViewGallery}
        className="absolute left-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all hover:scale-105 hover:bg-red-600 active:bg-white active:text-black"
      >
        <XMarkIcon className="w-7" />
      </button>
      <ImageContainer data={image} handleCarrousel={handleCarrousel} />
      <AsideContainer description={IMAGE_DATA[carrouselIndex].description} />
    </>
  ) : (
    <article
      className={`flex min-h-screen w-full flex-col items-center gap-8 px-8 py-4 ${shadowIntoLight.className}`}
    >
      <h2 className={`text-center text-4xl`}>Drawing gallery</h2>
      <div className="flex flex-col gap-6 rounded-md bg-white/50 p-4 shadow-md dark:bg-transparent/40 dark:shadow-black/80 dark:backdrop-blur-sm md:[&_p]:w-[700px] md:[&_p]:text-lg">
        <p>
          Here I want to show some of my drawings I did in 2022 and 2023 with
          some commentary about them ^^
        </p>
        <p>
          Maybe these aren&apos;t great but I liked my progress and I&apos;m
          happy with the last ones At some point I uploaded those to Twitter but
          later I deleted my account haha (Now only they live on my PC and here
          lol)
        </p>
        <p>
          If the image feels blurry or the quality is kind of bad, it&apos;s
          because I rescaled most of those to 25% and saved it as “webp” to make
          them light, so it doesn&apos;t consume too much bandwidth (I&apos;m
          using a free host plan and for it, this site has a limit in bandwidth,
          later I&apos;ll see if I can upscale those a little bit more but for
          now I&apos;ll leave them like this)
        </p>
        <p>
          To start seeing my drawing, click the button below :) <br /> (If you
          don&apos;t see the button, it&apos;s because your screen it&apos;s too
          small to show the images in a good way, in my opinion. Use a screen
          with a min-width of 1024px preferably.)
        </p>
      </div>
      <Button
        color="bg-lime-300 hover:bg-lime-500 active:bg-blue-300 hidden lg:inline"
        extraStyles="border-none shadow-lg shadow-black/20 hover:scale-105 hover:shadow-lime-800/40 text-lime-950 active:shadow-none dark:shadow-lime-950/70 dark:hover:shadow-lime-500/30"
        onClick={handleViewGallery}
        xSize="w-40"
      >
        View Gallery
      </Button>
    </article>
  );
}
