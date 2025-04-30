import {test} from '@playwright/test'
import { uiContext } from "../../pages/UiContext";
import { messengerCreateChats } from '../../pages/MessengerCreateChats';
import { createProject } from '../../pages/CreateProject';
import { DataProviderHelper } from '../../helpers/DataProviderHelper';
import { createTaskList } from '../../pages/CreateTaskList';

const RandomString = DataProviderHelper.getRandomString();
//const RandomStringLong = DataProviderHelper.getRandomStringLong();

test ('Create project, add tasks, add List and archive', async({browser}) => {
    await uiContext.setContext(browser);
    await messengerCreateChats.goto();
    await messengerCreateChats.fillEmail();
    await messengerCreateChats.fillPassword();
    await messengerCreateChats.clickSignInButton();
    await uiContext.page.pause()
    await createProject.clickTasksButton();
    await createProject.clickNewProjectButton();
    await createProject.fillProjectID(RandomString);
    await createProject.fillProjectTitle("Project Title");
    await createProject.fillProjectDescription();
    await createProject.clickCreateProjectButton();
    await uiContext.page.getByText(RandomString).click();
    await createTaskList.clickAddAnotherList();
    await createTaskList.fillListName(RandomString);
    await createTaskList.clickAddListButton();
    await createProject.assertAddAnotherList();
    await createTaskList.clickAddTaskButton();
    await createTaskList.fillTaskName(RandomString);
    await createTaskList.clickAddTaskButton();
    await createProject.clickProjectThreeDots();
    await createProject.clickArchiveProject();
    await createProject.clickContinueArchiveProject();
    await uiContext.page.waitForTimeout(1000);
    await messengerCreateChats.clickUserProfileSettings();
    await messengerCreateChats.clickLogout();
    await messengerCreateChats.clickReallyLeaveButton();
})
