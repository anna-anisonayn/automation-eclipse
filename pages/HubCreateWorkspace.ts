import { expect } from "@playwright/test";
import { uiContext } from "./UiContext";
import { DataProviderHelper } from "../helpers/DataProviderHelper";

class HubCreateWorkspace {

    ECLIPSE_LOGO = '//*[@name="eclipse-logo-h"]'
    CREATE_NEW_WORKSPACE_BUTTON = '//button[contains(text(), "Create shiny new Eclipse workspace")]'
    WORKSPACE_TITLE = '//input[contains(@placeholder, "Workspace title")]'
    WORKSPACE_PROCEED_CONFIGURATION_BUTTON='//*[text()="Proceed to configuration"]'
    workspaceName = `workspace${DataProviderHelper.getTimestamp()}`
    MENU_1_ITEM = '//*[text()= "Overview"]'
    MENU_2_ITEM = '//*[text()= "Apps and integrations"]'
    MENU_3_ITEM = '//*[text()= "Billing"]'
    MENU_4_ITEM = '//*[text()= "Administrators"]'
    MENU_5_ITEM = '//*[text()= "Downloads"]'
    WORKSPACE_OPEN_PAGE = '//*[text()="Your workspace setup is almost complete"]'
    WORKSPACE_OPEN_PAGE_BUTTON = '//*[text()="Proceed to configuration"]'
    //WORKSPACE_URL = 'https://staging.internal.eclipse.club/' + this.workspaceName
    WORKSPACE_DOMAIN = '//input[contains(@placeholder, "Workspace domain")]'
    UPDATE_WORKSPACE_SETTINGS_BUTTON = '//button[contains(text(), "Update workspace settings")]'
    CHECKBOX = '//input[@type="checkbox" and @checked]'
    WORKSPACE_CREATION_NOTIFICATION = 'You have successfully created new workspace'
    WORKSPACE_UPDATED_NOTIFICATION = 'Workspace settings successfully updated'




    async assertEclipseLogoToBeVisible() { 
        const eclipseLogo = uiContext.page.locator(this.ECLIPSE_LOGO)
        await expect(uiContext.page.locator(this.ECLIPSE_LOGO), `${eclipseLogo} to be visible on page.`).toBeVisible();
    };

    async clickCreateNewWorkspaceButton() {
        await uiContext.page.locator(this.CREATE_NEW_WORKSPACE_BUTTON).click()
    };

    async assertWorkspaceCreationNotification() { 
        await expect(uiContext.page.getByText(this.WORKSPACE_CREATION_NOTIFICATION)).toBeVisible();
    };

    async fillWorkspaceTitle(title) {
        await uiContext.page.locator(this.WORKSPACE_TITLE).fill(title)
    };

    async clickProceedConfigurationButton() {
        await uiContext.page.locator(this.WORKSPACE_PROCEED_CONFIGURATION_BUTTON).click()
    };

    async assertWorkspacePageText() { 
        await expect(uiContext.page.getByText("Your workspace setup is almost complete")).toBeVisible();
    };
    
    async fillWorkspaceDomain(domain) {
        await uiContext.page.locator(this.WORKSPACE_DOMAIN).fill(domain)
    };

    async assertCheckoxIsChecked() { 
        await expect(uiContext.page.locator(this.CHECKBOX)).toBeChecked();
    };

    async clickUpdateWorkspaceButton() {
        await uiContext.page.locator(this.UPDATE_WORKSPACE_SETTINGS_BUTTON).click()
    };

    async assertWorkspaceUpdatedNotification() { 
        await expect(uiContext.page.getByText(this.WORKSPACE_UPDATED_NOTIFICATION)).toBeVisible();
    };

    async assertMenu1Item() { 
        await expect(uiContext.page.locator(this.MENU_1_ITEM)).toBeEnabled()
    };

    async assertMenu2Item() { 
        await expect(uiContext.page.locator(this.MENU_2_ITEM)).toBeEnabled()
    };

    async assertMenu3Item() { 
        await expect(uiContext.page.locator(this.MENU_3_ITEM)).toBeEnabled()
    };

    async assertMenu4Item() { 
        await expect(uiContext.page.locator(this.MENU_4_ITEM)).toBeEnabled()
    };

    async assertMenu5Item() { 
        await expect(uiContext.page.locator(this.MENU_5_ITEM)).toBeEnabled()
    };

    async workspaceCreation(title) {
        await this.clickCreateNewWorkspaceButton();
        await this.fillWorkspaceTitle(title);
        await this.clickProceedConfigurationButton();
        //await this.assertWorkspaceCreationNotification()
        await this.assertWorkspacePageText();
        await this.clickProceedConfigurationButton();
        await this.fillWorkspaceDomain(title);
        await this.assertCheckoxIsChecked()
        await this.clickUpdateWorkspaceButton();
        //await this.assertWorkspaceUpdatedNotification();
        await uiContext.page.waitForTimeout(1000);

    }

}
export const hubCreateWorkspace = new HubCreateWorkspace();
