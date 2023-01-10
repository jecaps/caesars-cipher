const { By, Key, Builder } = require("selenium-webdriver");
const assert = require("chai").assert;

const example = async () => {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("http://localhost:4200/");

  await driver.findElement(By.className("shift-value")).sendKeys(3, Key.RETURN);
  await driver
    .findElement(By.className("message"))
    .sendKeys("Hallo Zusammen", Key.RETURN);
  await driver.findElement(By.className("transform-btn")).click();

  if (await driver.findElement(By.className("output")).isDisplayed()) {
    let expextedText = "kdoor cxvdpphq";
    let outputText = await driver.findElement(By.className("output")).getText();
    assert.equal(outputText, "kdoor cxvdpphq");
    console.log("TEST PASSED");
  }
  await driver.quit();
};

example();
