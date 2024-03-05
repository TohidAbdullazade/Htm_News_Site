// ===> SELECTORS <===
const infoIcons = document.querySelectorAll("#info-icon");

// ===> CONFIRM BOX <===
infoIcons.forEach((item) =>
  item.addEventListener("click", (e) => {
    if (e.target.id == "info-icon") {
      if (!confirm("Would you go to the detail page")) {
        e.preventDefault();
      }
    }
  })
);

//  ===> DATA AOS START SCRIPT <===
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ once: true });
});
