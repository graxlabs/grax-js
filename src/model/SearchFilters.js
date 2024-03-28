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
import SearchFieldFilter from './SearchFieldFilter';

/**
 * The SearchFilters model module.
 * @module model/SearchFilters
 * @version 0.0.1
 */
class SearchFilters {
    /**
     * Constructs a new <code>SearchFilters</code>.
     * @alias module:model/SearchFilters
     */
    constructor() { 
        
        SearchFilters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchFilters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchFilters} obj Optional instance to populate.
     * @return {module:model/SearchFilters} The populated <code>SearchFilters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchFilters();

            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], [SearchFilters]);
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], [SearchFieldFilter]);
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchFilters</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchFilters</code>.
     */
    static validateJSON(data) {
        if (data['children']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['children'])) {
                throw new Error("Expected the field `children` to be an array in the JSON data but got " + data['children']);
            }
            // validate the optional field `children` (array)
            for (const item of data['children']) {
                SearchFilters.validateJSON(item);
            };
        }
        if (data['fields']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['fields'])) {
                throw new Error("Expected the field `fields` to be an array in the JSON data but got " + data['fields']);
            }
            // validate the optional field `fields` (array)
            for (const item of data['fields']) {
                SearchFieldFilter.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['mode'] && !(typeof data['mode'] === 'string' || data['mode'] instanceof String)) {
            throw new Error("Expected the field `mode` to be a primitive type in the JSON string but got " + data['mode']);
        }

        return true;
    }


}



/**
 * Child filters.
 * @member {Array.<module:model/SearchFilters>} children
 */
SearchFilters.prototype['children'] = undefined;

/**
 * Field filters.
 * @member {Array.<module:model/SearchFieldFilter>} fields
 */
SearchFilters.prototype['fields'] = undefined;

/**
 * Mode of the filter. 'and' requires all child and field filters match, 'or' only requires one.
 * @member {module:model/SearchFilters.ModeEnum} mode
 */
SearchFilters.prototype['mode'] = undefined;





/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
SearchFilters['ModeEnum'] = {

    /**
     * value: "and"
     * @const
     */
    "and": "and",

    /**
     * value: "or"
     * @const
     */
    "or": "or"
};



export default SearchFilters;
