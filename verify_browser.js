import puppeteer from 'puppeteer-core';

async function run() {
  const edgePath = 'C:\\\\Program Files (x86)\\\\Microsoft\\\\Edge\\\\Application\\\\msedge.exe';
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', err => consoleErrors.push(err.toString()));

  // 1. Desktop Viewport (1440x900)
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  await page.screenshot({
    path: 'C:/Users/dassu/.gemini/antigravity/brain/bdedbe02-4baf-4151-8ab6-bc3204e23348/screenshot_desktop.png',
    fullPage: false
  });

  // 2. Full Page Desktop
  await page.screenshot({
    path: 'C:/Users/dassu/.gemini/antigravity/brain/bdedbe02-4baf-4151-8ab6-bc3204e23348/screenshot_full.png',
    fullPage: true
  });

  // 3. Mobile Viewport (375x812)
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await page.screenshot({
    path: 'C:/Users/dassu/.gemini/antigravity/brain/bdedbe02-4baf-4151-8ab6-bc3204e23348/screenshot_mobile.png',
    fullPage: false
  });

  console.log('=== CONSOLE ERRORS ===');
  console.log(JSON.stringify(consoleErrors));
  console.log('=== VERIFICATION COMPLETED ===');

  await browser.close();
}

run().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
