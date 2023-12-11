import {type Locator, type Page} from '@playwright/test';

export class MenuBarPageObject {
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

    async openAboutPage() {
        await this.aboutPageLocator.click();
    }

    async openConferencesPage() {
        await this.conferencesPageLocator.click();
    }

    async openArticlesPage() {
        await this.articlesPageLocator.click();
    }

    async openBlogPage() {
        await this.blogPageLocator.click();
    }

    async openContactPage() {
        await this.contactPageLocator.click();
    }

    async openHomePage() {
        await this.homePageLocator.click();
    }
}