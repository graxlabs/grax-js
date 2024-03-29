# GraxApi.RecordsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recordChildrenList**](RecordsApi.md#recordChildrenList) | **GET** /api/v1/salesforce/{orgID}/objects/{object}/records/{id}/versions/{mod}/children | List record children
[**recordGet**](RecordsApi.md#recordGet) | **GET** /api/v2/objects/{object}/records/{id} | Get record
[**recordVersionsList**](RecordsApi.md#recordVersionsList) | **GET** /api/v2/objects/{object}/records/{id}/versions | List record versions

<a name="recordChildrenList"></a>
# **recordChildrenList**
> RecordChildrenPage recordChildrenList(orgID, _object, id, mod, opts)

List record children

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.RecordsApi();
let orgID = "orgID_example"; // String | 
let _object = "_object_example"; // String | 
let id = "id_example"; // String | 
let mod = "mod_example"; // String | 
let opts = { 
  '_object': "_object_example", // String | The child object to list.
  'fields': "fields_example", // String | The fields to include in the response. Can be 'all' for all fields, 'name' for the name field, or a comma separated list of field names.
  'deleteSource': "deleteSource_example", // String | The delete source to filter by, can be 'any', 'grax' or 'salesforce'.
  'pageSize': 56, // Number | Maximum number of results to return per page.
  'pageToken': "pageToken_example" // String | Token returned by previous call to retrieve the subsequent page.
};
apiInstance.recordChildrenList(orgID, _object, id, mod, opts, (error, data, response) => {
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
 **mod** | **String**|  | 
 **_object** | **String**| The child object to list. | [optional] 
 **fields** | **String**| The fields to include in the response. Can be &#x27;all&#x27; for all fields, &#x27;name&#x27; for the name field, or a comma separated list of field names. | [optional] 
 **deleteSource** | **String**| The delete source to filter by, can be &#x27;any&#x27;, &#x27;grax&#x27; or &#x27;salesforce&#x27;. | [optional] 
 **pageSize** | **Number**| Maximum number of results to return per page. | [optional] 
 **pageToken** | **String**| Token returned by previous call to retrieve the subsequent page. | [optional] 

### Return type

[**RecordChildrenPage**](RecordChildrenPage.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="recordGet"></a>
# **recordGet**
> Record recordGet(_object, id, opts)

Get record

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.RecordsApi();
let _object = "_object_example"; // String | Object name.
let id = "id_example"; // String | ID of the record.
let opts = { 
  'fields': "fields_example" // String | Fields to include in the response. Can be 'all' for all fields, 'name' for the name field, or a comma separated list of field names.
};
apiInstance.recordGet(_object, id, opts, (error, data, response) => {
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
 **_object** | **String**| Object name. | 
 **id** | **String**| ID of the record. | 
 **fields** | **String**| Fields to include in the response. Can be &#x27;all&#x27; for all fields, &#x27;name&#x27; for the name field, or a comma separated list of field names. | [optional] 

### Return type

[**Record**](Record.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="recordVersionsList"></a>
# **recordVersionsList**
> RecordVersionsPage recordVersionsList(_object, id, opts)

List record versions

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.RecordsApi();
let _object = "_object_example"; // String | Object name.
let id = "id_example"; // String | ID of the record.
let opts = { 
  'fields': "fields_example", // String | Fields to include in the response. Can be 'all' for all fields, 'name' for the name field, or a comma separated list of field names.
  'maxItems': 56, // Number | Maximum number of items to return per page. Fewer or zero may be returned.
  'pageToken': "pageToken_example" // String | Token returned by previous call to retrieve the subsequent page.
};
apiInstance.recordVersionsList(_object, id, opts, (error, data, response) => {
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
 **_object** | **String**| Object name. | 
 **id** | **String**| ID of the record. | 
 **fields** | **String**| Fields to include in the response. Can be &#x27;all&#x27; for all fields, &#x27;name&#x27; for the name field, or a comma separated list of field names. | [optional] 
 **maxItems** | **Number**| Maximum number of items to return per page. Fewer or zero may be returned. | [optional] 
 **pageToken** | **String**| Token returned by previous call to retrieve the subsequent page. | [optional] 

### Return type

[**RecordVersionsPage**](RecordVersionsPage.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

