import { Page } from "@playwright/test";
import { uiContext } from "./UiContext";

class AgentLoginPage {
    LOGIN_BUTTON_HEADER = '//button//*[contains(text(), "Log in")]';
    USERNAME_INPUT_FIELD = '//input[contains(@placeholder, "Email")]';
    PASSWORD_INPUT_FIELD = '//input[contains(@placeholder, "Password")]';
    SIGNIN_BUTTON = '//button//*[contains(text(), "Sign in")]';
    LOGOUT_BUTTON = '//button//*[contains(text(), "Log Out")]';
    ACCEPT_BUTTON = '//*[@data-tid="banner-accept"]';


    async goto() {
        await uiContext.page.setViewportSize({width:2560, height:1392})
        await uiContext.page.goto('https://test.eclipse.club/'); 
    };
    async clickLoginButtonOnHeader() {
        await uiContext.page.locator(this.LOGIN_BUTTON_HEADER).click()
    };

    async fillUsername(username) {
        await uiContext.page.locator(this.USERNAME_INPUT_FIELD).fill(username)
    };

    async fillPassword(password) {
        await uiContext.page.locator(this.PASSWORD_INPUT_FIELD).fill(password)
    };

    async clickSignInButton() {
        await uiContext.page.locator(this.SIGNIN_BUTTON).click()
    };

    async clickLogOutButton() {
        await uiContext.page.locator(this.LOGOUT_BUTTON).click()
    };
    
    async clickAcceptCookiesButton() {
        await uiContext.page.locator(this.ACCEPT_BUTTON).click()
    };

    async login(username, password) {
        await this.clickAcceptCookiesButton()
        await this.clickLoginButtonOnHeader()
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.clickSignInButton()
    };

};

export const agentLoginPage = new AgentLoginPage();

