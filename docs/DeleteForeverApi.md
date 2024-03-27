# GraxApi.DeleteForeverApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletionGet**](DeleteForeverApi.md#deletionGet) | **GET** /api/v1/salesforce/{orgID}/deletions/{id} | Get Delete Forever deletion
[**deletionRecordsList**](DeleteForeverApi.md#deletionRecordsList) | **GET** /api/v1/salesforce/{orgID}/deletions/{id}/records | List Delete Forever deletion records
[**deletionsList**](DeleteForeverApi.md#deletionsList) | **GET** /api/v1/salesforce/{orgID}/deletions | List Delete Forever deletions



## deletionGet

> Deletion deletionGet(orgID, id)

Get Delete Forever deletion

### Example

```javascript
import GraxApi from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;
// Configure Bearer (GRAX Token) access token for authorization: bearer_token
let bearer_token = defaultClient.authentications['bearer_token'];
bearer_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GraxApi.DeleteForeverApi();
let orgID = "orgID_example"; // String | 
let id = "id_example"; // String | 
apiInstance.deletionGet(orgID, id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**Deletion**](Deletion.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletionRecordsList

> DeletionRecordsPage deletionRecordsList(orgID, id, opts)

List Delete Forever deletion records

### Example

```javascript
import GraxApi from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;
// Configure Bearer (GRAX Token) access token for authorization: bearer_token
let bearer_token = defaultClient.authentications['bearer_token'];
bearer_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GraxApi.DeleteForeverApi();
let orgID = "orgID_example"; // String | 
let id = "id_example"; // String | 
let opts = {
  'pageSize': 56, // Number | Maximum number of results to return per page.
  'pageToken': "pageToken_example" // String | Token returned by previous call to retrieve the subsequent page.
};
apiInstance.deletionRecordsList(orgID, id, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **pageSize** | **Number**| Maximum number of results to return per page. | [optional] 
 **pageToken** | **String**| Token returned by previous call to retrieve the subsequent page. | [optional] 

### Return type

[**DeletionRecordsPage**](DeletionRecordsPage.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletionsList

> DeletionsPage deletionsList(orgID, opts)

List Delete Forever deletions

### Example

```javascript
import GraxApi from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;
// Configure Bearer (GRAX Token) access token for authorization: bearer_token
let bearer_token = defaultClient.authentications['bearer_token'];
bearer_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GraxApi.DeleteForeverApi();
let orgID = "orgID_example"; // String | 
let opts = {
  'min': new Date("2013-10-20T19:20:30+01:00"), // Date | Minimum created time, inclusive.
  'max': new Date("2013-10-20T19:20:30+01:00"), // Date | Maximum created time, exclusive.
  'object': "object_example", // String | Object name. If provided, only deletions for this object will be returned.
  'pageSize': 56, // Number | Maximum number of results to return per page.
  'pageToken': "pageToken_example" // String | Token returned by previous call to retrieve the subsequent page.
};
apiInstance.deletionsList(orgID, opts, (error, data, response) => {
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
 **min** | **Date**| Minimum created time, inclusive. | [optional] 
 **max** | **Date**| Maximum created time, exclusive. | [optional] 
 **object** | **String**| Object name. If provided, only deletions for this object will be returned. | [optional] 
 **pageSize** | **Number**| Maximum number of results to return per page. | [optional] 
 **pageToken** | **String**| Token returned by previous call to retrieve the subsequent page. | [optional] 

### Return type

[**DeletionsPage**](DeletionsPage.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

