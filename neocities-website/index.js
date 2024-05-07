/*
 * NeoReactCities.js, world's #best JavaScript (script for being interpreted by JVM) "framework"!
 *
 * Copyleft StarRflowerR -i2024
*/

var this_variable_is_soooooooooo_important_slash_j = undefined;

// I put methods I plan to use for this website into static classes
// to make code cleaner and the whole thing easier to comprehend as
// what it is doing at any given time.
class ContentAdders {
  static footer = document.getElementById("footer-paster");
  static #footerPasteContent = `
        <div class="cooler-footer">
          <footer class="footer-display">
            <img 
              src="assets/images/neocities.png"
              onerror="this.src='../assets/images/neocities.png';"
              alt="Neocities logo with a caption &quot;Powered by Neocities&quot;">
            <p>02.2024 - THIS_VERY_FEMTOSECOND, by ME</p>
          </footer>
        </div>
        <div class="post-footer">
          <a href="https://github.com/PerfectMach1ne/">#."GitHub repo"_</a>
        </div>
        <div class="post-footer">
          <p>#.EOF_</p>
        </div>
`;

  static footerPaster() {
    this.footer.innerHTML = this.#footerPasteContent;
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

class KbityRandomizer {
  static #kbityArray = [
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

  static kbityRandomizer() {
    function getRandomInt(min, max) {
      const minCeiled = Math.ceil(min);
      const maxFloored = Math.floor(max);
      return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    return this.#kbityArray[getRandomInt(0, this.#kbityArray.length - 1)];
  }
}

// All the ordinary utility function calls are below.
ContentAdders.footerPaster();

SelectorClassAdders.saveMarginsPaddings("ol");
SelectorClassAdders.saveMarginsPaddings("ul");
SelectorClassAdders.saveMarginsPaddings("dl");
SelectorClassAdders.saveMarginsPaddings("dt");
SelectorClassAdders.saveMarginsPaddings("dd");

document.getElementById("kbity").src=KbityRandomizer.kbityRandomizer();

// Shoutout to Vim motions girls (myself including)
