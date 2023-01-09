const { By, Key, Builder } = require("selenium-webdriver");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("http://localhost:4200/");

    await driver
      .findElement(By.className("shift-value"))
      .sendKeys(3, Key.RETURN);
    await driver
      .findElement(By.className("message"))
      .sendKeys("Hallo Zusammen", Key.RETURN);
    await driver.findElement(By.className("transform-btn")).click();

    if (await driver.findElement(By.className("output")).isDisplayed()) {
      console.log("Test Passed");
    }
  } finally {
    driver.quit();
  }
}

example();
