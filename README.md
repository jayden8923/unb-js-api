# jayden8923/unb-js-api
---
This is my version of unb-api. 

### Example Usage:
```js
const unb-js-api = require('@jayden8923/unb-js-api'); 
const apiclient = new unb-js-api('api-token');

apiclient.getUserBalance('guildid', 'userid').then(console.log);
```
Outputs to:
```js
{
  rank: 'a rank',
  user_id: 'userid',
  cash: 'a number/ a string for Infinity',
  bank: 'a number/ a string for Infinity',
  total: 'a number/ a string for Infinity'
}
```