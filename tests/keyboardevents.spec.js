const{test,expect}=require('@playwright/test')

test("Verify application title using keyboard events",async function({page}){
    await page.goto("https://www.google.com/")
    //await page.locator("textarea[name='q']").fill("Kamlakar Kele!")
    //await page.keyboard.press("Enter")
    /*await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Backspace")
    await page.keyboard.press("Control+V")*/

    await page.locator("textarea[name='q']").focus()
    await page.locator("textarea[name='q']").fill("Kamlakar Kele!")
    await page.keyboard.press("ArrowLeft")
    await page.keyboard.down("Shift")
    for(let i=0; i<'Kele'.length; i++){
        await page.keyboard.press("ArrowLeft")
    }
    await page.keyboard.up("Shift")
    await page.keyboard.press("Backspace")
    await page.keyboard.press("Enter")

})