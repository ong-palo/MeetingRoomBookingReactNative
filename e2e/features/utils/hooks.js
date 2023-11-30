import {Before, After, AfterAll} from '@cucumber/cucumber';
import detox from 'detox/internals';

Before({timeout: 120 * 1000}, async () => {
  await detox.init();
  await device.launchApp();
  await device.reloadReactNative();
});

After(async message => {
  const {pickle, result} = message;
  await detox.onTestDone({
    title: pickle.uri,
    fullName: pickle.name,
    status: result ? 'passed' : 'failed',
  });
});

AfterAll({timeout: 120 * 1000}, async () => {
  await detox.cleanup();
});
