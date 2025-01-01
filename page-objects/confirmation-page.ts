import { expect, type Locator, type Page } from '@playwright/test';
import dataHeaderText from '../resources/headerTexts.json';

export class ConfirmationPage {
    readonly page: Page;
    readonly heading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.heading = page.getByTestId('title');
    }

    async validateCheckoutComplete() {
        await expect(this.heading).toBeVisible();
        await expect(this.heading).toHaveText(dataHeaderText.headers[4]);
    }
}
