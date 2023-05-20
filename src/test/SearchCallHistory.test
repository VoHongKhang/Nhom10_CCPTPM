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

test('Search Call History Success', async () => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get('http://54.227.58.35/login');

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id('email'));
    const passwordField = await driver.findElement(By.id('password'));
    const submitButton = await driver.findElement(By.id('btn-login'));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys('brenhernandez215@gmail.com');
    await passwordField.sendKeys('XHh9X139h2');
    await submitButton.click();

    await driver.get('http://54.227.58.35/history');

    const searchphone = await driver.findElement(By.className('input_find'));
    await searchphone.sendKeys('80-1796-3951');

});

test('Search Call History Failed By: special characters', async () => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get('http://54.227.58.35/login');

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id('email'));
    const passwordField = await driver.findElement(By.id('password'));
    const submitButton = await driver.findElement(By.id('btn-login'));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys('brenhernandez215@gmail.com');
    await passwordField.sendKeys('XHh9X139h2');
    await submitButton.click();

    await driver.get('http://54.227.58.35/history');

    const searchphone = await driver.findElement(By.className('input_find'));
    await searchphone.sendKeys('80-1796-3"951');

});

test('Search Call History Failed By: Contains alphanumeric characters', async () => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get('http://54.227.58.35/login');

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id('email'));
    const passwordField = await driver.findElement(By.id('password'));
    const submitButton = await driver.findElement(By.id('btn-login'));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys('brenhernandez215@gmail.com');
    await passwordField.sendKeys('XHh9X139h2');
    await submitButton.click();

    await driver.get('http://54.227.58.35/history');

    const searchphone = await driver.findElement(By.className('input_find'));
    await searchphone.sendKeys('80-1796-3a951');

});

test('Search Call History Failed By: Contains space characters', async () => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get('http://54.227.58.35/login');

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id('email'));
    const passwordField = await driver.findElement(By.id('password'));
    const submitButton = await driver.findElement(By.id('btn-login'));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys('brenhernandez215@gmail.com');
    await passwordField.sendKeys('XHh9X139h2');
    await submitButton.click();

    await driver.get('http://54.227.58.35/history');

    const searchphone = await driver.findElement(By.className('input_find'));
    await searchphone.sendKeys('80-1796-39 51');

});

test('Search Call History Failed By: Contains space characters: Exist Phone', async () => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get('http://54.227.58.35/login');

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id('email'));
    const passwordField = await driver.findElement(By.id('password'));
    const submitButton = await driver.findElement(By.id('btn-login'));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys('brenhernandez215@gmail.com');
    await passwordField.sendKeys('XHh9X139h2');
    await submitButton.click();

    await driver.get('http://54.159.4.186/history');

    const searchphone = await driver.findElement(By.className('input_find'));
    await searchphone.sendKeys('80-1796-3952');

});
