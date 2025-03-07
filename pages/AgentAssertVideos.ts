import { expect } from "@playwright/test";
import { uiContext } from "./UiContext";


class AgentAssertVideos {
    
    DROPDOWN_FIRST_ELEMENT = '//*[contains(@class, "styles_lang_controls_lang__jOpl4 styles_lang_controls_lang_label__W81gm")]'
    LANGUAGE_DROPDOWN_TITLE = '//*[contains(@class, "styles_lang_label__5zCyk")]'
    LANGUAGE_DROPDOWN = '//*[contains(@class, "menu_label__uJzmw")]'
    ABOUT_US_VIDEO = '//*[contains(@src, "/static/media/aboutUs.d762ef07cfe9bd9484ce.webp")]'


    async clickToolsButton() {
        await uiContext.page.getByText("Tools").click()
    };

    async assertVideos() {
        await expect(uiContext.page.getByText('Videos')).toBeVisible();
    };

    async clickDropDownFirstElement() {
        await uiContext.page.locator(this.DROPDOWN_FIRST_ELEMENT).click()
    };
    

    async clickLanguageDropdownTitle() {
        await uiContext.page.locator(this.LANGUAGE_DROPDOWN_TITLE).click()
    };

    async clickLanguageButton(language) {
        await uiContext.page.getByText(language).click()
    };

    async assertLanguage(language) {
        await expect(uiContext.page.getByText(language)).toBeVisible();
    };

    async assertVideosInItaly() {
        await expect(uiContext.page.getByText('Video materiali')).toBeVisible();
    };

    async assertVideo(language) {
        await expect(uiContext.page.getByText(language)).toContainText(language)
    };
    
    async assertTitleOfVideo() {
        await expect(uiContext.page).toHaveTitle('Eclipse Global Hub _ About us (Italian) - YouTube');
    };

    async clickAboutUsVideo() {
        await uiContext.page.locator(this.ABOUT_US_VIDEO).click()
    };
    

}

export const agentAssertVideos = new AgentAssertVideos();


