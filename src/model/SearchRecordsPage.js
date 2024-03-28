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

import ApiClient from '../ApiClient';
import SearchRecord from './SearchRecord';

/**
 * The SearchRecordsPage model module.
 * @module model/SearchRecordsPage
 * @version 0.0.1
 */
class SearchRecordsPage {
    /**
     * Constructs a new <code>SearchRecordsPage</code>.
     * @alias module:model/SearchRecordsPage
     */
    constructor() { 
        
        SearchRecordsPage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchRecordsPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchRecordsPage} obj Optional instance to populate.
     * @return {module:model/SearchRecordsPage} The populated <code>SearchRecordsPage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchRecordsPage();

            if (data.hasOwnProperty('nextContinuePageToken')) {
                obj['nextContinuePageToken'] = ApiClient.convertToType(data['nextContinuePageToken'], 'String');
            }
            if (data.hasOwnProperty('nextPageToken')) {
                obj['nextPageToken'] = ApiClient.convertToType(data['nextPageToken'], 'String');
            }
            if (data.hasOwnProperty('records')) {
                obj['records'] = ApiClient.convertToType(data['records'], [SearchRecord]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchRecordsPage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchRecordsPage</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['nextContinuePageToken'] && !(typeof data['nextContinuePageToken'] === 'string' || data['nextContinuePageToken'] instanceof String)) {
            throw new Error("Expected the field `nextContinuePageToken` to be a primitive type in the JSON string but got " + data['nextContinuePageToken']);
        }
        // ensure the json data is a string
        if (data['nextPageToken'] && !(typeof data['nextPageToken'] === 'string' || data['nextPageToken'] instanceof String)) {
            throw new Error("Expected the field `nextPageToken` to be a primitive type in the JSON string but got " + data['nextPageToken']);
        }
        if (data['records']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['records'])) {
                throw new Error("Expected the field `records` to be an array in the JSON data but got " + data['records']);
            }
            // validate the optional field `records` (array)
            for (const item of data['records']) {
                SearchRecord.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Token to retrieve the next page of running search results.
 * @member {String} nextContinuePageToken
 */
SearchRecordsPage.prototype['nextContinuePageToken'] = undefined;

/**
 * Token to retrieve the next page of results, blank if done.
 * @member {String} nextPageToken
 */
SearchRecordsPage.prototype['nextPageToken'] = undefined;

/**
 * @member {Array.<module:model/SearchRecord>} records
 */
SearchRecordsPage.prototype['records'] = undefined;






export default SearchRecordsPage;
