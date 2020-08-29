const points = document.querySelectorAll("span#points")

points.forEach((point) => {
  const numberOfPoints = parseInt(point.innerText.split(" ")[0])
  if (!numberOfPoints) point.style.padding = "0px"
  if (numberOfPoints > 150) {
    point.style.color = "#276749"
    point.style.background = "#F0FFF4"
  } else {
    point.style.color = "#E53E3E"
    point.style.background = "#FFF5F5"
  }
})
