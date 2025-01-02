import { expect, type Locator, type Page } from '@playwright/test';
import dataHeaderText from '../resources/headerTexts.json';

export class ConfirmationPage {
    readonly page: Page;
    readonly heading: Locator;
    readonly confirmationMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByTestId('title');
        this.confirmationMessage = page.getByTestId('complete-header');
    }

    async validateCheckoutComplete() {
        await expect(this.heading).toBeVisible();
        await expect(this.heading).toHaveText(dataHeaderText.headers[4]);
        await expect(this.confirmationMessage).toHaveText(dataHeaderText.headers[5]);
    }
}
