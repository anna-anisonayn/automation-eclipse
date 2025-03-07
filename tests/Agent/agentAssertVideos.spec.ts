import {test, expect} from '@playwright/test'
import { agentLoginPage } from '../../pages/AgentLoginPage';
import { uiContext } from '../../pages/UiContext';
import { agentAssertVideos } from '../../pages/AgentAssertVideos';


const LANGUAGE_DROPDOWN = '//*[contains(@class, "menu_label__uJzmw")]'
const dropdawn = '//*[contains(@class, "styles_lang_label__5zCyk")]'

const language_list = ['English', 'Deutsch', 'Español', 'Français', 'Italiano', 'Português', 'Հայերեն', 'Brazil ' ]




test('Sign in Agent and assert videos ', async({browser}) => {
    await uiContext.setContext(browser);  
    await agentLoginPage.goto();
    await agentLoginPage.login('anna.anisonyan1+01@gmail.com', 'Anna123456!'); //Eclipse123!
    await agentAssertVideos.clickToolsButton();
    await agentAssertVideos.assertVideos();
    await agentAssertVideos.clickDropDownFirstElement();
    
    const languages  = await uiContext.page.$$(LANGUAGE_DROPDOWN) 
    console.log(languages)


    for(const lang of languages)
    {
        const langtext = await lang.textContent();
        //console.log(langtext)
    await uiContext.page.pause()


        for ( const l of langtext!) {
            await agentAssertVideos.clickAboutUsVideo();
            const secondPagePromise = uiContext.startWaitingNewPageEvent() // uiContext.context.waitForEvent('page');
            await agentAssertVideos.clickAboutUsVideo();
            await uiContext.switchCurrentContextToNewPage(secondPagePromise); // uiContext.page = await secondPagePromise;
            //await agentAssertVideos.assertVideo() 
        }
    }


        //await agentAssertVideos.assertTitleOfVideo()





        //await agentLoginPage.clickLogOutButton();
}) 
