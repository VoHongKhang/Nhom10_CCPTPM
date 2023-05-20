
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

test('Edit Name Success', async () => {
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

    await driver.get('http://54.227.58.35/profile/1');

    const name = await driver.findElement(By.id('name'));
    const submit = await driver.findElement(By.id('submit'));


    await name.clear();
    await name.sendKeys('Brenda Hernandez');
    await submit.click();

});


test('Edit Name Failed', async () => {
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

    await driver.get('http://54.227.58.35/profile/1');

    const name = await driver.findElement(By.id('name'));
    const submit = await driver.findElement(By.id('submit'));


    await name.clear();
    await name.sendKeys('');
    await submit.click();

});


test('Edit Email Success', async () => {
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

    await driver.get('http://54.227.58.35/profile/1');
    const emailField1 = await driver.findElement(By.id('email'));
    const submit = await driver.findElement(By.id('submit'));


    await emailField1.clear();
    await emailField1.sendKeys('brenhernandez215@gmail.com');
    await submit.click();

});


test('Edit Phone Success', async () => {
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

    await driver.get('http://54.227.58.35/profile/1');
    const phone = await driver.findElement(By.id('phone'));
    const submit = await driver.findElement(By.id('submit'));


    await phone.clear();
    await phone.sendKeys('312-607-3189');
    await submit.click();

});

test('Edit Address Success', async () => {
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

    await driver.get('http://54.227.58.35/profile/1');
    const address = await driver.findElement(By.id('address'));
    const submit = await driver.findElement(By.id('submit'));


    await address.clear();
    await address.sendKeys('761 North Michigan Ave');

    await submit.click();

});
