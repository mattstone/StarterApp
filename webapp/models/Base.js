const axios = require('axios')
/*

TODO:

get api host from config  - switch on NODE_ENV for dev, test, prod

*/

// TODO: apiUrl should come from config..
class Base {
  constructor(restPath) {
    this.axios    = axios
    this.apiUrl   = "http://localhost:4000" // TODO import from config..
    this.restPath = restPath
    this.restUrl  = this.apiUrl + restPath
    this.version  = 1
    this.errors   = []
  }

  // REST API
  request(meth, params = null, version = null, cb) {
    const method = meth.toUpperCase()

    const url = this.apiUrl + params.url

    if (method == 'GET') { // add parameters to url
      string = ''
      for (let key in params) { string += key + "=" + String(params) + "&" }
      if (string != '') { params.url += "?" + string }
      params = {}
    }

    headers = {
      version: version,
      'Content-Type': 'application/json; charset=UTF-8',
    }

    if (access_token) { headers.access_token = params.access_token; }

    delete(params.url);
    delete(params.access_token);

    var response = null;

    this.axios({
      method: method,
      url: url,
      data: params,
      headers: headers
    })
    .then((data) => {

      if (data.error) {
        errors.push(data.error);
      } else if (data.errors) {
        errors = data.errors;
      } else {
        response = data;
      }

    }).catch(function (error) {
      errors.push(error);
    })
    .then(function () {
      cb(err, response);
    });
    /*


    req.end( (res) => {
      cb(res);
    });
    */
  };

  get(params, cb) {
    params.url  = "/" + this.restUrl;
    this.errors = [];

    // handle paging
    if (!params.offset) { params.offset = 0;  }
    if (!params.limit)  { params.limit  = 20; }

    this.request.get('GET', params, this.version, (err, response) => {
      cb(err, response);
    });
  };

  show(params, cb) {
    params.url  = "/" + this.restUrl + "/" + params.id + "/";
    delete(params.id);
    this.request.get('GET', params, this.version, (err, response) => {
      cb(err, response);
    });

    this.errors = [];
  };

  create(params, cb) {
    this.errors = [];
    params.url  = "/" + this.restUrl;
    this.request.get('POST', params, this.version, (err, response) => {
      cb(err, response);
    });
  };

  update(params, cb) {
    this.errors = [];
    params.url  = "/" + this.restUrl + "/" + params.id + "/";
    delete(params.id);
    this.request.get('PUT', params, this.version, (err, response) => {
      cb(err, response);
    });
  };

  delete(id, cb) {
    this.errors = [];
    params.url  = "/" + this.restUrl + "/" + params.id + "/";
    this.request.get('DELETE', params, this.version, (err, response) => {
      cb(err, response);
    });
  };

  // validation

  hasError() { return this.errors.length != 0; }

  validate() {  // customize in child class
    return true;
  }

}

module.exports = Base;
