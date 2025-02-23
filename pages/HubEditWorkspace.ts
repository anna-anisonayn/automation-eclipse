import { uiContext } from "./UiContext"
import {test, expect} from '@playwright/test'


class HubEditWorkspace {
    WORKSPACE_EDIT_BUTTON = '//*[text()="Edit workspace"]'
    CHECKBOX_ENABLE_INVITATIONS = '//*[text()="Enable invitations"]'  //change xpath
    CHECKBOX_USERS_CAN_CREATE_INVITATIONS = '//*[text()="Users can create invitations"]'
    //WORKSPACE_URL = 'https://staging.internal.eclipse.club/' + this.workspaceName
    WORKSPACE_HOME_PAGE_TITLE = '//*[contains(@class,"text-2xl")]'
    WORKSPACE_HOME_PAGE_TEXT = '//*[contains(@class, "font-normal")]'


    async clickEditButton() {
        await uiContext.page.locator(this.WORKSPACE_EDIT_BUTTON).click()
    };

    async clickEnableInvitationsCheckbox() {
        await uiContext.page.locator(this.CHECKBOX_ENABLE_INVITATIONS).click()
    };

    async clickUsersInvitationsCheckbox() {
        await uiContext.page.locator(this.CHECKBOX_USERS_CAN_CREATE_INVITATIONS).click()
    };

    async assertCheckoxIsChecked() { 
        await expect(uiContext.page.locator(this.CHECKBOX_ENABLE_INVITATIONS)).toBeChecked();
    };

    async assertSecondCheckoxIsChecked() { 
        await expect(uiContext.page.locator(this.CHECKBOX_USERS_CAN_CREATE_INVITATIONS)).toBeChecked();
    };

    async assertUsersInvitationsCheckboxDisabled() {
        await expect(uiContext.page.locator(this.CHECKBOX_USERS_CAN_CREATE_INVITATIONS)).toBeDisabled()
    };

    async assertWorkspaceTitle(name) { 
        await expect(uiContext.page.locator(this.WORKSPACE_HOME_PAGE_TITLE)).toBeVisible(name);
    };

    async assertWorkspaceText(name) { 
        await expect(uiContext.page.locator(this.WORKSPACE_HOME_PAGE_TEXT)).toBeVisible(name);
    };
    
}




export const hubEditWorkspace = new HubEditWorkspace();
