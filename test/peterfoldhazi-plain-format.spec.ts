import {test, expect} from '@playwright/test'

test('Open home page and validate menu items', async ({page}) => {
    await page.goto('https://www.peterfoldhazi.com/');
    await expect(page).toHaveTitle('Péter Földházi Jr. - Test Automation');
    await expect(page).toHaveURL('https://www.peterfoldhazi.com/');

    await page.getByTestId('linkElement')
        .filter({hasText: 'About'})
        .click();
    await expect(page).toHaveTitle('About | Péter Földházi Jr.');
    await expect(page).toHaveURL('https://www.peterfoldhazi.com/about');

    await page.getByTestId('linkElement')
        .filter({hasText: 'Conferences'})
        .click();
    await expect(page).toHaveTitle('Conferences | Péter Földházi Jr.');
    await expect(page).toHaveURL('https://www.peterfoldhazi.com/conferences');

    await page.getByTestId('linkElement')
        .filter({hasText: 'Articles'})
        .click();
    await expect(page).toHaveTitle('Articles | Péter Földházi Jr.');
    await expect(page).toHaveURL('https://www.peterfoldhazi.com/articles');
    
    await page.getByTestId('linkElement')
        .filter({hasText: 'Blog'})
        .click();
    await expect(page).toHaveTitle('Blog | Péter Földházi Jr.');
    await expect(page).toHaveURL('https://www.peterfoldhazi.com/blog');
    
    await page.getByTestId('linkElement')
        .filter({hasText: 'Contact'})
        .click();
    await expect(page).toHaveTitle('Contact | Péter Földházi Jr.');
    await expect(page).toHaveURL('https://www.peterfoldhazi.com/contact');

    await page.getByTestId('linkElement')
        .filter({hasText: 'Home'})
        .click();
    await expect(page).toHaveTitle('Péter Földházi Jr. - Test Automation');
    await expect(page).toHaveURL('https://www.peterfoldhazi.com/');
})

test('Open Twitter profile', async ({page, context}) => {
    await page.goto('https://www.peterfoldhazi.com/');

// https://playwright.dev/docs/pages#handling-new-pages
// https://playwright.dev/docs/browser-contexts
    const pagePromise = context.waitForEvent('page');
    await page.getByAltText('Twitter').click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.title());

    await expect(newPage).toHaveTitle('Log in to X / X');
    await expect(newPage).toHaveURL('https://twitter.com/i/flow/login?redirect_after_login=%2FFoldhaziJr');
})