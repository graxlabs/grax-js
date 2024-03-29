# GraxApi.ObjectsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**objectsList**](ObjectsApi.md#objectsList) | **GET** /api/v2/objects | List objects

<a name="objectsList"></a>
# **objectsList**
> ObjectsPage objectsList(opts)

List objects

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.ObjectsApi();
let opts = { 
  'maxItems': 56, // Number | Maximum number of items to return per page. Fewer or zero may be returned.
  'pageToken': "pageToken_example" // String | Token returned by previous call to retrieve the subsequent page.
};
apiInstance.objectsList(opts, (error, data, response) => {
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

[**ObjectsPage**](ObjectsPage.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

