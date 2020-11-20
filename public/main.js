const points = document.querySelectorAll("span#points")

points.forEach((point) => {
  const numberOfPoints = parseInt(point.innerText.split(" ")[0])
  if (!numberOfPoints) point.style.padding = "0px"
  if (numberOfPoints > 150) {
    point.style.color = "#047857"
  } else {
    point.style.color = "#E11D48"
  }
})
