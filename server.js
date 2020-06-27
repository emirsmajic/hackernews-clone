const express = require("express")
const path = require("path")
const helmet = require("helmet")
const cors = require("cors")
const morgan = require("morgan")
const {
  getHomepageData,
  getNewData,
  getPastData,
  getShowData,
  getJobsData,
} = require("./scraper")

const app = express()

// initial middleware
// app.use(morgan("tiny"))
app.use(helmet())
app.use(cors())

// setting up folder for static assets
app.use(express.static(path.join(__dirname, "public")))

// setting up template engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

// routes
app.get("/", async (req, res) => {
  const data = await getHomepageData()
  return res.render("homepage", { data })
})

app.get("/new", async (req, res) => {
  const data = await getNewData()
  return res.render("new", { data })
})

app.get("/past", async (req, res) => {
  const data = await getPastData()
  return res.render("past", { data })
})

app.get("/show", async (req, res) => {
  const data = await getShowData()
  return res.render("show", { data })
})

app.get("/jobs", async (req, res) => {
  const data = await getJobsData()
  return res.render("jobs", { data })
})

app.get("*", (req, res) => res.render("404"))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}...`))
