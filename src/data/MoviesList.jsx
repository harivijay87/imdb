
const MoviesList = [
  {
    id: 1,
    type: "movie",
    image: "../../public/images/movies/hitman.jpg",
    rating: "6.9",
    name: "Hit Man",
    watchOption: {
      year: "2023",
      runTime: "1h 55min",
      rated: "R",
      genre: {one:"Comedy", two:"Crime", three:"Romance"},
      story: "A professor moonlighting as a hit man of sorts for his city police department, descends into dangerous, dubious territory when he finds himself attracted to a woman who enlists his services.",
      director: "Richard Linklater",
      creators: null,
      Stars: "Glen Powell - Adria Arjona - Austin Amelio",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/81728840?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=DXwa8DKIK7g",
    bookmark: true,
    starRating: false
  },

  {
    id: 2,
    type: "movie",
    image: "/images/movies/triggerwarning.jpg",
    rating: "4.6",
    name: "Trigger Warning",
    watchOption: {
      year: "2024",
      runTime: "1h 46min",
      rated: "TV-MA",
      genre: {one:"Action", two:"Crime", three:"Thriller"},
      story: "A devoted daughter is attempting to figure out the cause of her father's passing.",
      director: "Mouly Surya",
      creators: null,
      Stars: "Jessica Alba - Mark Webber - Antony Micheal Hall",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/81064546?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=MnHTLh6ruW0",
    bookmark: false,
    starRating: false
  },

  {
    id: 3,
    type: "movie",
    image: "/images/movies/oppenheimer.jpg",
    rating: "8.3",
    name: "Oppenheimer",
    watchOption: {
      year: "2023",
      runTime: "3h",
      rated: "R",
      genre: {one:"Biography", two:"Drama", three:"history"},
      story: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
      director: "Christoper Nolan",
      creator: null,
      Stars: "Cillian Murphy - Emily Blunt - RDJ",
      platform: "jiocinema",
      platformLink: "https://www.jiocinema.com/movies/-/3914094",
      ottImage: '/images/ott/jiocinema.webp'
    },
    trailer: "https://www.youtube.com/watch?app=desktop&v=qAWEb0h43lU",
    bookmark: true,
    starRating: true
  },

  {
    id: 4,
    type: "tvshow",
    image: "/images/tvshows/theboys.jpg",
    rating: "8.7",
    name: "The Boys",
    watchOption: {
      year: "2019- ",
      runTime: "4 Seasons",
      rated: "TV-MA",
      genre: {one:"Action", two:"Comedy", three:"Crime"},
      story: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
      director: null,
      creator: {one: "Eric Kripke"},
      Stars: "Karl Urban - Antony Starr - Jack Quaid",
      platform: "primevideo",
      platformLink: "https://www.primevideo.com/detail/amzn1.dv.gti.5eb510bc-7578-d2dd-49d3-484070a96b52",
      ottImage: '/images/ott/amazonprime.webp'
    },
    trailer: "https://www.youtube.com/watch?v=EzFXDvC-EwM",
    bookmark: true,
    starRating: false
  },

  {
    id: 5,
    type: "tvshow",
    image: "/images/tvshows/house-of-the-dragon.jpg",
    rating: "8.4",
    name: "House of the Dragon",
    watchOption: {
      year: "2022- ",
      runTime: "2 Seasons",
      rated: "TV-MA",
      genre: {one:"Action", two:"Adventure", three:"Drama"},
      story: "An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.",
      director: null,
      creator: {one:"Ryan J. Condol", two: "George R.R. Martin"},
      Stars: "Matt Smith - Emma D'Arcy - Olivia Cooke",
      platform: "jiocinema",
      platformLink: "https://www.jiocinema.com/tv-shows/-/3740000",
      ottImage: '/images/ott/jiocinema.webp'
    },
    trailer: "https://www.youtube.com/watch?v=YN2H_sKcmGw",
    bookmark: false,
    starRating: false
  },

  {
    id: 6,
    type: "movie",
    image: "/images/movies/madmax-fury-road.jpg",
    rating: "8.1",
    name: "Mad Max: Fury Road",
    watchOption: {
      year: "2015",
      runTime: "2h",
      rated: "R",
      genre: {one:"Action", two:"Adventure", three:"Sci-Fi"},
      story: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshipper and a drifter named Max.",
      director: 'George Miller',
      creator: null,
      Stars: "Tom Hardy - Charlize Theron - Nicholas Hoult",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/80025919?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=hEJnMQG9ev8",
    bookmark: false,
    starRating: true
  },

  {
    id: 7,
    type: "movie",
    image: "/images/movies/godzilla-minus-one.jpg",
    rating: "7.7",
    name: "Godzilla Minus One",
    watchOption: {
      year: "2023",
      runTime: "2h 4min",
      rated: "PG-13",
      genre: {one:"Action", two:"Adventure", three:"Drama"},
      story: "Post-war Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.",
      director: 'Takashi Yamazaki',
      creator: null,
      Stars: "Minami Hamabe - Ryunosuke Kamiki - Sakura Ando",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/81767635?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=x7ythIm0834",
    bookmark: false,
    starRating: false
  },

  {
    id: 8,
    type: "movie",
    image: "/images/movies/interstellar.jpg",
    rating: "8.7",
    name: "Interstellar",
    watchOption: {
      year: "2014",
      runTime: "2h 49min",
      rated: "PG-13",
      genre: {one:"Adventure", two:"Drama", three:"Sci-Fi"},
      story: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      director: 'Christoper Nolan',
      creator: null,
      Stars: "Matthew McConaughey - Anne Hathaway - Jessica chastain",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/70305903?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    bookmark: true,
    starRating: true
  },

  {
    id: 9,
    type: "movie",
    image: "/images/movies/road-house.jpg",
    rating: "6.2",
    name: "Road House",
    watchOption: {
      year: "2024",
      runTime: "2h 1min",
      rated: "R",
      genre: {one:"Action", two:"Thriller", three: null},
      story: "Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.",
      director: 'Doug Liman',
      creator: null,
      Stars: "Jake Gyllenhaal - Daniela Melchior - Conor McGregor",
      platform: "primevideo",
      platformLink: "https://www.primevideo.com/detail/amzn1.dv.gti.98ae5e51-4ffa-46e8-be29-2f864db92f6d",
      ottImage: '/images/ott/amazonprime.webp'
    },
    trailer: "https://www.youtube.com/watch?v=Y0ZsLudtfjI",
    bookmark: false,
    starRating: false
  },

  {
    id: 10,
    type: "movie",
    image: "/images/movies/poor-things.jpg",
    rating: "7.9",
    name: "Poor Things",
    watchOption: {
      year: "2023",
      runTime: "2h 21min",
      rated: "R",
      genre: {one:"Comedy", two:"Drama", three:"Romance"},
      story: "An account of the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
      director: 'Yorgos Lanthimos',
      creator: null,
      Stars: "Emma Stone - Mark Ruffalo - Willem Dafoe",
      platform: "primevideo",
      platformLink: "https://www.primevideo.com/detail/Poor-Things/0OUCYU3AALHQG7YJ4PTC6S2LNM",
      ottImage: '/images/ott/amazonprime.webp'
    },
    trailer: "https://www.youtube.com/watch?v=RlbR5N6veqw",
    bookmark: false,
    starRating: false
  },

  {
    id: 11,
    type: "movie",
    image: "/images/movies/a-quiet-place.jpg",
    rating: "7.5",
    name: "A Quiet Place",
    watchOption: {
      year: "2018",
      runTime: "1h 30min",
      rated: "PG-13",
      genre: {one:"Drama", two:"Horror", three:"Sci-Fi"},
      story: "A family struggles for survival in a world invaded by alien creatures with ultra-sensitive hearing.",
      director: 'John Krasinski',
      creator: null,
      Stars: "Emily Blunt - John Krasinski - Millicent Simmonds",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/80213226?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=WR7cc5t7tv8",
    bookmark: false,
    starRating: true
  },

  {
    id: 12,
    type: "movie",
    image: "/images/movies/the-end-we-start-from.jpg",
    rating: "5.9",
    name: "The End We Start From",
    watchOption: {
      year: "2023",
      runTime: "1h 42min",
      rated: "R",
      genre: {one:"Drama", two:"Thriller", three:null},
      story: "A woman tries to find her way home with her newborn while an environmental crisis submerges London in floodwaters.",
      director: 'Mahalia Belo',
      creator: null,
      Stars: "Jodie Comer - Joel Fry - Yves Rassou",
      platform: "jiocinema",
      platformLink: "https://www.jiocinema.com/movies/-/3982229",
      ottImage: '/images/ott/jiocinema.webp'
    },
    trailer: "https://www.youtube.com/watch?v=MciSEbkTkXw",
    bookmark: false,
    starRating: false
  },

  {
    id: 13,
    type: "movie",
    image: "/images/movies/spider-man.jpg",
    rating: "7.4",
    name: "Spider-Man",
    watchOption: {
      year: "2002",
      runTime: "2h 1min",
      rated: "PG-13",
      genre: {one:"Action", two:"Adventure", three:"Sci-Fi"},
      story: "After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.",
      director: 'Sam Raimi',
      creator: null,
      Stars: "Tobey Maguire - Kirsten Dunst - Willem Dafoe",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/60004481?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=t06RUxPbp_c",
    bookmark: true,
    starRating: true
  },

  {
    id: 14,
    type: "movie",
    image: "/images/movies/hotel-transylvania.jpg",
    rating: "7.0",
    name: "Hotel Transylvania",
    watchOption: {
      year: "2012",
      runTime: "1h 31min",
      rated: "PG",
      genre: {one:"Animation", two:"Adventure", three:"Comedy"},
      story: "Dracula, who operates a high-end resort away from the human world, goes into overprotective mode when a boy discovers the resort and falls for the count's teenaged daughter.",
      director: 'Genndy Tartakovsky',
      creator: null,
      Stars: "Adam Sandler - Kevin James - Andy Samberg",
      platform: "primevideo",
      platformLink: "https://www.primevideo.com/detail/amzn1.dv.gti.a3f788a5-a689-40be-870e-2aaa1c6b6a7a",
      ottImage: '/images/ott/amazonprime.webp'
    },
    trailer: "https://www.youtube.com/watch?v=Tm7dl9Q9-NA",
    bookmark: false,
    starRating: false
  },
  
  {
    id: 15,
    type: "movie",
    image: "/images/movies/django-unchained.jpg",
    rating: "8.5",
    name: "Django Unchained",
    watchOption: {
      year: "2012",
      runTime: "2h 45min",
      rated: "R",
      genre: {one:"Comedy", two:"Drama", three:"Western"},
      story: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
      director: 'Quentin Tarantino',
      creator: null,
      Stars: "Jamie Foxx- Christoph Waltz - Leonardo Dicaprio",
      platform: "primevideo",
      platformLink: "https://www.primevideo.com/detail/amzn1.dv.gti.8acd5ce6-8147-4ba2-ab97-de3dc802f0d1",
      ottImage: '/images/ott/amazonprime.webp'
    },
    trailer: "https://www.youtube.com/watch?v=QN1zYslpsqY",
    bookmark: false,
    starRating: false
  },

  {
    id: 16,
    type: "movie",
    image: "/images/movies/avatar.jpg",
    rating: "7.9",
    name: "Avatar",
    watchOption: {
      year: "2009",
      runTime: "2h 42min",
      rated: "PG-13",
      genre: {one:"Action", two:"Adventure", three:"Fantasy"},
      story: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      director: 'James Cameron',
      creator: null,
      Stars: "Sam Worthington - Zoe Saldana - Sigourney Weaver",
      platform: "disney",
      platformLink: "https://www.hotstar.com/in/movies/avatar/1770000948",
      ottImage: '/images/ott/disney.webp'
    },
    trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
    bookmark: false,
    starRating: false
  },

  {
    id: 17,
    type: "movie",
    image: "/images/movies/300.jpg",
    rating: "7.6",
    name: "300",
    watchOption: {
      year: "2006",
      runTime: "1h 57min",
      rated: "R",
      genre: {one:"Action", two:"Drama", three:null},
      story: "In the ancient battle of Thermopylae, King Leonidas and 300 Spartans fight against Xerxes and his massive Persian army.",
      director: 'Zack Snyder',
      creator: null,
      Stars: "Gerald Butler - Lena Headey - David Wenham",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/70056440?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=UrIbxk7idYA",
    bookmark: false,
    starRating: false
  },

  {
    id: 18,
    type: "movie",
    image: "/images/movies/harry-potter-and-the-half-blood-prince.jpg",
    rating: "7.6",
    name: "Harry Potter and the Half-Blood Prince",
    watchOption: {
      year: "2009",
      runTime: "2h 33min",
      rated: "PG",
      genre: {one:"Action", two:"Adventure", three:"family"},
      story: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort's dark past.",
      director: 'David Yates',
      creator: null,
      Stars: "Daniel Radcliffe - Emma Stone - Rupert Grint",
      platform: "jiocinema",
      platformLink: "https://www.jiocinema.com/movies/-/3744042",
      ottImage: '/images/ott/jiocinema.webp'
    },
    trailer: "https://www.youtube.com/watch?v=JYLdTuL9Wjw",
    bookmark: false,
    starRating: false
  },

  {
    id: 19,
    type: "movie",
    image: "/images/movies/the-suicide-squad.jpg",
    rating: "7.2",
    name: "The Suicide Squad",
    watchOption: {
      year: "2021",
      runTime: "2h 12min",
      rated: "R",
      genre: {one:"Action", two:"Adventure", three:"Comedy"},
      story: "Supervillains Harley Quinn, Bloodsport, Peacemaker, and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
      director: 'James Gunn',
      creator: null,
      Stars: "Margot Robbie - Idris Elba - John Cena",
      platform: "primevideo",
      platformLink: "https://www.primevideo.com/detail/amzn1.dv.gti.bea1a212-e906-4112-a920-00c2ff185c7f",
      ottImage: '/images/ott/amazonprime.webp'
    },
    trailer: "https://www.youtube.com/watch?v=eg5ciqQzmK0",
    bookmark: false,
    starRating: false
  },

  {
    id: 20,
    type: "movie",
    image: "/images/movies/blade-runner-2049.jpg",
    rating: "8.0",
    name: "Blade Runner 2049",
    watchOption: {
      year: "2017",
      runTime: "2h 44min",
      rated: "R",
      genre: {one:"Action", two:"Drama", three:"Mystery"},
      story: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
      director: 'Denis Villeneuve',
      creator: null,
      Stars: "Harrison Ford - Ryan Gosling - Ana de Armas",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/80185760?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=gCcx85zbxz4",
    bookmark: false,
    starRating: false
  },

  {
    id: 21,
    type: "movie",
    image: "/images/movies/ready-player-one.jpg",
    rating: "7.4",
    name: "Ready Player One",
    watchOption: {
      year: "2018",
      runTime: "2h 20min",
      rated: "PG-13",
      genre: {one:"Action", two:"Adventure", three:"Sci-Fi"},
      story: "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.",
      director: 'Steven Spielberg',
      creator: null,
      Stars: "Tye Sheridan - Olivia Cooke - Ben Mendelsohn",
      platform: "primevideo",
      platformLink: "https://www.primevideo.com/detail/amzn1.dv.gti.ceb42b03-7968-6234-f581-7895a098f6ad",
      ottImage: '/images/ott/amazonprime.webp'
    },
    trailer: "https://www.youtube.com/watch?v=cSp1dM2Vj48",
    bookmark: false,
    starRating: false
  },

  {
    id: 22,
    type: "movie",
    image: "/images/movies/mission-impossible-fallout.jpg",
    rating: "7.7",
    name: "Mission: Impossible-Fallout",
    watchOption: {
      year: "2018",
      runTime: "2h 27min",
      rated: "PG-13",
      genre: {one:"Action", two:"Adventure", three:"Thriller"},
      story: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
      director: 'Christopher McQuarrie',
      creator: null,
      Stars: "Tom Cruise - Henry Cavill - Ving Rhames",
      platform: "primevideo",
      platformLink: "https://www.primevideo.com/detail/amzn1.dv.gti.fabbdac2-fec8-b2f7-067e-944b1744d169",
      ottImage: '/images/ott/amazonprime.webp'
    },
    trailer: "https://www.youtube.com/watch?v=wb49-oV0F78",
    bookmark: false,
    starRating: false
  },

  {
    id: 23,
    type: "movie",
    image: "/images/movies/ice-age-continental-drift.jpg",
    rating: "6.5",
    name: "Ice Age: Continental Drift",
    watchOption: {
      year: "2012",
      runTime: "1h 28min",
      rated: "PG",
      genre: {one:"Animation", two:"Adventure", three:"Comedy"},
      story: "Manny, Diego, and Sid embark upon another adventure after their continent is set adrift. Using an iceberg as a ship, they encounter sea creatures and battle pirates as they explore a new world.",
      director: 'Steve Martino',
      creator: null,
      Stars: "Ray Romano - Denis Leary - John Leguizamo",
      platform: "primevideo",
      platformLink: "https://www.primevideo.com/detail/amzn1.dv.gti.6cb528b4-3bd1-f39b-5e2d-e4de90a9e199",
      ottImage: '/images/ott/amazonprime.webp'
    },
    trailer: "https://www.youtube.com/watch?app=desktop&v=aBxD3kwiIyg",
    bookmark: false,
    starRating: false
  },

  {
    id: 24,
    type: "movie",
    image: "/images/movies/titanic.jpg",
    rating: "7.9",
    name: "Titanic",
    watchOption: {
      year: "2012",
      runTime: "3h 14min",
      rated: "PG-13",
      genre: {one:"Drama", two:"Romance", three:null},
      story: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      director: 'James Cameron',
      creator: null,
      Stars: "Leonardo DiCaprio - Kate Winslet - Billy Zane",
      platform: "disney",
      platformLink: "https://www.hotstar.com/in/movies/titanic/1770001166",
      ottImage: '/images/ott/disney.webp'
    },
    trailer: "https://www.youtube.com/watch?v=I7c1etV7D7g",
    bookmark: false,
    starRating: false
  },

  {
    id: 25,
    type: "movie",
    image: "/images/movies/the-dark-knight.jpg",
    rating: "9.0",
    name: "The Dark Knight",
    watchOption: {
      year: "2008",
      runTime: "2h 32min",
      rated: "PG-13",
      genre: {one:"Action", two:"Crime", three:"Drama"},
      story: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      director: 'Christopher Nolan',
      creator: null,
      Stars: "Christian Bale - Heath Ledger - Aaron Eckhart",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/70079583?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=LDG9bisJEaI",
    bookmark: false,
    starRating: false
  },

  {
    id: 26,
    type: "movie",
    image: "/images/movies/arrival.jpg",
    rating: "7.9",
    name: "Arrival",
    watchOption: {
      year: "2016",
      runTime: "1h 56min",
      rated: "PG-13",
      genre: {one:"Drama", two:"Mystery", three:"Sci-Fi"},
      story: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
      director: 'Denis Villeneuve',
      creator: null,
      Stars: "Amy Adams - Jeremy Renner - Forest Whitaker",
      platform: "primevideo",
      platformLink: "https://www.primevideo.com/detail/amzn1.dv.gti.2a7ec332-a69e-45e4-8827-88b4c24d577e",
      ottImage: '/images/ott/amazonprime.webp'
    },
    trailer: "https://www.youtube.com/watch?v=tFMo3UJ4B4g",
    bookmark: false,
    starRating: false
  },

  {
    id: 27,
    type: "movie",
    image: "/images/movies/guardians-of-the-galaxy-vol-3.jpg",
    rating: "7.9",
    name: "Guardians of the Galaxy vol. 3",
    watchOption: {
      year: "2023",
      runTime: "2h 30min",
      rated: "PG-13",
      genre: {one:"Action", two:"Adventure", three:"Comedy"},
      story: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.",
      director: 'James Gunn',
      creator: null,
      Stars: "Chris Pratt - Zoe Saldana - Bradley Cooper",
      platform: "disney",
      platformLink: "https://www.hotstar.com/in/movies/guardians-of-the-galaxy-vol-3/1260143699",
      ottImage: '/images/ott/disney.webp'
    },
    trailer: "https://www.youtube.com/watch?v=u3V5KDHRQvk",
    bookmark: false,
    starRating: false
  },

  {
    id: 28,
    type: "movie",
    image: "/images/movies/man-of-steel.jpg",
    rating: "7.1",
    name: "Man of Steel",
    watchOption: {
      year: "2013",
      runTime: "2h 23min",
      rated: "PG-13",
      genre: {one:"Action", two:"Adventure", three:"Sci-Fi"},
      story: "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth.",
      director: 'Zack Snyder',
      creator: null,
      Stars: "Henry Cavil - Amy Adams - Michael Shannon",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/70264797?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=T6DJcgm3wNY",
    bookmark: false,
    starRating: false
  },

  {
    id: 29,
    type: "tvshow",
    image: "/images/tvshows/bridgerton.jpg",
    rating: "7.4",
    name: "Bridgerton",
    watchOption: {
      year: "2020- ",
      runTime: "3 Seasons",
      rated: "TV-MA",
      genre: {one:"Drama", two:"Romance", three:null},
      story: "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society.",
      director: null,
      creator: {one: "Chris Van Dusen", two:null},
      Stars: "Nicola Coughlan - Claudia Jessie - Luke Thompson",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/80232398?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=gpv7ayf_tyE",
    bookmark: false,
    starRating: false
  },

  {
    id: 30,
    type: "tvshow",
    image: "/images/tvshows/game-of-thrones.jpg",
    rating: "9.2",
    name: "Game of Thrones",
    watchOption: {
      year: "2011-2019",
      runTime: "8 Seasons",
      rated: "TV-MA",
      genre: {one:"Action", two:"Adventure", three:"Drama"},
      story: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      director: null,
      creator: {one: "David Benioff", two:"D.B.Weiss"},
      Stars: "Emilia Clarke - Peter Dinklage - Kit Harington",
      platform: "jiocinema",
      platformLink: "https://www.jiocinema.com/tv-shows/-/3739477",
      ottImage: '/images/ott/jiocinema.webp'
    },
    trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
    bookmark: false,
    starRating: false
  },

  {
    id: 31,
    type: "tvshow",
    image: "/images/tvshows/your-honor.jpg",
    rating: "7.6",
    name: "Your Honor",
    watchOption: {
      year: "2020-2023",
      runTime: "2 Seasons",
      rated: "TV-MA",
      genre: {one:"Crime", two:"Drama", three:"Thriller"},
      story: "A judge confronts his convictions when his son is involved in a hit-and-run that embroils an organized-crime family.",
      director: null,
      creator: {one: "Peter Moffat", two:null},
      Stars: "Bryan Cranston - Hope Davis - Michael Stuhlbarg",
      platform: "jiocinema",
      platformLink: "https://www.jiocinema.com/tv-shows/-/3740726",
      ottImage: '/images/ott/jiocinema.webp'
    },
    trailer: "https://www.youtube.com/watch?v=CUkZfD3PsT4",
    bookmark: false,
    starRating: false
  },

  {
    id: 32,
    type: "tvshow",
    image: "/images/tvshows/dexter.jpg",
    rating: "8.6",
    name: "Dexter",
    watchOption: {
      year: "2006-2013",
      runTime: "8 Seasons",
      rated: "TV-MA",
      genre: {one:"Crime", two:"Drama", three:"Mystery"},
      story: "He's smart. He's lovable. He's Dexter Morgan, America's favorite serial killer, who spends his days solving crimes and nights committing them.",
      director: null,
      creator: {one: "James Manos Jr.", two:null},
      Stars: "Michael C. Hall - Jennifer Carpenter - David Zayas",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/70136126?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=YQeUmSD1c3g",
    bookmark: false,
    starRating: false
  },

  {
    id: 33,
    type: "tvshow",
    image: "/images/tvshows/my-lady-jane.jpg",
    rating: "7.1",
    name: "My Lady Jane",
    watchOption: {
      year: "2024-",
      runTime: "1 Season",
      rated: "TV-MA",
      genre: {one:"Comedy", two:"Fantasy", three:"History"},
      story: "History's most tragic heroines but reimagined with an uplifting twist: the damsel in distress saves herself - and then the kingdom.",
      director: null,
      creator: {one: "Gemma Burgess", two:null},
      Stars: "Emily Bader - Edward Bluemel - Anna Chancellor",
      platform: "primevideo",
      platformLink: "https://www.primevideo.com/detail/amzn1.dv.gti.e3d03023-4e3b-45f1-9988-0c404a6eb3db",
      ottImage: '/images/ott/amazonprime.webp'
    },
    trailer: "https://www.youtube.com/watch?v=PwFty8yi1cU",
    bookmark: false,
    starRating: false
  },

  {
    id: 34,
    type: "tvshow",
    image: "/images/tvshows/fallout.jpg",
    rating: "8.4",
    name: "Fallout",
    watchOption: {
      year: "2024-",
      runTime: "1 Season",
      rated: "TV-MA",
      genre: {one:"Action", two:"Adventure", three:"Drama"},
      story: "In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.",
      director: null,
      creator: {one: "Geneva Robertson-Dworet", two:"Graham Wagner"},
      Stars: "Ella Purnell - Aaron Moten - Walton Goggins",
      platform: "primevideo",
      platformLink: "https://www.primevideo.com/detail/amzn1.dv.gti.242f5d02-0b3e-4f4d-a89b-22da3f65f0ec",
      ottImage: '/images/ott/amazonprime.webp'
    },
    trailer: "https://www.youtube.com/watch?v=V-mugKDQDlg",
    bookmark: false,
    starRating: false
  },

  {
    id: 35,
    type: "tvshow",
    image: "/images/tvshows/breaking-bad.jpg",
    rating: "9.5",
    name: "Breaking bad",
    watchOption: {
      year: "2008-2013",
      runTime: "5 Seasons",
      rated: "TV-MA",
      genre: {one:"Crime", two:"Drama", three:"Thriller"},
      story: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
      director: null,
      creator: {one: "Vince Gilligan", two:null},
      Stars: "Bryan Cranston - Aaron Paul - Anna Gunn",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/70143836?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY",
    bookmark: false,
    starRating: false
  },

  {
    id: 36,
    type: "tvshow",
    image: "/images/tvshows/suits.jpg",
    rating: "8.4",
    name: "Suits",
    watchOption: {
      year: "2011-2019",
      runTime: "9 Seasons",
      rated: "TV-14",
      genre: {one:"Comedy", two:"Drama", three:null},
      story: "On the run from a drug deal gone bad, brilliant college dropout Mike Ross finds himself working with Harvey Specter, one of New York City's best lawyers.",
      director: null,
      creator: {one: "Aaron Korsh", two:null},
      Stars: "Gabriel Macht - Patrick J.Adams - Meghan Markle",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/70195800?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=85z53bAebsI",
    bookmark: false,
    starRating: false
  },

  {
    id: 37,
    type: "tvshow",
    image: "/images/tvshows/stranger-things.jpg",
    rating: "8.7",
    name: "Stranger Things",
    watchOption: {
      year: "2016-2025",
      runTime: "4 Seasons",
      rated: "TV-14",
      genre: {one:"Drama", two:"Fantasy", three:"Horror"},
      story: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      director: null,
      creator: {one: "Matt Duffer", two:"Ross Duffer"},
      Stars: "Millie Bobby Brown - Finn Wolfhard - Winona Ryder",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/80057281?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
    bookmark: false,
    starRating: false
  },

  {
    id: 38,
    type: "tvshow",
    image: "/images/tvshows/yellowstone.jpg",
    rating: "8.7",
    name: "YellowStone",
    watchOption: {
      year: "2018-",
      runTime: "3 Seasons",
      rated: "TV-MA",
      genre: {one:"Drama", two:"Western", three:null},
      story: "A ranching family in Montana faces off against others encroaching on their land.",
      director: null,
      creator: {one: "John Linson", two:"Taylor Sheridan"},
      Stars: "Kevin Costner - Luke Grimes - Kelly Reilly",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/80238738?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=jr32f0rnK1o",
    bookmark: false,
    starRating: false
  },

  {
    id: 39,
    type: "tvshow",
    image: "/images/tvshows/mayor-of-kingstown.jpg",
    rating: "8.2",
    name: "Mayor of Kingstown",
    watchOption: {
      year: "2021-",
      runTime: "1 Season",
      rated: "TV-MA",
      genre: {one:"Crime", two:"Drama", three:"Thriller"},
      story: "The McLusky family are power brokers tackling themes of systemic racism, corruption and inequality in Kingstown, Michigan, where the business of incarceration is the only thriving industry.",
      director: null,
      creator: {one: "Hugh Dillion", two:"Taylor Sheridan"},
      Stars: "Jeremy Renner - Hugh Dillon - Tobi Bamtefa",
      platform: "primevideo",
      platformLink: "https://www.primevideo.com/detail/amzn1.dv.gti.da943be2-e129-4a80-a41f-04a9b0d9a6cc",
      ottImage: '/images/ott/amazonprime.webp'
    },
    trailer: "https://www.youtube.com/watch?v=zhmIVF2dTbI",
    bookmark: false,
    starRating: false
  },

  {
    id: 40,
    type: "tvshow",
    image: "/images/tvshows/the-sopranos.jpg",
    rating: "9.2",
    name: "The Sopranos",
    watchOption: {
      year: "1999-2007",
      runTime: "6 Seasons",
      rated: "TV-MA",
      genre: {one:"Crime", two:"Drama", three:null},
      story: "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.",
      director: null,
      creator: {one: "David Chase", two:null},
      Stars: "James gandolfini - Lorraine Bracco - Edie Falco",
      platform: "jiocinema",
      platformLink: "https://www.jiocinema.com/tv-shows/-/3748558",
      ottImage: '/images/ott/jiocinema.webp'
    },
    trailer: "https://www.youtube.com/watch?v=KMx4iFcozK0",
    bookmark: false,
    starRating: false
  },

  {
    id: 41,
    type: "tvshow",
    image: "/images/tvshows/demon-slayer-kimetsu-no-yaiba.jpg",
    rating: "8.6",
    name: "Demon Slayer: Kimetsu no Yaiba",
    watchOption: {
      year: "2019-",
      runTime: "5 Seasons",
      rated: "TV-MA",
      genre: {one:"Animation", two:"Action", three:"Adventure"},
      story: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
      director: null,
      creator: {one: "Koyoharu Gotouge", two:null},
      Stars: "Natsuki Hanae - Zach Aguilar - Akari Kito",
      platform: "Netflix",
      platformLink: "https://www.netflix.com/in/title/81091393?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=VQGCKyvzIM4",
    bookmark: false,
    starRating: false
  },

  {
    id: 42,
    type: "tvshow",
    image: "/images/tvshows/the-walking-dead.jpg",
    rating: "8.1",
    name: "The Walking Dead",
    watchOption: {
      year: "2010-2022",
      runTime: "11 Seasons",
      rated: "TV-MA",
      genre: {one:"Drama", two:"Horror", three:"Thriller"},
      story: "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
      director: null,
      creator: {one: "Frank Darabont", two:null},
      Stars: "Andrew Lincoln - Norman Reedus - Melissa McBride",
      platform: "Netflix",
      platformLink: "https://www.netflix.com/in/title/70177057?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=sfAc2U20uyg",
    bookmark: false,
    starRating: false
  },

  {
    id: 43,
    type: "tvshow",
    image: "/images/tvshows/rick-and-morty.jpg",
    rating: "9.1",
    name: "The Walking Dead",
    watchOption: {
      year: "2013-",
      runTime: "7 Seasons",
      rated: "TV-MA",
      genre: {one:"Animation", two:"Adventure", three:"Comedy"},
      story: "The fractured domestic lives of a nihilistic mad scientist and his anxious grandson are further complicated by their inter-dimensional misadventures.",
      director: null,
      creator: {one: "Dan Harmon", two:"Justin Roiland"},
      Stars: "Chris Parnell - Spencer Grammer - Sarah Chalke",
      platform: "primevideo",
      platformLink: "https://www.primevideo.com/detail/0QI3JIM9Q2523PESE1LB8LCCAA/ref=atv_dp_season_select_s1",
      ottImage: '/images/ott/amazonprime.webp'
    },
    trailer: "https://www.youtube.com/watch?v=WNhH00OIPP0",
    bookmark: false,
    starRating: false
  },

  {
    id: 44,
    type: "tvshow",
    image: "/images/tvshows/young-sheldon.jpg",
    rating: "7.7",
    name: "Young Sheldon",
    watchOption: {
      year: "2017-2024",
      runTime: "7 Seasons",
      rated: "TV-PG",
      genre: {one:"Comedy", two:"Family", three:null},
      story: "Meet a child genius named Sheldon Cooper (already seen as an adult in The Big Bang Theory (2007)) and his family. Some unique challenges face Sheldon, who is socially impaired.",
      director: null,
      creator: {one: "Chuck Lorre", two:"Steven Molaro"},
      Stars: "Lain Armitage - Zoe Perry - Lance Barber",
      platform: "primevideo",
      platformLink: "https://www.primevideo.com/detail/amzn1.dv.gti.e0af5e20-332b-e81b-5761-951680d2ea58",
      ottImage: '/images/ott/amazonprime.webp'
    },
    trailer: "https://www.youtube.com/watch?v=iGKnI3Lc7C4",
    bookmark: false,
    starRating: false
  },

  {
    id: 45,
    type: "tvshow",
    image: "/images/tvshows/gen-v.jpg",
    rating: "7.7",
    name: "Gen V",
    watchOption: {
      year: "2023-",
      runTime: "1 Season",
      rated: "TV-MA",
      genre: {one:"Action", two:"Adventure", three:"comedy"},
      story: "From the world of 'The Boys' comes 'Gen V,' which explores the first generation of superheroes to know that their super powers are from Compound V. These heroes put their physical and moral boundaries to the test competing for the school's top ranking.",
      director: null,
      creator: {one: "Seth Rogan", two:"Evan Goldberg"},
      Stars: "Jaz Sinclair - Lizza Braodway - Maddie Phillips",
      platform: "primevideo",
      platformLink: "https://www.primevideo.com/detail/amzn1.dv.gti.c1065d44-a359-47d3-9aca-303d118e3649",
      ottImage: '/images/ott/amazonprime.webp'
    },
    trailer: "https://www.youtube.com/watch?v=mmkLMXN_lpI",
    bookmark: false,
    starRating: false
  },

  {
    id: 46,
    type: "tvshow",
    image: "/images/tvshows/peaky-blinders.jpg",
    rating: "8.8",
    name: "Peaky Blinders",
    watchOption: {
      year: "2013-2022",
      runTime: "6 Seasons",
      rated: "TV-MA",
      genre: {one:"Crime", two:"Drama", three:null},
      story: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
      director: null,
      creator: {one: "Steven Knight", two:null},
      Stars: "Cillian Murphy - Paul Anderson - Sophie Rundle",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/80002479?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=oVzVdvGIC7U",
    bookmark: false,
    starRating: false
  },

  {
    id: 47,
    type: "tvshow",
    image: "/images/tvshows/better-call-saul.jpg",
    rating: "9.0",
    name: "Better Call Saul",
    watchOption: {
      year: "2015-2022",
      runTime: "6 Seasons",
      rated: "TV-MA",
      genre: {one:"Crime", two:"Drama", three:null},
      story: "The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White and Jesse Pinkman.",
      director: null,
      creator: {one: "Vince Gilligan", two:"Peter Gould"},
      Stars: "Bob Odenkirk - Rhea Seehorn - Jonathan Banks",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/80021955?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=HN4oydykJFc",
    bookmark: false,
    starRating: false
  },

  {
    id: 48,
    type: "tvshow",
    image: "/images/tvshows/narcos.jpg",
    rating: "8.8",
    name: "Narcos",
    watchOption: {
      year: "2015-2017",
      runTime: "3 Seasons",
      rated: "TV-MA",
      genre: {one:"Biography", two:"Crime", three:"Drama"},
      story: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
      director: null,
      creator: {one: "Carlo Bernard", two:"Chris Brancato"},
      Stars: "Pedro Pascal - Wagner Moura - Boyd Holbrook",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/80025172?source=imdb",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=xl8zdCY-abw",
    bookmark: false,
    starRating: false
  },

  {
    id: 49,
    type: "tvshow",
    image: "/images/tvshows/the-big-bang-theory.jpg",
    rating: "8.1",
    name: "The Big Bang Theory",
    watchOption: {
      year: "2007-2019",
      runTime: "12 Seasons",
      rated: "TV-PG",
      genre: {one:"Comedy", two:"Romance", three:null},
      story: "Aspiring film actress Penny moves into a Pasadena apartment across the hall from brilliant, but socially awkward, physicists Sheldon Cooper and Leonard Hofstadter and shows them how little they know about life outside of the lab.",
      director: null,
      creator: {one: "Chuck Lorre", two:"Bill Prady"},
      Stars: "Johnny Galecki - Jim Parsons - Kaley Cuoco",
      platform: "netflix",
      platformLink: "https://www.netflix.com/in/title/70143830",
      ottImage: '/images/ott/netflix.webp'
    },
    trailer: "https://www.youtube.com/watch?v=WBb3fojgW0Q",
    bookmark: false,
    starRating: false
  },

  {
    id: 50,
    type: "tvshow",
    image: "/images/tvshows/the-last-of-us.jpg",
    rating: "8.7",
    name: "The Big Bang Theory",
    watchOption: {
      year: "2023-",
      runTime: "1 Season",
      rated: "TV-MA",
      genre: {one:"Action", two:"Adventure", three:"Drama"},
      story: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
      director: null,
      creator: {one: "Neil Druckmann", two:"Craig Mazin"},
      Stars: "Pedro Pascal - Bella Ramsey - Anna Torv",
      platform: "jiocinema",
      platformLink: "https://www.jiocinema.com/tv-shows/-/3740001",
      ottImage: '/images/ott/jiocinema.webp'
    },
    trailer: "https://www.youtube.com/watch?v=uLtkt8BonwM",
    bookmark: false,
    starRating: false
  },
]


export default MoviesList;
