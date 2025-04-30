import { uiContext } from "./UiContext";

class TagAttachmentToChat {

    SETTINGS_BUTTON = '//*[contains(@class, "lucide lucide-settings h-4 w-4")]'
    CREATE_WORKSPACE_BUTTON = '//*[text()= "Create workspace tag"]'
    TAG_TITLE_FIELD = '//*[@placeholder= "Tag title"]'
    CREATE_BUTTON = '//*[text()= "Create tag"]'
    TAG_NAME = '//*[contains(@class, "focus-visible:bg-outline h-12 py-2 p")]'
    DELETE_TAG = '//*[text() = "Delete tag"]'
    UPDATE_TAG = '//*[text() = "Update tag"]'
    CONTINUE_DELETE_TAG = '//*[text() = "Continue"]'

 
    async clickSettingsButton() {
        await uiContext.page.locator(this.SETTINGS_BUTTON).click()
    };

    async clickCreateWorkspaceTagButton() {
        await uiContext.page.locator(this.CREATE_WORKSPACE_BUTTON).click()
    };

    async fillTagTitle(tagName) {
        await uiContext.page.locator(this.TAG_TITLE_FIELD).fill(tagName)
    };

    async clickCurrentTagName(tagname) {
        await uiContext.page.getByText(tagname).click(tagname)
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
        await tagAttachmentToChat.clickSettingsButton();
        await tagAttachmentToChat.clickCreateWorkspaceTagButton();
        await tagAttachmentToChat.fillTagTitle('tagname');
        await tagAttachmentToChat.clickCreateTagButton();
    };
};

export const tagAttachmentToChat = new TagAttachmentToChat();

    
    
    
    
    
    
    
    
    
    
    








