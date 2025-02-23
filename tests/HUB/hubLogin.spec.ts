import {test, expect} from '@playwright/test'
import { uiContext } from '../../pages/UiContext';
import { hubLogin } from '../../pages/HubLogin';




test('Sign in Hub', async({browser}) => {
    await uiContext.setContext(browser);
    await hubLogin.goto();
    await hubLogin.fillUsernameHub('anna.anisonyan1+2@gmail.com');
    await hubLogin.fillPasswordHub('123456');
    await hubLogin.clickLoginButtonHub();
    await uiContext.page.waitForTimeout(500);
    await hubLogin.assertSuccessNotificationToBeVisible();
    await hubLogin.clickLogOutButtonHub();

})
