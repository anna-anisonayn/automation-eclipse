import { test, expect} from '@playwright/test'
import { uiContext } from "../../pages/UiContext";
import { DataProviderHelper } from '../../helpers/DataProviderHelper';
import { hubLogin } from '../../pages/HubLogin';
import { hubCreateWorkspace } from '../../pages/HubCreateWorkspace';
import { hubWorkspacePayment } from '../../pages/HubWorkspacePayment';
import { EmailReader } from '../../helpers/EmailReader';
import { workspaceProfile } from '../../pages/WorkspaceProfile';
import { signUpWorkspace } from '../../pages/SignUpWorkspace';


const TagName = `tag${DataProviderHelper.getTimestamp()}`;
const workspaceUserEmail = DataProviderHelper.getWorkspaceUserEmail();


test ('Create worksapece and set up Profile ', async({browser}) => {
    const currentTimestamp = DataProviderHelper.getTimestamp();
    await uiContext.setContext(browser);
    await hubLogin.hubSignIn();
    await hubCreateWorkspace.workspaceCreation(hubCreateWorkspace.workspaceName);
    await hubWorkspacePayment.workspaceTrialPeriod();
    await signUpWorkspace.clickGetAdminLinkButton();
    const secondPagePromise = uiContext.startWaitingNewPageEvent(); // uiContext.context.waitForEvent('page');
    await signUpWorkspace.clickOpenWorkspaceButton();
    await uiContext.page.waitForTimeout(3000);

    await uiContext.switchCurrentContextToNewPage(secondPagePromise); 
    await signUpWorkspace.SignUpToWorkspace(workspaceUserEmail);
    await uiContext.page.waitForTimeout(3000);
    const signUpUrl = await EmailReader.getEmailMsgExtractUrl(`after:${currentTimestamp}`, );
    await uiContext.page.waitForTimeout(7000);

    
    await signUpWorkspace.registrationToWorkspace(signUpUrl);
    await workspaceProfile.saveProfileSetting();

})







