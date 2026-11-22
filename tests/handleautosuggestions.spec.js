const{test,expect}=require('@playwright/test')

/*test("File Upload",async function({page}){
    await page.goto("https://www.google.com/")
    await page.locator("textarea[name='q']").fill("Mukesh Otwani")
    await page.waitForSelector("li[role='presentation']")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000)    
})*/

test("Verify application title using keyboard events",async function({page}){
    await page.goto("https://www.google.com/")
    await page.locator("textarea[name='q']").fill("Mukesh Otwani")
    await page.waitForSelector("li[role='presentation']")
    const elements = await page.$$("li[role='presentation']")

    
    for(let i=0; i<elements.length; i++){
        const text = await elements[i].textContent()

        if(text.includes('playwright')){
            await elements[i].click()
            break
        }
    }
})