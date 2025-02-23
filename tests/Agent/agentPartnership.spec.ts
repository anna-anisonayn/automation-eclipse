import {test, expect} from '@playwright/test'
import { agentLoginPage } from '../../pages/AgentLoginPage';
import { uiContext } from '../../pages/UiContext';
import { agentSignUp } from '../../pages/AgentSignUp';
import { DataProviderHelper } from '../../helpers/DataProviderHelper';
import { EmailReader } from '../../helpers/EmailReader';
import { agentProfile } from '../../pages/AgentProfile';
import { faker } from "@faker-js/faker";
import { agentPartnership } from '../../pages/AgentPartership';



test ('Partnership', async ({browser}) => {
    await uiContext.setContext(browser);
    await agentProfile.goto();
    await agentLoginPage.login('annaanisonyaneclipse@gmail.com', 'Eclipse123!');
    await agentPartnership.clickPartnership();
    await agentPartnership.assertAgentLinkText();
    await agentPartnership.assertCompaniesLinkText();
    //await uiContext.page.pause()
    await agentPartnership.assertConfirmYourQualificationsText(); 
    await agentPartnership.clickConfirmYourQualificationsButton();

})