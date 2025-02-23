import {test, expect} from '@playwright/test'
import { uiContext } from "../../pages/UiContext";
import { hubLogin } from '../../pages/HubLogin';
import { hubCreateWorkspace } from '../../pages/HubCreateWorkspace';

test('Create new workspace', async({browser}) => {

    await uiContext.setContext(browser);
    await hubLogin.hubSignIn();
    await hubCreateWorkspace.assertEclipseLogoToBeVisible();
    await hubCreateWorkspace.clickCreateNewWorkspaceButton();
    await hubCreateWorkspace.fillWorkspaceTitle(hubCreateWorkspace.workspaceName);
    await hubCreateWorkspace.clickProceedConfigurationButton();
    await hubCreateWorkspace.assertWorkspaceCreationNotification();
    await uiContext.page.waitForTimeout(1000);
    await hubCreateWorkspace.clickProceedConfigurationButton();
    await hubCreateWorkspace.fillWorkspaceDomain(hubCreateWorkspace.workspaceName);
    await hubCreateWorkspace.clickUpdateWorkspaceButton();
    await hubCreateWorkspace.assertWorkspaceUpdatedNotification()
    await hubCreateWorkspace.assertMenu1Item();
    await hubCreateWorkspace.assertMenu2Item();
    await hubCreateWorkspace.assertMenu3Item();
    await hubCreateWorkspace.assertMenu4Item();
    await hubCreateWorkspace.assertMenu5Item();



});
