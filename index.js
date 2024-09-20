/*
 * DECLARATIONS
 */
let contentAdderInstance;
const kbityArray = [
  "assets/images/KBITY_TRANSEDEN_TEAL_HEHE_.png",
  "assets/images/kbity-antinihility-black.png",
  "assets/images/kbity-chroniclers-gray.png",
  "assets/images/kbity-dante-green.png",
  "assets/images/kbity-abyssal-lavender.png",
  "assets/images/kbity-magical-pink.png",
  "assets/images/kbity-mainframe-cerulean.png",
  "assets/images/kbity-matrix-green.png",
  "assets/images/kbity-order-teal.png",
  "assets/images/kbity-otherworldly-blue.png",
  "assets/images/kbity-pandemonium-red.png",
  "assets/images/kbity-relentless-magenta.png",
  "assets/images/kbity-system-blue.png",
  "assets/images/kbity-the-fifth-crimson.png",
]

/*
 * FUNCTIONS & HELPER CLASSES
 */
// This is so pointless but okay girl. have fun i guess.
class ContentAddersSingleton {
  constructor() {
    if (contentAdderInstance) {
      throw new Error("Programmer attempted to create a second singleton ...why?");
    }

    contentAdderInstance = this;
  }

  getInstance() {
    return this;
  }

  footerPaster() {
    var footer = document.getElementById("footer-paster");
    footer.innerHTML = `
        <div class="cooler-footer">
          <footer class="footer-display">
            <img 
              src="assets/images/neocities.png"
              onerror="this.src='../assets/images/neocities.png';"
              alt="Neocities logo with a caption &quot;Powered by Neocities&quot;">
            <p>02.2024 - 09.2024, by LVSA</p>
          </footer>
        </div>
        <div class="post-footer">
          <a href="https://github.com/PerfectMach1ne/">#."Me GitHub"_</a>
        </div>
        <div class="post-footer">
          <p>#.EOF_</p>
        </div>
`; 
  }
}

class SelectorClassAdders {
  static #cssSelectors = {
    marginPaddingSaviour: "margin-padding-saviour"
  }
  
  static saveMarginsPaddings(htmlTag) {
    var elements = document.getElementsByTagName(htmlTag);

    for (var i = 0; i < elements.length; i++) {
      elements.item(i).classList.add(this.#cssSelectors.marginPaddingSaviour);
    }
  }
}

function kbityRandomizer() {
  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  return kbityArray[getRandomInt(0, kbityArray.length - 1)];
}

/*
 * FUNCTIONALITY
 */
// ContentAdders.footerPaster();
contentAdderInstance = new ContentAddersSingleton();
contentAdderInstance.getInstance().footerPaster();

SelectorClassAdders.saveMarginsPaddings("ol");
SelectorClassAdders.saveMarginsPaddings("ul");
SelectorClassAdders.saveMarginsPaddings("dl");
SelectorClassAdders.saveMarginsPaddings("dt");
SelectorClassAdders.saveMarginsPaddings("dd");

document.getElementById("kbity-left").src = kbityRandomizer();
document.getElementById("kbity-right").src = kbityRandomizer();

const button_ids = ["cv-puter", "blog-puter", "nw4", "omega-psi", "co-re"]
let buttons = Array();
button_ids.forEach((id_str) => {
  buttons.push(document.getElementById(id_str));
});
buttons.forEach((butt) => {
  butt.addEventListener("click", () => {
    window.location = window.origin + "/views-pages/" + butt.id + ".html";
  })
})

// Shoutout to Vim motions girls (myself including)
