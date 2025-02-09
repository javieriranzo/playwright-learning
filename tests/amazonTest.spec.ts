import { test, expect } from '@playwright/test'

test('Acceder a la página de Amazon y buscar iphone', async ({ page }) => {
    await page.goto('https://www.amazon.es/'); 
    await page.locator('input[id=\'twotabsearchtextbox\']').fill('iphone 16');
    await page.keyboard.press('Enter');
    await expect(page.locator('//span[contains(@class, \'a-color-state\')]')).toBeVisible();
});