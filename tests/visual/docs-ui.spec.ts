import { expect, test } from '@playwright/test';

test.describe('Docs UI polish', () => {
  test('code blocks use elevated surfaces in dark mode', async ({ page }) => {
    await page.goto('/docs/getting-started');
    const background = await page.evaluate(() => {
      const block = Array.from(
        document.querySelectorAll<HTMLDivElement>('.theme-code-block')
      ).find((el) => el.offsetParent !== null);
      return block ? getComputedStyle(block).backgroundColor : null;
    });
    expect(background === 'rgb(27, 38, 65)' || background === 'rgb(246, 248, 250)').toBeTruthy();
  });

  test('tabs keep top-only rounding', async ({ page }) => {
    await page.goto('/docs/getting-started');
    const radii = await page.evaluate(() => {
      const tab = document.querySelector<HTMLButtonElement>('.tabs__item');
      const active = document.querySelector<HTMLButtonElement>(
        '.tabs__item--active'
      );
      if (!tab || !active) {
        return null;
      }
      const inactiveStyles = getComputedStyle(tab);
      const activeStyles = getComputedStyle(active);
      return {
        inactive: inactiveStyles.borderBottomLeftRadius,
        active: activeStyles.borderBottomLeftRadius,
      };
    });
    expect(radii).not.toBeNull();
    expect(radii?.inactive).toBe('0px');
    expect(radii?.active).toBe('0px');
  });

  test('footer renders with brand gradient', async ({ page }) => {
    await page.goto('/docs/getting-started');
    const background = await page.evaluate(() => {
      const footer = document.querySelector<HTMLElement>('footer.footer--dark');
      return footer ? getComputedStyle(footer).backgroundImage : null;
    });
    expect(background).not.toBeNull();
    expect(background).toContain('linear-gradient');
    expect(background).toContain('rgb(1, 29, 80)');
    expect(background).toContain('rgb(9, 62, 159)');
  });
});
