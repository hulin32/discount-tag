import { chromium } from '@playwright/test';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function getPrice(url: string) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
  });
  

  try {
    const page = await context.newPage();
    await page.goto(url);

    // Wait for price element to load
    const priceElement = await page.waitForSelector('.a-price-whole, #priceblock_ourprice, #priceblock_dealprice');
    const price = await priceElement?.textContent();
    
    if (price) {
      const priceNum = parseFloat(price.replace(/[^0-9.,]/g, '').replace(',', '.'));
      console.log(`Current price: ${priceNum}`);
      return priceNum;
    }
    
    return null;
  } catch (error) {
    console.error('Error checking price:', error);
    return null;
  } finally {
    await browser.close();
  }
}

// Main function to run the price check
export async function updatePrice(url: string) {
  const desiredPrice = 20.00; // Set your desired price threshold

  const currentPrice = await getPrice(url);
  return currentPrice;
}

// 'https://www.amazon.de/-/en/gp/product/B0765CFDRH/ref=ewc_pr_img_1?smid=A3JWKAKR8XB7XF';

updatePrice('https://www.amazon.de/-/en/gp/product/B0765CFDRH/ref=ewc_pr_img_1?smid=A3JWKAKR8XB7XF');