import {test, expect} from '@playwright/test'
import { agentLoginPage } from '../../pages/AgentLoginPage';
import { uiContext } from '../../pages/UiContext';
import { agentSignUp } from '../../pages/AgentSignUp';
import { DataProviderHelper } from '../../helpers/DataProviderHelper';
import { EmailReader } from '../../helpers/EmailReader';
import { agentProfile } from '../../pages/AgentProfile';
import { faker } from "@faker-js/faker";


const first_name = faker.person.firstName()
const last_name = faker.person.lastName()

test ('Profile settings', async ({browser}) => {
    await uiContext.setContext(browser);
    await agentProfile.goto();
    await agentLoginPage.login('annaanisonyaneclipse@gmail.com', 'Eclipse123!');
    await agentProfile.fillLastName(first_name);
    await agentProfile.fillFirstName(last_name);
    await agentProfile.clickSaveChangesButton();
    await agentProfile.assertProfileText();
    await agentProfile.assertPartnershipText();
    await agentProfile.assertStatusText();
    await agentProfile.assertPoolText();
    await agentProfile.assertToolsText();
    await agentProfile.assertTransactionsText();
    await agentProfile.assertNewsText();
    await agentProfile.assertSupportText();
    await agentProfile.assertFAQText();
    await agentProfile.assertDocumentsText();

})