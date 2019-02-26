// https://github.com/jpadilla/ember-simple-auth-token

import { computed } from '@ember/object';

import { decamelize, underscore } from '@ember/string';

import { pluralize } from 'ember-inflector';

import { inject as service } from '@ember/service';

import DS from 'ember-data';
import ENV from 'batou/config/environment';

export default DS.RESTAdapter.extend({
  authorizer: 'authorizer:oauth2',
  session: service('session'),
  host: ENV.APP.nodeHost,
  namespace: ENV.APP.apiNameSpace,

  pathForType: function(modelName) {
    var decamelized = decamelize(modelName);
    var pluralised  = pluralize(decamelized);
    return underscore(pluralised);
  },

  authorize(xhr) {
    // let { access_token } = this.get('session.data.authenticated');
    // xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
    xhr.setRequestHeader('access_token', this.get("session.data.authenticated.access_token"));
  },

  headers: computed('authManager.accessToken', function() {
    return {
      "access_token": this.get("session.data.authenticated.access_token")
    };
  })

});
