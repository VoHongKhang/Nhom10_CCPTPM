const { Builder, By } = require("selenium-webdriver");
const { beforeAll, afterAll, test } = require("@jest/globals");
const { Key } = require("selenium-webdriver");
jest.setTimeout(100000); // timeout toàn cục

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
});

afterAll(async () => {
  //await driver.quit();
});


test("Delete Acount Success", async () => {
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
    .findElement(By.css("tr:nth-child(2) .delete > .material-icons"))
    .click();
  const bodyElement = await driver.findElement(By.tagName("body"));
  for (let i = 0; i < 8; i++) {
    await bodyElement.sendKeys(Key.TAB);
  }
  const activeElement = await driver.switchTo().activeElement();
  await activeElement.sendKeys(Key.ENTER);
});



test("Delete Acount Failed: Cencel", async () => {
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
    .findElement(By.css("  body > div.container > div > div > table > tbody > tr > td:nth-child(8) > a.delete"))
    .click();
  const bodyElement = await driver.findElement(By.tagName("body"));
  for (let i = 0; i < 7; i++) {
    await bodyElement.sendKeys(Key.TAB);
  }
  const activeElement = await driver.switchTo().activeElement();
  await activeElement.sendKeys(Key.ENTER);
});
