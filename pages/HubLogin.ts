import { expect, Page } from "@playwright/test";
import { uiContext } from "./UiContext";

class HubLogin {
    LOGIN_BUTTON_HEADER_WORKSPACE = '//button//*[contains(text(), "Log in")]';
    HUBE_TITLE = '//input[contains(@placeholder, "Workspace title")]';
    PROCEED_CONFIGURATION = '//*/button[2][contains(text(), "Proceed to configuration")]'
    HUB_USERNAME_INPUT_FIELD = '//input[contains(@placeholder, "Email")]';
    HUB_PASSWORD_INPUT_FIELD = '//input[contains(@placeholder, "Password")]';
    HUB_SIGNIN_BUTTON = '//button//*[contains(text(), "Sign in")]';
    SUCCESS_NOTIFICATION = '//*[text()="You successfully signed in"]'
    HUB_LOGOUT_BOTTON = '//button[(contains(@class, "items-center whitespace-nowrap"))]'
    HUB_RECOVER_BUTTON = '//*[text()="Recover"]'
    SEND_CONFIRMATION_LINK = '//*[@type="submit"]'


    async goto() {
        //await uiContext.page.setViewportSize({width:2560, height:1392})
        await uiContext.page.goto('https://hub.staging.internal.eclipse.club/workspaces');
    };

    async fillUsernameHub(username) {
        await uiContext.page.locator(this.HUB_USERNAME_INPUT_FIELD).fill(username)
    };

    async fillPasswordHub(password) {
        await uiContext.page.locator(this.HUB_PASSWORD_INPUT_FIELD).fill(password)
    };

    async clickLoginButtonHub() {
        await uiContext.page.locator(this.HUB_SIGNIN_BUTTON).click()
    };
    
    async assertSuccessNotificationToBeVisible() { 
        await expect(uiContext.page.locator(this.SUCCESS_NOTIFICATION)).toBeVisible();
    };

    async clickRecoverButton() {
        await uiContext.page.locator(this.HUB_RECOVER_BUTTON).click()
    };

    async clickSendConfirmationLink() {
        await uiContext.page.locator(this.SEND_CONFIRMATION_LINK).click()
    }


    async clickLogOutButtonHub() {
        await uiContext.page.locator(this.HUB_LOGOUT_BOTTON).click()
        
    };

    async hubSignIn(username = process.env.HUB_USER_EMAIL, password = process.env.HUB_USER_PASSWORD) {
        await this.goto();
        await this.fillUsernameHub(username);
        await this.fillPasswordHub(password);
        await this.clickLoginButtonHub();
    };

}


export const hubLogin = new HubLogin();
