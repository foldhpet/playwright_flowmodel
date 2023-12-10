import {test, expect} from '@playwright/test'
import { HomePage } from '../business-logic/page-models/home-page';
import { MenuBar } from '../business-logic/page-models/menu-bar';

test('Open home page and validate menu items - page object example', async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.open();
    await expect(page).toHaveTitle('Péter Földházi Jr. - Test Automation');
    await expect(page).toHaveURL('https://www.peterfoldhazi.com/');

    const menuBar = new MenuBar(page);
    await menuBar.openAboutPage();
    await expect(page).toHaveTitle('About | Péter Földházi Jr.');
    await expect(page).toHaveURL('https://www.peterfoldhazi.com/about');

    await menuBar.openConferencesPage();
    await expect(page).toHaveTitle('Conferences | Péter Földházi Jr.');
    await expect(page).toHaveURL('https://www.peterfoldhazi.com/conferences');

    await menuBar.openArticlesPage();
    await expect(page).toHaveTitle('Articles | Péter Földházi Jr.');
    await expect(page).toHaveURL('https://www.peterfoldhazi.com/articles');
    
    await menuBar.openBlogPage();
    await expect(page).toHaveTitle('Blog | Péter Földházi Jr.');
    await expect(page).toHaveURL('https://www.peterfoldhazi.com/blog');
    
    await menuBar.openContactPage();
    await expect(page).toHaveTitle('Contact | Péter Földházi Jr.');
    await expect(page).toHaveURL('https://www.peterfoldhazi.com/contact');

    await menuBar.openHomePage();
    await expect(page).toHaveTitle('Péter Földházi Jr. - Test Automation');
    await expect(page).toHaveURL('https://www.peterfoldhazi.com/');
})