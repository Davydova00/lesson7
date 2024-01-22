
import { test, expect, chromium} from '@playwright/test';
const { firefox } = require('playwright');

test('My work site, checking mane page', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.pause();
  await page.goto('https://uadreams.com/');
  await expect(page).toHaveTitle('Ukrainian Dating Service and Single Ladies for Marriage at UADreams.com');
  await page.waitForTimeout(3000);
  await page.getByAltText('login_main_image_6').isVisible();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByPlaceholder('Username or E-mail').click();
  await page.getByPlaceholder('Username or E-mail').fill('1466755');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('123456789');
  await page.locator('form').getByRole('button').first().click();
  await page.locator('form').getByRole('button').first().click();
  await page.locator('form').getByRole('button', { name: 'Log in' }).click();
  await page.getByText('Wrong password or login,').click();
  await page.getByRole('button', { name: 'Forgot password?' }).click();
  await page.getByRole('button', { name: 'I didn\'t forget password' }).click();
  await page.pause();
  await page.locator('//*[@id="root"]/div/header/div[1]/nav/ul/li[1]/a').hover();
  await page.waitForTimeout(3000);
  await page.locator('//*[@id="root"]/div/header/div[2]/div/div/div[2]').hover();
  page.locator('//*[@id="root"]/div/header/div[2]/div/div/div[2]/ul')
  .locator('li',{
    has:page.locator('a span'),
    hasText: 'What does Ukrainian woman want?'
  }).click();
  await page.pause();
  await page.locator('#root > div > header > div.desktop-module__main-menu___Em9ZL > nav > ul > li:nth-child(1) > a').hover();
  await expect(page.locator('#root > div > header > div.desktop-module__main-menu___Em9ZL > nav > ul > li:nth-child(1) > a')).toHaveText('Ladies');
await page.waitForTimeout(3000);
  await page.close();
  await browser.close();

});


test('maps', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.waitForTimeout(3000);
  await page.goto('https://www.google.com/maps/dir//49.837230,+24.035886/@49.8371708,23.9534384,12z/data=!3m1!4b1!4m6!4m5!1m0!1m3!2m2!1d24.035886!2d49.83723?hl=uk-UK&entry=ttu');
  await page.getByPlaceholder('Виберіть початкову точку чи натисніть на карту…').click();
  await page.pause();
  await page.locator('canvas').first().click({
    position: {
      x: 631,
      y: 74
    }
  });
  await page.getByRole('radio', { name: 'Пішки 2 год' }).click();

  await browser.close();
});
 

