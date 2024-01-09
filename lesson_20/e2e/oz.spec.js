import {expect} from "chai";
import { PHONE_ERROR_NOTIFICATION, VALID_PHONE_NUMBER } from "../helpers/constants.js";

describe.only('OZ', () => {
  it(`title on search item should be the same as title on pdp`, async () => {
    await browser.url('https://oz.by/');
    await $('.user-bar__item .user-bar__item').click();
    await $('#formInputLoginPhone').addValue(PHONE_ERROR_NOTIFICATION);
    await $('#phoneForm .i-popup__form-button').click();
    expect(await $('#phoneForm .i-popover__line').getText()).to.equal(VALID_PHONE_NUMBER);
  })
});