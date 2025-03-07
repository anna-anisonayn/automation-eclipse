import { expect } from "@playwright/test";
import { uiContext } from "./UiContext";
import { hubWorkspacePayment } from "./HubWorkspacePayment";
import { hubCreateWorkspace } from "./HubCreateWorkspace";


class SignUpWorkspace {

    OPEN_WORKSPACE = '//a[text()="Open workspace"]' 
    WORKSPACE_URL = `${hubCreateWorkspace.workspaceName}.staging.internal.eclipse.club/signup`
    ACCEPT_THE_TERMS_CHECKBOX = '//button[@role="checkbox"]'  //duplicate
    WORKSPACE_INPUT_FIELD = '//input[@name="email"]'   //duplicate
    WORKSPACE_SIGNUP_BUTTON = '//button[contains(@type, "submit")]'   //duplicate
    WORKSPACE_PASSWORD = '//input[contains(@placeholder, "Password")]'  //duplicate
    WORKSPACE_REPEAT_PASSWORD = '//input[contains(@placeholder, "Repeat password")]'  //duplicate
    PASSWORD = '123456'    //duplicate
    WORKSPACE_SIGNUPHUB_BUTTON = '//button[contains(text(), "Sign up")]'   //duplicate
    


    async clickGetAdminLinkButton() {
        await uiContext.page.locator(hubWorkspacePayment.GET_ADMIN_LINK).click()
    };

    async clickOpenWorkspaceButton() {
       await uiContext.page.locator(this.OPEN_WORKSPACE).click()
    };

    async fillEmail(email) {
        await uiContext.page.locator(this.WORKSPACE_INPUT_FIELD).fill(email)
    };

    async clickAcceptTermsCheckbox() {
        await uiContext.page.locator(this.ACCEPT_THE_TERMS_CHECKBOX).click() 
    };

    async clickSignUpButton() {
        await uiContext.page.locator(this.WORKSPACE_SIGNUP_BUTTON).click() 
    };
    
    async fillPassword(password) {
        await uiContext.page.locator(this.WORKSPACE_PASSWORD).fill(password)
    };

    async fillRepeatPassword(password) {
        await uiContext.page.locator(this.WORKSPACE_REPEAT_PASSWORD).fill(password)
    };

    async clickWorkspceSignUpButton() {
        await uiContext.page.locator(this.WORKSPACE_SIGNUPHUB_BUTTON).click()
    };


    async SignUpToWorkspace(workspaceUserEmail) {
        await this.fillEmail(workspaceUserEmail);
        await this.clickAcceptTermsCheckbox();
        await this.clickSignUpButton();
        await uiContext.page.waitForTimeout(15000);
    }

    async registrationToWorkspace(url) {
        await uiContext.page.goto(url)
        await this.fillPassword(this.PASSWORD);
        await this.fillRepeatPassword(this.PASSWORD);
        await this.clickWorkspceSignUpButton()
    }
    
}
export const signUpWorkspace = new SignUpWorkspace();
