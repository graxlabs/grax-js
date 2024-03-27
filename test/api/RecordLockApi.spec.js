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
    instance = new GraxApi.RecordLockApi();
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

  describe('RecordLockApi', function() {
    describe('recordLock', function() {
      it('should call recordLock successfully', function(done) {
        //uncomment below and update the code to test recordLock
        //instance.recordLock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordLockGet', function() {
      it('should call recordLockGet successfully', function(done) {
        //uncomment below and update the code to test recordLockGet
        //instance.recordLockGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordUnlock', function() {
      it('should call recordUnlock successfully', function(done) {
        //uncomment below and update the code to test recordUnlock
        //instance.recordUnlock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordsLock', function() {
      it('should call recordsLock successfully', function(done) {
        //uncomment below and update the code to test recordsLock
        //instance.recordsLock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('recordsUnlock', function() {
      it('should call recordsUnlock successfully', function(done) {
        //uncomment below and update the code to test recordsUnlock
        //instance.recordsUnlock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
