const cheerio = require("cheerio")
const axios = require("axios")

const HOME_NEWS_URL = "https://news.ycombinator.com/news"
const NEW_NEWS_URL = "https://news.ycombinator.com/newest"
const PAST_NEWS_URL = "https://news.ycombinator.com/front"
const SHOW_NEWS_URL = "https://news.ycombinator.com/show"
const JOBS_NEWS_URL = "https://news.ycombinator.com/jobs"

async function collectData(newsType) {
  let url
  switch (newsType) {
    case "homepage":
      url = HOME_NEWS_URL
      break
    case "new":
      url = NEW_NEWS_URL
      break
    case "past":
      url = PAST_NEWS_URL
      break
    case "show":
      url = SHOW_NEWS_URL
      break
    case "jobs":
      url = JOBS_NEWS_URL
      break
  }

  const response = await axios.get(url)
  const $ = cheerio.load(response.data)
  let data = []

  const basicData = Array.from($(".storylink"))
  const scores = Array.from($(".score"))
  const times = Array.from($(".age"))

  basicData.forEach((news, index) => {
    data.push({
      title: $(news).text(),
      link: $(news).attr("href"),
      points: $(scores[index]).text(),
      time: $(times[index]).text(),
    })
  })

  return data
}

module.exports = {
  collectData,
}
