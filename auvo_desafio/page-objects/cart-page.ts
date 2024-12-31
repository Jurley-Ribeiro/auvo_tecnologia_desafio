import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly cartItems: Locator;
    readonly continueShoppingButton: Locator;
    readonly checkoutButton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByTestId('title');
        this.cartItems = page.getByTestId('inventory-item');
        this.continueShoppingButton = page.getByTestId('continue-shopping');
        this.checkoutButton = page.getByTestId('checkout');
    }

    async goTo() {
        this.page.goto('/cart.html');
        await expect(this.heading).toBeVisible();
        await expect(this.heading).toHaveText('Your Cart');
    }

    async productIsAdded(productName: string) {
        await expect(this.cartItems).toBeVisible();
        await expect(this.cartItems.filter({ hasText: productName })).toBeVisible();
    }

    async selectCheckout() {
        await this.checkoutButton.click();
    }


}