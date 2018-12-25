import { AppPage } from './app.po';
import { Browser, browser, by } from 'protractor';
import { find } from 'rxjs/operators';
import { ItemsOverviewPage } from './items.po';
import { ItemsNewPage } from './itemsNew.po';
import { Item } from 'src/app/core/item';

describe('Items', () => {
  let itemsOverviewPage = new ItemsOverviewPage();
  const itemsNewPage = new ItemsNewPage();

  beforeEach(() => {
    // itemOverviewPage =
    // itemAddPage =
    browser.get('http://localhost:4200/items');
  });

  it('should be able to add new item', () => {
    // const name = new Date().getDate().toString();
    // browser.findElement(by.id('add-item-button')).click(); // item overview po (return new ItemOverviewPage)
    // browser.findElement(by.id('name')).sendKeys(name); // item add po
    // browser.findElement(by.id('description')).sendKeys(name); // item add po
    // browser.findElement(by.id('price')).sendKeys(10); // item add po
    // browser.findElement(by.id('amountOfStock')).sendKeys(5); // item add po
    // browser.findElement(by.css('button[type="submit"]')).click(); // item add po (return new ItemAddPage)
    // expect(browser.findElement(by.cssContainingText('mat-card-title', name)).isDisplayed()).toBeTruthy(); // item overview po
    const testItem: Item = {
      name: new Date().getDate().toString(),
      description: '',
      price: 10,
      amountOfStock: 20
    }

    itemsOverviewPage.navigateTo();
    itemsOverviewPage.goToAddItemPage();
    itemsNewPage.addAnItem(testItem);
    itemsOverviewPage.expectNewItemToBePresent(testItem);
  });
});
