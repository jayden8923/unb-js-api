const axios = require('axios');
module.exports.client = class {
  constructor(apitoken, version) {
    if (!apitoken) throw new Error('No API token provided');
    if (typeof apitoken !== 'string') throw new TypeError('API token must be a string');
   this.token = apitoken;
   module.exports.token = apitoken;
  if (!version || typeof version !== 'number') this.version = "v1";
  else this.version = 'v' + version;
  let token = apitoken;
    this.RequestCreator = axios.create({
    baseURL: `https://unbelievaboat.com/api/${this.version}`,
    timeout: 1000,
    headers: { 'Authorization': apitoken }
});
module.exports.instance = this.RequestCreator; 
  };


/**
 * Get a user's balance.
 * @param {string} guildid
 * @param {string} userid
 */
getUserBalance = async function(guildid, userid) {
  if (!guildid) throw new Error('No guild ID provided');
  else if (!userid) throw new Error('No user ID provided');
  else if (typeof guildid !== 'string') throw new TypeError('Guild ID must be a string');
  else if (typeof userid !== 'string') throw new TypeError('User ID must be a string');
  let requestedData = await this.RequestCreator.get('/guilds/' + guildid + '/users/' + userid);
  return Promise.resolve(requestedData.data);
}
 /**
  * Set a user's balance to a specified amount.
  * @param {string} guildid
  * @param {string} userid
  * @param {number} amount
  * @param {string} toSetPlace
  */
    setUserBalance = async function(guildid, userid, amount, toSetPlace, reason) {
  if (!guildid) throw new Error('No guild ID provided');
  else if (!userid) throw new Error('No user ID provided');
  else if (!amount) throw new Error('No amount provided');
  if (toSetPlace.toLowerCase() !== 'bank' || toSetPlace.toLowerCase() !== 'cash') throw new Error('Must be cash or bank');
else if (!reason) reason = "No reason specified";
  else if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
  else if (typeof guildid !== 'string') throw new TypeError('Guild ID must be a string');
  else if (typeof userid !== 'string') throw new TypeError('User ID must be a string');
let options = { params: {} };
options.params[toSetPlace.toLowerCase()] = amount;
options.params[reason] = reason; 
  let requestedData = await this.RequestCreator.put('/guilds/' + guildid + '/users/' + userid, options);
  return Promise.resolve(requestedData.data);
}
 /**
  * Set a user's bank balance to a specified amount.
  * @param {string} guildid
  * @param {string} userid
  * @param {number} amount
  * @param {string} toSetPlace
  */
    addToUserBalance = async function(guildid, userid, amount, toSetPlace, reason) {
  if (!guildid) throw new Error('No guild ID provided');
  else if (!userid) throw new Error('No user ID provided');
  else if (!amount) throw new Error('No amount provided');
  if (toSetPlace.toLowerCase() !== 'bank' || toSetPlace.toLowerCase() !== 'cash') throw new Error('Must be cash or bank');
else if (!reason) reason = "No reason specified";
  else if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
  else if (typeof guildid !== 'string') throw new TypeError('Guild ID must be a string');
  else if (typeof userid !== 'string') throw new TypeError('User ID must be a string');
let options = { params: {} };
options.params[toSetPlace.toLowerCase()] = amount;
options.params[reason] = reason; 
  let requestedData = await this.RequestCreator.patch('/guilds/' + guildid + '/users/' + userid, options);
  return Promise.resolve(requestedData.data);
}
  
};