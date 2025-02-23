import { expect } from "@playwright/test";
import { uiContext } from "./UiContext";
import { hubWorkspacePayment } from "./HubWorkspacePayment";
import { hubCreateWorkspace } from "./HubCreateWorkspace";
import { faker } from "@faker-js/faker";

class AgentProfile {

    LAST_NAME =  '//*[@id="root"]/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[1]/div/input'
    FIRST_NAME = '//*[@id="root"]/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[2]/div/input'
    EMAIL = '//*[text()="E-mail"]'
    SAVE_CHANGES_BUTTON = '//*[text()="Save Changes"]'

    PROFILE_TEXT = '//*[text()="Profile"]'
    PARTNERSHIP_TEXT = '//*[text()="Partnership"]'
    STATUS_TEXT = '//*[text()="Status"]'
    POOL_TEXT = '//*[text()="Pool"]'
    TOOLS_TEXT = '//*[text()="Tools"]'
    TRANSACTIONS_TEXT = '//*[text()="Transactions"]'
    NEWS_TEXT = '//*[text()="News"]'
    SUPPORT_TEXT = '//*[text()="Support"]'
    FAQ_TEXT = '//*[text()="FAQ"]'
    DOCUMENTS_TEXT = '//*[text()="Documents"]'
    SUCCESS_NOTIFICATION = 'Data successfully saved!'

  
    async goto() {
        //await uiContext.page.setViewportSize({width:2560, height:1392})
        await uiContext.page.goto('https://test.eclipse.club/');
    };

    async fillLastName(username) {
        await uiContext.page.locator(this.LAST_NAME).fill(username)
    };

    async fillFirstName(username) {
        await uiContext.page.locator(this.FIRST_NAME).fill(username)
    };

    async clickSaveChangesButton() {
        await uiContext.page.locator(this.SAVE_CHANGES_BUTTON).click()
    };

    async assertSuccessNotification() { 
        await expect(uiContext.page.getByText(this.SUCCESS_NOTIFICATION)).toBeVisible();
    };

    async assertProfileText() { 
        await expect(uiContext.page.locator(this.PROFILE_TEXT)).toBeVisible();
    };

    async assertPartnershipText() { 
        await expect(uiContext.page.locator(this.PARTNERSHIP_TEXT)).toBeVisible();
    };

    async assertStatusText() { 
        await expect(uiContext.page.locator(this.STATUS_TEXT)).toBeVisible();
    };

    async assertPoolText() { 
        await expect(uiContext.page.locator(this.POOL_TEXT)).toBeVisible();
    };

    async assertToolsText() { 
        await expect(uiContext.page.locator(this.TOOLS_TEXT)).toBeVisible();
    };

    async assertTransactionsText() { 
        await expect(uiContext.page.locator(this.TRANSACTIONS_TEXT)).toBeVisible();
    };

    async assertNewsText() { 
        await expect(uiContext.page.locator(this.NEWS_TEXT)).toBeVisible();
    };

    async assertSupportText() { 
        await expect(uiContext.page.locator(this.SUPPORT_TEXT)).toBeVisible();
    };

    async assertFAQText() { 
        await expect(uiContext.page.locator(this.FAQ_TEXT)).toBeVisible();
    };

    async assertDocumentsText() { 
        await expect(uiContext.page.locator(this.DOCUMENTS_TEXT)).toBeVisible();
    };


}

export const agentProfile = new AgentProfile();