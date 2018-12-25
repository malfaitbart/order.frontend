import { browser, by } from 'protractor';
import { Item } from 'src/app/core/item';

export class ItemsOverviewPage{
  navigateTo(){
    browser.get('items');
  }
  goToAddItemPage(){
    browser.findElement(by.id('add-item-button')).click(); // item overview po (return new ItemOverviewPage)
    return this;
  }

  expectNewItemToBePresent(item: Item){
    expect(browser.findElement(by.cssContainingText('mat-card-title', item.name)).isDisplayed()).toBeTruthy(); // item overview po
    return this;
  }
}
