import {test, expect} from '@playwright/test'
import { uiContext } from "../../pages/UiContext";
import { hubLogin } from '../../pages/HubLogin';
import { hubCreateWorkspace } from '../../pages/HubCreateWorkspace';
import { hubSignUp } from '../../pages/HubSignUp';
import { DataProviderHelper } from '../../helpers/DataProviderHelper';
import { EmailReader } from '../../helpers/EmailReader';

const hubEmail = DataProviderHelper.getWorkspaceUserEmail();


test('Get recovery email', async({browser}) => {
    const currentTimestamp = DataProviderHelper.getTimestamp()

    await uiContext.setContext(browser);
    await hubLogin.goto();
    await hubLogin.clickRecoverButton();
    await uiContext.page.waitForTimeout(3000);
    await hubSignUp.fillEmail(hubEmail);
    await hubLogin.clickSendConfirmationLink();
    await uiContext.page.waitForTimeout(6000);

    //const timestamp = DataProviderHelper.getTimestamp();
    const signUpUrl = await EmailReader.getEmailMsgExtractUrl(`after:${currentTimestamp}`);
    console.log("signUpUrl:", signUpUrl);
    await uiContext.page.goto(signUpUrl);

})