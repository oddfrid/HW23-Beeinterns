const addHeroSection = (heroId) => {
  document.querySelector('img[class="hero-img"').setAttribute('alt', 'hero');
  document.querySelector('button[class="fullscreen-btn"').removeAttribute('hidden');
  document.querySelector('button[class="fullscreen-btn"').innerText = 'Open image in fullscreen';
  switch (heroId) {
    case ('dr'):
      document.querySelector('h2[class="hero-name"]').innerText = 'Dr.Strandge';
      document.querySelector('img[class="hero-img"').setAttribute('src', 'img/hsKCzxe.jpg');
      document.querySelector('p[class="hero-info"]').innerText = `Doctor Stephen Strange is a fictional superhero appearing in American comic books published by Marvel Comics. Created by artist Steve Ditko and writer Stan Lee,[5] the character first appeared in Strange Tales #110 (cover-dated July 1963). Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats. Inspired by stories of black magic and Chandu the Magician, Strange was created during the Silver Age of Comic Books to bring a different kind of character and themes of mysticism to Marvel Comics.
  
      The character begins as an egotistical surgeon who loses the ability to operate after a car crash severely damages his hands. Searching the globe for healing, he encounters the Ancient One, the Sorcerer Supreme. Strange becomes his student, and learns to be a master of both the mystical and the martial arts. He acquires an assortment of mystical objects, including the powerful Eye of Agamotto and Cloak of Levitation, and takes up residence in a New York City mansion called the Sanctum Sanctorum. Strange assumes the title of Sorcerer Supreme and, with his friend and valet Wong, defends the world from mystical threats.
      
      The character was first portrayed in live-action by Peter Hooten in the 1978 television film Dr. Strange. Benedict Cumberbatch portrays the character in the Marvel Cinematic Universe films Doctor Strange (2016), Thor: Ragnarok (2017), Avengers: Infinity War (2018), and Avengers: Endgame (2019). Cumberbatch will reprise the role in the sequel Doctor Strange in the Multiverse of Madness (2022).`;
      break;
    case ('ant'):
      document.querySelector('h2[class="hero-name"]').innerText = 'Ant-man';
      document.querySelector('img[class="hero-img"').setAttribute('src', 'img/dO0yQpu.jpg');
      document.querySelector('p[class="hero-info"]').innerText = `Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 12th film in the Marvel Cinematic Universe (MCU). The film was directed by Peyton Reed from a screenplay by the writing teams of Edgar Wright and Joe Cornish, and Adam McKay and Paul Rudd. It stars Rudd as Scott Lang / Ant-Man alongside Evangeline Lilly, Corey Stoll, Bobby Cannavale, Michael Peña, Tip "T.I." Harris, Anthony Mackie, Wood Harris, Judy Greer, David Dastmalchian, and Michael Douglas as Hank Pym. In the film, Lang must help defend Pym's Ant-Man shrinking technology and plot a heist with worldwide ramifications.

      Development of Ant-Man began in April 2006 with the hiring of Wright to direct and co-write with Cornish. By April 2011, Wright and Cornish had completed three drafts of the script and Wright shot test footage for the film in July 2012. Pre-production began in October 2013 after being put on hold so that Wright could complete The World's End. Casting began in December 2013, with the hiring of Rudd to play Lang. In May 2014, Wright left the project citing creative differences, though he still received screenplay and story credits with Cornish as well as an executive producer credit. The following month, Reed was brought in to replace Wright, while McKay was hired to contribute to the script with Rudd. Filming took place between August and December 2014 in San Francisco and Metro Atlanta.
      
      Ant-Man held its world premiere in Los Angeles on June 29, 2015, and was released in the United States on July 17, as the last film in Phase Two of the MCU. It grossed more than $519 million worldwide and received positive reviews from critics, who generally welcomed the film's smaller stakes than other MCU films, as well as its cast (particularly Rudd, Peña, Lilly, and Douglas), humor, and visual effects. A sequel, Ant-Man and the Wasp, was released in 2018. A third film is in development for a potential 2022 release.`;
      break;
    case ('iron'):
      document.querySelector('h2[class="hero-name"]').innerText = 'Iron man';
      document.querySelector('img[class="hero-img"').setAttribute('src', 'img/8enncLP.jpg');
      document.querySelector('p[class="hero-info"]').innerText = `Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963), and received his own title in Iron Man #1 (May 1968).

      A wealthy American business magnate, playboy, and ingenious scientist, Anthony Edward "Tony" Stark suffers a severe chest injury during a kidnapping. When his captors attempt to force him to build a weapon of mass destruction, he instead creates a mechanized suit of armor to save his life and escape captivity. Later, Stark develops his suit, adding weapons and other technological devices he designed through his company, Stark Industries. He uses the suit and successive versions to protect the world as Iron Man. Although at first concealing his true identity, Stark eventually declared that he was, in fact, Iron Man in a public announcement.
      
      Initially, Iron Man was a vehicle for Stan Lee to explore Cold War themes, particularly the role of American technology and industry in the fight against communism. Subsequent re-imaginings of Iron Man have transitioned from Cold War motifs to contemporary matters of the time.
      
      Throughout most of the character's publication history, Iron Man has been a founding member of the superhero team the Avengers and has been featured in several incarnations of his own various comic book series. Iron Man has been adapted for several animated TV shows and films. The Marvel Cinematic Universe character was portrayed by Robert Downey Jr. in the Marvel Cinematic Universe films Iron Man (2008), The Incredible Hulk (2008) in a cameo, Iron Man 2 (2010), The Avengers (2012), Iron Man 3 (2013), Avengers: Age of Ultron (2015), Captain America: Civil War (2016), Spider-Man: Homecoming (2017), Avengers: Infinity War (2018), Avengers: Endgame (2019), Spider-Man: Far From Home (2019) in archive footage, and will reprise his role in Black Widow (2020).`;
      break;
    case ('pant'):
      document.querySelector('h2[class="hero-name"]').innerText = 'Black panther';
      document.querySelector('img[class="hero-img"').setAttribute('src', 'img/Hykr7by.jpg');
      document.querySelector('p[class="hero-info"]').innerText = `Black Panther is a fictional superhero appearing in American comic books published by Marvel Comics. The character was created by writer-editor Stan Lee and writer-artist Jack Kirby, first appearing in Fantastic Four #52 (cover-dated July 1966) in the Silver Age of Comic Books. Black Panther's real name is T'Challa, and he is depicted as the king and protector of the fictional African nation of Wakanda. Along with possessing enhanced abilities achieved through ancient Wakandan rituals of drinking the essence of the heart-shaped herb, T'Challa also relies on his proficiency in science, rigorous physical training, hand-to-hand combat skills, and access to wealth and advanced Wakandan technology to combat his enemies.

      Black Panther is the first superhero of African descent in mainstream American comics, having debuted years before early black superheroes such as Marvel Comics' the Falcon (1969), Luke Cage (1972) and Blade (1973) or DC Comics' John Stewart in the role of Green Lantern (1971). In one comic book storyline, the Black Panther mantle is handled by Kasper Cole, a multiracial New York City police officer. Beginning as an impersonator, Cole would later take on the moniker of White Tiger and become an ally to T'Challa. The role of Black Panther and leadership of Wakanda is also given to T'Challa's sister Shuri for a short time.
      
      Black Panther has made numerous appearances in various television shows, animated films and video games. Chadwick Boseman portrays the character in the Marvel Cinematic Universe films Captain America: Civil War (2016), Black Panther (2018), Avengers: Infinity War (2018), and Avengers: Endgame (2019). Boseman will return in the upcoming sequel to Black Panther (2022).`;
      break;
    case ('hulk'):
      document.querySelector('h2[class="hero-name"]').innerText = 'The Hulk';
      document.querySelector('img[class="hero-img"').setAttribute('src', 'img/NqyZ3ue.jpg');
      document.querySelector('p[class="hero-info"]').innerText = `The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character is both the Hulk, a green-skinned, hulking and muscular humanoid possessing a vast degree of physical strength, and his alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist, the two existing as independent personalities and resenting of the other.

      Following his accidental exposure to gamma rays saving the life of Rick Jones during the detonation of an experimental bomb, Banner is physically transformed into the Hulk when subjected to emotional stress, at or against his will, often leading to destructive rampages and conflicts that complicate Banner's civilian life. The Hulk's level of strength is normally conveyed as proportionate to his level of anger. Commonly portrayed as a raging savage, the Hulk has been represented with other personalities based on Banner's fractured psyche, from a mindless, destructive force, to a brilliant warrior, or genius scientist in his own right. Despite both Hulk and Banner's desire for solitude, the character has a large supporting cast, including Banner's lover Betty Ross, his best friend Rick Jones, his cousin She-Hulk, therapist and ally Doc Samson, and his co-founders of the superhero team the Avengers, etc. However, his uncontrollable power has brought him into conflict with his fellow heroes and others. Despite this he tries his best to do what's right while battling villains such as Leader, Abomination, Absorbing Man and more.
      
      Lee stated that the Hulk's creation was inspired by a combination of Frankenstein and Dr. Jekyll and Mr. Hyde. Although the Hulk's coloration has varied throughout the character's publication history, the most usual color is green.`;
      break;
    default:
      break;
  }
};

document.getElementById('dr').addEventListener('click', () => addHeroSection('dr'));
document.getElementById('ant').addEventListener('click', () => addHeroSection('ant'));
document.getElementById('iron').addEventListener('click', () => addHeroSection('iron'));
document.getElementById('pant').addEventListener('click', () => addHeroSection('pant'));
document.getElementById('hulk').addEventListener('click', () => addHeroSection('hulk'));
