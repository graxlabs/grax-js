# GraxApi.SearchApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchAbort**](SearchApi.md#searchAbort) | **POST** /api/v2/searches/{id}/abort | Abort search
[**searchCreate**](SearchApi.md#searchCreate) | **POST** /api/v2/searches | Create search
[**searchDelete**](SearchApi.md#searchDelete) | **DELETE** /api/v2/searches/{id} | Delete search
[**searchDownload**](SearchApi.md#searchDownload) | **GET** /api/v2/searches/{id}/download | Download search results
[**searchGet**](SearchApi.md#searchGet) | **GET** /api/v2/searches/{id} | Get search
[**searchRecords**](SearchApi.md#searchRecords) | **GET** /api/v2/searches/{id}/records | Read search result records
[**searchesList**](SearchApi.md#searchesList) | **GET** /api/v2/searches | List searches

<a name="searchAbort"></a>
# **searchAbort**
> searchAbort(id)

Abort search

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.SearchApi();
let id = "id_example"; // String | ID of the search job.

apiInstance.searchAbort(id, (error, data, response) => {
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
 **id** | **String**| ID of the search job. | 

### Return type

null (empty response body)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchCreate"></a>
# **searchCreate**
> Search searchCreate(opts)

Create search

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.SearchApi();
let opts = { 
  'body': new GraxApi.SearchCreate() // SearchCreate | 
};
apiInstance.searchCreate(opts, (error, data, response) => {
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
 **body** | [**SearchCreate**](SearchCreate.md)|  | [optional] 

### Return type

[**Search**](Search.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchDelete"></a>
# **searchDelete**
> searchDelete(id)

Delete search

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.SearchApi();
let id = "id_example"; // String | 

apiInstance.searchDelete(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchDownload"></a>
# **searchDownload**
> &#x27;Blob&#x27; searchDownload(id, opts)

Download search results

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.SearchApi();
let id = "id_example"; // String | ID of the search job.
let opts = { 
  'fields': "fields_example", // String | Fields to include in the response. If not specified, all fields are included.
  'latest': true // Boolean | Whether to download the latest version of each record.
};
apiInstance.searchDownload(id, opts, (error, data, response) => {
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
 **id** | **String**| ID of the search job. | 
 **fields** | **String**| Fields to include in the response. If not specified, all fields are included. | [optional] 
 **latest** | **Boolean**| Whether to download the latest version of each record. | [optional] 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/zip

<a name="searchGet"></a>
# **searchGet**
> Search searchGet(id)

Get search

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.SearchApi();
let id = "id_example"; // String | 

apiInstance.searchGet(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**Search**](Search.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchRecords"></a>
# **searchRecords**
> SearchRecordsPage searchRecords(id, opts)

Read search result records

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.SearchApi();
let id = "id_example"; // String | ID of the search job.
let opts = { 
  'fields': "fields_example", // String | Fields to include in the response. Can be 'all' for all fields, 'name' for the name field, or a comma separated list of field names.
  'reverse': true, // Boolean | Search records in reverse order.
  'minTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Minimum record time to include in the response.
  'maxItems': 56, // Number | Maximum number of items to return per page. Fewer or zero may be returned.
  'pageToken': "pageToken_example" // String | Token returned by previous call to retrieve the subsequent page.
};
apiInstance.searchRecords(id, opts, (error, data, response) => {
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
 **id** | **String**| ID of the search job. | 
 **fields** | **String**| Fields to include in the response. Can be &#x27;all&#x27; for all fields, &#x27;name&#x27; for the name field, or a comma separated list of field names. | [optional] 
 **reverse** | **Boolean**| Search records in reverse order. | [optional] 
 **minTime** | **Date**| Minimum record time to include in the response. | [optional] 
 **maxItems** | **Number**| Maximum number of items to return per page. Fewer or zero may be returned. | [optional] 
 **pageToken** | **String**| Token returned by previous call to retrieve the subsequent page. | [optional] 

### Return type

[**SearchRecordsPage**](SearchRecordsPage.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchesList"></a>
# **searchesList**
> SearchesPage searchesList(opts)

List searches

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.SearchApi();
let opts = { 
  'maxItems': 56, // Number | Maximum number of items to return per page. Fewer or zero may be returned.
  'pageToken': "pageToken_example" // String | Token returned by previous call to retrieve the subsequent page.
};
apiInstance.searchesList(opts, (error, data, response) => {
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
 **maxItems** | **Number**| Maximum number of items to return per page. Fewer or zero may be returned. | [optional] 
 **pageToken** | **String**| Token returned by previous call to retrieve the subsequent page. | [optional] 

### Return type

[**SearchesPage**](SearchesPage.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

