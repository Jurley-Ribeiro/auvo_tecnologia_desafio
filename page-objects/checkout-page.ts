import { expect, type Locator, type Page } from '@playwright/test';
import dataHeaderText from '../resources/headerTexts.json';

export class CheckoutPage {
    readonly page: Page
    readonly heading: Locator
    readonly firstName: Locator
    readonly lastName: Locator
    readonly zipCode: Locator
    readonly continueCheckoutButton: Locator
    readonly cancelButton: Locator
    readonly finishCheckoutButton: Locator
    constructor(page: Page) {
            this.page = page;
            this.heading = page.getByTestId('title');
            this.firstName = page.getByTestId('firstName');
            this.lastName = page.getByTestId('lastName');
            this.zipCode = page.getByTestId('postalCode');
            this.continueCheckoutButton = page.getByTestId('continue');
            this.cancelButton = page.getByTestId('cancel');
            this.finishCheckoutButton = page.getByTestId('finish');
    }
    
    async fullFillForm(firstName: string, lastName: string, zipCode: string) {
        await expect(this.heading).toBeVisible();
        await expect(this.heading).toHaveText(dataHeaderText.headers[2]);
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.zipCode.fill(zipCode);
        await this.continueCheckoutButton.click();
    }

    async validateCheckoutInformation() {
        await expect(this.heading).toBeVisible();
        await expect(this.heading).toHaveText(dataHeaderText.headers[3]);
    }

    async finishCheckout() {     
        await this.finishCheckoutButton.click();
    }
}