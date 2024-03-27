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
import DeletionCaller from './DeletionCaller';

/**
 * The Deletion model module.
 * @module model/Deletion
 * @version 0.0.1
 */
class Deletion {
    /**
     * Constructs a new <code>Deletion</code>.
     * @alias module:model/Deletion
     */
    constructor() { 
        
        Deletion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Deletion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Deletion} obj Optional instance to populate.
     * @return {module:model/Deletion} The populated <code>Deletion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Deletion();

            if (data.hasOwnProperty('caller')) {
                obj['caller'] = DeletionCaller.constructFromObject(data['caller']);
            }
            if (data.hasOwnProperty('cascade')) {
                obj['cascade'] = ApiClient.convertToType(data['cascade'], 'Boolean');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('forceCascadeObjects')) {
                obj['forceCascadeObjects'] = ApiClient.convertToType(data['forceCascadeObjects'], ['String']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('skipDeletedCheck')) {
                obj['skipDeletedCheck'] = ApiClient.convertToType(data['skipDeletedCheck'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Deletion</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Deletion</code>.
     */
    static validateJSON(data) {
        // validate the optional field `caller`
        if (data['caller']) { // data not null
          DeletionCaller.validateJSON(data['caller']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['forceCascadeObjects'])) {
            throw new Error("Expected the field `forceCascadeObjects` to be an array in the JSON data but got " + data['forceCascadeObjects']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }

        return true;
    }


}



/**
 * @member {module:model/DeletionCaller} caller
 */
Deletion.prototype['caller'] = undefined;

/**
 * @member {Boolean} cascade
 */
Deletion.prototype['cascade'] = undefined;

/**
 * @member {Date} createdAt
 */
Deletion.prototype['createdAt'] = undefined;

/**
 * @member {Array.<String>} forceCascadeObjects
 */
Deletion.prototype['forceCascadeObjects'] = undefined;

/**
 * @member {String} id
 */
Deletion.prototype['id'] = undefined;

/**
 * @member {String} object
 */
Deletion.prototype['object'] = undefined;

/**
 * @member {Boolean} skipDeletedCheck
 */
Deletion.prototype['skipDeletedCheck'] = undefined;






export default Deletion;

