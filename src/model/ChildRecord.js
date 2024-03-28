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
 * The ChildRecord model module.
 * @module model/ChildRecord
 * @version 0.0.1
 */
class ChildRecord {
    /**
     * Constructs a new <code>ChildRecord</code>.
     * @alias module:model/ChildRecord
     */
    constructor() { 
        
        ChildRecord.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChildRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChildRecord} obj Optional instance to populate.
     * @return {module:model/ChildRecord} The populated <code>ChildRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChildRecord();

            if (data.hasOwnProperty('deleteSource')) {
                obj['deleteSource'] = ApiClient.convertToType(data['deleteSource'], 'String');
            }
            if (data.hasOwnProperty('deletedAt')) {
                obj['deletedAt'] = ApiClient.convertToType(data['deletedAt'], 'Date');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], {'String': 'String'});
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('modifiedAt')) {
                obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('salesforceURL')) {
                obj['salesforceURL'] = ApiClient.convertToType(data['salesforceURL'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChildRecord</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChildRecord</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['deleteSource'] && !(typeof data['deleteSource'] === 'string' || data['deleteSource'] instanceof String)) {
            throw new Error("Expected the field `deleteSource` to be a primitive type in the JSON string but got " + data['deleteSource']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
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
        if (data['salesforceURL'] && !(typeof data['salesforceURL'] === 'string' || data['salesforceURL'] instanceof String)) {
            throw new Error("Expected the field `salesforceURL` to be a primitive type in the JSON string but got " + data['salesforceURL']);
        }

        return true;
    }


}



/**
 * The delete source of the record, if it has been deleted. Can be 'grax' or 'salesforce'.
 * @member {String} deleteSource
 */
ChildRecord.prototype['deleteSource'] = undefined;

/**
 * The time the record was deleted, if it has been deleted.
 * @member {Date} deletedAt
 */
ChildRecord.prototype['deletedAt'] = undefined;

/**
 * The fields of the record, if requested.
 * @member {Object.<String, String>} fields
 */
ChildRecord.prototype['fields'] = undefined;

/**
 * The ID of the record.
 * @member {String} id
 */
ChildRecord.prototype['id'] = undefined;

/**
 * The time the record was last modified.
 * @member {Date} modifiedAt
 */
ChildRecord.prototype['modifiedAt'] = undefined;

/**
 * The name of the record, if requested.
 * @member {String} name
 */
ChildRecord.prototype['name'] = undefined;

/**
 * The object of the record.
 * @member {String} object
 */
ChildRecord.prototype['object'] = undefined;

/**
 * The Salesforce URL of the record.
 * @member {String} salesforceURL
 */
ChildRecord.prototype['salesforceURL'] = undefined;






export default ChildRecord;
