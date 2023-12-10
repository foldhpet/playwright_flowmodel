import {type Page, expect} from '@playwright/test';
import { MenuBar } from "../page-models/menu-bar";

export class MenuFlow {
    readonly page: Page;
    menuBar: MenuBar

    constructor() {
    }

    async openAboutPage(page: Page) {
        this.menuBar = new MenuBar(page);
        await this.menuBar.aboutPageLocator.click();
        await expect(page).toHaveTitle('About | Péter Földházi Jr.');
        await expect(page).toHaveURL('https://www.peterfoldhazi.com/about');
        return page;
    }

    async openConferencesPage(page: Page) {
        this.menuBar = new MenuBar(page);
        await this.menuBar.conferencesPageLocator.click();
        await expect(page).toHaveTitle('Conferences | Péter Földházi Jr.');
        await expect(page).toHaveURL('https://www.peterfoldhazi.com/conferences');
        return page;
    }

    async openArticlesPage(page: Page) {
        this.menuBar = new MenuBar(page);
        await this.menuBar.articlesPageLocator.click();
        await expect(page).toHaveTitle('Articles | Péter Földházi Jr.');
        await expect(page).toHaveURL('https://www.peterfoldhazi.com/articles');
        return page;
    }

    async openBlogPage(page: Page) {
        this.menuBar = new MenuBar(page);
        await this.menuBar.blogPageLocator.click();
        await expect(page).toHaveTitle('Blog | Péter Földházi Jr.');
        await expect(page).toHaveURL('https://www.peterfoldhazi.com/blog');
        return page;
    }

    async openContactPage(page: Page) {
        this.menuBar = new MenuBar(page);
        await this.menuBar.contactPageLocator.click();
        await expect(page).toHaveTitle('Contact | Péter Földházi Jr.');
        await expect(page).toHaveURL('https://www.peterfoldhazi.com/contact');
        return page;
    }

    async openHomePage(page: Page) {
        this.menuBar = new MenuBar(page);
        await this.menuBar.homePageLocator.click();
        await expect(page).toHaveTitle('Péter Földházi Jr. - Test Automation');
        await expect(page).toHaveURL('https://www.peterfoldhazi.com/');
        return page;
    }

    async openHomePageFromBrowser(page: Page) {
        await page.goto('https://www.peterfoldhazi.com/');
        await expect(page).toHaveTitle('Péter Földházi Jr. - Test Automation');
        await expect(page).toHaveURL('https://www.peterfoldhazi.com/');
        return page;
    }
}