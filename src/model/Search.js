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
import SearchFilters from './SearchFilters';
import SearchLimits from './SearchLimits';

/**
 * The Search model module.
 * @module model/Search
 * @version 0.0.1
 */
class Search {
    /**
     * Constructs a new <code>Search</code>.
     * @alias module:model/Search
     */
    constructor() { 
        
        Search.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Search</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Search} obj Optional instance to populate.
     * @return {module:model/Search} The populated <code>Search</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Search();

            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('deleting')) {
                obj['deleting'] = ApiClient.convertToType(data['deleting'], 'Date');
            }
            if (data.hasOwnProperty('filterStatus')) {
                obj['filterStatus'] = ApiClient.convertToType(data['filterStatus'], 'String');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = SearchFilters.constructFromObject(data['filters']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('limits')) {
                obj['limits'] = SearchLimits.constructFromObject(data['limits']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('progress')) {
                obj['progress'] = ApiClient.convertToType(data['progress'], 'Number');
            }
            if (data.hasOwnProperty('recordsFound')) {
                obj['recordsFound'] = ApiClient.convertToType(data['recordsFound'], 'Number');
            }
            if (data.hasOwnProperty('recordsScanned')) {
                obj['recordsScanned'] = ApiClient.convertToType(data['recordsScanned'], 'Number');
            }
            if (data.hasOwnProperty('recordsTimeFirst')) {
                obj['recordsTimeFirst'] = ApiClient.convertToType(data['recordsTimeFirst'], 'Date');
            }
            if (data.hasOwnProperty('recordsTimeLast')) {
                obj['recordsTimeLast'] = ApiClient.convertToType(data['recordsTimeLast'], 'Date');
            }
            if (data.hasOwnProperty('reverse')) {
                obj['reverse'] = ApiClient.convertToType(data['reverse'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('timeField')) {
                obj['timeField'] = ApiClient.convertToType(data['timeField'], 'String');
            }
            if (data.hasOwnProperty('timeFieldMax')) {
                obj['timeFieldMax'] = ApiClient.convertToType(data['timeFieldMax'], 'Date');
            }
            if (data.hasOwnProperty('timeFieldMin')) {
                obj['timeFieldMin'] = ApiClient.convertToType(data['timeFieldMin'], 'Date');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Search</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Search</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['filterStatus'] && !(typeof data['filterStatus'] === 'string' || data['filterStatus'] instanceof String)) {
            throw new Error("Expected the field `filterStatus` to be a primitive type in the JSON string but got " + data['filterStatus']);
        }
        // validate the optional field `filters`
        if (data['filters']) { // data not null
          SearchFilters.validateJSON(data['filters']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `limits`
        if (data['limits']) { // data not null
          SearchLimits.validateJSON(data['limits']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['timeField'] && !(typeof data['timeField'] === 'string' || data['timeField'] instanceof String)) {
            throw new Error("Expected the field `timeField` to be a primitive type in the JSON string but got " + data['timeField']);
        }

        return true;
    }


}



/**
 * Time the search job was created.
 * @member {Date} created
 */
Search.prototype['created'] = undefined;

/**
 * Time the search will be automatically deleted if its results are not accessed.
 * @member {Date} deleting
 */
Search.prototype['deleting'] = undefined;

/**
 * Status of the records to search.
 * @member {String} filterStatus
 */
Search.prototype['filterStatus'] = undefined;

/**
 * @member {module:model/SearchFilters} filters
 */
Search.prototype['filters'] = undefined;

/**
 * ID of the search job.
 * @member {String} id
 */
Search.prototype['id'] = undefined;

/**
 * @member {module:model/SearchLimits} limits
 */
Search.prototype['limits'] = undefined;

/**
 * Name of the search job.
 * @member {String} name
 */
Search.prototype['name'] = undefined;

/**
 * Object searched.
 * @member {String} object
 */
Search.prototype['object'] = undefined;

/**
 * Progress of the search job.
 * @member {Number} progress
 */
Search.prototype['progress'] = undefined;

/**
 * Number of records found.
 * @member {Number} recordsFound
 */
Search.prototype['recordsFound'] = undefined;

/**
 * Number of records scanned.
 * @member {Number} recordsScanned
 */
Search.prototype['recordsScanned'] = undefined;

/**
 * Time of the first found record.
 * @member {Date} recordsTimeFirst
 */
Search.prototype['recordsTimeFirst'] = undefined;

/**
 * Time of the last found record.
 * @member {Date} recordsTimeLast
 */
Search.prototype['recordsTimeLast'] = undefined;

/**
 * Whether records were searched in reverse order.
 * @member {Boolean} reverse
 */
Search.prototype['reverse'] = undefined;

/**
 * Status of the search job.
 * @member {String} status
 */
Search.prototype['status'] = undefined;

/**
 * Time field used for the search. Can be 'createdAt', 'modifiedAt', 'latestModifiedAt', 'rangeLatestModifiedAt', 'allModifiedAt', 'deletedAt' or 'purgedAt'.
 * @member {String} timeField
 */
Search.prototype['timeField'] = undefined;

/**
 * Maximum time for the search.
 * @member {Date} timeFieldMax
 */
Search.prototype['timeFieldMax'] = undefined;

/**
 * Minimum time for the search.
 * @member {Date} timeFieldMin
 */
Search.prototype['timeFieldMin'] = undefined;

/**
 * Time the search job was last updated.
 * @member {Date} updated
 */
Search.prototype['updated'] = undefined;






export default Search;

