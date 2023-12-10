# Base36

雖然 ECMAScript 已有 Base64 的 atob() 和 btoa()，但編碼出來的字數會變多，於是設計這個 Base36 將字數很長的二進制數字縮短 4.7 倍，以便將這類資料夾帶在 URL 中傳遞或保存在 localStorage 裡。

## Base36.js

* Base36.encode(string)

  傳入二進制數字字串，傳回 Base36 編碼字串。

* Base36.decode(string)

  傳入 Base36 編碼字串，傳回二進制數字字串。

* Base36.atob(array)

  傳入二進制數字陣列，傳回 Base36 編碼字串。

* Base36.btoa(string)

  傳入 Base36 編碼字串，傳回二進制數字陣列。

## example.html

展示功能與用法的範例程式。