import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login-page';
import { InventoryPage } from '../page-objects/inventory-page';
import { ProductPage } from '../page-objects/product-page';
import { CartPage } from '../page-objects/cart-page';
import { CheckoutPage } from '../page-objects/checkout-page';
import { ConfirmationPage } from '../page-objects/confirmation-page';
import dataProducts from '../resources/products.json';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let productPage: ProductPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let confirmationPage: ConfirmationPage;

test.describe('testes e2e auvo', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        productPage = new ProductPage(page);
        cartPage = new CartPage(page);
        checkoutPage = new CheckoutPage(page);
        confirmationPage = new ConfirmationPage(page);
    })

    test('Login válido', async ({ page }) => {
       
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL('/inventory.html');
    });

    for (const product of dataProducts) {
        
        test(`Valida Produto ${product.productName}`, async ({ page }) => {
            await loginPage.login('standard_user', 'secret_sauce');
            await inventoryPage.selectProduct(product.productName)
            await productPage.validateProduct(product.productName, product.description, product.price);
            });
        
            test(`Adiciona ${product.productName} ao carrinho`, async ({ page }) => {
            await loginPage.login('standard_user', 'secret_sauce');
            await inventoryPage.selectProduct(product.productName)
            await productPage.addToCart();
            await cartPage.goTo();
            await cartPage.productIsAdded(product.productName);
        })
        
        test(`Valida Checkout ${product.productName}`, async ({ page }) => {
            await loginPage.login('standard_user', 'secret_sauce');
            await inventoryPage.selectProduct(product.productName);
            await productPage.addToCart();
            await cartPage.goTo();
            await cartPage.selectCheckout();
            await checkoutPage.fullFillForm('John', 'Doe', '123456789');
            await checkoutPage.validateCheckoutInformation();
            await checkoutPage.finishCheckout();
            await confirmationPage.validateCheckoutComplete();
        })
    }
});

