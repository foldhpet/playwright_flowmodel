import {type Locator, type Page} from '@playwright/test';

export class MenuBarFlowModelExample {
    readonly page: Page;
    aboutPageLocator: Locator;
    conferencesPageLocator: Locator;
    articlesPageLocator: Locator;
    blogPageLocator: Locator;
    contactPageLocator: Locator;
    homePageLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.aboutPageLocator = page.locator('text=About');
        this.conferencesPageLocator = page.locator('id=comp-kd46oy0r2label');
        this.articlesPageLocator = page.locator('text=Articles');
        this.blogPageLocator = page.locator('text=Blog');
        this.contactPageLocator = page.locator('text=Contact');
        this.homePageLocator = page.locator('text=Home');
    }
}