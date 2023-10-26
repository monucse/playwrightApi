1. maximize() vs fullscreen()

Ans: driver.manage().window().maximize();

This line of code maximizes the browser window, which means it resizes the browser window to fill the entire screen. It's similar to clicking the maximize button on the window's title bar. The browser window will occupy the entire screen, but it won't be in full-screen mode (it will still have a title bar and window controls).

driver.manage().window().fullscreen();

This line of code makes the browser window go into full-screen mode. In full-screen mode, the browser window takes up the entire screen, and it typically hides the title bar and other window controls.

2. // Maximize Browser
   driver.manage().window().maximize();

3. // Minimize the browser
   driver.manage().window().setPosition(new Point(0, -1000));

4. // Set Size of browser
   driver.manage().window().setSize(new Dimension(1920, 1080));

5. // Close Current Browser Window
   driver.close();

6. // Close All Browser Windows
   driver.quit();

