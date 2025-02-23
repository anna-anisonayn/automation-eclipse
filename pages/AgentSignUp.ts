import { uiContext } from "./UiContext";


class AgentSignUp { 
    SIGNUP_BUTTON_HEADER = '//div[contains(@class, "styles_buttons")]//*[text()="Sign up"]'
    EMAIL_INPUT_FIELD = '//input[contains(@placeholder, "Email")]';
    PASSWORD_INPUT_FIELD = '//input[contains(@placeholder, "Password")]';
    REPEAT_PASSWORD = '//input[contains(@placeholder, "Repeat password")]'
    ACCEPT_THE_TERMS_CHECKBOX = '//button[contains(@class, "checkbox")]'
    SIGNUP_BUTTON = '//div[contains(@class, "styles_main_form")]//*[text()="Sign up"]'
    COUNTRY_DROPDOWN = '//input[@id="react-select-2-input"]' 
    GO_PERSONAL_ACCOUNT = '//*[text()="Go to your personal account"]'
    SIGNIN_BUTTON = '//*[text()="Sign in"]'



    async goto() {
        await uiContext.page.setViewportSize({width:2560, height:1392})
        await uiContext.page.goto('https://agent.eclipse.club/signup?ref=1En4Pv6');  
    };

    async clickSignUpButtonOnHeader() {
        await uiContext.page.locator(this.SIGNUP_BUTTON_HEADER).click()
    };

    async fillEmail(username) {
        await uiContext.page.locator(this.EMAIL_INPUT_FIELD).fill(username)
    };

    async fillPassword(password: string) {
        await uiContext.page.locator(this.PASSWORD_INPUT_FIELD).fill(password)
    };

    async fillRepeatPassword(password: string) {
        await uiContext.page.locator(this.REPEAT_PASSWORD).fill(password)
    };

    async clickAcceptTermsCheckbox() {
        await uiContext.page.locator(this.ACCEPT_THE_TERMS_CHECKBOX).click()
    };

    async clickCountryDropdown() {
        await uiContext.page.locator(this.COUNTRY_DROPDOWN).click()
    };

    async fillCountry(country: string) {
        await uiContext.page.locator(this.COUNTRY_DROPDOWN).fill('Italy')
    };

    async selectCountry(country: string) {
        await this.clickCountryDropdown();
        await this.fillCountry(country)
        await uiContext.page.locator(this.COUNTRY_DROPDOWN).press('ArrowDown')
        await uiContext.page.locator(this.COUNTRY_DROPDOWN).press('Enter')
     
    };

    async clickSignUpButton() {
        await uiContext.page.locator(this.SIGNUP_BUTTON).click()
    };

    async clickGoPersonalAccount() {
        await uiContext.page.locator(this.GO_PERSONAL_ACCOUNT).click()
    };

    async clickSignInButton() {
        await uiContext.page.locator(this.SIGNIN_BUTTON).click()
    };


}

export const agentSignUp = new AgentSignUp();