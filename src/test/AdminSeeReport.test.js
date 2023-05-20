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

test('See Report Dashboard', async () => {
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

    await driver.get('http://54.227.58.35/report/dashboard');

});

test('See Report Live', async () => {
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

    await driver.get('http://54.227.58.35/report/live');

});

test('See Report Inbound', async () => {
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

    await driver.get('http://54.227.58.35/report/inbound');

});

test('See Report Service Level', async () => {
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

    await driver.get('http://54.227.58.35/report/servicelevel');

});

test('See Report Outbound', async () => {
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

    await driver.get('http://54.227.58.35/report/outbound');

});

test('See Report Agent', async () => {
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

    await driver.get('http://54.227.58.35/report/agent');

});

test('See Report Call', async () => {
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

    await driver.get('http://54.227.58.35/report/call');

});
