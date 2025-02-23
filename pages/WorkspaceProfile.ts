import { expect } from "@playwright/test";
import { uiContext } from "./UiContext";
import { faker } from "@faker-js/faker";
import { DataProviderHelper } from "../helpers/DataProviderHelper";



class WorkspaceProfile {
    FIRST_NAME = '//*[@placeholder= "First name"]';
    LAST_NAME = '//*[@placeholder= "Last name"]';
    DISPALY_NAME = '//*[@placeholder= "Display name"]';
    SAVE_PROFILE = '//*[text()="Save profile"]' 

    RANDOM_FIRST_NAME = faker.person.firstName();
    RANDOM_LAST_NAME = faker.person.lastName();
    RANDOM_DISPLAY_NAME = faker.person.middleName();


    async fillFirstName(name:string) {
        await uiContext.page.getByPlaceholder('First name').fill(this.RANDOM_FIRST_NAME)
    };

    async fillLastName(name:string) {
        await uiContext.page.getByPlaceholder('Last name').fill(this.RANDOM_LAST_NAME)
    };

    async fillDisplayName(name:string) {
        await uiContext.page.getByPlaceholder('Display name').fill(this.RANDOM_DISPLAY_NAME)
    };

    async clickSaveProfileButton() {
        await uiContext.page.locator(this.SAVE_PROFILE).click()
     };


     async saveProfileSetting() {
        await this.fillFirstName(this.RANDOM_FIRST_NAME);
        await this.fillLastName(this.RANDOM_LAST_NAME);
        await this.fillDisplayName(this.RANDOM_DISPLAY_NAME);
        await this.clickSaveProfileButton();

     }
 
}


export const workspaceProfile = new WorkspaceProfile();




