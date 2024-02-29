import { test, expect } from '@playwright/test';

test('Login with correct credentials (as external)', async ({ page }) => {
  await page.goto('https://qa-dora.tibagroup.com/');
  await expect(page.getByText('Sign In').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Corporate system' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Are you an external user?' }).nth(2)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Having issues with access?' }).nth(2)).toBeVisible();
  await page.getByRole('link', { name: 'Sign in as external.' }).click();
  await expect(page.locator('div').filter({ hasText: 'Email address' }).nth(4)).toBeVisible();
  await expect(page.locator('form div').nth(2)).toBeVisible();
  await expect(page.getByRole('link', { name: 'Forgot your password?' })).toBeVisible();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('testspc@iti.es');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Qazwer.11');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByRole('heading', { name: 'Operations' })).toBeVisible();
});

test('Login with incorrect credentials (as external)', async ({ page }) => {
  await page.goto('https://qa-dora.tibagroup.com/');
  await expect(page.getByText('Sign In').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sign in as external.' })).toBeVisible();
  await page.getByRole('link', { name: 'Sign in as external.' }).click();
  await page.getByText('Sign in as an external user').click();
  await expect(page.getByLabel('Username')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Email address' }).nth(4)).toBeVisible();
  await expect(page.locator('form div').nth(2)).toBeVisible();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('testspc@iti.es');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Qazwer.12');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('Sign In').first()).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Invalid username or password.' }).nth(2)).toBeVisible();
});

test('Forgot your password', async ({ page }) => {
  await page.goto('https://qa-dora.tibagroup.com/');
  await expect(page.getByRole('img', { name: 'Mojito Logo' })).toBeVisible();
  await expect(page.getByText('Sign In').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Corporate system' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Are you an external user?' }).nth(2)).toBeVisible();
  await expect(page.getByText('Having issues with access?')).toBeVisible();
  await page.getByRole('link', { name: 'Sign in as external.' }).click();
  await expect(page.locator('div').filter({ hasText: 'Email address' }).nth(4)).toBeVisible();
  await expect(page.locator('form div').nth(2)).toBeVisible();
  await expect(page.getByText('Forgot your password? Sign In')).toBeVisible();
  await page.getByRole('link', { name: 'Forgot your password?' }).click();
  await expect(page.getByText('Forgot password')).toBeVisible();
  await expect(page.getByText('To reset your password, enter')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Email address' }).nth(4)).toBeVisible();
  await expect(page.getByRole('button', { name: 'Send reset link' })).toBeVisible();
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('jiranzo@iti.es');
  await page.getByRole('link', { name: 'Back to sign in' }).click();
});