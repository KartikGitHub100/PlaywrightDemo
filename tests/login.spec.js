const {test, expect} = require("@playwright/test")

test("Valid Login", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    //await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/dashboard/);
    await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
    await page.getByText("Logout").click()
    //await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/login/);
})
