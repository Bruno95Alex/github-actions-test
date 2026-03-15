// const { test, expect } = require('@playwright/test');

// test('Teste de Busca', async ({ page }) => {
//   // 1. Vamos usar o DuckDuckGo, que é mais amigável para robôs
//   await page.goto('https://duckduckgo.com');

//   // 2. Digita na busca
//   const searchInput = page.locator('#searchbox_input');
//   await searchInput.fill('GitHub Bruno95Alex');
//   await searchInput.press('Enter');

//   // 3. Verifica se a página de resultados carregou (esperando por um elemento comum)
//   await page.waitForTimeout(3000); 
  
//   // 4. Tira o print para a apresentação
//   await page.screenshot({ path: 'github-test.png' });
  
//   console.log('Busca realizada com sucesso sem bloqueios!');
// });


const { test, expect } = require('@playwright/test');

test('Teste de Busca e Navegação', async ({ page }) => {
  // 1. Vai para o DuckDuckGo
  await page.goto('https://duckduckgo.com');

  // 2. Digita na busca
  const searchInput = page.locator('#searchbox_input');
  await searchInput.fill('GitHub Bruno95Alex');
  await searchInput.press('Enter');

  // 3. Espera os resultados aparecerem e tira o primeiro print
  // 'networkidle' espera a rede parar de carregar dados
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: '1-resultados-busca.png' });

  // 4. Clica no primeiro link de resultado
  // Usamos .first() para garantir que pegamos apenas o primeiro
  const primeiroLink = page.locator('a[data-testid="result-title-a"]').first();
  await primeiroLink.click();

  // 5. Espera a nova página carregar completamente
  await page.waitForLoadState('networkidle');

  // 6. Tira o print da página acessada
  // 'fullPage: true' pega a página inteira, o que fica lindo na apresentação
  await page.screenshot({ path: '2-pagina-acessada.png', fullPage: true });
  
  console.log('Busca realizada e primeiro link acessado com sucesso!');
});