import { test} from '@playwright/test'
import { uiContext } from "../../pages/UiContext";
import { DataProviderHelper } from '../../helpers/DataProviderHelper';
import { messengerCreateChats } from '../../pages/MessengerCreateChats';
import { hubLogin } from '../../pages/HubLogin';
import { hubCreateWorkspace } from '../../pages/HubCreateWorkspace';
import { tagAttachmentToChat } from '../../pages/TagAttachmentToChat';
import { hubWorkspacePayment } from '../../pages/HubWorkspacePayment';
import { EmailReader } from '../../helpers/EmailReader';
import { workspaceProfile } from '../../pages/WorkspaceProfile';
import { signUpWorkspace } from '../../pages/SignUpWorkspace';


const currentTimestamp = DataProviderHelper.getTimestamp();
const workspaceUserEmail = DataProviderHelper.getWorkspaceUserEmail();
const tagName = `tag${DataProviderHelper.getTimestamp()}`

test ('Tag creation and attachment to a chat', async({browser}) => {
    await uiContext.setContext(browser);
    await hubLogin.hubSignIn();
    await hubCreateWorkspace.workspaceCreation(hubCreateWorkspace.workspaceName);
    await hubWorkspacePayment.workspaceTrialPeriod();
    await signUpWorkspace.clickGetAdminLinkButton();
    await uiContext.page.waitForTimeout(10000);

    const secondPagePromise = uiContext.startWaitingNewPageEvent(); // uiContext.context.waitForEvent('page');
    await signUpWorkspace.clickOpenWorkspaceButton();
    await uiContext.switchCurrentContextToNewPage(secondPagePromise); 
    await uiContext.page.waitForTimeout(3000);
    await signUpWorkspace.SignUpToWorkspace(workspaceUserEmail)
    //const main_main = workspaceUserEmail
    //console.log(main_main)
    await uiContext.page.waitForTimeout(3000);

    const signUpUrl = await EmailReader.getEmailMsgExtractUrl(`${currentTimestamp}` )
    console.log("signUpUrl:", signUpUrl)
    await uiContext.page.waitForTimeout(3000);
    await uiContext.page.goto(signUpUrl);
    await signUpWorkspace.registrationToWorkspace(signUpUrl);
    await workspaceProfile.saveProfileSetting();
    await messengerCreateChats.createChat();
    await tagAttachmentToChat.tagCreation();
    await messengerCreateChats.clickChatNameInMenuSection();
    await messengerCreateChats.clickChatName();

    await tagAttachmentToChat.clickCurrentTagName('tagname');
    await messengerCreateChats.clickUpdateChat();
    //await uiContext.page.pause()

    await tagAttachmentToChat.clickSettingsButton();
    await tagAttachmentToChat.clickTagName(tagName);
    await tagAttachmentToChat.clickDeleteTag();
    await tagAttachmentToChat.clickContinueDeleteTag();
    await messengerCreateChats.deleteChat();
    await uiContext.page.waitForTimeout(1000);
    await messengerCreateChats.clickUserProfileSettings();
    await messengerCreateChats.clickLogout();
    await messengerCreateChats.clickReallyLeaveButton();

})
