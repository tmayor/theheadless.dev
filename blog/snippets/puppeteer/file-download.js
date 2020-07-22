const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  await page.goto('https://danube-store.herokuapp.com/')
  
  await page.setViewport({ width: 1200, height: 800 })
  
  await page.waitForSelector(' #login')
  await page.click('#login')
  
  await page.waitForSelector('#n-email')
  
  await page.type('#n-email', 'user@email.com')
  await page.type('#n-password2', 'supersecure1');
  
  await page.waitForSelector('#goto-signin-btn')
  await page.click('#goto-signin-btn')
  
  await page.waitForSelector('#account')
  await page.click('#account')
  
  await page.waitForSelector('#orders > ul > li:nth-child(1) > a')
  await page.click('#orders > ul > li:nth-child(1) > a')
  
  await browser.close()
})()