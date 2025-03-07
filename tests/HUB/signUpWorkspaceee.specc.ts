import {test, expect} from '@playwright/test'
import { uiContext } from "../../pages/UiContext";
import { hubLogin } from '../../pages/HubLogin';
import { hubCreateWorkspace } from '../../pages/HubCreateWorkspace';
import { hubWorkspacePayment } from '../../pages/HubWorkspacePayment';
import { signUpWorkspace } from '../../pages/SignUpWorkspace';
import { DataProviderHelper } from '../../helpers/DataProviderHelper';
import { EmailReader } from '../../helpers/EmailReader';

const workspaceUserEmail = DataProviderHelper.getWorkspaceUserEmail()

test("Sign up to Workspace via admin link", async ({browser}) => {
    const currentTimestamp = DataProviderHelper.getTimestamp()

    await uiContext.setContext(browser);
    await hubLogin.hubSignIn();
    await hubCreateWorkspace.workspaceCreation(hubCreateWorkspace.workspaceName);
    await hubWorkspacePayment.workspaceMakePayment();
    await signUpWorkspace.clickGetAdminLinkButton();

    const secondPagePromise = uiContext.startWaitingNewPageEvent() // uiContext.context.waitForEvent('page');
    await signUpWorkspace.clickOpenWorkspaceButton();
    await uiContext.switchCurrentContextToNewPage(secondPagePromise); // uiContext.page = await secondPagePromise;    
    
    await signUpWorkspace.SignUpToWorkspace(workspaceUserEmail)
    // const main_main = workspaceUserEmail
    // console.log(main_main)

    console.log('workspaceUserEmail:', workspaceUserEmail);
    console.log('currentTimestamp:', currentTimestamp);

    const signUpUrl = await EmailReader.getEmailMsgExtractUrl(`after:${currentTimestamp}`)
    console.log("signUpUrl:", signUpUrl)
    await uiContext.page.waitForTimeout(3000);
    await uiContext.page.goto(signUpUrl);
    await uiContext.page.waitForTimeout(3000);
    await signUpWorkspace.fillPassword(signUpWorkspace.PASSWORD);
    await signUpWorkspace.fillRepeatPassword(signUpWorkspace.PASSWORD);
    await signUpWorkspace.clickWorkspceSignUpButton();

})


