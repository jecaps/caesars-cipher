const { By, Builder, locateWith } = require("selenium-webdriver");
const { suite } = require("selenium-webdriver/testing");
const assert = require("chai").assert;

suite(function (env) {
  describe("Caesar Cipher", function () {
    let driver;

    before(async function () {
      driver = await new Builder().forBrowser("chrome").build();
    });

    after(async () => await driver.quit());

    it("should show the correct encrypted message", async () => {
      await driver.get("http://localhost:4200/");

      await driver.findElement(By.className("shift-value")).sendKeys(3);
      await driver
        .findElement(By.className("message"))
        .sendKeys("Hallo Zusammen");
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
      await driver.findElement(By.className("shift-value")).sendKeys(5);
      await driver
        .findElement(By.className("message"))
        .sendKeys("Lzyjs Rtwljs");
      await driver.findElement(By.className("transform-btn")).click();

      if (await driver.findElement(By.className("output")).isDisplayed()) {
        let expectedText = "guten morgen";
        let outputText = await driver
          .findElement(By.className("output"))
          .getText();
        assert.equal(outputText, expectedText);
      }
    });

    it("toggle buttons should be above the shift value input", async () => {
      await driver.get("http://localhost:4200/");

      let shiftValueField = driver.findElement(By.className("shift-value"));

      await driver.findElement(
        locateWith(By.className("toggle-button-group")).above(shiftValueField)
      );
    });

    it("message input field should be below the shift value input", async () => {
      await driver.get("http://localhost:4200/");

      let shiftValueField = driver.findElement(By.className("shift-value"));

      await driver.findElement(
        locateWith(By.className("message")).below(shiftValueField)
      );
    });

    it("message input field should be emptied when output is shown", async () => {
      await driver.get("http://localhost:4200/");

      await driver.findElement(By.className("shift-value")).sendKeys(3);

      let messageField = driver.findElement(By.className("message"));
      await messageField.sendKeys("Hallo Zusammen");
      await driver.findElement(By.className("transform-btn")).click();

      assert.equal("", await messageField.getAttribute("value"));
    });
  });
});
