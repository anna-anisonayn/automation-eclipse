import {test, expect} from '@playwright/test'
import { uiContext } from '../../pages/UiContext';
import { hubLogin } from '../../pages/HubLogin';
import { hubCreateWorkspace } from '../../pages/HubCreateWorkspace';
import { hubWorkspacePayment } from '../../pages/HubWorkspacePayment';
import { hubEditWorkspace } from '../../pages/HubEditWorkspace';


test('Edit Workspace', async({browser}) => {
    
    await uiContext.setContext(browser);
    await hubLogin.hubSignIn();
    await hubCreateWorkspace.workspaceCreation(hubCreateWorkspace.workspaceName);
    await hubEditWorkspace.clickEditButton();
    await hubEditWorkspace.clickEnableInvitationsCheckbox();
    await hubEditWorkspace.assertUsersInvitationsCheckboxDisabled()
    await hubCreateWorkspace.clickUpdateWorkspaceButton();
    await hubEditWorkspace.clickEditButton();
    await hubEditWorkspace.clickEnableInvitationsCheckbox();
    await hubEditWorkspace.clickUsersInvitationsCheckbox();
    await hubCreateWorkspace.clickUpdateWorkspaceButton();
    await hubEditWorkspace.clickEditButton();
    await hubEditWorkspace.assertCheckoxIsChecked();
    await hubEditWorkspace.assertSecondCheckoxIsChecked();
    const title = await hubCreateWorkspace.fillWorkspaceTitle(hubCreateWorkspace.workspaceName)
    await hubCreateWorkspace.fillWorkspaceDomain(hubCreateWorkspace.workspaceName)
    await hubCreateWorkspace.clickUpdateWorkspaceButton();
    await hubEditWorkspace.assertWorkspaceTitle(title);
    await hubEditWorkspace.assertWorkspaceText(title);
    


    //await uiContext.page.pause()



    //await hubWorkspacePayment.workspaceMakePayment();
})