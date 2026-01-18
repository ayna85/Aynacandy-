document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    // Toggle menu visibility on button click
    menuToggle.addEventListener('click', function () {
        mainNav.classList.toggle('active');
    });
<script>
const translations = {
  "en": {
    "hero_title": "Taste the Joy. Taste Ayna.",
    "hero_text": "Ayna Candy and Foods Production PLC delivers high-quality sweets...",
    "hero_cta": "EXPLORE OUR SWEETS"
  },
  "am": {
    "hero_title": "ጣፋጭ ማዳን። አይናን ይጠብቁ።",
    "hero_text": "አይና ኬንዲ እና ምግብ ማምረቻ ከአዳማ የተለየ እና ጥራት ያለው ምርት ይሰጣል።",
    "hero_cta": "ምርቶቻችንን ይመልከቱ"
  }
};

function setLanguage(lang) {
  document.getElementById("hero-title").innerText = translations[lang].hero_title;
  document.getElementById("hero-text").innerText = translations[lang].hero_text;
  document.getElementById("hero-cta").innerText = translations[lang].hero_cta;
}
</script>
    // Close menu when a link is clicked (for better mobile UX)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });
});

