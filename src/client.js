const axios = require('axios');
module.exports = class {
  constructor(apitoken, version) {
    if (!apitoken) throw new Error('No api token provided');
    if (typeof apitoken !== 'string') throw new TypeError('Api token must be a string');
   this.token = apitoken;
  if (!version || typeof version !== 'number') this.version = "v1";
  else this.version = 'v' + version;
  };

   const instance = axios.create({
    baseURL: 'https://unbelievaboat.com/api/' + this.version,
    timeout: 1000,
    headers: {'Authorization': this.token}
});
};