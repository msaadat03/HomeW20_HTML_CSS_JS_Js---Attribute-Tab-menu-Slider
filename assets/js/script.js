let infoContainers = document.querySelectorAll("#news .info-container");
let nxtBtn = document.querySelectorAll("#news .toright");
let preBtn = document.querySelectorAll("#news .toleft");

infoContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
