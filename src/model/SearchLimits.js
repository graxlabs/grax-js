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

/**
 * The SearchLimits model module.
 * @module model/SearchLimits
 * @version 0.0.1
 */
class SearchLimits {
    /**
     * Constructs a new <code>SearchLimits</code>.
     * @alias module:model/SearchLimits
     */
    constructor() { 
        
        SearchLimits.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchLimits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchLimits} obj Optional instance to populate.
     * @return {module:model/SearchLimits} The populated <code>SearchLimits</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchLimits();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchLimits</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchLimits</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Stop search after this many results are found.
 * @member {Number} results
 */
SearchLimits.prototype['results'] = undefined;






export default SearchLimits;
