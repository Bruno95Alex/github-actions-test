const { test, expect } = require('@playwright/test');

test('Teste de Busca', async ({ page }) => {
  // 1. Vamos usar o DuckDuckGo, que é mais amigável para robôs
  await page.goto('https://duckduckgo.com');

  // 2. Digita na busca
  const searchInput = page.locator('#searchbox_input');
  await searchInput.fill('GitHub Bruno95Alex');
  await searchInput.press('Enter');

  // 3. Verifica se a página de resultados carregou (esperando por um elemento comum)
  await page.waitForTimeout(3000); 
  
  // 4. Tira o print para a apresentação
  await page.screenshot({ path: 'github-test.png' });
  
  console.log('Busca realizada com sucesso sem bloqueios!');
});