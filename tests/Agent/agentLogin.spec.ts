import {test, expect} from '@playwright/test'
import { agentLoginPage } from '../../pages/AgentLoginPage';
import { uiContext } from '../../pages/UiContext';


test('Sign in Agent', async({browser}) => {
    await uiContext.setContext(browser); //browser goes to uicontext class to define page, because browser available in test file 
    await agentLoginPage.goto();
    await agentLoginPage.login('annaanisonyaneclipse@gmail.com', 'Eclipse123!');
    await agentLoginPage.clickLogOutButton();
}) 
