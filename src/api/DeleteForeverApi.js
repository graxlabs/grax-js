/*
 * GRAX API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.54
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from "../ApiClient";
import Deletion from '../model/Deletion';
import DeletionRecordsPage from '../model/DeletionRecordsPage';
import DeletionsPage from '../model/DeletionsPage';
import Error from '../model/Error';

/**
* DeleteForever service.
* @module api/DeleteForeverApi
* @version 0.0.1
*/
export default class DeleteForeverApi {

    /**
    * Constructs a new DeleteForeverApi. 
    * @alias module:api/DeleteForeverApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deletionGet operation.
     * @callback moduleapi/DeleteForeverApi~deletionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Deletion{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Delete Forever deletion
     * @param {String} orgID 
     * @param {String} id 
     * @param {module:api/DeleteForeverApi~deletionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deletionGet(orgID, id, callback) {
      
      let postBody = null;
      // verify the required parameter 'orgID' is set
      if (orgID === undefined || orgID === null) {
        throw new Error("Missing the required parameter 'orgID' when calling deletionGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletionGet");
      }

      let pathParams = {
        'orgID': orgID,'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer_token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Deletion;

      return this.apiClient.callApi(
        '/api/v1/salesforce/{orgID}/deletions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deletionRecordsList operation.
     * @callback moduleapi/DeleteForeverApi~deletionRecordsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeletionRecordsPage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Delete Forever deletion records
     * @param {String} orgID 
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Maximum number of results to return per page.
     * @param {String} opts.pageToken Token returned by previous call to retrieve the subsequent page.
     * @param {module:api/DeleteForeverApi~deletionRecordsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deletionRecordsList(orgID, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'orgID' is set
      if (orgID === undefined || orgID === null) {
        throw new Error("Missing the required parameter 'orgID' when calling deletionRecordsList");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deletionRecordsList");
      }

      let pathParams = {
        'orgID': orgID,'id': id
      };
      let queryParams = {
        'pageSize': opts['pageSize'],'pageToken': opts['pageToken']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer_token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeletionRecordsPage;

      return this.apiClient.callApi(
        '/api/v1/salesforce/{orgID}/deletions/{id}/records', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deletionsList operation.
     * @callback moduleapi/DeleteForeverApi~deletionsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeletionsPage{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Delete Forever deletions
     * @param {String} orgID 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.min Minimum created time, inclusive.
     * @param {Date} opts.max Maximum created time, exclusive.
     * @param {String} opts._object Object name. If provided, only deletions for this object will be returned.
     * @param {Number} opts.pageSize Maximum number of results to return per page.
     * @param {String} opts.pageToken Token returned by previous call to retrieve the subsequent page.
     * @param {module:api/DeleteForeverApi~deletionsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deletionsList(orgID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'orgID' is set
      if (orgID === undefined || orgID === null) {
        throw new Error("Missing the required parameter 'orgID' when calling deletionsList");
      }

      let pathParams = {
        'orgID': orgID
      };
      let queryParams = {
        'min': opts['min'],'max': opts['max'],'object': opts['_object'],'pageSize': opts['pageSize'],'pageToken': opts['pageToken']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer_token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeletionsPage;

      return this.apiClient.callApi(
        '/api/v1/salesforce/{orgID}/deletions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}