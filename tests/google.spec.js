// const { test, expect } = require('@playwright/test');

// test('Pesquisa no Google', async ({ page }) => {
// //   await page.goto('https://www.google.com');
//   await page.goto('https://duckduckgo.com');
  
//   // Tenta encontrar a barra de busca e digitar
//   const searchBar = page.locator('textarea[name="q"], input[name="q"]');
//   await searchBar.fill('github action');
//   await searchBar.press('Enter');

//   // Espera um pouco para carregar os resultados
//   await page.waitForTimeout(2000);
  
//   // Tira o print que você vai mostrar na apresentação
//   await page.screenshot({ path: 'google-search.png' });
// });


const { test, expect } = require('@playwright/test');

test('Pesquisa e Navegação', async ({ page }) => {
  // 1. Vai para o DuckDuckGo (evita o bloqueio do Google)
  await page.goto('https://duckduckgo.com');
  
  // 2. Localiza a barra de busca e digita
  const searchBar = page.locator('input[name="q"]');
  await searchBar.fill('github actions official site');
  await searchBar.press('Enter');

  // 3. Espera os resultados aparecerem
  await page.waitForTimeout(2000);
  
  // Tira o primeiro print (da página de resultados)
  await page.screenshot({ path: 'resultado-busca.png' });

  // 4. CLICA NO PRIMEIRO LINK 
  // O seletor 'a[data-testid="result-title-a"]' é o padrão de links do DuckDuckGo
  const primeiroLink = page.locator('a[data-testid="result-title-a"]').first();
  await primeiroLink.click();

  // 5. ESPERA O SITE CARREGAR
  // Aguardamos até que a rede esteja ociosa (página carregada)
  await page.waitForLoadState('networkidle');

  // 6. Tira o segundo print (dentro do site que abriu)
  await page.screenshot({ path: 'site-final.png', fullPage: true });

  console.log('Navegação concluída e prints tirados!');
});