const{test,expect}=require('@playwright/test')

test("File Upload",async function({page}){
    await page.goto("https://the-internet.herokuapp.com/upload")
    //upload from local system
    await page.locator("#file-upload").setInputFiles("C:\\Users\\user\\Downloads\\upload.jpeg")
    //upload from project folder
    await page.locator("#file-upload").setInputFiles("./tests/uploads/upload2.jpeg")
    await page.waitForTimeout(2000)
    await page.locator("#file-submit").click()
    expect(await page.locator("//h3")).toHaveText("File Uploaded!")
})