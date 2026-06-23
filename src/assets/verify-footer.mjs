import { chromium } from 'playwright';

const routes = [
  { path: '/#/', name: 'Home', isHome: true },
  { path: '/#/our-story', name: 'Our Story', isHome: false },
  { path: '/#/our-services', name: 'Our Services', isHome: false },
  { path: '/#/who-we-are', name: 'Who We Are', isHome: false },
];

const browser = await chromium.launch();

for (const route of routes) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', err => errors.push(err.message));

  await page.goto(`http://localhost:5173${route.path}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // Scroll to bottom to trigger reveal animations
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);

  const newsTitle = await page.locator('.hp-news-title').textContent().catch(() => null);
  const newsTitleClass = await page.locator('.hp-news-title').getAttribute('class').catch(() => null);
  const newsCardCount = await page.locator('.hp-news-card').count();
  const relatedSectionCount = await page.locator('.hp-footer-related').count();
  const relatedLinks = relatedSectionCount > 0
    ? await page.locator('.hp-footer-related-links a').allTextContents()
    : [];
  const copyrightText = await page.locator('.hp-footer-copyright').textContent().catch(() => null);
  const footerColTitles = await page.locator('.hp-footer-col-title').allTextContents();

  console.log(`\n=== ${route.name} (${route.path}) ===`);
  console.log('News title:', JSON.stringify(newsTitle?.trim()));
  console.log('News title class (hp-in expected):', newsTitleClass);
  console.log('News cards count:', newsCardCount);
  console.log('Related Pages section present:', relatedSectionCount > 0, '(expected:', !route.isHome, ')');
  console.log('Related links:', relatedLinks);
  console.log('Copyright text:', JSON.stringify(copyrightText?.trim()));
  console.log('Footer column titles:', footerColTitles);
  console.log('Console/page errors:', errors);

  await page.close();
}

await browser.close();
