//https://docs.google.com/document/d/1_ryBvcT390HJfrf2HiEfSYKqdbU1OLSr1h5Ot4IhUgY/edit?tab=t.0

Install : visual studiocode
=====================================
Download link : https://visualstudio.microsoft.com/downloads/  
Reference youtube video : https://www.youtube.com/watch?v=0GmUXB4H_qA


Powershell 
=============
Open PowerShell as Administrator
------------------------------------
- Click Windows Search
- Type PowerShell
- Right-click Windows PowerShell
- Select Run as administrator
- Type :  and follow as per below cmd


After installed visual studio code 
====================================
- create one folder (c: folder is playwright testleat)
- open visual studio >> create file >>open folder as playwright test leaf
- view >> terminal >>new terminal
- choose "powershell: bottom right


Type in terminal: “npm init playwright@latest” and click “enter”
choose Typescript (default is Typescript) and click enter until reach " Happy hacking"

if you want choose folder in terminal
=========================================
PS C:\Playwright Project>  
PS C:\> cd.. // clear the folder
 
PS C:\> 
PS C:\> cd "Playwright Project"    // if want to choose any folder
PS C:\Playwright Project> 
PS C:\Playwright Project> cd “tests”
C:\Playwright Project\tests>

syntax for compile and execution
=========================================
Run : npx playwright test launchbrowser.spec.ts
Browser not opened so added headed
Syntax : npx playwright test launchbrowser.spec.ts --headed


C:\Playwright Project\tests>npx playwright test launchbrowser.spec.ts --headed
Show report : npx playwright show-report

playwright.config.ts
======================
   /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        headless: false,
        video: 'on',
        screenshot: 'on',
        launchOptions: {
        slowMo: 1000
        }


  },


//only enable chrome

     {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },


why we use npm init playwright@latest  in terminal?
=========================================================
npm init playwright@latest is used to create a new Playwright project and 
set up everything needed to start writing Playwright tests.


---------------------------------------------------------------
Part	              |               Meaning
--------------------------------------------------------------------
npm	                |        Node Package Manager
init	              |        Initialize/create a new project
playwright	        |        Playwright project setup
@latest	            |        Use the latest available version