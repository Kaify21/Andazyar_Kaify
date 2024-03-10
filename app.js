const arrows = document.querySelectorAll(".arrow");
const programLists = document.querySelectorAll(".program-list");

arrows.forEach((arrow, i) => {
  const itemNumber = programLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      programLists[i].style.transform = `translateX(${
        programLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      programLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});
