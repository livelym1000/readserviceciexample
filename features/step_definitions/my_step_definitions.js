/**
 * Created by mlively on 6/25/16.
 */

// features/step_definitions/my_step_definitions.js

module.exports = function () {
    this.Given(/^I am on the Cucumber.js GitHub repository$/, function (callback) {
        // Express the regexp above with the code you wish you had.
        // `this` is set to a World instance.
        // i.e. you may use this.browser to execute the step:

        this.visit('https://github.com/cucumber/cucumber-js', callback);

        // The callback is passed to visit() so that when the job's finished, the next step can
        // be executed by Cucumber.
    });

    this.When(/^I go to the README file$/, function (callback) {
        // Express the regexp above with the code you wish you had. Call callback() at the end
        // of the step, or callback(null, 'pending') if the step is not yet implemented:

        callback(null, 'pending');
    });

    this.Then(/^I should see "(.*)" as the page title$/, function (title, callback) {
        // matching groups are passed as parameters to the step definition

        var pageTitle = this.browser.text('title');
        if (title === pageTitle) {
            callback();
        } else {
            callback(new Error("Expected to be on page with title " + title));
        }
    });
};