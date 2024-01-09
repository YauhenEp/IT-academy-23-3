import { Base } from "../base.js";

export class Header extends Base {
  constructor() {
    super();
  }

  async getMenuLinkByName(linkName) {
    return $(`//*[@class='b-top-menu']//span[text()='${linkName}']//parent::a`);
  }

  async getMenuItemByName(itemName) {
    return $(`//*[@class='b-top-menu']//span[text()='${itemName}']//ancestor::li`);
  }

  async getMenuSubItem(subItemName) {
    return $(`//*[contains(@class,'b-main-navigation__dropdown-advert-sign') and text()='${subItemName}']/..`)
  }

  async goToPageByMenuItemName(itemName, subItemName)  {
    const menuItem = await this.getMenuItemByName(itemName)
    if(await (await menuItem.getAttribute('class')).includes('b-main-navigation__item_arrow')) {
      await (await this.getMenuItemByName(itemName)).moveTo();
      return this.click(await this.getMenuSubItem(subItemName))
    }
    await this.click(menuItem);
  }
}