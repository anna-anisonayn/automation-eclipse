import { expect } from "@playwright/test";
import { uiContext } from "./UiContext";
import { DataProviderHelper } from "../helpers/DataProviderHelper";




class MessengerCreateChats {
    SIGNIN_BUTTON = '//span[text()="Sign in"]' 
    SIGNIN_BUTTON_TO_HUB = '//span[text()="Sign in to HUB"]'  //bug should be fixed
    EMAIL = '//input[@name="email"]'
    PASSWORD = '//input[@name="pass"]'
    CREATE_NEW_CHAT = '//button[text()="Create new chat"]'
    CHANNEL_TITLE = '//input[@name="title"]'
    ChannelName = `workspace${DataProviderHelper.getTimestamp()}`
    CREATE_BUTTON = '//button[text()="Create chat"]'
    CHANNEL_CREATION_NOTIFICATION = 'Channel was created'   //should be chat
    MEETS = '//button[text()="Meets"]'
    TASKS = '//button[text()="Tasks"]'
    USERS = '//button[text()="Users"]'
    SETTINGS = '//button[text()="Settings"]'
    INPUT_FIELD = '//textarea'
    SEND_BUTTON = '//button[contains(@class, "absolute righ")]'
    MESSAGE_DATE = '//span[contains(@class, "text-[11px]")]'
    CHAT_NAME = '//*[contains(@class, "text-sm h-auto gap-4 p")]'
    DELETE_CHAT = '//*[text() = "Delete chat"]'
    CONTINUE_DELETE_CHAT = '//*[text() = "Continue"]'
    USER_PROFILE_SETTINGS = '//*[contains(@href, "/app/settings")]'
    LOGOUT_BUTTON = '//*[text()= "Logout"]'
    REALLY_LEAVE_BUTTON = '//*[text()= "Really leave"]'
    CHAT_REMOVED_NOTIFICATION = 'Chat removed'   
    WORKSPACE_NAME_IN_MENU_SECTION = '//*[contains(@class, "overflow-hidden text-ellipsis")]'
    UPDATE_CHAT = '//*[text() = "Update chat"]'



    async goto() {
        await uiContext.page.setViewportSize({width:2560, height:1392})
        await uiContext.page.goto('https://newautomationaccount.staging.internal.eclipse.club/app'); 
    }; 

    async clickSignInButton() {
        await uiContext.page.locator(this.SIGNIN_BUTTON_TO_HUB).click()
    };

    async fillEmail() {
        await uiContext.page.locator(this.EMAIL).fill('anna.anisonyan1+1@gmail.com')
    };

    async fillPassword() {
        await uiContext.page.locator(this.PASSWORD).fill('123456')
    };

    async clickCreateNewChat() {
        await uiContext.page.locator(this.CREATE_NEW_CHAT).click()
    };

    async fillChannelName() {
        await uiContext.page.locator(this.CHANNEL_TITLE).fill(messengerCreateChats.ChannelName)
    };

    async clickCreateButton() {
        await uiContext.page.locator(this.CREATE_BUTTON).click()
    };

    async assertChannelCreationNotification() { 
        await expect(uiContext.page.getByText(this.CHANNEL_CREATION_NOTIFICATION)).toBeVisible();
    };

    async assertMeets() { 
        await expect(uiContext.page.locator(this.MEETS)).toBeEnabled()
    };

    async assertTasks() { 
        await expect(uiContext.page.locator(this.TASKS)).toBeEnabled()
    };

    async assertUsers() { 
        await expect(uiContext.page.locator(this.USERS)).toBeEnabled()
    };

    async clickSettings() {
        await uiContext.page.locator(this.SETTINGS).click()
    };

    async fillInputField() {
        await uiContext.page.locator(this.INPUT_FIELD).fill('123')
    };

    async clickSendIcon() {
        await uiContext.page.locator(this.SEND_BUTTON).click()
    };

    async clickChatNameInMenuSection() {
        await uiContext.page.locator(this.WORKSPACE_NAME_IN_MENU_SECTION).click()
    };

    async clickChatName() {
        await uiContext.page.locator(this.CHAT_NAME).click()
    };

    async clickUpdateChat() {
        await uiContext.page.locator(this.UPDATE_CHAT).click()
    };

    async clickDeleteChat() {
        await uiContext.page.locator(this.DELETE_CHAT).click()
    };

    async clickContinueDeleteChat() {
        await uiContext.page.locator(this.CONTINUE_DELETE_CHAT).click()
    };

    async assertChatRemovedNotification() { 
        await expect(uiContext.page.getByText(this.CHAT_REMOVED_NOTIFICATION)).toBeVisible();
    };


    async clickUserProfileSettings() {
        await uiContext.page.locator(this.USER_PROFILE_SETTINGS).click()
    };
    
    async clickLogout() {
        await uiContext.page.locator(this.LOGOUT_BUTTON).click()
    };

    async clickReallyLeaveButton() {
        await uiContext.page.locator(this.REALLY_LEAVE_BUTTON).click()
    };

    
    async signInWorkspace() {
        await this.goto();
        await this.clickSignInButton();
        await this.fillEmail();
        await this.fillPassword();
    }

    async createChat() {
        await this.clickCreateNewChat();
        await this.fillChannelName();
        await this.clickCreateButton();
        await uiContext.page.waitForTimeout(2000);
        await this.assertChannelCreationNotification(); 
    };

    async deleteChat() {
        await this.clickChatNameInMenuSection();
        await this.clickChatName();
        await this.clickDeleteChat();
        await this.clickContinueDeleteChat();
        await uiContext.page.waitForTimeout(2000);
        await this.assertChatRemovedNotification(); 
    };

    async logoutOfWorkspace() {
        await messengerCreateChats.clickUserProfileSettings();
        await messengerCreateChats.clickLogout();
        await messengerCreateChats.clickReallyLeaveButton();
    }





}
export const messengerCreateChats = new MessengerCreateChats();
