import { expect } from "@playwright/test";
import { uiContext } from "./UiContext";
import { DataProviderHelper } from "../helpers/DataProviderHelper";


class HubWorkspacePayment {

    WORKSPACE_MAKE_PAYMENT_BUTTON = '//button[text()="Make a payment"]';
    ADD_TO_CART_BUTTON = '//div[contains(@class, "relative")][ .//*[text()="Agent verification"]]//*[text()="Add to cart"]';
    ADD_TO_CART_CONTINUE = '//*[text()="Continue"]';
    ADD_TO_CART_Checkout = '//*[text()="Checkout"]';
    CHECK_BOX_IS_CHECKED = '//span[@data-state="checked"]';
    PURCHASE_SUCCESS_NOTIFICATION = 'Purchase was processed successfully';
    LOGOUT_BUTTON = '//button[(contains(@class, "items-center whitespace-nowrap"))]';
    GET_ADMIN_LINK = '//button[contains(text(), "Get admin link")]';
    ADMIN_ACCESS_TEXT = 'Getting admin access to workspace';
    ADMIN_ACCESS_TEXT_2 = 'In order to configure your workspace, you have to get an admin access.';
    START_TRIAL_PERIOD = '//button[text()="Start trial period"]'
    TRIAL_TEXT = 'Make the payment before the end of the trial period to avoid having your workspace suspended.'
    




    async clickStartTrialPeriod() {
        await uiContext.page.locator(this.START_TRIAL_PERIOD).click()
    };

    async assertTrialPeriodText() { 
        await expect(uiContext.page.getByText(this.TRIAL_TEXT)).toBeVisible();
    };

    async clickMakePayment() {
        await uiContext.page.locator(this.WORKSPACE_MAKE_PAYMENT_BUTTON).click()
    };

    async clickAddToCart() {
        await uiContext.page.locator(this.ADD_TO_CART_BUTTON).click()
    };

    async clickAddToCartContinue() {
        await uiContext.page.locator(this.ADD_TO_CART_CONTINUE).click()
    };

    async checkBoxIsChecked() {
        await expect(uiContext.page.locator(this.CHECK_BOX_IS_CHECKED)).toBeChecked()
    };

    async clickAddToCartCheckout() {
        await uiContext.page.locator(this.ADD_TO_CART_Checkout).click()
    };

    async assertPurchaseNotification() { 
        await expect(uiContext.page.getByText(this.PURCHASE_SUCCESS_NOTIFICATION)).toBeVisible();
    };

    async assertBalance() { 
        await expect(uiContext.page.getByText("$144.00")).toBeVisible();
    };

    async assertAdminText() { 
        await expect(uiContext.page.getByText(this.ADMIN_ACCESS_TEXT)).toBeVisible();
    };

    async assertAdminAccessText() { 
        await expect(uiContext.page.getByText(this.ADMIN_ACCESS_TEXT_2)).toBeVisible();
    };

    async assertGetAdminLinkButton() { 
        await expect(uiContext.page.locator(this.GET_ADMIN_LINK)).toBeEnabled();
    };
    
    async clickLogOutButton() {
        await uiContext.page.locator(this.LOGOUT_BUTTON).click({timeout: 10000})
    };

    async workspaceMakePayment() {
        await this.clickMakePayment();
        await this.clickAddToCart();
        await this.clickAddToCartContinue();
        await this.checkBoxIsChecked();
        await this.clickAddToCartCheckout();
        await uiContext.page.waitForTimeout(2000);
        await this.assertPurchaseNotification();
        await this.assertBalance();
        await this.assertAdminText();
        await this.assertAdminAccessText();
        await this.assertGetAdminLinkButton();
    }


    async workspaceTrialPeriod() {
        await this.clickStartTrialPeriod();
        await this.assertTrialPeriodText();
        await this.assertAdminText();
        await this.assertAdminAccessText();
        await this.assertGetAdminLinkButton();
    }

}

export const hubWorkspacePayment = new HubWorkspacePayment();