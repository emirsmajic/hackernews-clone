const cheerio = require("cheerio")
const axios = require("axios")

const HOME_NEWS_URL = "https://news.ycombinator.com/news"
const NEW_NEWS_URL = "https://news.ycombinator.com/newest"
const PAST_NEWS_URL = "https://news.ycombinator.com/front"
const SHOW_NEWS_URL = "https://news.ycombinator.com/show"
const JOBS_NEWS_URL = "https://news.ycombinator.com/jobs"

async function collectData(url) {
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

async function getHomepageData() {
  return await collectData(HOME_NEWS_URL)
}

async function getNewData() {
  return await collectData(NEW_NEWS_URL)
}

async function getPastData() {
  return await collectData(PAST_NEWS_URL)
}

async function getShowData() {
  return await collectData(SHOW_NEWS_URL)
}

async function getJobsData() {
  return await collectData(JOBS_NEWS_URL)
}

module.exports = {
  getHomepageData,
  getNewData,
  getPastData,
  getShowData,
  getJobsData,
}
