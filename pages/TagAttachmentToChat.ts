import { expect } from "@playwright/test";
import { uiContext } from "./UiContext";
import { faker } from "@faker-js/faker";
import { DataProviderHelper } from "../helpers/DataProviderHelper";


class TagAttachmentToChat {

    HOVER_SETTINGS_SECTION = '//*[contains(@class, "group flex items")]'
    SETTINGS_BUTTON = '//*[text()= "Settings"]'
    CREATE_WORKSPACE_BUTTON = '//*[text()= "Create workspace tag"]'
    TAG_TITLE_FIELD = '//*[@placeholder= "Tag title"]'
    CREATE_BUTTON = '//*[text()= "Create tag"]'
    TAG_NAME = '//*[contains(@class, "navigation-hover focus-visible:bg-outline h-12 py")]'
    DELETE_TAG = '//*[text() = "Delete tag"]'
    UPDATE_TAG = '//*[text() = "Update tag"]'
    CONTINUE_DELETE_TAG = '//*[text() = "Continue"]'
    TagName = `tag${DataProviderHelper.getTimestamp()}`

       
    async hoverSettingsSection() {
        await uiContext.page.locator(this.HOVER_SETTINGS_SECTION).hover()
    };

    async clickSettingsButton() {
        await uiContext.page.locator(this.SETTINGS_BUTTON).click()
    };

    async clickCreateWorkspaceTagButton() {
        await uiContext.page.locator(this.CREATE_WORKSPACE_BUTTON).click()
    };

    async fillTagTitle(tagName) {
        await uiContext.page.locator(this.TAG_TITLE_FIELD).fill(tagName)
    };

    async clickCurrentTagName() {
        await uiContext.page.getByText(this.TagName).click()
    };
    
    async clickCreateTagButton() {
        await uiContext.page.locator(this.CREATE_BUTTON).click()
    };

    async clickTagName(TagName) {
        await uiContext.page.locator(this.TAG_NAME).click(TagName)
    };

    async clickDeleteTag() {
        await uiContext.page.locator(this.DELETE_TAG).click()
    };

    async clickContinueDeleteTag() {
        await uiContext.page.locator(this.CONTINUE_DELETE_TAG).click()
    };

    
    async clickUpdateTag() {
        await uiContext.page.locator(this.UPDATE_TAG).click()
    };

    async tagCreation() {
        await tagAttachmentToChat.hoverSettingsSection();
        await tagAttachmentToChat.clickSettingsButton();
        await tagAttachmentToChat.clickCreateWorkspaceTagButton();
        await tagAttachmentToChat.fillTagTitle(this.TagName);
        await tagAttachmentToChat.clickCreateTagButton();
    }
}
export const tagAttachmentToChat = new TagAttachmentToChat();






    
    
    
    
    
    
    
    
    
    
    
    
    
    








