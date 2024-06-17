document.addEventListener("DOMContentLoaded", function () {
  var loadingBar = document.getElementById("loading-bar");
  var width = 0;
  var interval = setInterval(function () {
    if (width >= 100) {
      clearInterval(interval);
      loadingBar.style.width = "0%";
    } else {
      width++;
      loadingBar.style.width = width + "%";
    }
  }, 60);
});

function createStars() {
  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");
    const height = Math.random() * 100;
    const width = Math.random() * 100;
    star.className = "star";
    star.style.left = height + "%";
    star.style.top = width + "%";
    document.body.appendChild(star);
  }
}

createStars();

function moonClicked() {
  document.getElementById("earth").classList.toggle("rotate");
  document.getElementById("sun").classList.toggle("rotate");

  var container = document.getElementById("container");
  container.style.display = "none";

  var middleSectionTwo = document.getElementById("middleSectionTwo");
  middleSectionTwo.style.display = "block";
  middleSectionTwo.style.paddingTop = "200px";

  var middleSection = document.getElementById("middleSection");
  middleSection.style.display = "none";
  middleSection.style.paddingTop = "200px";

  var moonImage = document.getElementById("moonImage");
  moonImage.style.position = "relative";
  moonImage.style.left = "20%";

  var buttomSection = document.getElementById("buttomSection");
  buttomSection.style.display = "none";
}
