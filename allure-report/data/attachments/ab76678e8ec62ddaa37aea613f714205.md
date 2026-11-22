# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fileupload.spec.js >> File Upload
- Location: tests\fileupload.spec.js:3:1

# Error details

```
Error: ENOENT: no such file or directory, stat 'D:\Playwright_with_JS\tests\uploads\upload2.jpeg'
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#content"
  - 'link "The Internet: home" [ref=e3] [cursor=pointer]':
    - /url: /
    - text: The Internet powered by Sauce Labs
  - region "Messages" [ref=e5]
  - main [ref=e7]:
    - generic [ref=e8]:
      - heading "File Uploader" [level=3] [ref=e9]
      - paragraph [ref=e10]: Choose a file on your system and then click upload. Or, drag and drop a file into the area below.
      - generic [ref=e11]:
        - button "Choose File" [ref=e12]
        - button "Upload" [ref=e13] [cursor=pointer]
  - contentinfo [ref=e15]:
    - generic [ref=e17]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e18] [cursor=pointer]:
        - /url: https://elementalselenium.com/
      - text: and
      - link "Sauce Labs" [ref=e19] [cursor=pointer]:
        - /url: https://saucelabs.com/
```

# Test source

```ts
  1  | const{test,expect}=require('@playwright/test')
  2  | 
  3  | test("File Upload",async function({page}){
  4  |     await page.goto("https://the-internet.herokuapp.com/upload")
  5  |     //upload from local system
  6  |     await page.locator("#file-upload").setInputFiles("C:\\Users\\user\\Downloads\\upload.jpeg")
  7  |     //upload from project folder
> 8  |     await page.locator("#file-upload").setInputFiles("./tests/uploads/upload2.jpeg")
     |     ^ Error: ENOENT: no such file or directory, stat 'D:\Playwright_with_JS\tests\uploads\upload2.jpeg'
  9  |     await page.waitForTimeout(2000)
  10 |     await page.locator("#file-submit").click()
  11 |     expect(await page.locator("//h3")).toHaveText("File Uploaded!")
  12 | })
```