import {test, expect} from '@playwright/test'
import { uiContext } from "../../pages/UiContext";
import { time, timeStamp } from 'console';
import { EmailReader } from '../../helpers/EmailReader';
import { DataConversionHelper } from '../../helpers/DataConversionHelper';
import { messengerCreateChats } from '../../pages/MessengerCreateChats';
import { createProject } from '../../pages/CreateProject';
import { DataProviderHelper } from '../../helpers/DataProviderHelper';
import { createTaskList } from '../../pages/CreateTaskList';

const RandomString = DataProviderHelper.getRandomString();
const RandomStringLong = DataProviderHelper.getRandomStringLong();

test ('Create project, add tasks, add List and archive', async({browser}) => {
    await uiContext.setContext(browser);
    await messengerCreateChats.goto();
    await messengerCreateChats.fillEmail();
    await messengerCreateChats.fillPassword();
    await messengerCreateChats.clickSignInButton();
    await messengerCreateChats.fillEmail();
    await messengerCreateChats.fillPassword();
    await createProject.clickTasksButton();
    await createProject.clickNewProjectButton();
    await createProject.fillProjectID(RandomString);
    await createProject.fillProjectTitle("Project Title");
    await createProject.fillProjectDescription();
    await createProject.clickCreateProjectButton();
    await uiContext.page.getByText(RandomString).click();
    await createTaskList.clickAddAnotherList();
    await createTaskList.fillListName(RandomStringLong);
    await createTaskList.clickAddListButton();
    await createProject.assertAddAnotherList();
    await createTaskList.clickAddTaskButton();
    await createTaskList.fillTaskName(RandomStringLong);
    await createTaskList.clickAddTaskButton();

    await uiContext.page.pause()
})