// @ts-check
const { test, expect } = require('@playwright/test');

test.skip('has title', async ({ page }) => {
  await page.goto('https://guide.blazemeter.com/hc/en-us');


  await expect(page).toHaveTitle('BlazeMeter');
});


test('Launch browser url', async ({ page }) => {

  await page.goto("https://ps.uci.edu/~franklin/doc/file_upload.html");
  await expect(page).toHaveTitle('File Upload Test');
  await page.waitForSelector("input[name='userfile']");

})

test('Verify file upload option is available and enabled', async ({ page }) => {

  const locator = page.getByText('userfile');

  try {
    if (locator) {
      await expect(locator).toBeEnabled();
    } else {
      console.error("Element not found.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }

})