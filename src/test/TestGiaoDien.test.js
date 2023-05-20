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

test('Kiểm tra tính hiển thị của các  phần tử', async() => {
    // Tạo đối tượng WebDriver
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

    // Tìm phần tử cần kiểm tra
    // thanh header
    const header = await driver.findElement(By.id('header'));
    const headertitle = await driver.findElement(By.id('headertitle'));


    // Kiểm tra xem phần tử có hiển thị hay không
    const isDisplayed = await header.isDisplayed();
    const isDisplayedtitle = await headertitle.isDisplayed();

    expect(isDisplayed).toBe(true);
    expect(isDisplayedtitle).toBe(true);

    const logo = await driver.findElement(By.id('logo'));
    const isplaylogo = await logo.isDisplayed();
    expect(isplaylogo).toBe(true);


    const main_menu = await driver.findElement(By.id('main-menu'));
    const ismain_menu = await main_menu.isDisplayed();
    expect(ismain_menu).toBe(true);

    // Đóng trình duyệt

});
test('Kiểm tra nội dung của một phần tử', async() => {
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

    // Tìm phần tử cần kiểm tra
    const element = await driver.findElement(By.id('headertitle'));

    // Lấy nội dung của phần tử
    const text = await element.getText();

    // Kiểm tra xem nội dung có chính xác hay không
    expect(text).toEqual('See how Digital Engagement enables you to meet your customers where they are.AAA');


    // Tìm phần tử cần kiểm tra
    const header = await driver.findElement(By.id('header'));

    // Lấy nội dung của phần tử
    const headertext = await header.getText();

    // Kiểm tra xem nội dung có chính xác hay không
    expect(headertext.split('\n')).toEqual(['CALL HISTORY', 'CONTACT', 'REPORT', 'FEEDBACK', 'Hello']);



});