// Online Games
import StumbleGuys from "../assets/games-images/online/stumble-guys.jpg";
import Supersus from "../assets/games-images/online/supersus.png";
import BombSquad from "../assets/games-images/online/bombsquad1.jpg";

// Offline Games
import Carrom from "../assets/games-images/offline/carrom1.jpg";
import PaperRocket from "../assets/games-images/offline/paper-rocket.jpg";
import BottleFlip from "../assets/games-images/offline/bottleflip2.jpg";
import ShootingGame from "../assets/games-images/offline/shootinggame2.jpg";
import Ring from "../assets/games-images/offline/ring.jpg";
import Dart from "../assets/games-images/offline/dart.jpg";
import Chess from "../assets/games-images/offline/chess.jpg";
import Cube from "../assets/games-images/offline/cube.jpg";

// Online games
export const onlineGames = [
  {
    id: 1,
    title: "Chess",
    href: "/games/online/chess",
    description:
      "Calling all masterminds and strategic thinkers! It's time to showcase your skills and dominate the chessboard in our epic Chess tournament. With each move, you'll be testing your opponent's wit and cunning while challenging your own.",
    imageUrl: Chess,
  },
  {
    id: 2,
    title: "Stumble Guys",
    href: "/games/online/stumble-guys",
    description:
      "Stumble Guys is a thrilling multiplayer game with quirky characters navigating challenging obstacle courses filled with traps and twists. With fast-paced gameplay and unpredictable challenges, it's a test of skill and agility against players from around the world.",
    imageUrl: StumbleGuys,
    isRegistrationClosed:true
  },
  {
    id: 3,
    title: "Super SUS",
    href: "/games/online/super-sus",
    description:
      "Super Sus is a force to be reckoned with. With her lightning-fast reflexes and razor-sharp instincts, she can take on any challenge that comes her way. Her strategic mind is always analyzing the situation, looking for the best course of action.",
    imageUrl: Supersus,
    isRegistrationClosed:true
  },
  {
    id: 4,
    title: "Bomb squad",
    href: "/games/online/bomb-squad",
    description:
      "The Bomb Squad is a highly trained and specialized unit that deals with the most dangerous and explosive situations imaginable. These brave men and women put their lives on the line every day to protect the public from the threat of bombs and other explosive devices.",
    imageUrl: BombSquad,
    isRegistrationClosed:true
  },
];

// Offline games
export const offlineGames = [
  {
    id: 1,
    title: "Carrom",
    href:"https://forms.gle/srEWyLLfFXVR3PBq7",
    description:
      "Ready to feel the thrill of every flick, every strike, and every point won? Look no further than our Carrom Board game event! With its simple yet addictive gameplay, Carrom Board promises a fun and challenging experience for players of all levels.",
    imageUrl: Carrom,
    isOnlineRegister: true,
  },
  {
    id: 2,
    title: "Paper Rocket",
    description:
      "Get ready to blast off into a world of excitement and adventure with Paper Rocket! This innovative game challenges you to design and launch your very own rocket, using only paper and your imagination.",
    imageUrl: PaperRocket,
  },
  {
    id: 3,
    title: "Bottle Flip",
    description:
      "Get ready to flip out with the ultimate challenge of skill and precision - Bottle Flip! Whether you're a seasoned pro or a first-time flipper, this game will have you on the edge of your seat.",
    imageUrl: BottleFlip,
  },
  {
    id: 4,
    title: "Shooting Game",
    description:
      "Lock and load for the ultimate adrenaline-fueled experience in our Shooting Game event! Test your skills and accuracy as you take on challenging targets and foes in an immersive and action-packed environment.",
    imageUrl: ShootingGame,
  },
  {
    id: 5,
    title: "Toss Ring",
    description:
      "Are you ready to ring in the fun? Come join us for the ultimate toss ring challenge! With colorful rings and targets, this classic game will have you aiming for the bullseye and competing against your friends and family for hours of entertainment.",
    imageUrl: Ring,
  },
  {
    id: 6,
    title: "Dart",
    description:
      "Get ready to hit the bullseye and unleash your inner champion with our dart game event! Whether you're a seasoned pro or a beginner, come and join the fun as we throw darts and take aim at the target.",
    imageUrl: Dart,
  },
  {
    id: 7,
    title: "Rubik's Cube",
    description:
      "Get your cubes ready and let's get cubing! Join us for a Rubik's Cube competition that will test your speed, agility, and mental prowess. With a range of challenging puzzles and mind-bending twists and turns, this event promises to be an exciting and thrilling experience.",
    imageUrl: Cube,
  },
];
