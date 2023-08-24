import { expect, test } from '@playwright/test';

test.describe('index page', () => {

	test.beforeEach(async ({page}) => {
		await page.goto('/');
	});

	test('has title', async ({page}) => {
		await expect(page).toHaveURL('/');
		await expect(page).toHaveTitle(/Portfolio/);
	});
	
	test('index page has expected h1', async ({ page }) => {
		await expect(page).toHaveURL('/');
		await expect(page.getByRole('heading', { name: 'Hi, my name is' })).toBeVisible();
	});
	
	test('has cv button', async ({page}) => {
		await expect(page).toHaveURL('/');
		await expect(page.getByRole('link', {name: 'Get my CV'})).toBeVisible();
	});

	test('test dark mode switch', async ({page}) => {
		await expect(page).toHaveURL('/');
		//not working with skeleton theme
		await page.evaluate(() => matchMedia('(prefers-color-scheme: light)').matches);
		await page.evaluate(() => matchMedia('(prefers-color-scheme: dark)').matches);
		await page.evaluate(() => matchMedia('(prefers-color-scheme: no-preference)').matches);
		const LightSwitch = page.getByLabel('light switch');
		await expect(LightSwitch).toBeVisible();
		await LightSwitch.click();
		//not working with skeleton theme
		await page.evaluate(() => matchMedia('(prefers-color-scheme: light)').matches);
		await page.evaluate(() => matchMedia('(prefers-color-scheme: dark)').matches);
		await page.evaluate(() => matchMedia('(prefers-color-scheme: no-preference)').matches);
	});
});

test.describe('about me page', () => {
	test.beforeEach(async ({page}) => {
		await page.goto('/about');
	});

	test('has title', async ({page}) => {
		await expect(page).toHaveURL(/\/about/);
		await expect(page).toHaveTitle(/About me/);
	});

	test('index page has expected h1', async ({ page }) => {
		await expect(page).toHaveURL(/\/about/);
		await expect(page.getByRole('heading', { name: 'About me' })).toBeVisible();
	});

	test('has card titles',async ({page}) => {
		await expect(page).toHaveURL(/\/about/);
		await expect(page.getByRole('heading', { name: 'Technical skills'})).toBeVisible();
		await expect(page.getByRole('heading', { name: 'Education'})).toBeVisible();
		await expect(page.getByRole('heading', { name: 'Hobbies and Interests'})).toBeVisible();
	});
});

test.describe('showcase page', () => {
	test.beforeEach(async ({page}) => {
		await page.goto('/showcase');
	});

	test('has title', async ({page}) => {
		await expect(page).toHaveURL(/\/showcase/);
		await expect(page).toHaveTitle(/Showcase/);
	});

	test('index page has expected h1', async ({ page }) => {
		await expect(page).toHaveURL(/\/showcase/);
		await expect(page.getByRole('heading', { name: 'Demo for masonry gallery' })).toBeVisible();
		await expect(page.getByRole('heading', { name: /carousel$/i })).toBeVisible();
	});
});