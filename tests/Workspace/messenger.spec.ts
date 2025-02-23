import {test, expect} from '@playwright/test'
import { uiContext } from "../../pages/UiContext";
import { time, timeStamp } from 'console';
import { EmailReader } from '../../helpers/EmailReader';
import { DataConversionHelper } from '../../helpers/DataConversionHelper';
import { messengerCreateChats } from '../../pages/MessengerCreateChats';


test ('Sign in to existing workspace, Create chat, send a message, Delete chat, assertion of the text and buttons', async({browser}) => {
    await uiContext.setContext(browser);
    await messengerCreateChats.goto();
    await messengerCreateChats.fillEmail();
    await messengerCreateChats.fillPassword();
    await messengerCreateChats.clickSignInButton();
    await messengerCreateChats.clickCreateNewChat();
    await messengerCreateChats.fillChannelName();
    await messengerCreateChats.clickCreateButton();
    await uiContext.page.waitForTimeout(2000);
    await messengerCreateChats.assertChannelCreationNotification();
    await messengerCreateChats.assertMeets();
    await messengerCreateChats.assertTasks();
    await messengerCreateChats.assertUsers();
    await messengerCreateChats.fillInputField();
    await messengerCreateChats.clickSendIcon();
    await messengerCreateChats.clickChatName();
    await messengerCreateChats.clickDeleteChat();
    await messengerCreateChats.clickContinueDeleteChat();
    await messengerCreateChats.logoutOfWorkspace();
})