import * as path from "path";
import fs from 'node:fs/promises'
import { generate } from 'multiple-cucumber-html-reporter'
import fs1 from 'fs';
import fetch from 'node-fetch';


export const config = {
  port: 4723,
  runner: "local",
  specs: ["../1-features/past.feature"],
  exclude: [],
  maxInstances: 10,

  capabilities: [
    {
      "appium:automationName": "Flutter",
      platformName: "Android",
      "appium:deviceName": "daf71a2d",
      "appium:app": "C:/Users/manoj/Downloads/WeWork Debug.apk",
      "appium:noReset": true,
      "appium:fullReset": false,
    },
  ],

  services: ["appium"],
  appium: {
    command: "appium",
    args: {},
  },

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  connectionRetryCount: 3,
  idleTimeout: '200000',
  framework: "cucumber",
  cucumberOpts: {
    backtrace: true,
    requireModule: [],
    failAmbiguousDefinitions: false,
    failFast: false,
    ignoreUndefinedDefinitions: false,
    name: [],
    profile: [],
    require: [path.join(__dirname, "2-step-definitions", "steps2.js")],
    tage: "not @skipScenario",
    snippetSyntax: undefined,
    snippets: true,
    source: true,
    strict: false,
    tagsInTitle: false,
    timeout: 60000,
    retry: 0,
  },

  reporters: ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: true,
    useCucumberStepReporter: true
  }], 'cucumberjs-json'],
  reporterOptions: {
    outputDir: './Results'
  },


  /**
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: () => {
    // Remove the `.tmp/` folder that holds the json and report files
    if (fs1.existsSync('.tmp/')) {
      fs1.rmSync('.tmp/', { recursive: true });
    }

    // Remove the 'allure-results/' folder
    if (fs1.existsSync('allure-results/')) {
      fs1.rmSync('allure-results/', { recursive: true });
    }
  },

  /**
   * @param  {String} cid      capability id (e.g 0-0)
   * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {[type]} specs    specs to be run in the worker process
   * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
   * @param  {[type]} execArgv list of string arguments passed to the worker process
   */

  /**
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */

  /**
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {Object}         browser      instance of created browser/device session
   */

  /**
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */

  /**
   * @param {Object} suite suite details
   */

  /**
   * @param {Object} suite suite details
   */

  /**
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */

  /**
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */

  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */

  /**
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  onComplete: async () => {
    generate({
      jsonDir: '.tmp/json/',
      reportPath: '.tmp/report/',
      //   // for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
    });
    /**Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
  }
};