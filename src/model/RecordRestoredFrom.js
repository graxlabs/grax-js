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
import AuditUser from './AuditUser';

/**
 * The RecordRestoredFrom model module.
 * @module model/RecordRestoredFrom
 * @version 0.0.1
 */
class RecordRestoredFrom {
    /**
     * Constructs a new <code>RecordRestoredFrom</code>.
     * @alias module:model/RecordRestoredFrom
     */
    constructor() { 
        
        RecordRestoredFrom.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecordRestoredFrom</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecordRestoredFrom} obj Optional instance to populate.
     * @return {module:model/RecordRestoredFrom} The populated <code>RecordRestoredFrom</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecordRestoredFrom();

            if (data.hasOwnProperty('activityID')) {
                obj['activityID'] = ApiClient.convertToType(data['activityID'], 'String');
            }
            if (data.hasOwnProperty('added')) {
                obj['added'] = ApiClient.convertToType(data['added'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'Date');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = AuditUser.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RecordRestoredFrom</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RecordRestoredFrom</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['activityID'] && !(typeof data['activityID'] === 'string' || data['activityID'] instanceof String)) {
            throw new Error("Expected the field `activityID` to be a primitive type in the JSON string but got " + data['activityID']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          AuditUser.validateJSON(data['user']);
        }

        return true;
    }


}



/**
 * Activity ID that restored the record.
 * @member {String} activityID
 */
RecordRestoredFrom.prototype['activityID'] = undefined;

/**
 * Added time of the new record.
 * @member {Date} added
 */
RecordRestoredFrom.prototype['added'] = undefined;

/**
 * ID of the original record.
 * @member {String} id
 */
RecordRestoredFrom.prototype['id'] = undefined;

/**
 * Modified time of the original record.
 * @member {Date} modified
 */
RecordRestoredFrom.prototype['modified'] = undefined;

/**
 * @member {module:model/AuditUser} user
 */
RecordRestoredFrom.prototype['user'] = undefined;






export default RecordRestoredFrom;

