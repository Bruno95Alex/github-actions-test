const { test, expect } = require('@playwright/test');

test('Pesquisa no Google', async ({ page }) => {
  await page.goto('https://www.google.com');
  
  // Tenta encontrar a barra de busca e digitar
  const searchBar = page.locator('textarea[name="q"], input[name="q"]');
  await searchBar.fill('GitHub Actions Bruno95Alex');
  await searchBar.press('Enter');

  // Espera um pouco para carregar os resultados
  await page.waitForTimeout(2000);
  
  // Tira o print que você vai mostrar na apresentação
  await page.screenshot({ path: 'google-search.png' });
});