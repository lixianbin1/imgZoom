# Update log

[Zh](./README_zh-cn.md)

Missing
...
  The functions of the initialization component: click to view the picture; click the adaptive function; click the close function; API `init`, `setOption`, `open`, `close` of the plugin.

## v0.8.1
 - Add the function of switching themes; modify the problem that the 'next' and 'previous' buttons are too large when accessed on the mobile phone;

## v0.8.2
 - Fix the wrong logic of the next function caused by adding the same file

## v0.9.0
 - The following code has been refactored with the Class class, and the base64 image cache scheme has been added to prevent repeated requests for the same image.
 - Added property `data-src`, added method `SetTitle` and `ThemeSwitch`, renamed method, `SetOption`, `Open`, `Close`.

## v0.9.1
 - In order to ensure the compatibility of older browsers, the ES6 code was changed to the ES5 code.

## v0.9.2
 -  Eliminate ES6 `?.` optional chain