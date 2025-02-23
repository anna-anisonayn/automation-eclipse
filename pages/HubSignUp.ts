import { expect } from "@playwright/test";
import { uiContext } from "./UiContext";
import { hubWorkspacePayment } from "./HubWorkspacePayment";
import { hubCreateWorkspace } from "./HubCreateWorkspace";
import { faker } from "@faker-js/faker";


class HubSignUp {

    SIGNUP_EMAIL = '//input[@name="email"]'   //duplicate
    ACCEPT_THE_TERMS_CHECKBOX = '//button[@role="checkbox"]'  //duplicate
    HUB_SIGNUP_BUTTON = '//button[contains(@type, "submit")]'  //duplicate
    HUB_PASSWORD = '//input[contains(@placeholder, "Password")]'  //duplicate
    HUB_REPEAT_PASSWORD = '//input[contains(@placeholder, "Repeat password")]'   //duplicate
    HUB_SIGNUPHUB_BUTTON = '//button[contains(text(), "Sign up to HUB")]'   //duplicate
    HUB_HOME_PAGE_TEXT = '//*[text()="You have no workspaces created yet"]'
    CRETE_NEW_WORKSPACE_BUTTON = '//*[text()="Create shiny new Eclipse workspace"]'




    // FIRST_NAME = '//input[@placeholder="Name"]'
    // LAST_NAME = '//input[@placeholder="Last name"]'
    // first_name = faker.person.lastName()
    // second_name = faker.person.lastName()
    // display_name = faker.person.lastName()

    //annaanisonyan.eclipse+5@gmail.com 1-6

    async goto() {
        await uiContext.page.setViewportSize({width:2560, height:1392})
        await uiContext.page.goto('https://hub.staging.internal.eclipse.club/?ref=1Ha0Op0&self=true');
    };

    async fillEmail(email) {
        await uiContext.page.locator(this.SIGNUP_EMAIL).fill(email)
    };

    async clickAcceptTermsCheckbox() {
        await uiContext.page.locator(this.ACCEPT_THE_TERMS_CHECKBOX).click() 
    };

    async clickSignUpButton() {
        await uiContext.page.locator(this.HUB_SIGNUP_BUTTON).click() 
    };
    
    async fillPassword(password) {
        await uiContext.page.locator(this.HUB_PASSWORD).fill(password)
    };

    async fillRepeatPassword(password) {
        await uiContext.page.locator(this.HUB_REPEAT_PASSWORD).fill(password)
    };

    async clickHubSignUpButton() {
        await uiContext.page.locator(this.HUB_SIGNUPHUB_BUTTON).click()
    };

    async assertHubHomePageText(){
        await expect(uiContext.page.locator(this.HUB_HOME_PAGE_TEXT)).toBeVisible();
    };

    async assertCreateNewWorksapceButton(){
        await expect(uiContext.page.locator(this.CRETE_NEW_WORKSPACE_BUTTON)).toBeEnabled();
    };

}

export const hubSignUp = new HubSignUp();

