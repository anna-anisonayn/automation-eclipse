import { expect } from "@playwright/test";
import { uiContext } from "./UiContext";
import { DataProviderHelper } from "../helpers/DataProviderHelper";




class CreateTaskList {

    CURRENT_PROJECT = '//*[contains(@class, "uppercase")]'
    ADD_LIST = '//*[contains(@class, "200/80 dark:bg-white/5")]'
    ADD_TASK = '//*[contains(@class, "disabled:opacity-50 dark:bg-white/5 p-2")]'



        async clickProjectName(id) {
            await uiContext.page.locator(this.CURRENT_PROJECT).click()
        };

        async clickAddAnotherList() {
            await uiContext.page.getByText('Add another list').click()
        };

        async fillListName(ListName) {
            await uiContext.page.locator(this.ADD_LIST).fill(ListName)
        };

        async clickAddListButton() {
            await uiContext.page.getByText('Add list').click()
        };

        async clickAddTaskButton() {
            await uiContext.page.getByText('Add Task').first().click()
        };

        async fillTaskName(TaskName) {
            await uiContext.page.locator(this.ADD_TASK).fill(TaskName)
        };

        async clickAddTask() {
            await uiContext.page.locator(this.ADD_TASK).click()
        };










}

export const createTaskList = new CreateTaskList();
