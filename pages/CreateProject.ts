import { expect } from "@playwright/test";
import { uiContext } from "./UiContext";
import { faker } from "@faker-js/faker"; 
import { DataProviderHelper } from "../helpers/DataProviderHelper";
import { messengerCreateChats } from "./MessengerCreateChats";

class CreateProject {
    CREATE_NEW_PROJECT = '//button[text()="Create new project"]'
    PROJECT_ID = '//input[contains(@class, "bg-gray-200/80 dark:bg-white/5 uppercase")]'
    PROJECT_TITLE = '//*[@placeholder= "Project title"]'
    PROJECT_DESCRIPTION = '//*[@placeholder= "Project description"]'
    CREATE_PROJECT = '//button[text()="Create project"]'
    PROJECT_CREATION_NOTIFICATION ='Project was created'
    PROJECT_NAME = '//*[contains(@class, "uppercase")]'
    THREE_DOTS = '//*[contains(@class, "lucide lucide-ellipsis h-5 w-5")]'
    SAVE_PROJECT = '//button[text()="Save project"]'
    ARCHIVE_PROJECT = '//button[text()="Archive project"]'



    RandomString = DataProviderHelper.getRandomString()

    async clickTasksButton() {
        await uiContext.page.locator(messengerCreateChats.TASKS).click()
    };

    async clickNewProjectButton() {
        await uiContext.page.locator(this.CREATE_NEW_PROJECT).click()
    };

    async fillProjectID(id) {
        await uiContext.page.locator(this.PROJECT_ID).fill(id)
    };

    async fillProjectTitle(ProjectTitle) {
        await uiContext.page.locator(this.PROJECT_TITLE).fill("ProjectTitle")
    };

    async fillProjectDescription() {
        await uiContext.page.locator(this.PROJECT_DESCRIPTION).fill('Description of the project')
    };

    async clickCreateProjectButton() {
        await uiContext.page.locator(this.CREATE_PROJECT).click()
    };

    async assertProjectCreationNotification() { 
        await expect(uiContext.page.getByText(this.PROJECT_CREATION_NOTIFICATION)).toBeVisible();
    };

    async clickProjectName(id) {
        await uiContext.page.locator(this.PROJECT_NAME).click(id)
    };

    async clickProjectThreeDots() {
        await uiContext.page.locator(this.THREE_DOTS).click()
    };

    async clickEditProject() {
        await uiContext.page.getByText('Edit project').click()
    };

    async editProjectTitle(ProjectTitle) {
        await uiContext.page.locator(this.PROJECT_TITLE).fill(ProjectTitle)
    };

    async editProjectDescription() {
        await uiContext.page.locator(this.PROJECT_DESCRIPTION).fill('Description of the project!!!!')
    };

    async clickSaveProject() {
        await uiContext.page.locator(this.SAVE_PROJECT).click()
    };

    async clickArchiveProject() {
        await uiContext.page.getByText('Archive project').click()
    };

    async assertProjectInboxText() { 
        await expect(uiContext.page.getByText('Inbox')).toBeVisible();
    };

    async assertProjectInProgressText() { 
        await expect(uiContext.page.getByText('In progress')).toBeVisible();
    };

    async assertProjectDoneText() { 
        await expect(uiContext.page.getByText('Done')).toBeVisible();
    };

    async assertAddAnotherList() { 
        await expect(uiContext.page.getByText('Add another list')).toBeVisible();
    };


}
export const createProject = new CreateProject();   