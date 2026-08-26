import test from '@playwright/test';
test('Code for Launch browser',async({page})=>{
    await page.goto('https://www.google.com/');
    await page.waitForTimeout(2000);
});



/* Word	- Meaning
import	- Bring something into this file from another package.
{ }	- We want only a specific item.
test	- Playwright function used to create a test case.
from -	Tells where the item comes from.
'@playwright/test' - 	The Playwright testing package installed in your project.
; - 	End of the statement.

*/