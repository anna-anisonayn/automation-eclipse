import {test, expect} from '@playwright/test'
import { uiContext } from "../../pages/UiContext";
import { hubLogin } from '../../pages/HubLogin';
import { hubCreateWorkspace } from '../../pages/HubCreateWorkspace';
import { hubWorkspacePayment } from '../../pages/HubWorkspacePayment';



test('Make a Payment',async({browser}) => {
    await uiContext.setContext(browser);
    await hubLogin.hubSignIn();
    //await uiContext.page.pause();
    //await hubLogin.assertSuccessNotificationToBeVisible({timeout: 30000});
    await hubCreateWorkspace.workspaceCreation(hubCreateWorkspace.workspaceName);
    await hubWorkspacePayment.clickMakePayment();
    await hubWorkspacePayment.clickAddToCart();
    await hubWorkspacePayment.clickAddToCartContinue();
    await hubWorkspacePayment.checkBoxIsChecked();
    await hubWorkspacePayment.clickAddToCartCheckout();
    await uiContext.page.waitForTimeout(2000);
    await hubWorkspacePayment.assertPurchaseNotification();
    await hubWorkspacePayment.assertBalance();
    await hubWorkspacePayment.assertAdminText();
    await hubWorkspacePayment.assertAdminAccessText();
    await hubWorkspacePayment.clickLogOutButton()

})