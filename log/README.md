# Update log

[Zh](./README_zh-cn.md)

Missing
...
  The functions of the initialization component: click to view the picture; click the adaptive function; click the close function; API `init`, `setOption`, `open`, `close` of the plugin.

## v0.8.1
 - Add the function of switching themes; modify the problem that the `next` and `previous` buttons are too large when accessed on the mobile phone;

## v0.8.2
 - Fix the wrong logic of the next function caused by adding the same file

## v0.9.0
 - The following code has been refactored with the Class class, and the base64 image cache scheme has been added to prevent repeated requests for the same image.
 - Added property `data-src`, added method `SetTitle` and `ThemeSwitch`, renamed method, `SetOption`, `Open`, `Close`.

## v0.9.1
 - In order to ensure the compatibility of older browsers, the ES6 code was changed to the ES5 code.

## v0.9.2
 - Eliminate ES6 `?.` optional chain

## v0.9.3
 - Disable the cache of `svg` images, and set the relevant configuration of svg cache `svgCache` (this field is incorrect, temporarily invalid, wait for the next version to modify and push), and disable it by default
 - Added `typescript` support to prevent `typescript` items from being type-incorrect.

## v0.9.4
 - Open `svgCache` field, compress `iconBase64`

## V0.9.5
- Error in `split` method caused by incorrect modification of `inStr` parameter type