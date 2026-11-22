const {test, expect} = require("@playwright/test")

test("My First Test", async function({ page }) {
    expect(12).toBe(12)
})

/*test.skip("My Second Test", async function({ page }) {
    expect(100).toBe(101)
})*/

test("My Third Test", async function({ page }) {
    expect(2.0).toBe(2.0)
})

/*test.only("My Fourth Test", async function({ page }) {
    expect("Kartik Roy").toContain("Kartik")
})*/

test("My Fifth Test", async function({ page }) {
    expect("Kartik Roy").toContain("Roy1")
})

test("My Sixth Test", async function({ page }) {
    expect("Kartik Roy").toContain("Roy")
    expect(true).toBeTruthy()
})

test("My Seventh Test", async function({ page }) {
    expect("Kartik Roy").toContain("Roy")
    expect(false).toBeFalsy()
})

test("My Eighth Test", async function({ page }) {
    expect("Kartik Roy".includes("Roy")).toBeTruthy()
})

test("My ninth Test", async function({ page }) {
    expect("Kartik Roy".includes("Roy")).toBeFalsy()
})