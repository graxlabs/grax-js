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
import BackupsHealth from '../model/BackupsHealth';
import Error from '../model/Error';

/**
* AutoBackup service.
* @module api/AutoBackupApi
* @version 0.0.1
*/
export default class AutoBackupApi {

    /**
    * Constructs a new AutoBackupApi. 
    * @alias module:api/AutoBackupApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the backupsHealthGet operation.
     * @callback module:api/AutoBackupApi~backupsHealthGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BackupsHealth} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Auto Backup health
     * Get the health of Auto Backup.
     * @param {Object} opts Optional parameters
     * @param {Number} [maxBehind] Maximum time behind before the backups are considered unhealthy, in seconds.
     * @param {module:api/AutoBackupApi~backupsHealthGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BackupsHealth}
     */
    backupsHealthGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'maxBehind': opts['maxBehind']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer_token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BackupsHealth;
      return this.apiClient.callApi(
        '/api/v1/backups/health', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}