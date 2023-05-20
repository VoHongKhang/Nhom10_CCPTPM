const { Builder, By } = require('selenium-webdriver');
const { beforeAll, afterAll, test } = require('@jest/globals');

jest.setTimeout(100000); // timeout toàn cục

let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
});

afterAll(async () => {
    await driver.quit();
});

test('Name Empty', async () => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get('http://54.159.4.186/login');

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id('email'));
    const passwordField = await driver.findElement(By.id('password'));
    const submitButton = await driver.findElement(By.id('btn-login'));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys('brenhernandez215@gmail.com');
    await passwordField.sendKeys('XHh9X139h2');
    await submitButton.click();

    await driver.get('http://54.159.4.186/report/call');

    const input = await driver.findElement(By.id('input'));

    await input.sendKeys('');


});

test('Name Exists', async () => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get('http://54.159.4.186/login');

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id('email'));
    const passwordField = await driver.findElement(By.id('password'));
    const submitButton = await driver.findElement(By.id('btn-login'));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys('brenhernandez215@gmail.com');
    await passwordField.sendKeys('XHh9X139h2');
    await submitButton.click();

    await driver.get('http://54.159.4.186/report/call');

    const input = await driver.findElement(By.id('input'));

    await input.sendKeys('Adam');


});

test('Name Does Not Exists', async () => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get('http://54.159.4.186/login');

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id('email'));
    const passwordField = await driver.findElement(By.id('password'));
    const submitButton = await driver.findElement(By.id('btn-login'));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys('brenhernandez215@gmail.com');
    await passwordField.sendKeys('XHh9X139h2');
    await submitButton.click();

    await driver.get('http://54.159.4.186/report/call');

    const input = await driver.findElement(By.id('input'));

    await input.sendKeys('Vo Hong Khang');


});

