var request = require('request'),
  baseURL = "https://api.isaacloud.com/v1";
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var api = function(clientID) {
  this.clientID = clientID;

  this.makeRequest = function(options, callback) {
    //TODO add clientID to requests
    options.headers['Content-Type'] = "application/json";
    options.headers['Authorization'] = "Bearer " + this.clientID;
    options.rejectUnauthorized =  false;
    request(options, callback)
  }

  this.makePostRequest = function(options, callback) {
    console.log(options);
    options.method = "POST";
    this.makeRequest(options, callback);
  }

  this.createAchievement = function(options, callback) {
    this.makePostRequest({
      url: baseURL + "/admin/achievements",
      json: options,
      headers: {}
    }, callback);
  }

  this.updateAchievement = function(id, options, callback) {
    this.makeRequest({
      url: baseURL + "/admin/achievements/" + String(id),
      method: "PUT",
      json: options,
      headers: {}
    }, callback);
  }

  this.getAchievement = function(id, options, callback) {
    this.makeRequest({
      url: baseURL + "/admin/achievements/" + id,
      json: options,
      headers: {}
    }, callback);
  }

  this.getAchievements = function(options, callback) {
    this.makeRequest({
      url: baseURL + "/admin/achievements",
      json: options,
      headers: {}
    }, callback);
  }

  this.createUser = function(options, callback) {
    var extra = '?order=rank%3ADESC';
    if(options.rank) {
      console.log('getting in order')
      extra = '?order=rank%3ADESC';
      options.body = 'order=%3ADESC';
    }
    this.makePostRequest({
      url: baseURL + '/admin/users' + extra,
      json: options,
      headers: {}
    }, callback);
  }

  this.createUserWithExternalId = function(currentID, options, callback) {
    this.makePostRequest({
      url: baseURL + '/admin/users/'+currentID + '/externalids',
      json: options,
      headers: {}
    }, callback);
  }

  this.addAchievementToUser = function(userID, options, callback) {
    this.makePostRequest({
      url: baseURL + '/admin/users/' + userID + '/gainedachievements',
      json: options,
      headers: {}
    }, callback);
  }

  this.getGainedAchievements = function(userID, options, callback) {
    this.makeRequest({
      url: baseURL + '/admin/users/' + userID + '/gainedachievements',
      json: options,
      headers: {}
    }, callback);
  }

}

module.exports = api;
