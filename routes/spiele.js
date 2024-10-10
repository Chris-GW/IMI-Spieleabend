let express = require("express");
let router = express.Router();

let spieleKatalog = [got(), oath(), munchkin()];

router.get("/", function (req, res, next) {
  let data = {
    spieleKatalog,
  };
  res.render("spiele_katalog", data);
});

router.get("/:gameId", function (req, res, next) {
  let data = spieleKatalog[req.params.gameId];
  res.render("spiele_katalog", data);
});

module.exports = router;

function got() {
  return {
    _id: 1,
    title: "Der Eiserne Thron: Das Brettspiel",
    subtitle:
      "Make alliances—and break them!—as you strive to both unite and conquer Westeros.",
    url: "https://boardgamegeek.com/boardgame/103343/a-game-of-thrones-the-board-game-second-edition",
    coverUrl:
      "https://cf.geekdo-images.com/M_7UvwZvuxBVjxdadsa5AA__itemrep/img/ZdvVWyy_BWv4QMZ7x1bxYGU0DE0=/fit-in/246x300/filters:strip_icc()/pic1077906.jpg",
    type: "strategy",
    designer: "Christian T. Petersen",
    publisher: {
      _id: 7643,
      name: "Fantasy Flight Games",
      url: "https://boardgamegeek.com/boardgamepublisher/17/fantasy-flight-games",
    },
    releaseYear: 2011,
    playtime: {
      min: 120,
      max: 240,
    },
    rank: 212,
    rating: 7.5,
    players: {
      min: 3,
      best: [4, 5, 6],
      max: 6,
    },
  };
}

function oath() {
  return {
    _id: 2,
    title: "Oath Reich & Exil: Die Chroniken",
    subtitle:
      "Change the course of history as empires rise and fall and your tale becomes legend.",
    url: "https://boardgamegeek.com/boardgame/291572/oath",
    coverUrl:
      "https://cf.geekdo-images.com/gTxav_KKQK1rDg-XuCjCSA__itemrep/img/tSLVt-2CpBBSd3UUPWa4zuxc34k=/fit-in/246x300/filters:strip_icc()/pic5164812.jpg",
    type: "strategy",
    designer: "Cole Wehrle",
    publisher: {
      _id: 4708,
      name: "Leder Games",
      url: "https://boardgamegeek.com/boardgamepublisher/25624/leder-games",
    },
    releaseYear: 2021,
    playtime: {
      min: 45,
      max: 150,
    },
    rank: 294,
    rating: 7.8,
    players: {
      min: 1,
      best: [4, 5],
      max: 5,
    },
  };
}

function munchkin() {
  return {
    _id: 3,
    title: "Munchkin",
    subtitle: "Attack and loot in this humorous, card-based dungeon crawler.",
    url: "https://boardgamegeek.com/boardgame/1927/munchkin",
    coverUrl:
      "https://cf.geekdo-images.com/J-ts3MW0UhDzs621TR6cog__itemrep/img/2MRtjy32fdzTBDCvUk73dA-ZtJk=/fit-in/246x300/filters:strip_icc()/pic1871016.jpg",
    type: "party",
    designer: "Cole Wehrle",
    publisher: {
      _id: 4283,
      name: "Steve Jackson Games",
      url: "https://boardgamegeek.com/boardgamepublisher/19/steve-jackson-games",
    },
    releaseYear: 2001,
    playtime: {
      min: 60,
      max: 120,
    },
    rank: 5886,
    rating: 5.9,
    players: {
      min: 3,
      best: [4, 5],
      max: 6,
    },
  };
}
