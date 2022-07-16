$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature is use to design the Login page of SauceLabs",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify the login functionality for correct credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User enters the username \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be landed on the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launched the Sauce Labs Application on browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_launched_the_sauce_labs_application_on_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the login functionality for correct credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User enters the username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_enters_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_enters_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launched the Sauce Labs Application on browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_launched_the_sauce_labs_application_on_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the login functionality for correct credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User enters the username \"problem_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_enters_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_enters_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the login functionality for incorrect credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User enters the username \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be getting the message as \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "priya",
        "secret_sauce",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launched the Sauce Labs Application on browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_launched_the_sauce_labs_application_on_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login functionality for incorrect credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User enters the username \"priya\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_enters_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_enters_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be getting the message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_should_be_getting_the_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Product.feature");
formatter.feature({
  "name": "This feature is use to validate the price of products in SauceLabs",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launched the Sauce Labs Application on browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_launched_the_sauce_labs_application_on_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_enters_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_enters_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsSauceLab.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the price of product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User is on Product Page",
  "keyword": "When "
});
formatter.match({
  "location": "ProductValidateStep.user_is_on_Product_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the price of product should be as per the below table",
  "rows": [
    {
      "cells": [
        "Sauce Labs Backpack",
        "$29.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bike Light",
        "$9.99"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProductValidateStep.the_price_of_product_should_be_as_per_the_below_table(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});