/**
 * GRAX API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GraxApi);
  }
}(this, function(expect, GraxApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GraxApi.RecordDeleted();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RecordDeleted', function() {
    it('should create an instance of RecordDeleted', function() {
      // uncomment below and update the code to test RecordDeleted
      //var instance = new GraxApi.RecordDeleted();
      //expect(instance).to.be.a(GraxApi.RecordDeleted);
    });

    it('should have the property activityID (base name: "activityID")', function() {
      // uncomment below and update the code to test the property activityID
      //var instance = new GraxApi.RecordDeleted();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new GraxApi.RecordDeleted();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instance = new GraxApi.RecordDeleted();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new GraxApi.RecordDeleted();
      //expect(instance).to.be();
    });

  });

}));
