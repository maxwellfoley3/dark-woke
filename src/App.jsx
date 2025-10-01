import React from 'react';
import Header from './components/Header.jsx';
import IntroQuotes from './components/IntroQuotes.jsx';
import Subsection from './components/Subsection.jsx';
import Comments from './components/Comments.jsx';
import './App.css';

import darkWokeMilady from '/images/darkwokemilady.jpg';
import nickConvoScreenshot from '/images/nickconvoscreenshot.png';
import artandwill from '/images/artandwill.png';

const App = () => {
  const subsections = [
    {
      title: "I. Headlessness",
      abstract: "Society for better or for worse has been brought into the \"no gods no masters\" condition as desired by various libertine philosophers, Trump himself is a \"crowned anarch\" who marks in flamboyant fashion the absence of sovereignty in the helm of the collective, the inevitable trajectory of such a system is a kind of bordello society in which flesh is cattled around and in which people enter positions of prostration to those in proximity to them, thot jobs, discord kittens"
    },
    {
      title: "II. The Cybernetic Origins of Woke",
      abstract: "Wokeness was created from the top down as a way for Obama to consolidate power in the deep state (as he was simultaneously creating ISIS) to merge social media platforms in their growth phase with the deep state. The platforms would use psychological \"levers\" to cattle people around based on bodily identity categories into positions that enabled an (invisible, projected as absent) sovereignty. This had the doubling effect in which all occluded knowledge (eg conspiracy theories) becomes part of the right wing - the right becomes not an \"opposition\" but a \"shadow\"."
    },
    {
      title: "III. How Networks Ate Institutions",
      abstract: "Wokeness can be read as a pre-emptive move against the increased social mobility of motivated actors in the population given the new communication technologies. Institutions adopted wokeness so as to place actors in these positions of prostration to priestly figures within the institution to prevent the eating of the institution by clout-dynamics — it is always now possible for an individual to leverage social dynamics external to the institution and threaten defection to socially increase his power within the institution. Clout networks travel along \"politically incorrect\" pathways and are thus part of woke's \"shadow\" as well."
    },
    {
      title: "IV. The Clanker and the Anti-Soul",
      abstract: "In Buddhism, the earthly plane on which we live (in contrast to the heavenly realms above us in which gods sing and make love and drink ambrosia all day, and the hellish realms of hungry ghosts below us) is said to be the best possible location to reincarnate within, as it puts the most test on the soul to choose between good and evil. The middle class American, spared from a life of brute proletarian toil but certainly not spared from strife, is in a similar position. His primary concern is the state of his soul, he tends to care more for \"creative self actualization\" than amassing riches. The dreamweavers of Hollywood sell him impossible dreams, the true fantasy being sold that he might aid in the creation of these dreams, and become the man behind the curtain himself. At scale, this technology is a kind of electric replacement of ciilizational spiritual technology with a spiritual technology that replaces the spiritual quest for ascension with a kind of spiritual quest that circulates within the bordello. This cannot be simply \"opted out of\" through nostalgic fantasy, consider the paradoxical figure of the \"trad influencer\"."
    },
    {
      title: "V. Dark Abundance",
      abstract: "Growth in human population necessitates the restriction of human potential and its replacement with pseudo-potential, as if every man was empowered to act in his full manhood it would be the equivalent of having a society where everyone is carrying rocket launchers. Thus our only hopes for a society in which human potential is actualized are genocide on a never before seen scale or to aim for a limitless growth which moves beyond this planet. However, the catch-22 is that the deteriorating condition of man seems to ensure that he will not be able to escape this planet, or will not be prepared to. Nothing can presently be done to remedy this as an intervention in political world-systems, rather individuals are called on to make an intervention on the level of their own souls to prepare themselves for potential conditions of development rather than decadence."
    },
    {
      title: "VI. NYC & Surrealism",
      abstract: "The NYC art scene has always been a kind of nihilistic Warholian simulacrum of the Paris art scene which existed pre WW2. Art is not something which especially harnesses the mantle of destiny, given disasters like Hitler the artist becoming too powerful and deadly after entering politics. Parisian Surrealism must be restored to its proper historical meaning as not entirely a form of familiar picture-making, but a conceptual and literary technique of magical realism, reaching its zenith in Bataille. As the garbage-time of the post-WW2 control architecture expires, new horizons once more open in the center of the Megalopolis."
    }
  ];

  return (
    <div className="App">
      <Header />
      <div id="container">
        <IntroQuotes />
        <div id="image-container">
          <img src={darkWokeMilady} alt="Dark Woke Milady" />
        </div>
        <div id="image-container">
          <img src={nickConvoScreenshot} alt="Screenshot of text conversation about hopeful noir" />
        </div>
        <h2>Dark Woke</h2>
        <h3>An attempt to start in the middle</h3>
        <div id="subsection">
          {subsections.map((section, index) => (
            <Subsection
              key={index}
              title={section.title}
              abstract={section.abstract}
            />
          ))}
        </div>
        <div id="image-container">
          <img src={artandwill} alt="Screenshot of text conversation about the relationship between art and will" />
        </div>
        <div id="intro-quotes">
          <i>
            <p>"Diversity and multiculturalism is lowkey cool asf despite abounding chaos and new stabilizations toward Lindy and non-Lindy evolutionary equilibriums.</p>
            <p>Diversity and multiculturalism in NYC isn't some tidy harmony; it's a messy, unstable equilibrium where groups collide, remix, and adapt. But that very churn creates robustness.</p>
            <p>Think about it in Lindy terms: cultures that can survive constant friction and cross-pollination last. The weak ideas burn out, the strong ones evolve, and entirely new hybrids emerge. That's why street food, slang, music scenes, even fashion in multicultural cities end up going global cuz they stress-tested in chaos."</p>
          </i>
          <p>- 777ur7o777a7ma777</p>
        </div>
        <Comments sectionId={0}/>
      </div>
    </div>
  );
};

export default App;
