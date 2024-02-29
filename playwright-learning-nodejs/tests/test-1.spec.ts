import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-dora.tibagroup.com/');
  await page.goto('https://qa-dora.tibagroup.com/login?redirect=%2Foperations');
  await page.goto('https://qa-identity.tibagroup.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Ddora%26redirect_uri%3Dhttps%253A%252F%252Fqa-dora.tibagroup.com%252Fauth-callback%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520dora_api%2520tiba-user-management%2520purchase_and_quote_api%2520dora_entities_api%2520tiba_md_api%2520IdentityServerApi%26state%3D2f7604f9c17e498b83ed63d4cf8b2956%26code_challenge%3D6xlZACEXR4CN91uJv-ETobSGv38It_-HXWJ_29WK2Tg%26code_challenge_method%3DS256%26response_mode%3Dquery');
  await page.getByRole('link', { name: 'Sign in as external.' }).click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('testspc@iti.es');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('Qazwer.11');
  await page.getByLabel('Password').press('Enter');
});