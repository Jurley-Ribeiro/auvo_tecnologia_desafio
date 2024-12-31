import { expect, type Locator, type Page } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly backToProductsButton: Locator;
    readonly productName: Locator;
    readonly description: Locator;
    readonly price: Locator;
    readonly addToCartButton: Locator;
    readonly removeFromCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.backToProductsButton = page.getByTestId('back-to-products');
        this.productName = page.getByTestId('inventory-item-name');
        this.description = page.getByTestId('inventory-item-desc');
        this.price = page.getByTestId('inventory-item-price');
        this.addToCartButton = page.getByTestId('add-to-cart');
        this.removeFromCartButton = page.getByTestId('remove');
    }

    async addToCart() {
        await this.addToCartButton.click();
        await expect(this.removeFromCartButton).toBeVisible();
        await expect(this.addToCartButton).not.toBeVisible();
    }

    async validateProduct(productName: string, description: string, price: string) {
        await expect(this.productName).toHaveText(productName);
        await expect(this.description).toHaveText(description);
        await expect(this.price).toHaveText(price);
    }
}
