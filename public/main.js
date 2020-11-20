const points = document.querySelectorAll("span#points")

points.forEach((point) => {
  const numberOfPoints = parseInt(point.innerText.split(" ")[0])
  if (!numberOfPoints) point.style.padding = "0px"
  if (numberOfPoints > 150) {
    point.style.background = "#ECFDF5"
    point.style.borderColor = "#A7F3D0"
    point.style.color = "#059669"
  } else {
    point.style.background = "#FFF1F2"
    point.style.borderColor = "#FECDD3"
    point.style.color = "#E11D48"
  }
})
