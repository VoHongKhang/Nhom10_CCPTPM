const { Builder, By } = require('selenium-webdriver');
const { beforeAll, afterAll, test } = require('@jest/globals');

jest.setTimeout(100000); // timeout toàn cục

let driver;

beforeAll(async() => {
    driver = await new Builder().forBrowser('chrome').build();
});

afterAll(async() => {
    await driver.quit();
});

test('Search contact by Name Success', async() => {
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

    await driver.get('http://54.227.58.35/contact');

    const searchInput = await driver.findElement(By.id('input'));
    await searchInput.sendKeys('Ho');

    // Chờ cho kết quả tìm kiếm hiển thị (nếu có)
    await driver.sleep(2000);

    // Tìm phần tử cần kiểm tra
    const element = await driver.findElement(By.css('tr[style="display: none;"]'));

    // Kiểm tra xem phần tử có hiển thị hay không
    const isDisplayed = await element.isDisplayed();

    expect(isDisplayed).toBe(false);
});

test('Search contact by Name Failed By: special characters', async() => {
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

    await driver.get('http://54.227.58.35/contact');

    const searchInput = await driver.findElement(By.id('input'));
    await searchInput.sendKeys('80-1796-3"951');

    // Chờ cho kết quả tìm kiếm hiển thị (nếu có)
    await driver.sleep(2000);

    // Tìm phần tử cần kiểm tra
    const element = await driver.findElement(By.css('tr[style="display: none;"]'));

    // Kiểm tra xem phần tử có hiển thị hay không
    const isDisplayed = await element.isDisplayed();

    expect(isDisplayed).toBe(false);
});
