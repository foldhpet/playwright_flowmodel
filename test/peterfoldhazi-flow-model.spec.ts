import {test} from '@playwright/test'
import { MenuFlow } from '../business-logic/flow-models/menu-flow';

test('Open home page and validate menu items - page object example', async ({page}) => {
    const menuFlow = new MenuFlow();
    await menuFlow.openHomePageFromBrowser(page);
    await menuFlow.openAboutPage(page);
    await menuFlow.openConferencesPage(page);
    await menuFlow.openArticlesPage(page);
    await menuFlow.openBlogPage(page);
    await menuFlow.openContactPage(page);
    await menuFlow.openHomePage(page);
})