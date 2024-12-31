import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByTestId('username');
        this.passwordInput = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-button');
        // this.usernameInput = page.locator('[data-test="username"]')
        // this.passwordInput = page.locator('[data-test="password"]');
        // this.loginButton = page.locator('[data-test="login-button"]');
    }

        // Actions - Poderia ser feito em outra camada, mas precisaria instanciar os elementos
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}