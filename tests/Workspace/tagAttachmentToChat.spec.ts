import { test, expect} from '@playwright/test'
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


const TagName = `tag${DataProviderHelper.getTimestamp()}`;
const workspaceUserEmail = DataProviderHelper.getWorkspaceUserEmail();



test ('Tag creation and attachment to a chat', async({browser}) => {
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
    await messengerCreateChats.createChat();
    await tagAttachmentToChat.tagCreation();
    await messengerCreateChats.clickChatNameInMenuSection();
    await messengerCreateChats.clickChatName();
    await tagAttachmentToChat.clickCurrentTagName();
    await messengerCreateChats.clickUpdateChat();
    await tagAttachmentToChat.hoverSettingsSection();
    await tagAttachmentToChat.clickSettingsButton();
    await tagAttachmentToChat.clickCurrentTagName();
    await tagAttachmentToChat.hoverSettingsSection();
    await tagAttachmentToChat.clickSettingsButton();
    await tagAttachmentToChat.clickTagName(TagName);
    await tagAttachmentToChat.clickDeleteTag();
    await tagAttachmentToChat.clickContinueDeleteTag();
    await messengerCreateChats.deleteChat();
    await messengerCreateChats.logoutOfWorkspace();

})



