import {test, expect} from '@playwright/test'
import { uiContext } from "../pages/UiContext";
import { hubLogin } from '../pages/HubLogin';
import { hubCreateWorkspace } from '../pages/HubCreateWorkspace';
import { hubWorkspacePayment } from '../pages/HubWorkspacePayment';
import { signUpWorkspace } from '../pages/signUpWorkspace';
import { time, timeStamp } from 'console';
import { DataProviderHelper } from '../helpers/DataProviderHelper';
import { EmailReader } from '../helpers/EmailReader';
import { DataConversionHelper } from '../helpers/DataConversionHelper';

const workspaceUserEmail = DataProviderHelper.getWorkspaceUserEmail()

test.skip("Sign up to Workspace via admin link", async ({browser}) => {
    await uiContext.setContext(browser);
    await hubLogin.hubSignIn();
    await hubCreateWorkspace.workspaceCreation(hubCreateWorkspace.workspaceName);
    await hubWorkspacePayment.workspaceMakePayment();
    await signUpWorkspace.clickGetAdminLinkButton();

    const secondPagePromise = uiContext.startWaitingNewPageEvent() // uiContext.context.waitForEvent('page');
    await signUpWorkspace.clickOpenWorkspaceButton();
    await uiContext.switchCurrentContextToNewPage(secondPagePromise); // uiContext.page = await secondPagePromise;    
    
    await signUpWorkspace.fillEmail(workspaceUserEmail)
    await signUpWorkspace.clickAcceptTermsCheckbox()

    const currentTimestamp = DataProviderHelper.getTimestamp()
    await uiContext.page.waitForTimeout(7000);
    await signUpWorkspace.clickSignUpButton();
    await uiContext.page.waitForTimeout(7000);

    //await uiContext.page.pause()

    console.log('workspaceUserEmail:', workspaceUserEmail);
    console.log('currentTimestamp:', currentTimestamp);

    const signUpUrl = await EmailReader.getEmailMsgExtractUrl(`after:${currentTimestamp}`, )
    console.log("signUpUrl:", signUpUrl)
    await uiContext.page.goto(signUpUrl);
    await uiContext.page.waitForTimeout(2000);

    await signUpWorkspace.fillPassword(signUpWorkspace.PASSWORD);
    await signUpWorkspace.fillRepeatPassword(signUpWorkspace.PASSWORD);
    await signUpWorkspace.clickWorkspceSignUpButton();


    // const emailMsg = await EmailReader.getEmailMsg(`after:${currentTimestamp}`);
    // console.log('emailMsg', emailMsg);
  
    // todo, add email not found case handdling 

    // const bodyText = DataConversionHelper.base64ToTextString(emailMsg!['payload']['parts'][1]['body']['data']);
    // console.log('bodyText::', bodyText)

    // if (bodyText) {
    //     const urlMatchingRegex = /a\s+href=["'](\S+)["']/;
    //     const signUpUrl = bodyText.match(urlMatchingRegex)[1]
    //     console.log("signUpUrl:", signUpUrl)
    // } else {
    //     throw 'Message body is empty or undefined'
    // }

    
})


