# GraxApi.RecordLockApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recordLock**](RecordLockApi.md#recordLock) | **POST** /api/v1/salesforce/{orgID}/objects/{object}/records/{id}/lock | Lock single record
[**recordLockGet**](RecordLockApi.md#recordLockGet) | **GET** /api/v1/salesforce/{orgID}/objects/{object}/records/{id}/lock | Get record lock
[**recordUnlock**](RecordLockApi.md#recordUnlock) | **DELETE** /api/v1/salesforce/{orgID}/objects/{object}/records/{id}/lock | Unlock single record
[**recordsLock**](RecordLockApi.md#recordsLock) | **POST** /api/v1/salesforce/{orgID}/objects/{object}/lock | Lock multiple records
[**recordsUnlock**](RecordLockApi.md#recordsUnlock) | **POST** /api/v1/salesforce/{orgID}/objects/{object}/unlock | Unlock multiple records



## recordLock

> recordLock(orgID, object, id)

Lock single record

### Example

```javascript
import GraxApi from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;
// Configure Bearer (GRAX Token) access token for authorization: bearer_token
let bearer_token = defaultClient.authentications['bearer_token'];
bearer_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GraxApi.RecordLockApi();
let orgID = "orgID_example"; // String | 
let object = "object_example"; // String | 
let id = "id_example"; // String | 
apiInstance.recordLock(orgID, object, id, (error, data, response) => {
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
 **object** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recordLockGet

> RecordLock recordLockGet(orgID, object, id)

Get record lock

### Example

```javascript
import GraxApi from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;
// Configure Bearer (GRAX Token) access token for authorization: bearer_token
let bearer_token = defaultClient.authentications['bearer_token'];
bearer_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GraxApi.RecordLockApi();
let orgID = "orgID_example"; // String | 
let object = "object_example"; // String | 
let id = "id_example"; // String | 
apiInstance.recordLockGet(orgID, object, id, (error, data, response) => {
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
 **object** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**RecordLock**](RecordLock.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recordUnlock

> recordUnlock(orgID, object, id)

Unlock single record

### Example

```javascript
import GraxApi from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;
// Configure Bearer (GRAX Token) access token for authorization: bearer_token
let bearer_token = defaultClient.authentications['bearer_token'];
bearer_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GraxApi.RecordLockApi();
let orgID = "orgID_example"; // String | 
let object = "object_example"; // String | 
let id = "id_example"; // String | 
apiInstance.recordUnlock(orgID, object, id, (error, data, response) => {
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
 **object** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recordsLock

> recordsLock(orgID, object, opts)

Lock multiple records

### Example

```javascript
import GraxApi from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;
// Configure Bearer (GRAX Token) access token for authorization: bearer_token
let bearer_token = defaultClient.authentications['bearer_token'];
bearer_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GraxApi.RecordLockApi();
let orgID = "orgID_example"; // String | 
let object = "object_example"; // String | 
let opts = {
  'recordsLockRequest': new GraxApi.RecordsLockRequest() // RecordsLockRequest | 
};
apiInstance.recordsLock(orgID, object, opts, (error, data, response) => {
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
 **object** | **String**|  | 
 **recordsLockRequest** | [**RecordsLockRequest**](RecordsLockRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## recordsUnlock

> recordsUnlock(orgID, object, opts)

Unlock multiple records

### Example

```javascript
import GraxApi from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;
// Configure Bearer (GRAX Token) access token for authorization: bearer_token
let bearer_token = defaultClient.authentications['bearer_token'];
bearer_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GraxApi.RecordLockApi();
let orgID = "orgID_example"; // String | 
let object = "object_example"; // String | 
let opts = {
  'recordsUnlockRequest': new GraxApi.RecordsUnlockRequest() // RecordsUnlockRequest | 
};
apiInstance.recordsUnlock(orgID, object, opts, (error, data, response) => {
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
 **object** | **String**|  | 
 **recordsUnlockRequest** | [**RecordsUnlockRequest**](RecordsUnlockRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

