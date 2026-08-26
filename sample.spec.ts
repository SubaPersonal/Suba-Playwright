import test from "@playwright/test";

test('sampple code', async({page})=>{
    await page.goto('https://www.amazon.com/');
    await page.waitForTimeout(2000)
})