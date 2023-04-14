# Convert MM
## Features
- Convert Eng Num To MM Num
- Convert Eng Date To MM Date
## Installing
### Package Manager
#### Using npm:
> $ npm install convert-mm
#### Once the package is installed, you can import the library using import or require approach:
#### If you use import for importing,
> import { convertMMNum, convertMMDate } from 'convert-mm';
#### If you use require for importing,
> const { convertMMNum, convertMMDate } = require('convert-mm')
## Example
```
import { convertMMNum, convertMMDate } from 'convert-mm';

console.log(convertMMNum(123456789)); // ၁၂၃၄၅၆၇၈၉
console.log(convertMMNum('Hello 123')); // Hello ၁၂၃

const now = new Date();
// convertMMDate accept date format
console.log(convertMMDate(now));

// Optional
// Formats
// YYYY MM DD (default)
// MM DD YYYY
// DD MM YYYY
// YYYY MMMM DD
// MMMM DD YYYY
// DD MMMM YYYY
console.log(convertMMDate(now, 'DD MMMM YYYY')); // ၀၁ ဇန်နဝါရီ ၂၀၂၂

console.log(convertMMDate(now, 'DD MMMM YYYY', '-')); // ၀၁-ဇန်နဝါရီ-၂၀၂၂
```