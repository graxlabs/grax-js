# GraxApi.AutoBackupApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backupsHealthGet**](AutoBackupApi.md#backupsHealthGet) | **GET** /api/v1/backups/health | Get Auto Backup health



## backupsHealthGet

> BackupsHealth backupsHealthGet(opts)

Get Auto Backup health

Get the health of Auto Backup.

### Example

```javascript
import GraxApi from 'grax_api';
let defaultClient = GraxApi.ApiClient.instance;
// Configure Bearer (GRAX Token) access token for authorization: bearer_token
let bearer_token = defaultClient.authentications['bearer_token'];
bearer_token.accessToken = "YOUR ACCESS TOKEN"

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

