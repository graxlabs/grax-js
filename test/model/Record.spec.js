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
    instance = new GraxApi.Record();
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

  describe('Record', function() {
    it('should create an instance of Record', function() {
      // uncomment below and update the code to test Record
      //var instance = new GraxApi.Record();
      //expect(instance).to.be.a(GraxApi.Record);
    });

    it('should have the property deleted (base name: "deleted")', function() {
      // uncomment below and update the code to test the property deleted
      //var instance = new GraxApi.Record();
      //expect(instance).to.be();
    });

    it('should have the property fields (base name: "fields")', function() {
      // uncomment below and update the code to test the property fields
      //var instance = new GraxApi.Record();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new GraxApi.Record();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instance = new GraxApi.Record();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new GraxApi.Record();
      //expect(instance).to.be();
    });

    it('should have the property object (base name: "object")', function() {
      // uncomment below and update the code to test the property object
      //var instance = new GraxApi.Record();
      //expect(instance).to.be();
    });

    it('should have the property purged (base name: "purged")', function() {
      // uncomment below and update the code to test the property purged
      //var instance = new GraxApi.Record();
      //expect(instance).to.be();
    });

    it('should have the property restoredFrom (base name: "restoredFrom")', function() {
      // uncomment below and update the code to test the property restoredFrom
      //var instance = new GraxApi.Record();
      //expect(instance).to.be();
    });

    it('should have the property salesforceURL (base name: "salesforceURL")', function() {
      // uncomment below and update the code to test the property salesforceURL
      //var instance = new GraxApi.Record();
      //expect(instance).to.be();
    });

  });

}));
