# GraxApi.RecordsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recordChildrenList**](RecordsApi.md#recordChildrenList) | **GET** /api/v1/salesforce/{orgID}/objects/{object}/records/{id}/versions/{mod}/children | List record children
[**recordGet**](RecordsApi.md#recordGet) | **GET** /api/v2/objects/{object}/records/{id} | Get record
[**recordVersionsList**](RecordsApi.md#recordVersionsList) | **GET** /api/v2/objects/{object}/records/{id}/versions | List record versions



## recordChildrenList

> RecordChildrenPage recordChildrenList(orgID, object2, id, mod, opts)

List record children

### Example

```javascript
import GraxApi from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;
// Configure Bearer (GRAX Token) access token for authorization: bearer_token
let bearer_token = defaultClient.authentications['bearer_token'];
bearer_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GraxApi.RecordsApi();
let orgID = "orgID_example"; // String | 
let object2 = "object_example"; // String | 
let id = "id_example"; // String | 
let mod = "mod_example"; // String | 
let opts = {
  'object': "object_example", // String | The child object to list.
  'fields': "fields_example", // String | The fields to include in the response. Can be 'all' for all fields, 'name' for the name field, or a comma separated list of field names.
  'deleteSource': "deleteSource_example", // String | The delete source to filter by, can be 'any', 'grax' or 'salesforce'.
  'pageSize': 56, // Number | Maximum number of results to return per page.
  'pageToken': "pageToken_example" // String | Token returned by previous call to retrieve the subsequent page.
};
apiInstance.recordChildrenList(orgID, object2, id, mod, opts, (error, data, response) => {
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
 **object2** | **String**|  | 
 **id** | **String**|  | 
 **mod** | **String**|  | 
 **object** | **String**| The child object to list. | [optional] 
 **fields** | **String**| The fields to include in the response. Can be &#39;all&#39; for all fields, &#39;name&#39; for the name field, or a comma separated list of field names. | [optional] 
 **deleteSource** | **String**| The delete source to filter by, can be &#39;any&#39;, &#39;grax&#39; or &#39;salesforce&#39;. | [optional] 
 **pageSize** | **Number**| Maximum number of results to return per page. | [optional] 
 **pageToken** | **String**| Token returned by previous call to retrieve the subsequent page. | [optional] 

### Return type

[**RecordChildrenPage**](RecordChildrenPage.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recordGet

> Record recordGet(object, id, opts)

Get record

### Example

```javascript
import GraxApi from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;
// Configure Bearer (GRAX Token) access token for authorization: bearer_token
let bearer_token = defaultClient.authentications['bearer_token'];
bearer_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GraxApi.RecordsApi();
let object = "object_example"; // String | Object name.
let id = "id_example"; // String | ID of the record.
let opts = {
  'fields': "fields_example" // String | Fields to include in the response. Can be 'all' for all fields, 'name' for the name field, or a comma separated list of field names.
};
apiInstance.recordGet(object, id, opts, (error, data, response) => {
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
 **object** | **String**| Object name. | 
 **id** | **String**| ID of the record. | 
 **fields** | **String**| Fields to include in the response. Can be &#39;all&#39; for all fields, &#39;name&#39; for the name field, or a comma separated list of field names. | [optional] 

### Return type

[**Record**](Record.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recordVersionsList

> RecordVersionsPage recordVersionsList(object, id, opts)

List record versions

### Example

```javascript
import GraxApi from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;
// Configure Bearer (GRAX Token) access token for authorization: bearer_token
let bearer_token = defaultClient.authentications['bearer_token'];
bearer_token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GraxApi.RecordsApi();
let object = "object_example"; // String | Object name.
let id = "id_example"; // String | ID of the record.
let opts = {
  'fields': "fields_example", // String | Fields to include in the response. Can be 'all' for all fields, 'name' for the name field, or a comma separated list of field names.
  'maxItems': 56, // Number | Maximum number of items to return per page. Fewer or zero may be returned.
  'pageToken': "pageToken_example" // String | Token returned by previous call to retrieve the subsequent page.
};
apiInstance.recordVersionsList(object, id, opts, (error, data, response) => {
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
 **object** | **String**| Object name. | 
 **id** | **String**| ID of the record. | 
 **fields** | **String**| Fields to include in the response. Can be &#39;all&#39; for all fields, &#39;name&#39; for the name field, or a comma separated list of field names. | [optional] 
 **maxItems** | **Number**| Maximum number of items to return per page. Fewer or zero may be returned. | [optional] 
 **pageToken** | **String**| Token returned by previous call to retrieve the subsequent page. | [optional] 

### Return type

[**RecordVersionsPage**](RecordVersionsPage.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

