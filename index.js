// we get objects needed for manipulating selenium web driver from our nodejs application
const { Builder, By, Key, util } = require("selenium-webdriver");

async function example() {
  // create driver to manipulate browser; inside of this process we open our browser (Firefox)
  let driver = await new Builder().forBrowser("firefox").build();
  // driver opens Google website in browser (through Selenium)
  await driver.get("http://google.com");
  // we find element with name "q" , which is actully search field
  const webElement = await driver.findElement(By.name("q"));
  // we send some keyboard keys to google
  await webElement.sendKeys("Selenium", Key.RETURN);
}

example();
