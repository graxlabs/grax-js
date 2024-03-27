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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import RecordLock from '../model/RecordLock';
import RecordsLockRequest from '../model/RecordsLockRequest';
import RecordsUnlockRequest from '../model/RecordsUnlockRequest';

/**
* RecordLock service.
* @module api/RecordLockApi
* @version 0.0.1
*/
export default class RecordLockApi {

    /**
    * Constructs a new RecordLockApi. 
    * @alias module:api/RecordLockApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the recordLock operation.
     * @callback module:api/RecordLockApi~recordLockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lock single record
     * @param {String} orgID 
     * @param {String} object 
     * @param {String} id 
     * @param {module:api/RecordLockApi~recordLockCallback} callback The callback function, accepting three arguments: error, data, response
     */
    recordLock(orgID, object, id, callback) {
      let postBody = null;
      // verify the required parameter 'orgID' is set
      if (orgID === undefined || orgID === null) {
        throw new Error("Missing the required parameter 'orgID' when calling recordLock");
      }
      // verify the required parameter 'object' is set
      if (object === undefined || object === null) {
        throw new Error("Missing the required parameter 'object' when calling recordLock");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling recordLock");
      }

      let pathParams = {
        'orgID': orgID,
        'object': object,
        'id': id
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
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/salesforce/{orgID}/objects/{object}/records/{id}/lock', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the recordLockGet operation.
     * @callback module:api/RecordLockApi~recordLockGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecordLock} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get record lock
     * @param {String} orgID 
     * @param {String} object 
     * @param {String} id 
     * @param {module:api/RecordLockApi~recordLockGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecordLock}
     */
    recordLockGet(orgID, object, id, callback) {
      let postBody = null;
      // verify the required parameter 'orgID' is set
      if (orgID === undefined || orgID === null) {
        throw new Error("Missing the required parameter 'orgID' when calling recordLockGet");
      }
      // verify the required parameter 'object' is set
      if (object === undefined || object === null) {
        throw new Error("Missing the required parameter 'object' when calling recordLockGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling recordLockGet");
      }

      let pathParams = {
        'orgID': orgID,
        'object': object,
        'id': id
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
      let returnType = RecordLock;
      return this.apiClient.callApi(
        '/api/v1/salesforce/{orgID}/objects/{object}/records/{id}/lock', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the recordUnlock operation.
     * @callback module:api/RecordLockApi~recordUnlockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlock single record
     * @param {String} orgID 
     * @param {String} object 
     * @param {String} id 
     * @param {module:api/RecordLockApi~recordUnlockCallback} callback The callback function, accepting three arguments: error, data, response
     */
    recordUnlock(orgID, object, id, callback) {
      let postBody = null;
      // verify the required parameter 'orgID' is set
      if (orgID === undefined || orgID === null) {
        throw new Error("Missing the required parameter 'orgID' when calling recordUnlock");
      }
      // verify the required parameter 'object' is set
      if (object === undefined || object === null) {
        throw new Error("Missing the required parameter 'object' when calling recordUnlock");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling recordUnlock");
      }

      let pathParams = {
        'orgID': orgID,
        'object': object,
        'id': id
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
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/salesforce/{orgID}/objects/{object}/records/{id}/lock', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the recordsLock operation.
     * @callback module:api/RecordLockApi~recordsLockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lock multiple records
     * @param {String} orgID 
     * @param {String} object 
     * @param {Object} opts Optional parameters
     * @param {module:model/RecordsLockRequest} [recordsLockRequest] 
     * @param {module:api/RecordLockApi~recordsLockCallback} callback The callback function, accepting three arguments: error, data, response
     */
    recordsLock(orgID, object, opts, callback) {
      opts = opts || {};
      let postBody = opts['recordsLockRequest'];
      // verify the required parameter 'orgID' is set
      if (orgID === undefined || orgID === null) {
        throw new Error("Missing the required parameter 'orgID' when calling recordsLock");
      }
      // verify the required parameter 'object' is set
      if (object === undefined || object === null) {
        throw new Error("Missing the required parameter 'object' when calling recordsLock");
      }

      let pathParams = {
        'orgID': orgID,
        'object': object
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer_token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/salesforce/{orgID}/objects/{object}/lock', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the recordsUnlock operation.
     * @callback module:api/RecordLockApi~recordsUnlockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlock multiple records
     * @param {String} orgID 
     * @param {String} object 
     * @param {Object} opts Optional parameters
     * @param {module:model/RecordsUnlockRequest} [recordsUnlockRequest] 
     * @param {module:api/RecordLockApi~recordsUnlockCallback} callback The callback function, accepting three arguments: error, data, response
     */
    recordsUnlock(orgID, object, opts, callback) {
      opts = opts || {};
      let postBody = opts['recordsUnlockRequest'];
      // verify the required parameter 'orgID' is set
      if (orgID === undefined || orgID === null) {
        throw new Error("Missing the required parameter 'orgID' when calling recordsUnlock");
      }
      // verify the required parameter 'object' is set
      if (object === undefined || object === null) {
        throw new Error("Missing the required parameter 'object' when calling recordsUnlock");
      }

      let pathParams = {
        'orgID': orgID,
        'object': object
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer_token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/salesforce/{orgID}/objects/{object}/unlock', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
