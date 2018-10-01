var subject = document.querySelector(".before-and-after");
var scraper = document.querySelector(".subject-scraper");
var after = document.querySelector(".subject-after");

var distance = (window.innerWidth - subject.clientWidth) / 2;
window.onresize = recalculateDistance;

var px = 0;
var touches = [];

subject.addEventListener("mousemove", dragScraper, false);
subject.addEventListener("touchmove", dragScraper, false);

function recalculateDistance() {
  distance = (window.innerWidth - subject.clientWidth) / 2;
}

function dragScraper(event) {
  px = event.clientX - distance;

  if (px == null) {
    touches = event.touches;
    px = touches[0].clientX - distance;
  }

  if (px < 0) {
    px = 0;
  }

  scraper.style.transform = "translate(" + px + "px, 0)";
  after.style.transform = "translate(-" + px + "px, 0)";
}
