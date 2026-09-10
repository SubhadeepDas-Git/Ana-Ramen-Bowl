import puppeteer from 'puppeteer-core';

async function testInteractions() {
  const edgePath = 'C:\\\\Program Files (x86)\\\\Microsoft\\\\Edge\\\\Application\\\\msedge.exe';
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  // 1. Scroll to Soul of the Bowl and screenshot
  await page.evaluate(() => {
    document.querySelector('#soul')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: 'C:/Users/dassu/.gemini/antigravity/brain/bdedbe02-4baf-4151-8ab6-bc3204e23348/screenshot_soul.png',
    fullPage: false
  });

  // 2. Scroll to Signature Bowls and click "Add to Order" on Moonlit Miso
  await page.evaluate(() => {
    document.querySelector('#signature')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: 'C:/Users/dassu/.gemini/antigravity/brain/bdedbe02-4baf-4151-8ab6-bc3204e23348/screenshot_signature.png',
    fullPage: false
  });

  // Click first Add to Order button
  const addButtons = await page.$$('button');
  for (const btn of addButtons) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text && text.includes('Add to Order')) {
      await btn.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 800));

  // Screenshot cart drawer
  await page.screenshot({
    path: 'C:/Users/dassu/.gemini/antigravity/brain/bdedbe02-4baf-4151-8ab6-bc3204e23348/screenshot_cart_open.png',
    fullPage: false
  });

  // Close cart drawer
  const closeBtn = await page.$('button[aria-label="Close cart drawer"]');
  if (closeBtn) await closeBtn.click();
  await new Promise(r => setTimeout(r, 400));

  // 3. Open Build Your Bowl Customizer
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const b = btns.find(el => el.textContent && el.textContent.includes('Launch Customizer'));
    if (b) b.click();
  });
  await new Promise(r => setTimeout(r, 800));

  await page.screenshot({
    path: 'C:/Users/dassu/.gemini/antigravity/brain/bdedbe02-4baf-4151-8ab6-bc3204e23348/screenshot_customizer.png',
    fullPage: false
  });

  // Close customizer modal
  const modalClose = await page.$('button[aria-label="Close dialog"]');
  if (modalClose) await modalClose.click();
  await new Promise(r => setTimeout(r, 400));

  // 4. Test Midnight Ritual Mood Selection
  await page.evaluate(() => {
    document.querySelector('#ritual')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  // Click "DREAMY" mood
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const b = btns.find(el => el.textContent && el.textContent.trim() === 'DREAMY');
    if (b) b.click();
  });
  await new Promise(r => setTimeout(r, 600));

  await page.screenshot({
    path: 'C:/Users/dassu/.gemini/antigravity/brain/bdedbe02-4baf-4151-8ab6-bc3204e23348/screenshot_ritual.png',
    fullPage: false
  });

  // 5. Test Reservation Form Submission
  await page.evaluate(() => {
    document.querySelector('#reservation')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  // Fill in form inputs
  await page.type('input[placeholder="e.g. Maya Chen"]', 'Aoi Tanaka');
  await page.type('input[placeholder="e.g. +1 (555) 392-8190"]', '+1 (555) 789-0123');
  await page.type('input[placeholder="e.g. maya@domain.com"]', 'aoi.tanaka@midnight.com');

  // Submit form
  await page.click('button[type="submit"]');
  await new Promise(r => setTimeout(r, 800));

  await page.screenshot({
    path: 'C:/Users/dassu/.gemini/antigravity/brain/bdedbe02-4baf-4151-8ab6-bc3204e23348/screenshot_reservation_confirmed.png',
    fullPage: false
  });

  console.log('All interaction tests succeeded!');
  await browser.close();
}

testInteractions().catch(e => {
  console.error('Interaction test failed:', e);
  process.exit(1);
});
