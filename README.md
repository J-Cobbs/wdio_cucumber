# Table of content

- [WebdriverIO and Cucumber](#webdriverio-and-cucumber)
- [What you won't find here](#what-you-wont-find-here)
- [What will you find?](#what-will-you-find)
- [Requirements](#requirements)
- [Quick start](#quick-start)

# WebdriverIO and Cucumber
This project was created for the automation practice using the WebdriverIO framework and the Cucumber tool to write tests based on BDD.
# What you won't find here
If you've come here, you won't find any information about [WebdriverIO](https://webdriver.io/), [Cucumber](https://cucumber.io/) or BDD.
# What will you find?
How to bring BDD into a project, and my code I've created which can be found in the `/src` folder.
Is it beautifully written code? Probably not :) 

I will write tests for a website that allows me to practice automation: [herokuapp](http://the-internet.herokuapp.com/).

If I will faced with some issues/errors during my work, most likely I will add them also, so they are tracked and maybe helpful for others.

# Requirements
- Already prepared project 
- Node version 8 or higher (I have 10.16.3)

# Quick start
I followed the steps from [cucumber-boilerplate](https://github.com/webdriverio/cucumber-boilerplate), however if you don’t have installed some dependencies you may have some errors.

So if you will follow my "extended" version, you should be able to start writing tests with no errors after all.

*PS: In this page you may find other important informations which I won’t paste them here.*

1. Download the latest stable release or clone the git repo of cucumber boilerplate
2. Copy the files to your project into a directory like `integrationtests` (note the hidden files!)
3. Clean the project (optional - I didn't do that):

`yarn run clean` However, if this command does not work, you can try:

`sudo chown -R $USER:$GROUP ~/.npm` and then `sudo chown -R $USER:$GROUP ~/.config`

4. Install the dependencies
`yarn install` or `brew reinstall yarn` (I did `yarn install`)

5. Install Babel

Once you run your first test you may facing with some babel related errors. Installation of babel should solve the problem.

`npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register` and also `npm install --save-dev @babel/plugin-proposal-export-default-from`

6. You can install some Gherkin extension so you can see nice Gherkin syntax *if you still doesn't have any*

7. Copy and paste folder `src` and `babel.config.js` file to **your project folder**

8. Write and run your first **single** feature (test) and check if it works 

`npx wdio wdio.conf.js --spec <path to file>`

# Small update
Update from 1.11.2020... Most likely, that's all for now folks. In here you can find around 20, not perfect written tests based on herokuapp page. Hopefully I will back soon with similar tests, (maybe with Cucumber) but written in Python because this is the next language I want to develop in, in the future.
