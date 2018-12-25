import { browser, by } from 'protractor';
import { Item } from 'src/app/core/item';

export class ItemsNewPage{
  navigateTo(){
    browser.get('items/new');
  }

  addAnItem(item: Item){
    browser.findElement(by.id('name')).sendKeys(item.name); // item add po
    browser.findElement(by.id('description')).sendKeys(item.name); // item add po
    browser.findElement(by.id('price')).sendKeys(item.price); // item add po
    browser.findElement(by.id('amountOfStock')).sendKeys(item.amountOfStock); // item add po
    browser.findElement(by.css('button[type="submit"]')).click(); // item add po (return new ItemAddPage)
    return this;
  }
}
