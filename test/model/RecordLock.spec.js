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
    instance = new GraxApi.RecordLock();
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

  describe('RecordLock', function() {
    it('should create an instance of RecordLock', function() {
      // uncomment below and update the code to test RecordLock
      //var instance = new GraxApi.RecordLock();
      //expect(instance).to.be.a(GraxApi.RecordLock);
    });

    it('should have the property locked (base name: "locked")', function() {
      // uncomment below and update the code to test the property locked
      //var instance = new GraxApi.RecordLock();
      //expect(instance).to.be();
    });

    it('should have the property lockedID (base name: "lockedID")', function() {
      // uncomment below and update the code to test the property lockedID
      //var instance = new GraxApi.RecordLock();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "note")', function() {
      // uncomment below and update the code to test the property note
      //var instance = new GraxApi.RecordLock();
      //expect(instance).to.be();
    });

    it('should have the property userID (base name: "userID")', function() {
      // uncomment below and update the code to test the property userID
      //var instance = new GraxApi.RecordLock();
      //expect(instance).to.be();
    });

  });

}));
