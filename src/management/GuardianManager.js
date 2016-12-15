var RestClient = require('rest-facade').Client;
var ArgumentError = require('../exceptions').ArgumentError;


var GuardianManager = function (options){
  if (options === null || typeof options !== 'object') {
    throw new ArgumentError('Must provide manager options');
  }

  if (options.baseUrl === null || options.baseUrl === undefined) {
    throw new ArgumentError('Must provide a base URL for the API');
  }

  if ('string' !== typeof options.baseUrl || options.baseUrl.length === 0) {
    throw new ArgumentError('The provided base URL is invalid');
  }

  var clientOptions = {
    headers: options.headers,
    query: { repeatParams: false }
  };
  
  this.factors = new RestClient(options.baseUrl + '/guardian/factors', clientOptions);
  
  this.enrollments = new RestClient(options.baseUrl + '/guardian/enrollments/:id', clientOptions);
  
  this.enrollmentTickets = new RestClient(options.baseUrl + '/guardian/enrollments/ticket', clientOptions);
}


module.exports = GuardianManager;
