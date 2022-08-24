// javascript

const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "10",
    deviceName: "RZ8N70RF6QB",
    app: "C:\\Users\\shrut\\Documents\\TYBsc\\Group projects\\STQA\\Appium test cases\\app-debug.apk",
    appPackage: "com.example.android_pract8",
    appActivity: "com.example.android_pract8.MainActivity",
    automationName: "UiAutomator2"
  }
};

async function main () {
  const client = await wdio.remote(opts);

  // setting value of first edit text
  const et1 = 'new UiSelector().resourceId("com.example.android_pract8:id/editText1")';
  const eq1 = await client.$(`android=${et1}`);
  await eq1.setValue("Arjun");
  const val1 = await eq1.getText();
  assert.strictEqual(val1,"Arjun");

  // screenshot
  await client.saveScreenshot('.\\output\\firstName.png');

  // setting value of second edit text
  const et2 = 'new UiSelector().resourceId("com.example.android_pract8:id/editText2")';
  const eq2 = await client.$(`android=${et2}`);
  await eq2.setValue("Reddy");
  const val2 = await eq2.getText();
  assert.strictEqual(val2,"Reddy");

  // screenshot
  await client.saveScreenshot('.\\output\\lastName.png');

  // click add button to add data
  const btnSelector1 = 'new UiSelector().text("ADD").className("android.widget.Button")';
  const btn1 = await client.$(`android=${btnSelector1}`);
  await btn1.click();

  // screenshot
  await client.saveScreenshot('.\\output\\addEntry.png');

  // click view to view all entries
  const btnSelector = 'new UiSelector().text("VIEW").className("android.widget.Button")';
  const btn = await client.$(`android=${btnSelector}`);
  await btn.click();

  // screenshot
  await client.saveScreenshot('.\\output\\viewEntries.png');

  await client.deleteSession();
}

main();
  