# GraxApi.RecordLockApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recordLock**](RecordLockApi.md#recordLock) | **POST** /api/v1/salesforce/{orgID}/objects/{object}/records/{id}/lock | Lock single record
[**recordLockGet**](RecordLockApi.md#recordLockGet) | **GET** /api/v1/salesforce/{orgID}/objects/{object}/records/{id}/lock | Get record lock
[**recordUnlock**](RecordLockApi.md#recordUnlock) | **DELETE** /api/v1/salesforce/{orgID}/objects/{object}/records/{id}/lock | Unlock single record
[**recordsLock**](RecordLockApi.md#recordsLock) | **POST** /api/v1/salesforce/{orgID}/objects/{object}/lock | Lock multiple records
[**recordsUnlock**](RecordLockApi.md#recordsUnlock) | **POST** /api/v1/salesforce/{orgID}/objects/{object}/unlock | Unlock multiple records

<a name="recordLock"></a>
# **recordLock**
> recordLock(orgID, _object, id)

Lock single record

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.RecordLockApi();
let orgID = "orgID_example"; // String | 
let _object = "_object_example"; // String | 
let id = "id_example"; // String | 

apiInstance.recordLock(orgID, _object, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgID** | **String**|  | 
 **_object** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="recordLockGet"></a>
# **recordLockGet**
> RecordLock recordLockGet(orgID, _object, id)

Get record lock

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.RecordLockApi();
let orgID = "orgID_example"; // String | 
let _object = "_object_example"; // String | 
let id = "id_example"; // String | 

apiInstance.recordLockGet(orgID, _object, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgID** | **String**|  | 
 **_object** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**RecordLock**](RecordLock.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="recordUnlock"></a>
# **recordUnlock**
> recordUnlock(orgID, _object, id)

Unlock single record

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.RecordLockApi();
let orgID = "orgID_example"; // String | 
let _object = "_object_example"; // String | 
let id = "id_example"; // String | 

apiInstance.recordUnlock(orgID, _object, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgID** | **String**|  | 
 **_object** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="recordsLock"></a>
# **recordsLock**
> recordsLock(orgID, _object, opts)

Lock multiple records

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.RecordLockApi();
let orgID = "orgID_example"; // String | 
let _object = "_object_example"; // String | 
let opts = { 
  'body': new GraxApi.ObjectLockBody() // ObjectLockBody | 
};
apiInstance.recordsLock(orgID, _object, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgID** | **String**|  | 
 **_object** | **String**|  | 
 **body** | [**ObjectLockBody**](ObjectLockBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="recordsUnlock"></a>
# **recordsUnlock**
> recordsUnlock(orgID, _object, opts)

Unlock multiple records

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.RecordLockApi();
let orgID = "orgID_example"; // String | 
let _object = "_object_example"; // String | 
let opts = { 
  'body': new GraxApi.ObjectUnlockBody() // ObjectUnlockBody | 
};
apiInstance.recordsUnlock(orgID, _object, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgID** | **String**|  | 
 **_object** | **String**|  | 
 **body** | [**ObjectUnlockBody**](ObjectUnlockBody.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

