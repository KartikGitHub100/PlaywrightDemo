const test = require("@playwright/test")

test("Select Value from dropdown", async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    //prefer label means the text which is visible to user
    await page.locator("#state").selectOption({label:"Goa"})
    await page.waitForTimeout(2000)
    await page.locator("#state").selectOption({value:"Maharashtra"})
    await page.waitForTimeout(2000)
    await page.locator("#state").selectOption({index:3})

    /*const values = await page.locator("#state").textContent()
    console.log("All texts in dropdown are: " + values)
    await test.expect(values.includes("Goa")).toBeTruthy()
    */

    let state = await page.$("#state")
    let allElements = await state.$$("option")

    for(let i=0; i<allElements.length; i++){

        let element = allElements[i]

        let value = await element.textContent()

        console.log("All values in dropdown are: " + value)
    }


await page.locator("#hobbies").selectOption(['Playing','Swimming'])

await page.waitForTimeout(5000)



})
 