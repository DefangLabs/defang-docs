import { expect, test } from '@playwright/test';

test.describe('Landing visuals', () => {
  test('hero renders with layered gradients and CTAs', async ({ page }) => {
    await page.goto('/');
    const hero = page.getByTestId('landing-hero');
    await expect(hero).toBeVisible();

    const heroImage = await hero.screenshot();
    expect(heroImage.byteLength).toBeGreaterThan(5000);

    const primaryCta = hero.locator('a', { hasText: 'Launch quickstart' });
    const backgroundImage = await primaryCta.evaluate(
      (el) => getComputedStyle(el).backgroundImage
    );
    expect(backgroundImage).toContain('linear-gradient');

    const badge = hero.getByTestId('hero-badge');
    await expect(badge).toHaveText(/calm, cloud-native shipping/i);
  });

  test('feature grid showcases interactive cards', async ({ page }) => {
    await page.goto('/');
    const grid = page.getByTestId('feature-grid');
    const cards = grid.getByTestId('feature-card');
    await expect(cards).toHaveCount(3);

    await cards.nth(0).hover();
    const hoveredShadow = await cards
      .nth(0)
      .evaluate((el) => getComputedStyle(el).boxShadow);
    expect(hoveredShadow).not.toEqual('none');
  });

  test('timeline section communicates progression', async ({ page }) => {
    await page.goto('/');
    const steps = page.getByTestId('timeline').getByTestId('timeline-step');
    await expect(steps).toHaveCount(3);
    await expect(steps.nth(1)).toContainText('Scale to production');
  });
});
