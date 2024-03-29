/*
 * GRAX API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.54
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
import RecordLockID from './RecordLockID';

/**
 * The ObjectLockBody model module.
 * @module model/ObjectLockBody
 * @version 0.0.1
 */
export default class ObjectLockBody {
  /**
   * Constructs a new <code>ObjectLockBody</code>.
   * @alias module:model/ObjectLockBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ObjectLockBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ObjectLockBody} obj Optional instance to populate.
   * @return {module:model/ObjectLockBody} The populated <code>ObjectLockBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ObjectLockBody();
      if (data.hasOwnProperty('ids'))
        obj.ids = ApiClient.convertToType(data['ids'], [RecordLockID]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/RecordLockID>} ids
 */
ObjectLockBody.prototype.ids = undefined;
