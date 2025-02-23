import { expect } from "@playwright/test";
import { uiContext } from "./UiContext";
import { hubWorkspacePayment } from "./HubWorkspacePayment";
import { hubCreateWorkspace } from "./HubCreateWorkspace";
import { faker } from "@faker-js/faker";


class AgentPartnership {



    PARTNERSHIP_TEXT = '//*[text()="Partnership"]'
    COPY_AGENTS_LINK_BUTTON = '//*[@id="root"]/div[2]/div[2]/div[2]/div/div[1]/div[2]/div[1]/button'
    COPY_COMPANIES_LINK_BUTTON = '//*[@id="root"]/div[2]/div[2]/div[2]/div/div[1]/div[2]/div[2]/button'
    COPY_CONFIRM_YOUR_QUALIFICATIONS_BUTTON = '//*[@id="root"]/div[2]/div[2]/div[2]/div/div[1]/div[2]/div[3]/button'
    CONFIRM_YOUR_QUALIFICATIONS_BUTTON = '//*[contains(@href, "https://staging.internal.eclipse.club/")]'
    CONFIRM_YOUR_QUALIFICATIONS = '//*[@id="root"]/div[2]/div[2]/div[2]/div/div[1]/div[2]/div[3]/div/div/div'


    async clickPartnership() {
        await uiContext.page.locator(this.PARTNERSHIP_TEXT).click()
    };

    async assertReferralLinksText() { 
        await expect(uiContext.page.getByText('My referral links')).toBeVisible();
    };

    async assertAgentLinkText() { 
        await expect(uiContext.page.getByText('Link for agents')).toBeVisible();
    };

    async assertCompaniesLinkText() { 
        await expect(uiContext.page.getByText('Link for companies, clients')).toBeVisible();
    };

    async assertConfirmYourQualificationsText() { 
        await expect(uiContext.page.getByText('Confirm your qualifications')).toBeVisible();
    };

    async clickConfirmYourQualificationsButton() {
        await uiContext.page.locator(this.CONFIRM_YOUR_QUALIFICATIONS_BUTTON).click()
    };



}


export const agentPartnership = new AgentPartnership();