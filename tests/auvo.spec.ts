import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login-page';
import { InventoryPage } from '../page-objects/inventory-page';
import { ProductPage } from '../page-objects/product-page';
import { CartPage } from '../page-objects/cart-page';
import { CheckoutPage } from '../page-objects/checkout-page';
import { ConfirmationPage } from '../page-objects/confirmation-page';
import dataProducts from '../resources/products.json';
import dataUsers from '../resources/users.json';
import dataUsersRegistration from '../resources/usersRegistration.json';


let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let productPage: ProductPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let confirmationPage: ConfirmationPage;

//Filtra o usuário 'standard_user' do login
const standardUser = dataUsers.users.find(user => user.username === 'standard_user');

//Valida se o usuário existe no JSON
if (!standardUser) {
  throw new Error("Usuário 'standard_user' não encontrado no arquivo JSON: ./resources/users.json");
}

//Obter os dados do usuário de checkout pelo ID dele do JSON
const getCheckoutUser = (userId: string) => {
    const user = dataUsersRegistration.users.find(u => u.id === userId);
    if (!user) {
      throw new Error(`Usuário de checkout com ID '${userId}' não encontrado no JSON: ./resources/usersRegistration.json`);
    }
    return user;
  };

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

    test.afterEach(async ({ page}, testInfo) => {
        const screenshot = await page.screenshot();
        await testInfo.attach('screenshot', {
            body: screenshot,
            contentType: 'image/png',
        });
    })

    test('Login válido', async ({ page }) => {
       
        await loginPage.login(standardUser.username, standardUser.password);
        await expect(page).toHaveURL('/inventory.html');
    });

    for (const product of dataProducts) {
        
        test(`Valida Produto ${product.productName}`, async ({ page }) => {
            await loginPage.login(standardUser.username, standardUser.password);
            await inventoryPage.selectProduct(product.productName)
            await productPage.validateProduct(product.productName, product.description, product.price);
            });
        
        test(`Adiciona ${product.productName} ao carrinho`, async ({ page }) => {
            await loginPage.login(standardUser.username, standardUser.password);
            await inventoryPage.selectProduct(product.productName)
            await productPage.addToCart();
            await cartPage.goTo();
            await cartPage.productIsAdded(product.productName);
        })
        
        test(`Valida Checkout ${product.productName}`, async ({ page }) => {
            const checkoutUser = getCheckoutUser('user1');

            await loginPage.login(standardUser.username, standardUser.password);
            await inventoryPage.selectProduct(product.productName);
            await productPage.addToCart();
            await cartPage.goTo();
            await cartPage.selectCheckout();
            await checkoutPage.fullFillForm(checkoutUser.firstName, checkoutUser.lastName, checkoutUser.zipCode);
            await checkoutPage.validateCheckoutInformation();
            await checkoutPage.finishCheckout();
            await confirmationPage.validateCheckoutComplete();
        })
    }
});
