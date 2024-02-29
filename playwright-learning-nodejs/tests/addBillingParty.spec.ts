import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://qa-dora.tibagroup.com/');
    await expect(page.getByText('Sign In Sign in as an')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign in as external.' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign in as external.' }).click();
    await expect(page.getByText('Sign In Sign in as an')).toBeVisible();
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('testspc@iti.es');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Qazwer.11');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page.getByRole('heading', { name: 'Operations' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'New Operation' })).toBeVisible();
    await page.getByLabel('Data grid').getByText('OP01070811').click();
    await expect(page.locator('app-operation-file-header').getByText('OP01070811')).toBeVisible();
    await expect(page.getByText('Billing Party', { exact: true })).toBeVisible();
    await page.locator('#mat-chip-list-input-12').click();
    await page.locator('#mat-chip-list-input-12').fill('PONDECOR');
    await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.locator('snack-bar-container')).toBeVisible();
  });