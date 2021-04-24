const fs = require("fs");
const cio = require("cheerio");
const puppeteer = require("puppeteer");

const catchAsync = require("./utils/catchAsync");

catchAsync(async () => {
  console.log("Launching Puppeteer 🐱‍🏍");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://jahid.dev/");
  await browser.close();
  console.log("Browser Closed 😴");
});
