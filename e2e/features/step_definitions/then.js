const {Then} = require('@cucumber/cucumber');
const {expect, element, by} = require('detox');

Then('I should see {string} element', async componentId => {
  await expect(element(by.id(componentId))).toBeVisible();
});

Then('I should see {string} button', async componentId => {
  await expect(element(by.id(componentId))).toBeVisible();
});

Then('I should see {string} text', async text => {
  await expect(element(by.text(text))).toBeVisible();
});

Then(
  'I see the text {string} with value {string}',
  async (componentId, value) => {
    await expect(element(by.id(componentId))).toHaveText(value);
  },
);
