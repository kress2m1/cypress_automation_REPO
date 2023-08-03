const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "cypress/cucumberReports/cucumber-html-report.js",
  metadata: {
    browser: {
      name: "chrome",
      version: "114",
    },
    device: "Laptop",
    platform: {
      name: "Windows OS",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Store Demo" },
      { label: "Release", value: "0.0.1" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Aug 3rd 2023, 02:31 PM EST" },
      { label: "Execution End Time", value: "Aug 3rd 2023, 02:56 PM EST" },
    ],
  },
});