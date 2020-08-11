const express = require("express")
const path = require("path")
const helmet = require("helmet")
const cors = require("cors")
const morgan = require("morgan")
const { collectData } = require("./scraper")

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
  const data = await collectData("homepage")
  return res.render("layout", { data })
})

app.get("/new", async (req, res) => {
  const data = await collectData("new")
  return res.render("layout", { data })
})

app.get("/past", async (req, res) => {
  const data = await collectData("past")
  return res.render("layout", { data })
})

app.get("/show", async (req, res) => {
  const data = await collectData("show")
  return res.render("layout", { data })
})

app.get("/jobs", async (req, res) => {
  const data = await collectData("jobs")
  return res.render("layout", { data })
})

app.get("*", (req, res) => res.render("layout"))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}...`))
