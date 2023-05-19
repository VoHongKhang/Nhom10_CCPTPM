const { Builder, By} = require('selenium-webdriver');
const { beforeAll, afterAll, test } = require('@jest/globals');

jest.setTimeout(100000); // timeout toàn cục

let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
});

afterAll(async () => {
    await driver.quit();
});

test('Signup Success', async () => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get('http://localhost:4000/signup');

   
    const fullname = await driver.findElement(By.id('fullname'));
    const phonenumber = await driver.findElement(By.id('phonenumber'));
    const email = await driver.findElement(By.id('email'));
    const password = await driver.findElement(By.id('password'));
    const Confirmpassword = await driver.findElement(By.id('Confirmpassword'));
    const signup = await driver.findElement(By.id('btn-signup'));

    await fullname.sendKeys('brenhernandez215@gmail.com');
    await phonenumber.sendKeys('XHh9X139h2');
    await email.sendKeys('brenhernandez215@gmail.com');
    await password.sendKeys('XHh9X139h2');
    await Confirmpassword.sendKeys('XHh9X139h2');
    await signup.click();
});
