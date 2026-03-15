const { test, expect } = require('@playwright/test');

test('Fluxo de Compra Completo', async ({ page }) => {
  // 1. Acessa o site de testes
  await page.goto('https://www.saucedemo.com/');

  // 2. Faz Login (O robô preenche usuário e senha)
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 3. Tira print do catálogo de produtos
  await page.screenshot({ path: '1-catalogo.png' });

  // 4. Adiciona dois produtos ao carrinho
  // Vamos pegar a mochila e a lanterna
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');

  // 5. Vai para o carrinho e tira print
  await page.click('.shopping_cart_link');
  await page.screenshot({ path: '2-carrinho.png' });

  // 6. VALIDAÇÃO (O "pulo do gato" da apresentação)
  // O robô verifica se realmente tem 2 itens no carrinho
  const cartCount = await page.locator('.cart_item').count();
  expect(cartCount).toBe(2);

  // 7. Finaliza a compra
  await page.click('#checkout');
  await page.fill('#first-name', 'Bruno');
  await page.fill('#last-name', 'Alex');
  await page.fill('#postal-code', '12345');
  await page.screenshot({ path: '3-dados-entrega.png' });
  
  await page.click('#continue');
  await page.click('#finish');

  // 8. Print da tela de Sucesso
  await page.screenshot({ path: '4-sucesso-final.png' });
  
  console.log('Fluxo de e-commerce testado com sucesso!');
});