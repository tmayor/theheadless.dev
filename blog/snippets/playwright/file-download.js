const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch()
  const context = await browser.newContext({acceptDownloads: true });
  const page = await context.newPage()
  
  await page.goto('https://danube-store.herokuapp.com/')
  
  await page.click('#login')
  await page.type('#n-email', 'user@email.com')
  await page.type('#n-password2', 'supersecure1');
  
  await page.click('#goto-signin-btn')
  
  await page.click('#account')
  
  await page.waitForSelector('#orders > ul > li:nth-child(1) > a')

  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.click('#orders > ul > li:nth-child(1) > a')
  ]);
  const path = await download.path();
  console.log(path)
  
  await browser.close()
})()