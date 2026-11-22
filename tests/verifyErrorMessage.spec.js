const{test, expect} = require('@playwright/test');

test("Verify Error Message", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")           
})