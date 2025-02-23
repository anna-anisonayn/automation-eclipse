import { test, expect} from '@playwright/test'
import { uiContext } from "../../pages/UiContext";
import { DataProviderHelper } from '../../helpers/DataProviderHelper';
import { createProject } from '../../pages/CreateProject';
import { messengerCreateChats } from '../../pages/MessengerCreateChats';

const RandomString = DataProviderHelper.getRandomString();


test ('Create, Edit and Archive Project', async({browser}) => {
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
    await createProject.assertProjectInboxText();
    await createProject.assertProjectInProgressText();
    await createProject.assertProjectDoneText();
    await createProject.assertAddAnotherList();
    await createProject.clickProjectThreeDots();
    await createProject.clickEditProject();
    await createProject.editProjectTitle(RandomString);
    await createProject.editProjectDescription();
    await createProject.clickSaveProject();
    await createProject.clickProjectThreeDots();
    await createProject.clickArchiveProject();
})