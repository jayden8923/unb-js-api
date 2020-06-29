# jayden8923/unb-js-api
---
This is my version of unb-api. 

### Example Usage:
```js
const { client } = require('@jayden8923/unb-js-api'); 
const apiclient = new client('api-token');

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

##### Methods

Fields surrounded by [] are optional

Fields surrounded by <> have 2 valid values
---
getUserBalance(guildid, userid)

setUserBalance(guildid, userid, amount, <bank | cash>, [reason]) 
Returns Promise<User Object>

addToUserBalance(guildid, userid, amount,<bank | cash>, [reason])
Set amount to a negative number to decrease the balance
Returns Promise<User Object>