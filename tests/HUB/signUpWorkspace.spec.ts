import {test, expect} from '@playwright/test'
import { uiContext } from "../../pages/UiContext";
import { hubLogin } from '../../pages/HubLogin';
import { hubCreateWorkspace } from '../../pages/HubCreateWorkspace';
import { hubWorkspacePayment } from '../../pages/HubWorkspacePayment';
import { signUpWorkspace } from '../../pages/SignUpWorkspace';
import { DataProviderHelper } from '../../helpers/DataProviderHelper';
import { EmailReader } from '../../helpers/EmailReader';
import { DataConversionHelper } from '../../helpers/DataConversionHelper';



test("Sign up to Workspace via admin link", async ({browser}) => {
    await uiContext.setContext(browser);
    await hubLogin.hubSignIn();
    await hubCreateWorkspace.workspaceCreation(hubCreateWorkspace.workspaceName);
    await hubWorkspacePayment.workspaceMakePayment();
    await signUpWorkspace.clickGetAdminLinkButton();

    const secondPagePromise = uiContext.startWaitingNewPageEvent() // uiContext.context.waitForEvent('page');
    await signUpWorkspace.clickOpenWorkspaceButton();
    await uiContext.switchCurrentContextToNewPage(secondPagePromise); // uiContext.page = await secondPagePromise;    
    const workspaceUserEmail = DataProviderHelper.getWorkspaceUserEmail()

    await signUpWorkspace.fillEmail(workspaceUserEmail)
    await signUpWorkspace.clickAcceptTermsCheckbox();
    await signUpWorkspace.clickSignUpButton();
    await uiContext.page.waitForTimeout(3000);


    const currentTimestamp = DataProviderHelper.getTimestamp()

    //await uiContext.page.pause()

    console.log('workspaceUserEmail:', workspaceUserEmail);
    console.log('currentTimestamp:', currentTimestamp);

    const emailMsg = await EmailReader.getEmailMsg(`after:${currentTimestamp}`);
    console.log('emailMsg', emailMsg);
    const bodyText = DataConversionHelper.base64ToTextString(emailMsg!['payload']['parts'][1]['body']['data']);
    console.log('bodyText::', bodyText)

    if (bodyText) {
        const urlMatchingRegex = /a\s+href=["'](\S+)["']/;
        const signUpUrl = bodyText.match((urlMatchingRegex)[1])
        console.log("signUpUrl:", signUpUrl)
    } else {
        throw 'Message body is empty or undefined'
    }
  
})


