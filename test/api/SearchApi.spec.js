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
    instance = new GraxApi.SearchApi();
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

  describe('SearchApi', function() {
    describe('searchAbort', function() {
      it('should call searchAbort successfully', function(done) {
        //uncomment below and update the code to test searchAbort
        //instance.searchAbort(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchCreate', function() {
      it('should call searchCreate successfully', function(done) {
        //uncomment below and update the code to test searchCreate
        //instance.searchCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchDelete', function() {
      it('should call searchDelete successfully', function(done) {
        //uncomment below and update the code to test searchDelete
        //instance.searchDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchDownload', function() {
      it('should call searchDownload successfully', function(done) {
        //uncomment below and update the code to test searchDownload
        //instance.searchDownload(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchGet', function() {
      it('should call searchGet successfully', function(done) {
        //uncomment below and update the code to test searchGet
        //instance.searchGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchRecords', function() {
      it('should call searchRecords successfully', function(done) {
        //uncomment below and update the code to test searchRecords
        //instance.searchRecords(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchesList', function() {
      it('should call searchesList successfully', function(done) {
        //uncomment below and update the code to test searchesList
        //instance.searchesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
