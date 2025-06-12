"use client"
import { Heart, Camera } from "lucide-react"
import PhotoCard from "@/components/photo-card"
import { TypeAnimation } from "react-type-animation"
import './styles/vinyl.css'
import VinylPlayer from './components/VinylPlayer'

interface Photo {
  id: number
  image: string
  title: string
  text: string
  date: string
  orientation: 'portrait' | 'landscape'
}

const sections = [
  { id: "1", title: "the night we met" },
  { id: "2", title: "our first few nights of fun 👠🎸💥" },
  { id: "3", title: "big bear! 🌲🐻🏔️" },
  { id: "4", title: "halloween! 🕸️💀🖤" },
  { id: "5", title: "baby groaf. 🐱🐀💨" },
  { id: "6", title: "sick new world! 🤘🎶🌎" },
  { id: "7", title: "summer in san francisco 🌉💖🏙️" },
  { id: "8", title: "baby moaf 🧡🖤🤍" },
  { id: "9", title: "no values 💀🔥🤡" },
  { id: "10", title: "final semesters of fun 🎓🏞️🎢"},
  { id: "11", title: "puerto rico! 🏝️🌊🍹"},
  { id: "12", title: "the saddest day of my life" },
  { id: "13", title: "much love. many pics. break time! 👾 " },
  { id: "14", title: "the art you've made me 🎨💖🖼️" },
  { id: "15", title: "beautiful loafs 🐱🐀🍞" },
  { id: "16", title: "the love of my life." },
]

const photoData: Record<string, Photo[]> = {
  "1": [
    {
      id: 1,
      image: "/photos/emmy_1.jpg",
      title: "just like heaven",
      text: "emmy. i remember seeing u walk in, all bummy and such, yet still so gorgeous that you could capture the attention of an entire room, and thats exactly what you do. i knew I wanted to be your friend from this instant. walking into subatomic this night was the luckiest thing that has ever happened to me. this is a night i will never forget. but even moreso, the following day. a day which i wish i had captured on camera, yet it will still always live on in my memories. doing shrooms with you, for my first time ever! bonded us for life, and opened me to a whimsical world full of fun, love, introspection, and happiness. and it's not even the drugs. it is you. ",
      date: "groaf",
      orientation: 'portrait'
    },
  ],
  "2": [
    {
      id: 2,
      image: "/photos/fun_start.jpg",
      title: "in da clurb",
      text: "we started off our friendship having so much fun. shrooms, strip shows... you instantly caught my love with everything you wanted to do and everything you said to me. it was so fun seeing these busty ladies alongside you. you asked me bold questions and had the most fruitful reactions to anything i said and everything we saw. how could i not start to fall in love",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 3,
      image: "/photos/fun2.jpg",
      title: "fossil fuels",
      text: "i love the sinclair dino. seeing you ride it, climb it, hang from it, gave me a glimpse of how cool you are and topped off my feelings for you of what was already a magical night",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 4,
      image: "/photos/fun3.jpg",
      title: "gang",
      text: "this friend group was something special. we went off and did fun things every night, no matter the time, no matter the day. i loved dancing in middle of the street with you, it gave me a taste of all the dancing and fun we will do in the years to come",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 5,
      image: "/photos/fun4.jpg",
      title: "gooddelia",
      text: "this is one of my all time favorite pictures of you. my introduction to gooddelia. god you look like i could flick you in the nose and you'd go flying off the cliff. oh my god i wish i could do that now",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 6,
      image: "/photos/fun5.jpg",
      title: "borging and bitches",
      text: "you do not understand how much i regret this night. i should have been there with you, drinking, exploring, getting posessed. instead i was being a whore. but when i was finally there, you still showed me your love and welcomed me",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 7,
      image: "/photos/fun6.jpg",
      title: "the og trio",
      text: "i know i said gang before, but this was the real gang. me you and diego would head out any night and just do whatever, but it was fun because i was with you guys. and every moment spent among friends, was a moment closer to you",
      date: "August 2023", 
      orientation: 'landscape'
    },
    {
      id: 8,
      image: "/photos/fun_end.jpg",
      title: "subatomic couch",
      text: "i spent countless night with you on this coach. whether it was with friends, or just the two of us. idk how we convinced eachother it was platonic. always looking for excuses to sit next to eachother, sleep next to eachother, be under the same blanket, and share some of our best conversations, these are some of the beginning memories i cherish most with you",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 9,
      image: "/photos/fun8.jpg",
      title: "my first touch",
      text: "ok i'll finally admit it, i fully was trying to touch you this night. idk if thats bad. but i don't regret it. i like to think that you were accepting of it. possibly our first real, and obvious, romantic moment. my first of many concerts with you",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 10,
      image: "/photos/fun7.jpg",
      title: "our first fight",
      text: "ok i don't actually consider this a fight, particularly since you didn't even know i was mad. and it's definitely not what i remember most of this night. nevertheless, a night of fun, partying, ",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 11,
      image: "/photos/fun9.jpg",
      title: "cat crash",
      text: "another one of the moments that i think really bonded us. this day was so much fun with you, spontaneously getting on a train, skating around LA, getting our faces painted, and... my only ever car crash. i'll never forget the nerves i felt when you laid your head across my lap. u were a pretty good seatbelt",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "3": [
    {
      id: 12,
      image: "/photos/bear_start.jpg",
      title: "bumming together",
      text: "lollll look at us, sitting down hanging out with eachother, and avoiding doing labor because we knew we were better than them, you look so sexy and i love taking secret pics of you",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 13,
      image: "/photos/bear1.jpg",
      title: "always together",
      text: "i love how we, specifically me, always ignored everyone else to stay and be together with you and our friends. everyone else is out by the lake and we are here, together, smoking. even when we decide to go out, we avoid everyone else and go to a remote spot to swim. you look so cool and sexy in this picture. i also like how happy diego looks",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 14,
      image: "/photos/bear2.jpg",
      title: "sleeping with you",
      text: "this night in the tent was so fun and so magical with you. you are such a special girl emmy, i love creating memories with you, i remember you snuggling up with me in the middle of the night. and i was so happy about it, but tried to stay nonchalant. i wish i could relive moments like these with you",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 15,
      image: "/photos/bear3.jpg",
      title: "greasy trash rats",
      text: "we look so greasy and weird in this pic. but to be fair, we were high off shroomiess. i know you hate this picture, but once again, it is another night that bonded us, and i wouldn't want to forget it for the world",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 16,
      image: "/photos/bear4.jpg",
      title: "cute cute cute car hangover",
      text: "why were we always taking pictures together. we really were obsessed with eachother weren't we. i don't really like how i look in this pic but u look so fucking cute. everyone was asleep but us cos we are the only good ones around",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 17,
      image: "/photos/bear_end.jpg",
      title: "stalkerco",
      text: "why was i stalking you lol. i loved tking secret pictures of you because i really was subconsciously in love with you. you look so sexy with your strut. i will stalk you for the rest of my life",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "4": [
    {
      id: 18,
      image: "/photos/halloween1.jpg",
      title: "phoebe",
      text: "we look so fucking good together. you look so fucking cute and sexy in ur costume omg i want u to go fucking crazy on my dick like ur harley quinn.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 19,
      image: "/photos/halloween_start.jpg",
      title: "and",
      text: "i'm so glad that whoever took this picture of us took it. we look so fucking good and cool together. and like always, we are always sitting next to eachother, we really had a special friendship",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 20,
      image: "/photos/halloween_end.jpg",
      title: "harley",
      text: "omfg why do we take so many pictures with eachother. i guess we is just me. i just wanted to remember every moment i spent with you. remember when nate seluga hit on you later this night. ew...",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "5": [
    {
      id: 21,
      image: "/photos/groaf_start.jpg",
      title: "our first child",
      text: "i dont know how you convinced me to get a cat with you. you have always been an S tier manipulator and man trapper. but i'm so glad about it. you changd my life forever with this little kitty. he is so fucking cute and i cant believe i got this shit tattooed am i stupid. this thing was good. and a rat. i like how jack came with us",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 22,
      image: "/photos/groaf1.jpg",
      title: "wallfin",
      text: "why is this thing so fucking cute. why is it squished against the wall like that. this thing used to be so fucking good and cute. it also used to be scared like chete",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 23,
      image: "/photos/groaf2.jpg",
      title: "flatfin",
      text: "omg why is he so cute and dumb. why is he squishing his face against the pillow hes gonna become flat-faced like a persian kitty ",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 24,
      image: "/photos/groaf3.jpg",
      title: "vapefin",
      text: "this poor little thing got so much second hand smoke. not as bad as mango tho. and gryffin is actually good unlike mango.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 25,
      image: "/photos/groaf4.jpg",
      title: "cutefin",
      text: "look at you poking his nose. this thing was so cute i miss it",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 26,
      image: "/photos/groaf5.jpg",
      title: "sleepfin",
      text: "i love seeing you hold our child. you will be a fantastic mother emmy. he loves you so much. i wish he still acted like this",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 27,
      image: "/photos/groaf6.jpg",
      title: "yawnfin",
      text: "not to toot my own horn. but im such a good cat photographer. also this thing is a rat btw",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 28,
      image: "/photos/groaf7.jpg",
      title: "roundfin",
      text: "HEADDDDDDDDDDDDDDDDDDDDDDDDDDDDD INNNNNNNNNNNNNNNNNNNN THE CEIIIIIIIIILINNGGGGGGGGG FAAAAAAANNNNNNNNNNN",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 29,
      image: "/photos/groaf8.jpg",
      title: "vaccinefin",
      text: "i cant believe we had to drive to LA so many times just to get this little rat vaccinated. look at how hes in your lap while you drive. i'd say thats a good cat but if you look closely... look at his mouth... look at the shape its making... imagine the sound being emitted... thats badfin.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 30,
      image: "/photos/groaf9.jpg",
      title: "goopfin",
      text: "omg why does he look like that. his eyes look so fucking raw. i just know he stinks and just woke up",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 31,
      image: "/photos/groaf10.jpg",
      title: "amazingfin",
      text: "the most amazing thing about gryffin, is that he brought me closer to you. and gave me an excuse to take pictures of you that i would look at later. from the moment we got him, thinking about gryffin was an excuse to think about you",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 32,
      image: "/photos/groaf11.jpg",
      title: "modelfin",
      text: "this cat genuinely looks like a model. hes so cute and chiseled and posed so well for the camera always, if we put him in entertainment we woulda made bankkkk",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 33,
      image: "/photos/groaf12.jpg",
      title: "yodafin",
      text: "this cat is so fucking cute and weird looking. why is he standing like that. hes so good at it. why are his ears down. he looks like yoda. you are also a great cat photographer",
      date: "August 2023",  
      orientation: 'portrait'
    },
    {
      id: 34,
      image: "/photos/groaf13.jpg",
      title: "michaeljacksonfin",
      text: "look at his black gloves just like he is michael jackson. heeeheee. also take note of the belly. its full of soup",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 35,
      image: "/photos/groaf14.jpg",
      title: "squirrelfin",
      text: "he has always loved a good cat tv. hes realy small and cute. i like how he is walking towards me, towards the photo",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 36,
      image: "/photos/groaf15.jpg",
      title: "festivefin",
      text: "hes so cute in his little santa outfit. i forgot who gave us that. he is so small and you look so good with him emmy.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 37,
      image: "/photos/groaf16.jpg",
      title: "pussfin",
      text: "this thing is literally using its puss in boots cat eyes on us. its so fucking cute and he looks so sad, i wanna fucking bite his head off",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 38,
      image: "/photos/groaf17.jpg",
      title: "thugfin",
      text: "three six mafia. hes literally got so much swagger. i remember getting hella backlash on this story post because people were telling me to not let him vape. why tf would i do that. dumbasses. anyways this vape was so good tho and its how i learned to ghost",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 39,
      image: "/photos/groaf18.jpg",
      title: "snugglefin",
      text: "i love how much happiness this cat has brought you. and the moments you have shared with him. you guys are so precious together",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 40,
      image: "/photos/groaf19.jpg",
      title: "bitefin",
      text: "aside from the fact that this is a poor little thing getting a finger shoved down his throat. this is the first pic i have of us, after getting together. we are in bed together, sharing the joy of our child",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 41,
      image: "/photos/groaf20.jpg",
      title: "outsidefin",
      text: "this is the beginning of gryffout. a nightmareish phase that we will suffer the reprucussion from forever. look at how timid and small and cute he is standing at the doorway waiting for us to come back because hes too scared. future fin will be running out any chance he gets",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 42,
      image: "/photos/groaf21.jpg",
      title: "slingshotfin",
      text: "in this picture i like to imagine that gryffins ears are the posts of a slingshot and im about to sling a peble at ur nose hehe. peep us in your bed together ;)",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 43,
      image: "/photos/groaf22.jpg",
      title: "badfin",
      text: "lets take a moment to really analyze the picture. the opening of the mouth, the tilted up head, those demonic eyes. i don't even want to imagine the noise he is making. disgusting. i hate this thing",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 44,
      image: "/photos/groaf23.jpg",
      title: "rizzfin",
      text: "omg id fucking drop my pants and bend over if anyone ever looked at me like this. god hes so sexy. and look at that loaf btw. its really pristine. he used to be so good",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "6": [
    {
      id: 45,
      image: "/photos/snw_start.jpg",
      title: "las vegas road trip!",
      text: "i love long car rides with you and i can't wait to do so many more. you make me so happy and i never get bored with you. i literally watch tiktok while i drive but i never even think about it when im with you because ur presence only keeps me so entertained. you look so cute in this picture and devious. why are you always stealing my shirts",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 46,
      image: "/photos/snw1.jpg",
      title: "the master bedroom",
      text: "i'm so glad we got to share this big as bed together. lowkey this might be the first time we ever really slept in the same bed together, since we both always had roomated. even though you had a hard night this night because of ur ears i still cherish vacationing with you. remember how i used to sneak into ur room everynight and sneak into ur bed just so i could sleep with you. lol i know cheyenne hated that shit",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 47,
      image: "/photos/snw2.jpg",
      title: "rockeros",
      text: "in contention for one of our best couples photos. we look so fucking cool in this picture and eveyone that I show love it. you look so fucking sexy. my sister told me this was the first ever pic she saw of you. but i dont believe it.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 48,
      image: "/photos/snw3.jpg",
      title: "babeco and babellia",
      text: "this was on the grass right before we saw BABYMETAL. that show was so funny, i like how you carried me on ur shoulders ur so strong and sexy",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 49,
      image: "/photos/snw4.jpg",
      title: "diablo stage",
      text: "omg the diablo stage was so fucking good. lowkey, that lineup of artists and crowds might be the best concert experience of my life. apart from the fact that i lost you for a long time and i was stressed out",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 50,
      image: "/photos/snw5.jpg",
      title: "barricade warriors",
      text: "i can'tbelieve we were barricade for duster and the garden. we always manage to have so much fun together emmy and end up in the best spots. i look frickin sweaty and stinky as hell but you look so good and put together muscle mommy.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 51,
      image: "/photos/snw6.jpg",
      title: "duster loaf",
      text: "i really like how duster had that animation of the gryffin walking across the screen that was so cool. also duster was a fucking vibe after some hard knocked loose moshes",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 52,
      image: "/photos/snw7.jpg",
      title: "sexco and sexxelia",
      text: "we are so fucking good looking together. there are so many unforgettable moments that we share. and this is one of them. you were there for the best concerts of my life. i love you emmy",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 53,
      image: "/photos/snw_end.png",
      title: "fuck fuck fuck me up",
      text: "this was taken while slipknot was playing custer. they performed soooo good. i wish we were together during this but we were both doing reallllly cool things. you were climbing towers, and i surfed into the VIP section. i also cant believe i was right in front of heir of atticus and cinnanoe, they are both so bad asf",
      date: "August 2023",
      orientation: 'landscape'
    },
  ],
  "7": [
    {
      id: 54,
      image: "/photos/sf_start.jpg",
      title: "baddelia",
      text: "you started of sf summer as baddelia. you were going through one of those phases where i icked you and you hated me. this is a picture of you escaping me and trying to hide behind groaf. nevertheless, you look cute and i forgive you. i'll never stop loving you emmy",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 55,
      image: "/photos/sf1.jpg",
      title: "golden gate park",
      text: "the golden gate botanical garden was genuinely one of the coolest things you could have ever showed me and i loved that day so much. i love your willingness to do anything emmy no matter how dangerous, even though it scares me alot. you look so funny hanging off this tree it makes me want to give you a little push",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 56,
      image: "/photos/sf2.jpg",
      title: "waterfall of hearts",
      text: "ok i dont actually know what this place was called but im sure it was something like that. i love all the cool nature spots you were able to show me around north bay. i look really silly and happy in this picture and you kinda look like ur being forced to take this picture but its okay because i know you love me",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 57,
      image: "/photos/sf3.jpg",
      title: "heebee jeebes!",
      text: "i loved you showing me around petaluma and all the shops you grew up going to. you stole handcuffs from here. they have proved extremely useful since. also, look at how cute and in love we are",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 58,
      image: "/photos/sf4.jpg",
      title: "chess: extended dlc",
      text: "this is a good ass fucking groaf i like how he always plants himself in the funniest spots. he is the secret chess piece, if you have him on ur board, you win, as the opponent cannot do anything. i love how you showed me how to play chess and i loved staying at ur beautiful house all the time",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 59,
      image: "/photos/sf5.jpg",
      title: "mount davidson",
      text: "Ancient red rock formations pierce the sky like nature's skyscrapers. The desert holds secrets of millennia past.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 60,
      image: "/photos/sf6.jpg",
      title: "step on me mommy",
      text: "i liked being buried and trapped under the sand. beach days are always so fun with you. ur toes look really good here and i like when you step on me",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 61,
      image: "/photos/sf7.jpg",
      title: "my flower queen",
      text: "as i have mentioned, one of the coolest places ive ever been, and im so happy i got to experience with you. you are so beautiful emmy and show me so many cool things. like how to make a flower crown.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 62,
      image: "/photos/sf8.jpg",
      title: "indie movie skater girl",
      text: "this pic literally looks straight out of a movie of some fucking cool skater girl. you look so happy here. i love bodhi. he had so much fun chasing around dogs. also ur phone looks so weird it looks like you have a blue and green case on but its just the reflection lolz",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 63,
      image: "/photos/sf9.jpg",
      title: "six flags discovery kingdom",
      text: "we did so many fun things together emmy every weekend. i love going to amusement parks with you they are so fun. you look so thicc in this pic omg idk why but i love it ur so sex",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 64,
      image: "/photos/sf10.jpg",
      title: "car show and good asf tacos",
      text: "even when there was nothing to do, you always found something to take us to. i rememebr having really really good tacos here. there were also some cool ass vintage cars. i hope one day to have a car like that, unfortunately this is also the day ur mom got hurt. sadge. but she made an amazing recovery!",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 65,
      image: "/photos/sf11.jpg",
      title: "cats at the park cats at the park",
      text: "you always convinced me to do things i didn't want to do, and i always had so much fun doing it. gryffins at the park are always so good, even tho getting there always sounds like a nightmare. i really loved the chinese lady and her baby son who came up to gryffin and just started saying miao miao miao",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 66,
      image: "/photos/sf12.jpg",
      title: "the valencia room",
      text: "oh how i miss nights out in the city with you. this photobooth was so fun. i love the valencia room. i'm so happy you were able to sneak in there lol. i think this is also where you introduced me to a shirley temple",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 67,
      image: "/photos/sf13.jpg",
      title: "alameda hangars rock show",
      text: "this was such a fun day and we bought and stole so much good clothes, the brown belt, the aztec shorts. you also bought this fantabulous dress, although we did have attempts to steal it lol. i bought the goated misfits shirts. and you bought your red boots! i love those boots you should wear them more. also iconic sexy pictures were taken this day",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 68,
      image: "/photos/sf14.jpg",
      title: "japannntown",
      text: "god ur so fucking cute. forgot to mention that you also stole this banger cap. you look so cute emmy. u r so good. i love exploring new cities with you",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 69,
      image: "/photos/sf15.jpg",
      title: "the mission street",
      text: "this picture is also at the valencia room but i wanted to dedicate this to the other fun ass places we did this night. like that cool shoegaze show we stumbled into, and that old famous fancy ass theatre that we snuck into where they bring you food to your seat. we also hit japantown again right after to see that weird ass movie w/ hunter schaefer and those goobers that eat their pussy juices",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 191,
      image: "/photos/sf17.jpg",
      title: "that bitch at the golden gate flower house",
      text: "i can't believe that chick talked to you like that and made my baby girl cry. i should have shot her that fucking instant. you got so boogery after it was really cute. ur a really stinky, wet, slimy, goopy little thing you know. i love you",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 70,
      image: "/photos/sf_end.jpg",
      title: "pure bliss",
      text: "i dont know if i have any picture where you look happier than you do in this picture. you look so overjoyed with your two babies in your arms. you look like ur going to cry from joy. this is a sneak peak at the section to come",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "8": [
    {
      id: 71,
      image: "/photos/moaf_start.jpg",
      title: "our first daughter",
      text: "i cannot believe you were able to baby trap me once again. i was pretty hesitant with this one. but as per usual, youu made the right choice. i love moaf so much and im so glad you carried her in your belly and brought her into our lives. its a calico kitty just like you. you are literally moaf",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 72,
      image: "/photos/moaf1.jpg",
      title: "paralyzedchete",
      text: "my first picture with chete. i was holding her downstairs while you went upstairs to go have some sweet gryffin time before we introduce moaf. he really did not like her at the start. she was literally so scared she would not move and just lay in our arms or on the bed",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 73,
      image: "/photos/moaf2.jpg",
      title: "moafchete",
      text: "this thing never really learned how to moaf correctly. she always leaves her frickin elbows out. but omg she is so cute. she loved madeleine. its kinda sad we ripped machete away from amdeleine i know it made her sad.",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 74,
      image: "/photos/moaf3.jpg",
      title: "sniffchete",
      text: "i just know shes making this face because u just farted and shes sniffing it. she looks so fricking cute",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 75,
      image: "/photos/moaf4.jpg",
      title: "soupchete",
      text: "oh my friking goodness this thing is literally so cute when it sleeps like literally its when she looks best. btw notice the tummy. take a close look. imagine poking it. its full of soup.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 76,
      image: "/photos/moaf5.jpg",
      title: "crosschete",
      text: "this is chetes first attempt at crossing her paws like a fin. she doesnt exactly have the form right, but shes doing her best",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 77,
      image: "/photos/moaf6.jpg",
      title: "roundchete",
      text: "i like how we have pics of roundfin and roundchete. why the hell does her head look like that. its literally a fucking ball. she looks so weird but cute. shes really pink. like you",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 78,
      image: "/photos/moaf7.jpg",
      title: "fetuschete",
      text: "ew why the fuck does she look like this. she literally looks like shes in the womb. i dont like it. she also looks goopy as hell. shes so small",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 79,
      image: "/photos/moaf8.jpg",
      title: "gryffchete",
      text: "when they finally started to get along sort of. she used to love fucking planting her face right i his posterior what is wrong with her",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 80,
      image: "/photos/moaf9.jpg",
      title: "boxchete",
      text: "look at these two things in the box together. why are they so good emmy. tell me. why are they so good. tell me now.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 81,
      image: "/photos/moaf10.jpg",
      title: "logchete",
      text: "she looks like a log here. i really like how shes basking in the sun. shes so cute. she is still literally this size btw. she has not grown from this size which is crazy",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 82,
      image: "/photos/moaf11.jpg",
      title: "cutechete",
      text: "now this is the epitome of cutechete. notice the squint, the paws, the pinkness. i love her so much",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 83,
      image: "/photos/moaf12.jpg",
      title: "parkchete",
      text: "machete doesnt really like being outside much. she is unlike gryffin in that way. she likes to hide and be protected by shelter. but she looks so fucking good doing that that i dont even care",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 84,
      image: "/photos/moaf_end.jpg",
      title: "goodchete",
      text: "lets take a few moments to notice why machete is good. have u noticed yet? its because she doesnt throw up or shit in the car, she just lays down and sleeps. shes so flat. shes so shlump. and shes good and she doesnt squirm. rememebr when gryffin hit her in the car. i didnt like that. we should neutralize him. she has only ever been good.",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "9": [
    {
      id: 85,
      image: "/photos/nv_start.jpg",
      title: "amoebaaa",
      text: "the adolescents are iconic and they were so good and its literally so fucking cool how no values posted you literally crowdsurfing to the fucking adolescents. god im so proud to be your boyfriend",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 86,
      image: "/photos/nv1.jpg",
      title: "we are so sexy",
      text: "this was taken on the grass right at the back of the vandals set. they were aight. im happy i got to share this moment and rest with you. we both look snatched as fuck",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 87,
      image: "/photos/nv2.jpg",
      title: "you had to be there",
      text: "sorry to rub it in your face but... suicidal tendencies was so fucking good. and i love this picture of their set. mosh was brutal tho. and at least u got to satisfy ur angsty teen self seeing FIDLAR",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 88,
      image: "/photos/nv3.jpg",
      title: "my favs",
      text: "im still surprised of how good this set was. he literally sounded so good the whole frickin time and oyu could see his pene through his tight ass leggings. i hope to one day see the video of you singing GIGANTORR",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 89,
      image: "/photos/nv4.jpg",
      title: "what we'll show our kids",
      text: "this picture of us is so amazing. i look so sexy as fuck and u look so hot and good i love when u do that evil little scrunch face. im so grateful that ixchel took this pic of us and then even sent it to me. shes a baddie fr. thank you to ur mom for allowing me to get it framed. this is a picture ill keep in my household forever",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 90,
      image: "/photos/nv_end.jpg",
      title: "the original fucking misfits",
      text: "probably the best concert of my life. doyle, danzig, the love of my life, a perfect night. i literally fucking grabbed you out of the air while you were crowdsurfing so that we could be together after i finally found you. the misfits is a core part of our relationship. us dancing to last caress out of subatomic, you seeing the posters in my room on our first days. there are few things i love more than them. but you are one of them",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "10": [
    {
      id: 91,
      image: "/photos/final_start.jpg",
      title: "unbreathable tent hotbox",
      text: "this shit was highkey fucking brutal. im so glad i had my corner pocket of air to breathe in. its funy how adrianne is here with us. its also so sad that her shit got hotboxed the next night.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 92,
      image: "/photos/final1.jpg",
      title: "sneaky sex demons",
      text: "as per usual we fucking sneak off away from everyone, because we are better than the rest. and as per usualy, we are out in nature, we need to get a little bit of action. just for the principle of it. i love when you throat my cock in public and in nature. and many more to come",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 93,
      image: "/photos/final2.jpg",
      title: "disneyland birthday bash",
      text: "i had so much fun exploring disneyland with you, and my sister, and her friends. though i hate how fucking slow they were at walking omfg. we are sch a good couple and we look so good together here. though i am upset you stole these pants from me. i like how you though so many parts of the line for the star wars ride were actually the ride",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 94,
      image: "/photos/final3.jpg",
      title: "buckbeakfin",
      text: "this fucking weird bird thing is literally crossings its paws just like a gryffin. it needs a flick on the beak",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 95,
      image: "/photos/final4.jpg",
      title: "universal and butterbeer and fun",
      text: "im so happy that you were able to experience harry potter land, and chose to do it with me over your mom hehe. i love how you joined me on family trips and always tried to connect with my family. they truly love you for that. we look so cute here omg. riding the mummy like 5 times with you was so fun",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 96,
      image: "/photos/final5.jpg",
      title: "mt baldy lodge!",
      text: "this was our valentines dinner. it was fucking bussin. i love going out to each with you so much. you look so fucking cute. i hope we have so many more valentines dinners together. i love you emmy",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 97,
      image: "/photos/final6.jpg",
      title: "goodco",
      text: "god look at how fucking cute i look. thats all there is to be said.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 98,
      image: "/photos/final7.jpg",
      title: "my girlfriend is so sexy",
      text: "you are genuinely the hottest piece of ass i have ever seen in my loaf. u r good. ur butt it good. ur titties are gooooood. i get horny just thinking about it. i love adventuring and exploring new areas with you. my favorite way to spend time with you",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 99,
      image: "/photos/final8.jpg",
      title: "forever my dance partner",
      text: "even though we are bad and need to get better, i will never not love dancing with you. you make it so fun and it is one of the ways we fell in love. btw idk how the fuck we passed this class. also, ur so fuckin cute",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 100,
      image: "/photos/final9.jpg",
      title: "you are my sunshine",
      text: "picnics with you are always the best, especially when we have to hustle for a good spot. though you do always manage to get really cold. you gotta learn to bring a jacket babe",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 101,
      image: "/photos/final10.jpg",
      title: "busssss",
      text: "omg this shit was so yummy i love how you have taught me to love fresh buratta its so fricking good. getting drunk and smoking and picnicing, what more could i ever ask for",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 102,
      image: "/photos/final11.jpg",
      title: "sluts",
      text: "ok lowkey i added in this picture even though ur not really in it just cos i looks sexy as fuck but i loved going to this show with you. you had a really good impromptu costume but the world will never really know what you were dressed as",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 103,
      image: "/photos/final12.jpg",
      title: "treefin and treealia",
      text: "you two are always climbing trees and scaring the life out of me. but you guys look so good together and i never see you guys any happier",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 104,
      image: "/photos/final13.jpg",
      title: "tanaka farms",
      text: "yayyy yummy strawberries. you look so cute in this picture. i always feel bad for adrianne for third wheeling. was the drive worth it is the question",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 105,
      image: "/photos/final14.jpg",
      title: "palm springs",
      text: "taken in the mirror right before our hike. that was my favorite hike ever btw. i just loved the vibe and views. we look so sexy together in this picture. you really always do plan the funnest days ever. i am so lucky to have you",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 106,
      image: "/photos/final15.jpg",
      title: "cold asf waterfall",
      text: "i wish i got a better pic of it but omg this place was so fun, the rock we laid on and chilled at, the waterfall itself, even though that shit was so cold. swimming behind the big rock was still fun though",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 107,
      image: "/photos/final16.jpg",
      title: "gryffin observatory",
      text: "you are so pretty. the view is also very pretty. this is a great pic. i really like going to the planeterium with you it was a cool show. and we were with our faves will and jean",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 108,
      image: "/photos/final17.jpg",
      title: "eureka with beth",
      text: "i have always loved going out to eat with you and your mom. shes so nice i love her for always inviting me and talking to me. i stan beth.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 109,
      image: "/photos/final18.jpg",
      title: "ccbdc concert",
      text: "it was fun seeing this concert. right? right? it was worth waking up early? i think so. anytime spent with you is a good time.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 110,
      image: "/photos/final19.jpg",
      title: "mater getting lucky",
      text: "please ride me the way ur riding this shit omg u look so fucking hot and sexy in this picture and i just want to rip you apart",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 111,
      image: "/photos/final20.jpg",
      title: "the best ride",
      text: "i really loved seeing ur reaction. i knew you would love it it was so fun and the pictures we got out of it were so good.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 112,
      image: "/photos/final21.jpg",
      title: "beautiful views",
      text: "look at our faces and how shocked we are by the views. it looks like we took a look at a big ass amazing groaf",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 113,
      image: "/photos/final22.jpg",
      title: "emmy and her cap",
      text: "oh my goodness u were obseessed witht his cap and it looked so good on u. ur a little aviator hiker kid like the grandpa from up when he was a boy",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 114,
      image: "/photos/final23.jpg",
      title: "monsters",
      text: "taken in the line for monsters inc, california adventure was so amazing with you emmy",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 116,
      image: "/photos/final25.jpg",
      title: "grizzly groaf graff",
      text: "my favorite ride of all time! i am so glad i was able to share it with you. even if it was a tad underwhelming. and thank you so much for riding it with multiple times even though i knew u were cold. my stache looks real good in this pic",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 117,
      image: "/photos/final26.jpg",
      title: "shark park",
      text: "why are you always fucking riding things. you are so epitome of sex. thanks for going on late night drives with me and exploration and sharing my childhood with me",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 118,
      image: "/photos/final27.jpg",
      title: "riverside adventures",
      text: "i really hate how i look in this pic but i did want to capture this moment. thank you for always planning fun activities for us. it makes me incredibly happy. you make me incredibly happy",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 119,
      image: "/photos/final28.jpg",
      title: "tios tacos",
      text: "genuinely, my favorite restaurant of all time. you find the best spots. the most beautiful restaurant ive been to and literally the best tacos ever. not to mention that one loaf thing im not even gonna get into",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 120,
      image: "/photos/final29.jpg",
      title: "the mission in",
      text: "two beautiful restaurants in one day. you really outdid yourself this day emmy. you give me everything i could ever ask for",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 121,
      image: "/photos/final30.jpg",
      title: "are u serious",
      text: "genuinely this experience with this amazing fucking kitty just sleeping on the couch where are we gonna eat?? fucking unbelievable. this thing was so good. maybe even gooder than ours",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 122,
      image: "/photos/final31.jpg",
      title: "the tripple dipper",
      text: "oh my fricking goodness i was so drunk this night it felt so good. a drunk rat is always a good rat. thank you for taking care of me baby. that triple dipper was bussing as fuck an amazing cheese pull, i wish i remembered this night better",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 123,
      image: "/photos/final32.jpg",
      title: "six flags great america",
      text: "its honestly insane how many amuseent parks we went to, disneyland, california adventure, six flags, six flags 2, universal studios. like wtf lol. its always so much fun with you emmy and i get to stand in lines staring at you all day",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 124,
      image: "/photos/final33.jpg",
      title: "an unforgettable experience",
      text: "i am so wildly lucky to have a girlfriend that wants to do the coolest things with me. you wanted to skydive ever since u were a bad little kid and im so honored that u wanted to share your first experience with me. i hope it was worth your while baby. and thank you for taking this picture",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "11": [
    {
      id: 125,
      image: "/photos/pr_start.jpg",
      title: "castillo san cristobal",
      text: "not only do you plan day trips for me, you plan entire international vacations for us. i am so grateful you brought me to puerto rico and shared these experiences with me. you light up every picture emmy",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 126,
      image: "/photos/pr1.jpg",
      title: "beach booooty",
      text: "ur so fucking sexy emmy. lets start off with that. these waters are beautiful and so fucking warm. u know i love to be warm. i had so much fun always being at the beach with you and being in the water even when we were at the threat of electrocution.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 127,
      image: "/photos/pr2.jpg",
      title: "baddie pose",
      text: "ur such a fucking baddie emmy and you make this look like the most magical beach in the world",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 128,
      image: "/photos/pr3.jpg",
      title: "double sucking",
      text: "both these drinks were so fucking yummy. i love going to nice dinners with you so much i love it so much u dont understand i think thats why ive gotten so fat. you look so fucking good and i want to lick from the bottom of those glasses to the top of ur forehead",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 129,
      image: "/photos/pr4.jpg",
      title: "roaf",
      text: "oh dont mind this... its just a roaf",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 130,
      image: "/photos/pr5.jpg",
      title: "juicy octopussy and potatoes",
      text: "you can't see it in this picture but omg your meal was so fucking good those potatoes might have been the best potatoes i had ever tasted in my life they were fucking delicious i wish i ordered what you got",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 131,
      image: "/photos/pr6.jpg",
      title: "goodco and goodelia",
      text: "someone asked for them, it wasnt me. but here is them at the airport",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 132,
      image: "/photos/pr7.jpg",
      title: "bombas",
      text: "you know what? hell ya",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 133,
      image: "/photos/pr8.jpg",
      title: "besttelia",
      text: "god ur so fucking cute emmy and ur so sweet for letting me sleep on you like this on the plane. you make my life better with every moment u are in it",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 134,
      image: "/photos/pr9.jpg",
      title: "midnight sun",
      text: "idk how the sky looked so dark blue here it was literally like midnight. wait i know. you light up the sky my love",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 135,
      image: "/photos/pr10.jpg",
      title: "one with the cats",
      text: "idk how u do it. u are the cat tamer. i think its probably because you are one. not sure gonna need some proof. your toes get so fucking good and muddy after this omg i salivate just thinking about it",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 136,
      image: "/photos/pr11.jpg",
      title: "woaf",
      text: "where do i even start on with thing. its stinky. its gross. its weird. it drools. but it made our trip so unforgettable. we became soulmates with this cat. and we found it every night. because we are good",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 137,
      image: "/photos/pr12.jpg",
      title: "mountain girl",
      text: "you are exactly the girl ive always been looking for. you blend right into nature and look so natural within it. it was so fun jumping off these rocks with you. thank you for taking me to places like this",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 138,
      image: "/photos/pr13.jpg",
      title: "i think shes good",
      text: "i'm definitely right btw",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 139,
      image: "/photos/pr14.jpg",
      title: "rocks and ropeswings",
      text: "i know i keep saying this but i cannot thank you enough for finding the coolest places to go to. my first ever rope swing. thanks to you.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 140,
      image: "/photos/pr15.jpg",
      title: "white girl seduces local island boy",
      text: "it does kinda look like that ngl. this is such a good picture of us. we are so in love",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 141,
      image: "/photos/pr16.jpg",
      title: "tsunami smash",
      text: "this was such a beautiful beach to look at, the way the huge waves smash into those rocks at the end. wasn't the best to swim in, as many people got hurt, but so beautiful",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 142,
      image: "/photos/pr17.jpg",
      title: "the real view is you",
      text: "no view could ever compare to you beauty. you are what makes all these pictures and memories beautiful",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 144,
      image: "/photos/pr19.jpg",
      title: "sword fighting",
      text: "YAY ziplining was so fricking fun. i really hate this picture of me but i did have to capture the moment. my first time ever ziplining, and of course its with you. you have introduced me to so many amazing things emmy. remember those two guys swinging their belt buckle dicks together",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 145,
      image: "/photos/pr20.jpg",
      title: "evil kitty",
      text: "you are an evil kitty why do u always look so evil. this was right before i made a fool of myself and went on the Toro roller with 5 other toddlers... anyways that shit was fun asf. also shoutout to the BLTc it was sooooo good",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 146,
      image: "/photos/pr21.jpg",
      title: "drunken snookie",
      text: "drunken cookie with my snookie. this was really good. im really glad we went. ur so goddamn cute it hurts. drunken cookie is good because it gets the rat drunk and as we have already established. a drunk rat is a good rat.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 147,
      image: "/photos/pr22.jpg",
      title: "white girl on top of the world",
      text: "you really do rule the world emmy. at least my world. this is a gorgeous picture and I can't wait to take so many more gorgeous pictures with you on all the adventures we will go on. next stop -> mexico!",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 148,
      image: "/photos/pr23.jpg",
      title: "é um sapo, é uma rã",
      text: "another contender for our best couples photo. in my opinion, this one really stands above all others. you particularly, look as beautiful as you have ever looked, with the exact amount mischief and desire in ur expression that i love. one of the most magical days of my life, a stellar view, and some bomb ass pizza",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 149,
      image: "/photos/pr24.jpg",
      title: "chocoooobarr",
      text: "look at that fuckig roaf. omg emmy i cant' get over that burger it was so amazin it was lowkey the best burger in the world. i'm so glad ou brought me to this place and we HAVE to go back. nonnegotiable. sorry.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 150,
      image: "/photos/pr25.jpg",
      title: "drunk rat in the making",
      text: "oh god. oh no. this was the beginning of a very drunk rat. a rat that emmy was not happy with. but rat enjoyed his espresso martini. he does not regret it. i know. i spoke to him. plust hes cute. and hes good. SO I DON'T KNOW WHAT ALL THE FUSS IS ABOUT.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 151,
      image: "/photos/pr26.jpg",
      title: "birdco",
      text: "me and tes birds would kinda beefed. i didnt like them. they were kinda scratchin my fucking scalp. FUCK YOU BIRDS. and they aren't even facing the camera. these are bad birds.",
      date: "August 2023",
      orientation: 'portrait'
    },  
    {
      id: 152,
      image: "/photos/pr27.jpg",
      title: "birddelia",
      text: "yet. you managed to tame the birds. they are sitting nice, proper, facing the camera. what more could you want? and the picture is symmetrical. wait maybe im just a goated photographer. anyways you look so good baby",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 153,
      image: "/photos/pr28.jpg",
      title: "el viejo y la viejita",
      text: "and this one right here. this is the final contender for our best couple photos. just look at us. who wouldn't want to fuck us. you look so gorgeous and flawless and beautiful and kind and soft and ugh. just everything about you is right. and me? well thats a roaf. you just caught it on one of its good days",
      date: "August 2023",
      orientation: 'landscape'
    },
  ],
  "12": [
    {
      id: 154,
      image: "/photos/end.jpg",
      title: "The Saddest Day of My Life",
      text: "i can't even begin to describe the sorrow that our parting has caused me. i know i may not show it, because sometimes i am slow on text, and sometimes i'm a little down and don't show you the love that you show me. but i promise you emmy, i have died inside and missed you for every single moment since you left me. but hey, at least we look really happy in this picture. i know, one day we will reunite, and it will be like we never left eachother. i love you emmy",
      date: "groaf",
      orientation: 'landscape'
    },
  ],
  "14": [
    {
      id: 155,
      image: "/photos/art_start.jpg",
      title: "emo borg boy",
      text: "IM SO SORRY EMMY THAT i wasn't even here to witness this live. this was the first time you ever showed me ur talent as an artist. adn your ability to beautifully capture ideas and things that you love",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 156,
      image: "/photos/art1.jpg",
      title: "weirdco",
      text: "you made this for me amidst your havoc physics studying. i do look quite weird, but i know that you must have captured the reference picture perfectly. so i think just like that",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 157,
      image: "/photos/art2.jpg",
      title: "foreshadowing?",
      text: "possibly my favorite art piece you have made me. well i dont think this one was actually for me. you just drew it on the wall. but interesting that you captured me perfectly within it. i don't get it did you know i liked rats at this point or are u just that good that you instinctively drew it. i do really have to get to the bottom of what this work of art means",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 158,
      image: "/photos/art3.jpg",
      title: "the day that started it all",
      text: "this piece marks one of the most important days of my life. the night you made me a man. the night YOU made a move on me. i still can't believe u did that, it should have been me, why didn't i do it. i do love you don't think i don't just cos u were the one that initiated us. nevertheless this piece was so good. i like to think this one was a dual effort. you drew it, and uh... i burned it!",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 159,
      image: "/photos/art4.jpg",
      title: "very niceco",
      text: "i didn't even have to come up with the title for this one thank god. this is such an accurate resemblance of me. my sister was very impressed when she saw it, especially since you can tell you put little time into it, yet it still came out so good. you truly are an artist emmy",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 160,
      image: "/photos/art5.jpg",
      title: "my most prized possession",
      text: "emmy. never in my entire life has someone gave me such a beautiful, emotional, and heartfelt present as this one. brought me to tears when i received it and even as i right this now. you recreated one of our most precious moments together, and viewing this painting for the first time felt just like reliving it. i love you so much emmy. also this will be a really good bitch repellant after it hangs up on my seattle apartment",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "15": [
    {
      id: 161,
      image: "/photos/bc_start.jpg",
      title: "boaf",
      text: "HA! BOAF of them. boaf of those pairs of balls in ur face. boaf and groaf",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 162,
      image: "/photos/bc1.jpg",
      title: "turkeyfin",
      text: "ew. why the hell does he look like that. he literally looks like a thanksgiving turkey ready to be put into the oven. although i can't lie. its a pretty good loaf. but that's besides the point. ew. remember when you sent this image to cheyenne. that was funny.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 163,
      image: "/photos/bc2.jpg",
      title: "pedofin",
      text: "frankly. i don't like how he looks. not one bit. he looks like he is going to touch me. innapropriately. i feel uncomfortable",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 164,
      image: "/photos/bc3.jpg",
      title: "sphynxfin",
      text: "this is not the gryffin i know. the gryffin i know would have his. paws crossed? craws pawsed?",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 165,
      image: "/photos/bc4.jpg",
      title: "foamfin",
      text: "we both know exactly what came before thi picture. endless. endless shit. i hate you gryffin.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 166,
      image: "/photos/bc5.jpg",
      title: "poorfin",
      text: "WAIT IM SORRY GRYFFIN I DONT HATE. YOU YOU DONT DESERVE THIS. why the hell is B doing this to him. and why does he look so fat.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 167,
      image: "/photos/bc6.jpg",
      title: "lickfin",
      text: "omg this fat little thing looks like its staring down a rogue sausage on the floor and it wants to pounce on it. he does look good tho",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 168,
      image: "/photos/bc7.jpg",
      title: "lovefin",
      text: "i love you i love you i told you i do its all i've ever felt i've never felt so real and if you dont know it i wrote you this tune to be there loving you while im in the tomb",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 169,
      image: "/photos/bc8.jpg",
      title: "grossfin",
      text: "that last verse was recited from memory btw. anyways this is grossfin. we don't like him. why are his paws so fucking huge. why is one of his eyes squinting. why does he look like a reddit mod.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 170,
      image: "/photos/bc9.jpg",
      title: "mogfin",
      text: "this is a good thin fin. back in his first venture at the sebastopol headquarters. being good. looking good. smelling good. i miss this thing",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 171,
      image: "/photos/bc10.jpg",
      title: "emmchete",
      text: "look at you two. my two favorite girls. you guys look so cute. although moaf kinda looks like shes getting squeezed. are you okay moaf. oh no.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 172,
      image: "/photos/bc11.jpg",
      title: "squidchete",
      text: "this is exactly what handsome squidward looked like as he was graciously falling through the krusty crab. great reenactment chete. i am proud of you",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 173,
      image: "/photos/bc12.jpg",
      title: "moobfin",
      text: "this is at the top of my list of things that i do not like. i dont like this. i dont like this. i dont like this.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 174,
      image: "/photos/bc13.jpg",
      title: "bagfin",
      text: "surprising, he actually looks really good here. i like how he sinks to fit the shape of the bag, and he looks pretty peaceful. and if anything, upset that we disrupted his peace",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 175,
      image: "/photos/bc14.jpg",
      title: "take him down chete",
      text: "machete this was your one and only chance to get rid of him good. you could've had all the attention to yourself. no more abuse from that manipulator. you were so close baby. but its okay, you will get him next time",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 176,
      image: "/photos/bc15.jpg",
      title: "worstfin",
      text: "the thing is, i just now hes making the worst noise. the noise we really really hate. and this was right after his moobs. this day was not a good luck for gryffin",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 177,
      image: "/photos/bc16.jpg",
      title: "snugglefin and shychete",
      text: "these things love eachoter so much and want to spend all the time in the world with eachother. they are just like us",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 178,
      image: "/photos/bc17.jpg",
      title: "siblings or dating",
      text: "i still can't get to the bottom of what these guys are to eachother. gryffin beats her up lie a brother but they also snuggle an eat butt in a way that cannot be platonic",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 179,
      image: "/photos/bc18.jpg",
      title: "kingfin",
      text: "king gryffin using machete as a lowly stool to rest his crossed paws on",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 180,
      image: "/photos/bc19.jpg",
      title: "planefin",
      text: "did you know this picture existed? i did not. i can't decide how i feel about it. like. the ears are giving bad. but he also looks so innocent. but at the same time, he looks like he is going to touch me",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 181,
      image: "/photos/bc20.jpg",
      title: "moaf",
      text: "definition of a moaf. but this thing needs to learn to tuck its elbows in",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 182,
      image: "/photos/bc21.jpg",
      title: "slopfin",
      text: "this thing looks like he is sitting on the couch watching a football game with a greasy t shirt and a beer in hand. judging everyone because he is an incel",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 183,
      image: "/photos/bc22.jpg",
      title: "woaf gets some dinner",
      text: "i am really really glad we were able to share our diner with this thing. it really really need it. we saved its life i think. i miss it",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 184,
      image: "/photos/bc23.jpg",
      title: "bwoaf",
      text: "are u kidding me. i still can't believe we encountered thi beautiful nice thing, and at the best restaurant ever. this is the epitome of what a loaf should look like. groaf, moaf, emmoaf, please take notes",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 185,
      image: "/photos/bc24.jpg",
      title: "sleepchete",
      text: "as i have said time and time again, machete looks best when she is asleep. shes so cute, and looks so. vulnerable.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 186,
      image: "/photos/bc25.jpg",
      title: "coaf",
      text: "culebra loaf. i liked this island cat. it coexisted with the baby chicks, yet acting as a subtle predator. i now if one stayed still long enough. it would go after it. i really like the way that its sitting. there is something so perverted about it. i also like meda.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 187,
      image: "/photos/bc26.jpg",
      title: "moaffin?",
      text: "why are his elbows untucked. has he been taking lessons from chete. gryffin that is not proper form pls stop that",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 188,
      image: "/photos/bc27.jpg",
      title: "toefin",
      text: "i really like this picture. it makes me feel really good. gryffin also really like the toes in his face. he said they smelled good",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 189,
      image: "/photos/bc28.jpg",
      title: "poshfin",
      text: "probably the most eloquent, and dapper gryffin has ever locked. for once he has a neck. he looks really good here. we should get him a button up shirt",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 190,
      image: "/photos/bc29.jpg",
      title: "whalechete",
      text: "its so weird that this thing looks like that. this is the only time she has ever looked like that. all her fat is sinking to one side. i wish she was like this all the time",
      date: "August 2023",
      orientation: 'portrait'
    },
  ],
  "16": [
    {
      id: 192,
      image: "/photos/e1.jpg",
      title: "a new beginning",
      text: "this picture was taken right around the time you stopped hating me. i love this picture of you. you looks os unbelievably pretty. and its a really big plus that i knew we were finally friends again, which made me cherish it even more",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 193,
      image: "/photos/e2.jpg",
      title: "sexy smile",
      text: "this has always been one of the pictures that i have always thought you looked the most sexy in. i don't know what it is about it cos its kind of a weird picture and angle. but ur features just look so good you look like a supermodel. i think its your eyes that really make this picture me. their squinted in a very fox like way that makes you look so sexy", 
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 194,
      image: "/photos/e3.jpg",
      title: "betrayal",
      text: "its crazy to think that i give you this wonderful shirt. and few days later. you abandon our love. its okay. i forgive you baby girl. please don't do it again",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 195,
      image: "/photos/e4.jpg",
      title: "you are fucking mine",
      text: "you are branded. you are mine emmy. never forget that. i love this picture u look so sexy and slutty. it makes me think of the sex where i tied you up against those bed posts. i fucking loved that",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 196,
      image: "/photos/e5.jpg",
      title: "you know you like it",    
      text: "you've always loved me choking you and i know u are enjoying every moment of this. look at me, at least we know i am.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 197,                
      image: "/photos/e6.jpg",
      title: "rekindling our flame",
      text: "this picture was taken the night we talked about wanting to be together again. the night we made that shared notes. about no commitment sex. lol that went out the window. i told you this night that i wanted to feel in love and that scared you. thankfully not enough to stop you from eventually feeling the same way",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 198,
      image: "/photos/e7.jpg",
      title: "morning hoch blunt",
      text: "this is the morning we smoked a blunt at the hoch with melak and B, it was a really fun breakfast. later we sat outside and i took this picture of you. it was the first picture i ever took of you that wasn't me spying. you told me you didn't like pictures because you didn't know what to do with your face. but omg emmy you looked so beautiful this day you could have done anything and i would have felt the same towards you",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 199,
      image: "/photos/e8.jpg",
      title: "we are so back baby",
      text: "roaf and moaf back together in full force. behind the blinds of the hoch. i wanted to fuck you so bad back here. this was taken on 4/20, we went to big Mo's soon after. i really love this picture of yo. this angle is so good and i have always thought you looked really mature in a really good way",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 200,
      image: "/photos/e9.jpg",
      title: "pretty girl",
      text: "not entirely sure the context behind this photo, you just look cute as fuck. i do know it was in between the period of you hating me and us being together. that short couple weeks where we were just friends again. you started getting comfortable and picking up my phone to take pictures again. i loved that",
      date: "August 2023",
      orientation: 'portrait'
    },  
    {
      id: 201,
      image: "/photos/e10.jpg",
      title: "quiet game",
      text: "a fun night of taking shrooms. i don't like how diego looks in this picture at all. anyways, this was an absolutely fucking fantastic night for me. i was so in love with you again. i didn't talk all night, for at least 5 hours, until i found you sitting alone in the dark of my room. while not alone. joaf was asleep. but for the first moment in hours, i spoke again, and it was only for you. being high on shrooms in my room with you was so magical. touching you discretely while not trying to bother jack yet wanting to fuck you so badly was one of the hardest things i ever had to do in my life.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 202,
      image: "/photos/e11.jpg",
      title: "madeline's birthday!",
      text: "YAY! happy birthday madeleine, good sushi and gooddelia with a bright blue tongue",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 203,
      image: "/photos/e12.jpg",
      title: "cute! cute! cute!",
      text: "so much to say about this photo and it's literally just your face. your eyes are gorgeous emmy. your cheeks are so cute. your lips are luscious i want to bite them. your freckles make you look so cute. you look so happy and amazing. i love you",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 204,
      image: "/photos/e13.jpg",
      title: "wallpaper worthy",
      text: "another contender for the most best picture of us. we aren't slaying as hard as we are in the other photos but this pictue has an extra artistic flare that makes it all the better. there is a reason it has been my wallpaper for over a year now. thank you jason for being an amazing photographer",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 205,
      image: "/photos/e14.jpg",
      title: "the type of love i love",
      text: "your expression here is what i love about you. ur so crazy. u look like you are going to eat me. kill anyone that looks at me. and bomb pitzer college all in one go. that type of crazy girlfriend vibe. i love it",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 206,
      image: "/photos/e15.jpg",
      title: "young emmy",
      text: "it might be controversial to say this... but u were sexy even as a 17 yr old. i love this picture of you, you have that baddie pout going on that i would die for. it's also the picture that has made me love that red top of yours",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 207,
      image: "/photos/e16.jpg",
      title: "TODO: KISSING PICTURE",
      text: "The saddest day of my life was when I realized I was never going to see you again.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 208,
      image: "/photos/e17.jpg",
      title: "makes sense",
      text: "i think this picture encapsulates our relationship very well. me being a sexy chill guapo guy, and you slimy, devious, ready to slurp me up",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 209,
      image: "/photos/e18.jpg",
      title: "gooppelia",
      text: "damn ur goopy in more places than one",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 210,
      image: "/photos/e19.jpg",
      title: "smallelia",
      text: "oh look at how small you are. ur such a small little baby. haha. so petite and small fucking baby. so fucking small. oh god. i've angered it",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 211,
      image: "/photos/e20.jpg",
      title: "that's my fucking girlfriend",
      text: "there are not enough words in the world to describe how straight fucking raw sexy you look in this picture. you do not understand what it does to me. it gives me. needs.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 212,
      image: "/photos/e21.jpg",
      title: "the big hill show!",
      text: "i had so much fun with you at the big hill show! that's such a beautiful house, i am sad we won't be able to do this again. we had some amazing fucking drunk car sex this night. it literally left you huffing and puffing",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 213,
      image: "/photos/e22.jpg",
      title: "please don't eat me",
      text: "im scared. moments like these scare me. i know you want to eat me. and i know you are just waiting for the right moment.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 214,
      image: "/photos/e23.jpg",
      title: "its good",
      text: "plain and simple",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 215,
      image: "/photos/e24.jpg",
      title: "horse girl",
      text: "it looks like you got a big ass horse snout about to take a bite of an apple. this is one of my all time favorite pictures of you. you look so sexy, in different ways than before, but just as good. i had such an amazing time at six flags with you baby and i can't wait to do more fun stuff together",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 216,
      image: "/photos/e25.jpg",
      title: "safety first!",
      text: "oh just my good old girlfriend and her headgear. i fear that at this point in the website you are starting to cringe at the way i am titling these",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 217,
      image: "/photos/e26.jpg",
      title: "the red coats are coming",
      text: "another all timer here. nights spent out with you are unforgettable emmy, yet im so glad to have pictures like these to look back at them",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 218,
      image: "/photos/e27.jpg",
      title: "motherfucker deserved it",
      text: "this picture was taken right after we threw a cup full of water at fabricio. i do not regret my actions. but look at how cute we look. you are hitting a mega baddie pose",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 219,
      image: "/photos/e28.jpg",
      title: "a girl and her cat",
      text: "this picture looks straight out of some 70s indie film with a cute artsy girl that loves her cat. i fucking love this picture. i feel like you have never seen it and i'm so excited for you to see it right now",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 220,
      image: "/photos/e29.jpg",
      title: "sexco",
      text: "look how sexy i look here. goddamn! no wonder you want to eat me",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 221,
      image: "/photos/e30.jpg",
      title: "her eyes set on a scrumptious meal",
      text: "WHY ARE you ALWAYS TRYING TO EAT ME",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 222,
      image: "/photos/e31.jpg",
      title: "dirty, saucy, girl",
      text: "another one of my favorite pictures of you. how do you make messy eating look so hot",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 223,
      image: "/photos/e32.jpg",
      title: "my family",
      text: "here is a picture of my wife, holding my son and daughter. we are a happy family and i would do absolutely anything to protect them",
      date: "August 2023",
      orientation: 'landscape'
    },
    {
      id: 224,
      image: "/photos/e33.jpg",
      title: "mouselia",
      text: "im sorry but you really look like a mouse here. like you are about to snicker. you look good",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 225,
      image: "/photos/e34.jpg",
      title: "very nice emmy",
      text: "you look so sweet and nice and precious here. like you couldn't hurt a soul",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 226,
      image: "/photos/e35.jpg",
      title: "power couple",
      text: "we are a power couple that everyone is jealous of everywhere we go. this time, we ruled universal studios",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 227,
      image: "/photos/e36.jpg",
      title: "romantic dinner date",
      text: "probably one of our best dates, really good food, really cute emmy, and something to celebrate (it was our valentines dinner) (i paid haha)",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 228,
      image: "/photos/e37.jpg",
      title: "oni sushi",
      text: "genuinely a transformative night in my life. i never liked sushi before you made me eat a bunch on this date night. now i like sushi... well some of it. i'm working on it babe",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 229,
      image: "/photos/e38.jpg",
      title: "get away",
      text: "as cute and amazing as you look. i know that look in your eyes. you are going to eat me. i wont let it happen",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 230,
      image: "/photos/e39.jpg",
      title: "taunting cheytown",
      text: "lets start off by acknowledging how fucking hot you look in this picture. my lord. this is the night where we were fucking on the couch and then cheyenne came in through the bathroom door cos we wouldn't open it for her. and then we just making out shirtless to taunt her because fuck her why would she do that",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 231,
      image: "/photos/e40.jpg",
      title: "don't mind if i do",
      text: "yes i would love a sip beautiful sunshine girl",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 232,
      image: "/photos/e41.jpg",
      title: "is this even us",
      text: "this is a cute picture. but. we both look very strange in it, like it doesnt really look like us. it looks like normalized version of us",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 233,
      image: "/photos/e42.jpg",
      title: "high kids",
      text: "ur smile is so infectious emmy. this fucking grin makes me want to explode and fills me joy. here we were smoking on black leather subatomic couch but for some reason it was in the middle of the courtyard",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 234,
      image: "/photos/e43.jpg",
      title: "happiest days of my life",
      text: "everytime i look back at our puerto rico pictures i am reminded fo how amzing that trip was and how happy i was with you there. looking back at pictures like this one, where you and land are the focus of it, makes me realize how lucky i am to live the life i live with you",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 235,
      image: "/photos/e44.jpg",
      title: "rat.",
      text: "the day you showed me your true colors. unintentionally. they just slipped out. just look at you emmy. look at ur fucking face. ur a rat. ur a frickin rat. i am fully convinced by this. and i amd overjoyed to accept it.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 236,
      image: "/photos/e45.jpg",
      title: "quack quack quack",
      text: "we have so many pics of us with drinks in puerto rico. we were spending so uch money on drinks omfg. you look so cute in this emmy. that duck quesadilla was really good",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 237,
      image: "/photos/e46.jpg",
      title: "amazing flower girl",
      text: "you + nature = happy emmy = happy co",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 238,
      image: "/photos/e47.jpg",
      title: "good",
      text: "emmy this is the definition of good. when i say to be good. this is what i mean. look at you. analyze that smirk. there is not a single thing wront with this picture. it is all good",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 239,
      image: "/photos/e48.jpg",
      title: "stoner slut",
      text: "you always look so cool when ur bowing smoke. i have so many amazing videos of you being such a baddie while pufing clouds. shoutout to will for this photo",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 240,
      image: "/photos/e49.jpg",
      title: "does she hate me",
      text: "so i picked this picture because i think its so nice how you joined me to go minigolfing with all my male friends for my birthday. but upon further analysis, it kinda looks like you are thinking of killing me, a little like you hate me. but surely thats not it. right?",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 241,
      image: "/photos/e50.jpg",
      title: "adrenaline junkie",
      text: "so many times in our relationship have you scared the living death of me because of the shit you get up to. but every time i also think its the coolest thing in the world. and reminds me of who you are and why i love you",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 242,
      image: "/photos/e51.jpg",
      title: "drunk and spinning",
      text: "oh how i love a drunk emmy. few things i love more in this world. i like having to take care of you when ur drunk. i like when ur spinning. though i know you don't like it. i really like this picture of you. very aesthetic. im going to put it on an album one day",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 243,
      image: "/photos/e52.jpg",
      title: "cute cat",
      text: "you look so fucking gorgeous in this picture oh my good those fucking pouty lips those, fuck me eyes, that cute little nose that wants to be flicked. you are the whole package babe",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 244,
      image: "/photos/e53.jpg",
      title: "my reason to be",
      text: "moments like these is why i keep at it. this is what i love. this is what i want. i probably look at this picture everyday more than i look in the mirror. i am infatuated with it.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 245,
      image: "/photos/e54.jpg",
      title: "my muse",
      text: "now i don't consider myself an artist, and i know to call your girlfriend is a little pretentious and cliche. but you really are. photos like these where you look so unbelievably beautiful make me want to take more and more photos. just of you.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 246,
      image: "/photos/e55.jpg",
      title: "meow",
      text: "i am sorry i am running out of titles. i love you emmy. the way you look is perfect. the way you dress is perfect. the way you act is perfect. you are perfect",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 247,
      image: "/photos/e56.jpg",
      title: "chocobar pt2: cute version",
      text: "you are so magical emmy. you are an undecribable woman. imagine you got as drunk as me at this place. that woulda left to some trouble. maybe we would have touched",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 248,
      image: "/photos/e57.jpg",
      title: "sexy girl body goals",
      text: "u r so fucking sexy and everytime i look at you i could not imagine a more flawless woman.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 249,
      image: "/photos/e58.jpg",
      title: "cheekbones on fleek",
      text: "this picture of you is really odd. you look beautiful. but you look, older... more mature. i think it really is the cheekbones but you look so good and i know you are gonna be such a hot milf",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 250,
      image: "/photos/e59.jpg",
      title: "stop slaying gryffin",
      text: "why so cunty doe.",
      date: "August 2023",
      orientation: 'portrait'
    },
    {
      id: 251,
      image: "/photos/e60.jpg",
      title: "everything i could ever ask for",
      text: "i think this picture really encapsualtes what i love the most about you. you are so whimsical, so creative, so interesting, so fit to be anything you could ever want to be. i have undoubtedly found my soulmate. i hope i can entertain you and mystify you as much as you do for me. you are the one for me. i love you emmelia elizabeth hoorn",
      date: "August 2023",
      orientation: 'portrait'
    }
  ]
}


export default function RoadTripJournal() {
  return (
    <div className="relative">
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[#8b4513]/10"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="mb-12">
              <TypeAnimation
                sequence={[
                  'hi emmy.\n',
                  1000,
                  'hi emmy.\n i thot it would be fun if we looked back at all the places we\'ve been and all the fun we\'ve had.\n',
                  1000,
                  'hi emmy.\n i thot it would be fun if we looked back at all the places we\'ve been and all the fun we\'ve had.\n i love you so much emmelia.\n',
                  1000,
                  'hi emmy.\n i thot it would be fun if we looked back at all the places we\'ve been and all the fun we\'ve had.\n i love you so much emmelia.\n you are the one for me.\n',
                  1000,
                  'hi emmy.\n i thot it would be fun if we looked back at all the places we\'ve been and all the fun we\'ve had.\n i love you so much emmelia.\n you are the one for me.\n happy birthday!\n',
                  1000,
                  'hi emmy.\n i thot it would be fun if we looked back at all the places we\'ve been and all the fun we\'ve had.\n i love you so much emmelia.\n you are the one for me.\n happy birthday!\n we hope you like this <3',
                  1000,
                  'hi emmy.\n i thot it would be fun if we looked back at all the places we\'ve been and all the fun we\'ve had.\n i love you so much emmelia.\n you are the one for me.\n happy birthday!\n we hope you like this <3 \n - roaf. groaf. moaf.',

                ]}
                wrapper="div"
                speed={70}
                className="text-2xl md:text-4xl font-bold text-[#8b4513] font-serif whitespace-pre-line text-left inline-block"
              />
            </div>
          </div>
        </section>

        {/* Photo Sections */}
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="relative">
            <div className="absolute inset-0 bg-[#8b4513]/10"></div>
            <div className="relative z-10 py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-[#8b4513] font-serif">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {}
                {section.id === "13" ? (
                  <div className="flex justify-center items-center">
                    <iframe 
                      src="/trex-game.html" 
                      className="w-[600px] h-[225px] border-4 border-[#8b4513] rounded-lg bg-white"
                      title="T-Rex Game"
                    />
                  </div>
                ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {photoData[section.id]?.map((photo, photoIndex, array) => (
                    <div 
                      key={photo.id} 
                      className={`animate-fade-in-up ${array.length === 1 ? 'md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-3' : ''}`} 
                      style={{ animationDelay: `${photoIndex * 0.1}s` }}
                    >
                      <PhotoCard {...photo} orientation={photo.orientation as 'portrait' | 'landscape'} />
                    </div>
                  ))}
                </div>
              )}
              </div>
            </div>
          </section>
        ))}
        
      </div>
      <VinylPlayer />
    </div>
  )
}
