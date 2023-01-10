const { By, Key, Builder } = require("selenium-webdriver");
const { suite } = require("selenium-webdriver/testing");
const assert = require("chai").assert;

suite(function (env) {
  describe("Caesar Ciphers", function () {
    let driver;

    before(async function () {
      driver = await new Builder().forBrowser("chrome").build();
    });

    after(async () => await driver.quit());

    it("should show the correct encrypted message", async () => {
      await driver.get("http://localhost:4200/");

      await driver
        .findElement(By.className("shift-value"))
        .sendKeys(3, Key.RETURN);
      await driver
        .findElement(By.className("message"))
        .sendKeys("Hallo Zusammen", Key.RETURN);
      await driver.findElement(By.className("transform-btn")).click();

      if (await driver.findElement(By.className("output")).isDisplayed()) {
        let expectedText = "kdoor cxvdpphq";
        let outputText = await driver
          .findElement(By.className("output"))
          .getText();
        assert.equal(outputText, expectedText);
      }
    });

    it("should show the decrypted message", async () => {
      await driver.get("http://localhost:4200/");

      await driver
        .findElement(By.xpath("//mat-button-toggle[@value='Decrypt']"))
        .click();
      await driver
        .findElement(By.className("shift-value"))
        .sendKeys(5, Key.RETURN);
      await driver
        .findElement(By.className("message"))
        .sendKeys("Lzyjs Rtwljs", Key.RETURN);
      await driver.findElement(By.className("transform-btn")).click();

      if (await driver.findElement(By.className("output")).isDisplayed()) {
        let expectedText = "guten morgen";
        let outputText = await driver
          .findElement(By.className("output"))
          .getText();
        assert.equal(outputText, expectedText);
      }
    });
  });
});
