import {test, expect} from '@playwright/test'
import { uiContext } from "../../pages/UiContext";
import { signUpWorkspace } from '../../pages/signUpWorkspace';
import { time, timeStamp } from 'console';
import { DataProviderHelper } from '../../helpers/DataProviderHelper';
import { EmailReader } from '../../helpers/EmailReader';
import { DataConversionHelper } from '../../helpers/DataConversionHelper';
import { hubSignUp } from '../../pages/HubSignUp';


const hubEmail = DataProviderHelper.getWorkspaceUserEmail();

test ('assertion of the text and buttons', async({browser}) => {
    const timestamp = DataProviderHelper.getTimestamp();

    await uiContext.setContext(browser);
    await hubSignUp.goto();
    await hubSignUp.fillEmail(hubEmail);
    await hubSignUp.clickAcceptTermsCheckbox();

    await uiContext.page.waitForTimeout(2000);
    await hubSignUp.clickSignUpButton();
    await uiContext.page.waitForTimeout(10000);

    //console.log('workspaceUserEmail:', workspaceUserEmail);
    //console.log('currentTimestamp:', timestamp);

    const signUpUrl = await EmailReader.getEmailMsgExtractUrl(`after:${timestamp}`);
    console.log("signUpUrl:", signUpUrl);
    await uiContext.page.goto(signUpUrl);
    await uiContext.page.waitForTimeout(2000);
    await hubSignUp.fillPassword(signUpWorkspace.PASSWORD);
    await hubSignUp.fillRepeatPassword(signUpWorkspace.PASSWORD);
    await hubSignUp.clickHubSignUpButton();
    await hubSignUp.assertHubHomePageText();
    await hubSignUp.assertCreateNewWorksapceButton();
    //await uiContext.page.pause();

})

