# GraxApi.AutoBackupApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backupsHealthGet**](AutoBackupApi.md#backupsHealthGet) | **GET** /api/v1/backups/health | Get Auto Backup health

<a name="backupsHealthGet"></a>
# **backupsHealthGet**
> BackupsHealth backupsHealthGet(opts)

Get Auto Backup health

Get the health of Auto Backup.

### Example
```javascript
import {GraxApi} from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;


let apiInstance = new GraxApi.AutoBackupApi();
let opts = { 
  'maxBehind': 56 // Number | Maximum time behind before the backups are considered unhealthy, in seconds.
};
apiInstance.backupsHealthGet(opts, (error, data, response) => {
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
 **maxBehind** | **Number**| Maximum time behind before the backups are considered unhealthy, in seconds. | [optional] 

### Return type

[**BackupsHealth**](BackupsHealth.md)

### Authorization

[bearer_token](../README.md#bearer_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

