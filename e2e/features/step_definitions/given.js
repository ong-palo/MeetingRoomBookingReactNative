const {Given} = require('@cucumber/cucumber');
const {expect, element, by} = require('detox');

Given('I am in {string} page', async componentId => {
  // eslint-disable-next-line no-undef
  await waitFor(element(by.id(componentId)))
    .toBeVisible()
    .withTimeout(1000);
});
