var request = require('request'),
  baseURL = "https://api.isaacloud.com/v1";
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var api = function(clientID) {
  this.clientID = clientID;

  this.makeRequest = function(options, callback) {
    //TODO add clientID to requests
    options.headers['Content-Type'] = "application/json";
    options.headers['Authorization'] = "Bearer " + this.clientID;
    request(options, callback)
  }

  this.makePostRequest = function(options, callback) {
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

  this.getAchievements = function(options, callback) {
    this.makeRequest({
      url: baseURL + "/admin/achievements",
      json: options,
      headers: {}
    }, callback);
  }

  this.createUser = function(options, callback) {
    this.makePostRequest({
      url: baseURL + '/admin/users',
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

}

module.exports = api;
