const { Builder, By } = require("selenium-webdriver");
const { beforeAll, afterAll, test } = require("@jest/globals");
const { Key } = require("selenium-webdriver");
jest.setTimeout(100000); // timeout toàn cục

let driver;

beforeAll(async() => {
    driver = await new Builder().forBrowser("chrome").build();
});

afterAll(async() => {
    //await driver.quit();
});

test("Add Acount Success", async() => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get("http://54.227.58.35/login");

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id("email"));
    const passwordField = await driver.findElement(By.id("password"));
    const submitButton = await driver.findElement(By.id("btn-login"));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys("brenhernandez215@gmail.com");
    await passwordField.sendKeys("XHh9X139h2");
    await submitButton.click();

    await driver.get("http://54.227.58.35/admin/agent");

    const next = await driver.findElement(
        By.css(
            "body > div.container > div > div > div.clearfix > ul > li:nth-child(4) > a"
        )
    );

    await next.click();

    await driver
        .findElement(
            By.css(
                "body > div.container > div > div > div.table-title > div > div:nth-child(2) > a"
            )
        )
        .click();

    // Dùng tab để tìm đến input
    const bodyElement = await driver.findElement(By.tagName("body"));
    for (let i = 0; i < 16; i++) {
        await bodyElement.sendKeys(Key.TAB);
        if (i == 8) {
            //   await bodyElement.sendKeys(Key.ENTER);
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("DUCANH");
        }
        if (i == 9) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("DUCANH@gmail.com");
        }
        if (i == 10) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("Thu Duc");
        }
        if (i == 11) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("0845123");
        }
        if (i == 15) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys(Key.ENTER);
        }
    }

});

test("Add Acount with name null", async() => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get("http://54.227.58.35/login");

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id("email"));
    const passwordField = await driver.findElement(By.id("password"));
    const submitButton = await driver.findElement(By.id("btn-login"));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys("brenhernandez215@gmail.com");
    await passwordField.sendKeys("XHh9X139h2");
    await submitButton.click();

    await driver.get("http://54.227.58.35/admin/agent");

    const next = await driver.findElement(
        By.css(
            "body > div.container > div > div > div.clearfix > ul > li:nth-child(4) > a"
        )
    );

    await next.click();

    await driver
        .findElement(
            By.css(
                "body > div.container > div > div > div.table-title > div > div:nth-child(2) > a"
            )
        )
        .click();

    // Dùng tab để tìm đến input
    const bodyElement = await driver.findElement(By.tagName("body"));
    for (let i = 0; i < 16; i++) {
        await bodyElement.sendKeys(Key.TAB);
        if (i == 8) {
            //   await bodyElement.sendKeys(Key.ENTER);
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("");
        }
        if (i == 9) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("quocchi@gmail.com");
        }
        if (i == 10) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("Thu Duc");
        }
        if (i == 11) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("0845123");
        }
        if (i == 15) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys(Key.ENTER);
        }
    }

});

test("Add Acount with email null", async() => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get("http://54.227.58.35/login");

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id("email"));
    const passwordField = await driver.findElement(By.id("password"));
    const submitButton = await driver.findElement(By.id("btn-login"));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys("brenhernandez215@gmail.com");
    await passwordField.sendKeys("XHh9X139h2");
    await submitButton.click();

    await driver.get("http://54.227.58.35/admin/agent");

    const next = await driver.findElement(
        By.css(
            "body > div.container > div > div > div.clearfix > ul > li:nth-child(4) > a"
        )
    );

    await next.click();

    await driver
        .findElement(
            By.css(
                "body > div.container > div > div > div.table-title > div > div:nth-child(2) > a"
            )
        )
        .click();

    // Dùng tab để tìm đến input
    const bodyElement = await driver.findElement(By.tagName("body"));
    for (let i = 0; i < 16; i++) {
        await bodyElement.sendKeys(Key.TAB);
        if (i == 8) {
            //   await bodyElement.sendKeys(Key.ENTER);
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("Quoc Chi");
        }
        if (i == 9) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("");
        }
        if (i == 10) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("Thu Duc");
        }
        if (i == 11) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("0845123");
        }
        if (i == 15) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys(Key.ENTER);
        }
    }

});

test("Add Acount with phone null", async() => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get("http://54.227.58.35/login");

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id("email"));
    const passwordField = await driver.findElement(By.id("password"));
    const submitButton = await driver.findElement(By.id("btn-login"));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys("brenhernandez215@gmail.com");
    await passwordField.sendKeys("XHh9X139h2");
    await submitButton.click();

    await driver.get("http://54.227.58.35/admin/agent");

    const next = await driver.findElement(
        By.css(
            "body > div.container > div > div > div.clearfix > ul > li:nth-child(4) > a"
        )
    );

    await next.click();

    await driver
        .findElement(
            By.css(
                "body > div.container > div > div > div.table-title > div > div:nth-child(2) > a"
            )
        )
        .click();

    // Dùng tab để tìm đến input
    const bodyElement = await driver.findElement(By.tagName("body"));
    for (let i = 0; i < 16; i++) {
        await bodyElement.sendKeys(Key.TAB);
        if (i == 8) {
            //   await bodyElement.sendKeys(Key.ENTER);
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("quoc chi");
        }
        if (i == 9) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("quocchi@gmail.com");
        }
        if (i == 10) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("Thu Duc");
        }
        if (i == 11) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("");
        }
        if (i == 15) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys(Key.ENTER);
        }
    }

});


test("Add Acount with all null", async() => {
    jest.setTimeout(100000);
    // Navigate to the login page
    await driver.get("http://54.227.58.35/login");

    // Find the email and password input fields, and the submit button
    const emailField = await driver.findElement(By.id("email"));
    const passwordField = await driver.findElement(By.id("password"));
    const submitButton = await driver.findElement(By.id("btn-login"));

    // Enter the email and password, and click the submit button
    await emailField.sendKeys("brenhernandez215@gmail.com");
    await passwordField.sendKeys("XHh9X139h2");
    await submitButton.click();

    await driver.get("http://54.227.58.35/admin/agent");

    const next = await driver.findElement(
        By.css(
            "body > div.container > div > div > div.clearfix > ul > li:nth-child(4) > a"
        )
    );

    await next.click();

    await driver
        .findElement(
            By.css(
                "body > div.container > div > div > div.table-title > div > div:nth-child(2) > a"
            )
        )
        .click();

    // Dùng tab để tìm đến input
    const bodyElement = await driver.findElement(By.tagName("body"));
    for (let i = 0; i < 16; i++) {
        await bodyElement.sendKeys(Key.TAB);
        if (i == 8) {
            //   await bodyElement.sendKeys(Key.ENTER);
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("");
        }
        if (i == 9) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("");
        }
        if (i == 10) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("");
        }
        if (i == 11) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys("");
        }
        if (i == 15) {
            const activeElement = await driver.switchTo().activeElement();
            await activeElement.sendKeys(Key.ENTER);
        }
    }

});