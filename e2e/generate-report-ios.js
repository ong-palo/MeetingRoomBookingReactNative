const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'e2e/report/',
  reportPath: 'e2e/report/ios',
  metadata: {
    device: 'iPhone 14 Pro Max Simulator',
    platform: {
      name: 'ios',
      version: '16.4',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      {label: 'Project', value: 'Meeting Room Booking App'},
      {label: 'Version', value: '0.0.1b'},
      {label: 'Environment', value: 'Dev'},
      {label: 'Description', value: 'Meeting Room Booking App E2E Test Report'},
    ],
  },
});
