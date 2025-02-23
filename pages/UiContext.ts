//since page object is availabele in test files, and 
//in order not to use page. locator in every POM class, we create generic page to reuse
// we will create globle reusable instance from Ui Context class

import { Browser, BrowserContext, Page } from "@playwright/test";  //typscript only

class UiContext {
    page: Page // current page
    initialPage: Page
    popup: Page
    context: BrowserContext  //new incognito

    async setContext(browser: Browser, ) {  
        this.context = await browser.newContext()  //new incognito, Creates a new browser context. It won't share cookies/cache with other browser contexts.
        this.page = await this.context.newPage()  //Creates a new page in the browser context.
    }

    startWaitingNewPageEvent(): Promise<Page> {
        /** Syncronouse method that Starts listening new page / new tab event
         * Should be called before new page opening action */
        return this.context.waitForEvent('page');
    }

    async switchCurrentContextToNewPage(newPagePromise: Promise<Page>) {
        this.initialPage = this.page; // saving page into initialPage before switch
        this.page = await newPagePromise;
        await this.page.waitForLoadState(); // Wait new page to load.
    }

    async switchBackContextToInitialPage() {
        /* switch page and initial page with places (one with another)*/
        const buffer = this.page; 
        this.page = this.initialPage;
        this.initialPage = buffer;
    }

    startWaitingPopUpEvent(): Promise<Page> {
        /** Syncronouse method that Starts listening pop-up event
         * Should be called before pop-up opening action */
        return uiContext.page.waitForEvent('popup');
    }

    async setPopUpContext(popupPromise: Promise<Page>) {
        this.popup = await popupPromise;
        await this.popup.waitForLoadState(); // Wait popup to load.
    }
}

export const uiContext = new UiContext(); //sharable instace

