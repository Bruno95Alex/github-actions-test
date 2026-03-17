const { test, expect } = require('@playwright/test');

test('Fluxo de Compra Completo', async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');

  
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  
  await page.screenshot({ path: '1-catalogo.png' });

  
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');

  
  await page.click('.shopping_cart_link');
  await page.screenshot({ path: '2-carrinho.png' });

  
  const cartCount = await page.locator('.cart_item').count();
  expect(cartCount).toBe(2);


  await page.click('#checkout');
  await page.fill('#first-name', 'Bruno');
  await page.fill('#last-name', 'Alex');
  await page.fill('#postal-code', '12345');
  await page.screenshot({ path: '3-dados-entrega.png' });
  
  await page.click('#continue');
  await page.click('#finish');

  
  await page.screenshot({ path: '4-sucesso-final.png' });
  
  console.log('Fluxo de e-commerce testado com sucesso!');
});