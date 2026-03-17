const { test, expect } = require('@playwright/test');

test('Teste de Busca e Navegação', async ({ page }) => {
  
  await page.goto('https://duckduckgo.com');

 
  const searchInput = page.locator('#searchbox_input');
  await searchInput.fill('GitHub Bruno95Alex');
  await searchInput.press('Enter');

  
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: '1-resultados-busca.png' });

  
  const primeiroLink = page.locator('a[data-testid="result-title-a"]').first();
  await primeiroLink.click();

  
  await page.waitForLoadState('networkidle');

  
  await page.screenshot({ path: '2-pagina-acessada.png', fullPage: true });
  
  console.log('Busca realizada e primeiro link acessado com sucesso!');
});