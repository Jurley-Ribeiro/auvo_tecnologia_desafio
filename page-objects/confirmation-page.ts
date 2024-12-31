import { expect, type Locator, type Page } from '@playwright/test';

export class ConfirmationPage {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByTestId('title');
    }

    async validateCheckoutComplete() {
        await expect(this.heading).toBeVisible();
        await expect(this.heading).toHaveText('Checkout: Complete!');
    }
}
