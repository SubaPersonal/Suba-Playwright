import test from "@playwright/test";

test('Optional Paramter', async({page})=>{
    function location(city?:string){
 console.log(city)
    }
   
    location()
    location("Bangalore")
    location("chennai")  // Why does "chennai" show an error? because declared only bangalore
    // function location(city?:string) -- we can use as string type - "chennai" will execute
    //function location(city?:"Bangalore")--Why does "chennai" show an error? because declared only bangalore
})
/* output
    C:\Playwright Project\tests\Playwright Class>npx playwright test optionalparameter.spec.ts

Running 1 test using 1 worker

  ✓  1 optionalparameter.spec.ts:3:5 › Optional Paramter (76ms)
undefined
Bangalore
chennai

  1 passed (615ms)

C:\Playwright Project\tests\Playwright Class>
*/

/* 
//function location(city?:"Bangalore")
//  location("chennai") --Why does "chennai" show an error? because declared only bangalore


C:\Playwright Project\tests\Playwright Class>npx playwright test optionalparameter.spec.ts

Running 1 test using 1 worker

  ✓  1 optionalparameter.spec.ts:3:5 › Optional Paramter (73ms)
undefined
Bangalore

  1 passed (617ms)
  */

