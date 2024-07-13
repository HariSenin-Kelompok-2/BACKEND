"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "God Of War",
          short_description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same",
          // release_date:"kapan-kapan",
          description: "waw keren",
          developer: "Santa Monica Studio",
          publisher: "PlayStation Publishing LLC",
          product_thumbnail:
            "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg?t=1720454875",
          video: "dangdutan",
        },
        {
          name: "Elden Ring",
          short_description: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "FromSoftware Inc.",
          publisher: "FromSoftware Inc.",
          product_thumbnail:
            "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header_alt_assets_2.jpg?t=1720627962",
          video: "dangdutan2",
        },
        {
          name: "Forza Horizon 5 - Standard Edition",
          short_description: "waw2",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "dev2",
          publisher: "publisher3",
          product_thumbnail:
            "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1718730250",
          video: "dangdutan2",
        },
        {
          name: "Forza Horizon 5 - Deluxe Edition",
          short_description: "waw2",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "dev2",
          publisher: "publisher3",
          product_thumbnail:
            "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1718730250",
          video: "dangdutan2",
        },
        {
          name: "Forza Horizon 5 - Premium Edition",
          short_description: "waw2",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "dev2",
          publisher: "publisher3",
          product_thumbnail:
            "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg?t=1718730250",
          video: "dangdutan2",
        },
        {
          name: "The First Descendant",
          short_description: "The First Descendant is a third-person looter shooter powered by Unreal Engine 5. Become a Descendant. Fight for the survival of humanity. Descendants have unique abilities to tackle both solo and co-op missions. Up to 4 players use varied mechanics to defeat giant bosses. BE THE FIRST DESCENDANT!",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "Nexon",
          publisher: "Nexon",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2074920/header.jpg?t=1719986463",
          video: "dangdutan2",
        },
        {
          name: "HELLDIVERS 2",
          short_description: "The Galaxy’s Last Line of Offence. Enlist in the Helldivers and join the fight for freedom across a hostile galaxy in a fast, frantic, and ferocious third-person shooter.",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "Arrowhead Game Studios",
          publisher: "Arrowhead Game Studios",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/header.jpg?t=1717621025",
          video: "dangdutan2",
        },
        {
          name: "Anger Foot",
          short_description: "Anger Foot is a lightning fast action FPS where the only things harder than your ass kicking feet are the ass kicking beats.",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "Free Lives",
          publisher: "Devolver Digital",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1978590/header.jpg?t=1720791250",
          video: "dangdutan2",
        },
        {
          name: "Exoprimal",
          short_description: "Exoprimal is an online, team-based action game that pits humanity's cutting-edge exosuit technology against history's most ferocious beasts – dinosaurs.",
          // release_date:"kapan-kapan2",
          description: "​waw​",
          developer: "CAPCOM",
          publisher: "CAPCOM",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1286320/header.jpg?t=1720747059",
          video: "dangdutan2",
        },
        {
          name: "Sea of Thieves: 2024 Edition",
          short_description: "Sea of Thieves is a smash-hit pirate adventure game, offering the quintessential pirate experience of plundering lost treasures, intense battles, vanquishing sea monsters and more. Dive in with this revised edition of the game, which includes access to digital bonus media.",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "Rare",
          publisher: "Xbox Game Studio",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg?t=1720175247",
          video: "dangdutan2",
        },
        {
          name: "Far Cry 6",
          short_description: "Enter the adrenaline-filled world of a modern-day guerrilla revolution. With stunning vistas, visceral gunplay, and a huge variety of gameplay experiences, there's never been a better time to join the fight.",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "Ubisoft",
          publisher: "Ubisoft",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2369390/header.jpg?t=1706823201",
          video: "dangdutan2",
        },
        {
          name: "Once Human",
          short_description: "Once Human is a multiplayer open-world survival game set in a strange, post-apocalyptic future. Unite with friends to fight monstrous enemies, uncover secret plots, compete for resources, and build your own territory. Once, you were merely human. Now, you have the power to remake the world.",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "Starry Studio",
          publisher: "Starry Studio",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2139460/header.jpg?t=1720769375",
          video: "dangdutan2",
        },
        {
          name: "Destiny 2",
          short_description: "Destiny 2 is an action MMO with a single evolving world that you and your friends can join anytime, anywhere, absolutely free.",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "Bungie",
          publisher: "Bungie",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/header.jpg?t=1720218333",
          video: "dangdutan2",
        },
        {
          name: "Hunt: Showdown",
          short_description: "Hunt: Showdown is a high-stakes, tactical PvPvE first-person shooter. Hunt for bounties in the infested Bayou, kill nightmarish monsters and outwit competing hunters - alone or in a group - with your glory, gear, and gold on the line.",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "Crytek",
          publisher: "Crytek",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/594650/header.jpg?t=1719844589",
          video: "dangdutan2",
        },
        {
          name: "Ghost of Tsushima DIRECTOR'S CUT",
          short_description: "A storm is coming. Venture into the complete Ghost of Tsushima DIRECTORS CUT on PC; forge your own path through this open-world action adventure and uncover its hidden wonders. Brought to you by Sucker Punch Productions, Nixxes Software and PlayStation Studios.",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "Sucker Punch Productions, Nixxes Software",
          publisher: "PlayStation Publishing LLC",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg?t=1717622497",
          video: "dangdutan2",
        },
        {
          name: "Euro Truck Simulator 2",
          short_description: "Travel across Europe as king of the road, a trucker who delivers important cargo across impressive distances! With dozens of cities to explore, your endurance, skill and speed will all be pushed to their limits.",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "SCS Software",
          publisher: "SCS Software",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/header.jpg?t=1718786615",
          video: "dangdutan2",
        },
        {
          name: "Gray Zone Warfare",
          short_description: "Gray Zone Warfare is an intense tactical FPS emphasizing realism. Join a Private Military Company to explore a vast MMO open world featuring a PvEvP and PvE mode. Strategize and survive against human operators and AI enemies while uncovering the mystery of Lamang Island.",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "MADFINGER Games, a.s.",
          publisher: "MADFINGER Games, a.s.",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2479810/header.jpg?t=1719853075",
          video: "dangdutan2",
        },
        {
          name: "Monster Hunter: World",
          short_description: "Welcome to a new world! In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement.",
          // release_date:"kapan-kapan2",
          description: "waw keren2",
          developer: "CAPCOM Co., Ltd.",
          publisher: "CAPCOM Co., Ltd.",
          product_thumbnail:
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg?t=1711328912",
          video: "dangdutan2",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("products", null, {});
  },
};
