import fs from 'node:fs/promises'
import path from 'node:path'
import puppeteer from 'puppeteer'

const url = process.argv[2] || 'https://siren-series-72059376.figma.site/klantenservice'

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox','--disable-setuid-sandbox']
  })
  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(120000)
  await page.goto(url, { waitUntil: 'networkidle2' })

  // Allow client runtime to hydrate
  await page.waitForSelector('#container', { timeout: 60000 }).catch(() => {})
  // Wait a bit for content to load
  await new Promise(r => setTimeout(r, 3000))

  const html = await page.evaluate(() => document.documentElement.outerHTML)
  const outDir = path.join(process.cwd(), 'tmp')
  await fs.mkdir(outDir, { recursive: true })
  await fs.writeFile(path.join(outDir, 'klantenservice.html'), html, 'utf8')
  await page.screenshot({ path: path.join(outDir, 'klantenservice.png'), fullPage: true })
  await browser.close()
  console.log('Saved to tmp/klantenservice.html and tmp/klantenservice.png')
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
