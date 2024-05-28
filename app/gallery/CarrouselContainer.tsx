"use client";
import { useEffect, useState } from "react";
import ImageContainer from "./ImageContainer";
import AsideContainer from "./AsideContainer";

const IMAGE_DATA = {
  1: {
    imgName: "drawing1.webp",
    alt: "Hat Kid from A Hat in Time.",
    width: 800,
    height: 600,
    description: `I started to draw on 12 May of 2022.\n
I followed 2 tutorials on the Clip Paint Studio page, I drew this and a cat.
This is my 1st drawing I did on PC, in high school I bought a tablet and never used it until that day haha (It’s a Wacom intuos cth-480)

Around this time I was playing A Hat in Time so I wanted to do something. I had in mind an emote for Discord but I felt drawing on a tablet was hard so I gave up on that idea but I finished it.
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

I wanted to do more drawings about things I liked so I picked Apollo. I only played the 1st Ace Attorney from case 1 to 3 (I should finish it someday), the 5th one and I watched the 4th from gameplays when I was in middle school.

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

I have never played Genshin and probably never will, I already struggle to make space for stuff I’m interested in and my backlog is long so I don’t have time :(
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
It’s my 8th drawing and the 2nd time I tried to draw Nadeko. 

I like her and I can relate to her.
I wanted to do a better drawing and try new stuff with the hands, so I thought of her praying. I tried to add tears but I failed and decided to remove those.
I don’t know why I did the head like that but later I started to not make that error again, I think it would look better with the head change.
I tried to do it but I would have to change a lot of stuff since I already put color and stuff so I left it like this.

I don’t want to say much aside I like Monogatari Series and it made me cry a lot seeing the stories. ^^
(I know the continuation is going to air soon but I’m going to wait until it’s all out and I’m watching other stuff right now.)
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

It’s based on their Monster Hunter Rise character, we used to play it, not much but it was really fun.
I tried to 100% the game but it takes a lot of time and playing alone at a long pace, the grind starts to feel a bit dull. But I had a lot of fun in Rise/Sunbreak ^^

(I know this is a personal gift but I show it because I really like it. Sadly now we aren’t friends and probably never will know more about them but this was a fun drawing)
`,
  },
  6: {
    imgName: "drawing11.webp",
    alt: "Aubrey from OMORI.",
    width: 724,
    height: 1023,
    description: `At the start of September, I did my 11th drawing! :D 
I took 4 days to finish this one.

I wanted to keep improving on poses like crossed arms and hugs so I put Aubrey hugging a rabbit plushie, also I only wanted to see her smile so I thought about this. For some reason I ended up doing this too wide and I realized too late, well, I realized when I finished hahaha.

I started to realize that I focus too much in small parts and not too much in the whole drawing, mostly because I spent too much time zooming in on the part I was working on so I realized late, which is funny because I read about it and my mind didn’t learn about it until this drawing.
Remember to have references and put it in a place you can see at times. And started to think I’m bad at backgrounds, I thought this one looks better without it…

I finished OMORI and I wanted to do a drawing. I wanted to do a drawing that included everyone but I thought I would never finish it.
That game is an experience, I love it for a variety of reasons. And also made me cry lol
Later that month I did the 100% and it was really good to see all the game. The guide I followed was really good. :)

`,
  },
  7: {
    imgName: "drawing14.webp",
    alt: "Sui from Granblue Fantasy.",
    width: 1360,
    height: 962,
    description: `This drawing…
I started at the end of October and forced myself to finish it before the year ended, so I finished on 30th of December haha, I could finish it on time :D 

It’s Sui from Granblue Fantasy!
I really like the event story where she appears. I liked it so much that I wanted to draw her quickly. 

I wanted to try a full body drawing or try to make the character smaller and fit more of it. It was complicated because it was the 1st time I drew the parts below the torso and it was hard to imagine the pose since most of the references I could find didn’t match what I wanted. I think I drew the legs smaller than I should so it looks a bit weird. 
Also it was the 1st time I drew an instrument, so this was a challenging one. The wood texture and other stuff. Also I did try to make a more complicated background, which doesn't look as I wanted but I tried.

I took a lot of time because a lot of stuff was happening around that time...
I did finish the line art before I took that long pause of almost 2 months so I only needed to color it.
Despite all this, I had fun when I returned to finish it. ^^
`,
  },
  8: {
    imgName: "drawing15.webp",
    alt: "Sketches of Yoisaki Kanade from Project Sekai.",
    width: 724,
    height: 1023,
    description: `After that long pause I couldn’t do much, I forgot how to draw haha
Using the pen felt weird like at the start of my “journey”, and before the pause, I was drawing less and less.

I was already playing Project Sekai and looking at fan art from time to time, so I thought in doing 1 drawing.
But first I needed to feel good again at drawing, so I just started to doodle at the start of January. I set the goal of doing a daily doodle, or filling a white paper of small drawings.

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

I don’t know why but I kept moving my hands. The color I added was quick and only to see if the drawing is ok. Sometimes the line art looks good but when color is added, you can see where it’s weird.

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

After moving my hands for almost a month, I wanted to try again doing single drawings as before, so I started with Kanade, I wanted to try doing twintails so I thought of this scenario.
(That day I thought of Saki playing with Kanade's hair while she waited for her noodles)
`,
  },
  12: {
    imgName: "drawing40.webp",
    alt: "Drawing for Kanade birthday.",
    width: 724,
    height: 1023,
    description: `“Guess what. It’s the start of February so Kanade's birthday is close” 
I thought 2 days before 10th.

I rushed a drawing, my 1st full drawing, like I did months ago. For all the days I just doodled around I could be faster, usually I took 4 days, now only 2 which was good to feel.
“I'm still bad at doing backgrounds so I’m glad the Empty Sekai is that empty so it’s “easier” ” 
But I still did a bad background lol
(Good thing the colorful paper and balloons are there to cover that hah)

I already had my Twitter art account opened, I uploaded a very few drawings and never put a text or hashtag until I started to share the ones from this game.
With this specific 1 I decided to use the hashtags and try to be visible. Somehow this was my most liked drawing with 4 likes :D (and the 1st one in get a like)

It felt weird if I’m honest, the idea that someone that I don’t know liked what I did, felt nice but strange… I didn’t think much about it outside that day but enjoyed the feeling.
And I started to really like what I was doing, I felt I was improving in a good direction, I used this one as my pfp for some days.
`,
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
I just wanted to draw Kohane humming while enjoying her music, so I did this. Later I thought the pose it’s weird or I haven’t seen someone walking while grabbing their phone like this so maybe it’s a bit strange.

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
    description: ``,
  },
  17: {
    imgName: "drawing44_2.webp",
    alt: "Ichika holding a canvas while staring you.",
    width: 724,
    height: 1023,
    description: ``,
  },
  18: {
    imgName: "drawing45.webp",
    alt: "Kanade running away from Mafuyu.",
    width: 724,
    height: 1023,
    description: ``,
  },
  19: {
    imgName: "drawing45_2.webp",
    alt: "Ena, Mizuki and N25 Miku reaction to last image.",
    width: 561,
    height: 805,
    description: ``,
  },
  20: {
    imgName: "drawing46.webp",
    alt: "Mizuki watching anime.",
    width: 1360,
    height: 962,
    description: ``,
  },
};

export default function CarrouselContainer() {
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

  return (
    <>
      <ImageContainer data={image} handleCarrousel={handleCarrousel} />
      <AsideContainer description={IMAGE_DATA[carrouselIndex].description} />
    </>
  );
}
