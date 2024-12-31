import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly products: Locator;
    readonly heading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByTestId('title');
        this.products = page.locator('.inventory_item');
    }

    async isDisplayed() {
        await expect (this.heading).toBeVisible();
        await expect (this.heading).toHaveText('Products');
    }

    async selectProduct(productName: string) {
        await this.products.filter({ hasText: productName })
        .getByRole('link', { name: productName })
        .first()
        .click();
    }
}