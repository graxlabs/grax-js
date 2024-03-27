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
 * The RecordLock model module.
 * @module model/RecordLock
 * @version 0.0.1
 */
class RecordLock {
    /**
     * Constructs a new <code>RecordLock</code>.
     * @alias module:model/RecordLock
     */
    constructor() { 
        
        RecordLock.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RecordLock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecordLock} obj Optional instance to populate.
     * @return {module:model/RecordLock} The populated <code>RecordLock</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecordLock();

            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Date');
            }
            if (data.hasOwnProperty('lockedID')) {
                obj['lockedID'] = ApiClient.convertToType(data['lockedID'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('userID')) {
                obj['userID'] = ApiClient.convertToType(data['userID'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RecordLock</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RecordLock</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['lockedID'] && !(typeof data['lockedID'] === 'string' || data['lockedID'] instanceof String)) {
            throw new Error("Expected the field `lockedID` to be a primitive type in the JSON string but got " + data['lockedID']);
        }
        // ensure the json data is a string
        if (data['note'] && !(typeof data['note'] === 'string' || data['note'] instanceof String)) {
            throw new Error("Expected the field `note` to be a primitive type in the JSON string but got " + data['note']);
        }
        // ensure the json data is a string
        if (data['userID'] && !(typeof data['userID'] === 'string' || data['userID'] instanceof String)) {
            throw new Error("Expected the field `userID` to be a primitive type in the JSON string but got " + data['userID']);
        }

        return true;
    }


}



/**
 * Time the record was locked. If not present, the record is not locked.
 * @member {Date} locked
 */
RecordLock.prototype['locked'] = undefined;

/**
 * ID of the record causing this record to be locked
 * @member {String} lockedID
 */
RecordLock.prototype['lockedID'] = undefined;

/**
 * Note about the lock
 * @member {String} note
 */
RecordLock.prototype['note'] = undefined;

/**
 * ID of the user who locked the record
 * @member {String} userID
 */
RecordLock.prototype['userID'] = undefined;






export default RecordLock;

