# grax_api

GraxApi - JavaScript client for grax_api

## Installation

### For [Node.js](https://nodejs.org/)

```shell
npm install https://github.com/graxlabs/grax-js --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var GraxApi = require('grax_api');

var defaultClient = GraxApi.ApiClient.instance;
// Configure Bearer (GRAX Token) access token for authorization: bearer_token
var bearer_token = defaultClient.authentications['bearer_token'];
bearer_token.accessToken = "YOUR ACCESS TOKEN"

var api = new GraxApi.AutoBackupApi()
var opts = {
  'maxBehind': 56 // {Number} Maximum time behind before the backups are considered unhealthy, in seconds.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.backupsHealthGet(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*GraxApi.AutoBackupApi* | [**backupsHealthGet**](docs/AutoBackupApi.md#backupsHealthGet) | **GET** /api/v1/backups/health | Get Auto Backup health
*GraxApi.DeleteForeverApi* | [**deletionGet**](docs/DeleteForeverApi.md#deletionGet) | **GET** /api/v1/salesforce/{orgID}/deletions/{id} | Get Delete Forever deletion
*GraxApi.DeleteForeverApi* | [**deletionRecordsList**](docs/DeleteForeverApi.md#deletionRecordsList) | **GET** /api/v1/salesforce/{orgID}/deletions/{id}/records | List Delete Forever deletion records
*GraxApi.DeleteForeverApi* | [**deletionsList**](docs/DeleteForeverApi.md#deletionsList) | **GET** /api/v1/salesforce/{orgID}/deletions | List Delete Forever deletions
*GraxApi.ObjectsApi* | [**objectsList**](docs/ObjectsApi.md#objectsList) | **GET** /api/v2/objects | List objects
*GraxApi.RecordLockApi* | [**recordLock**](docs/RecordLockApi.md#recordLock) | **POST** /api/v1/salesforce/{orgID}/objects/{object}/records/{id}/lock | Lock single record
*GraxApi.RecordLockApi* | [**recordLockGet**](docs/RecordLockApi.md#recordLockGet) | **GET** /api/v1/salesforce/{orgID}/objects/{object}/records/{id}/lock | Get record lock
*GraxApi.RecordLockApi* | [**recordUnlock**](docs/RecordLockApi.md#recordUnlock) | **DELETE** /api/v1/salesforce/{orgID}/objects/{object}/records/{id}/lock | Unlock single record
*GraxApi.RecordLockApi* | [**recordsLock**](docs/RecordLockApi.md#recordsLock) | **POST** /api/v1/salesforce/{orgID}/objects/{object}/lock | Lock multiple records
*GraxApi.RecordLockApi* | [**recordsUnlock**](docs/RecordLockApi.md#recordsUnlock) | **POST** /api/v1/salesforce/{orgID}/objects/{object}/unlock | Unlock multiple records
*GraxApi.RecordsApi* | [**recordChildrenList**](docs/RecordsApi.md#recordChildrenList) | **GET** /api/v1/salesforce/{orgID}/objects/{object}/records/{id}/versions/{mod}/children | List record children
*GraxApi.RecordsApi* | [**recordGet**](docs/RecordsApi.md#recordGet) | **GET** /api/v2/objects/{object}/records/{id} | Get record
*GraxApi.RecordsApi* | [**recordVersionsList**](docs/RecordsApi.md#recordVersionsList) | **GET** /api/v2/objects/{object}/records/{id}/versions | List record versions
*GraxApi.SearchApi* | [**searchAbort**](docs/SearchApi.md#searchAbort) | **POST** /api/v2/searches/{id}/abort | Abort search
*GraxApi.SearchApi* | [**searchCreate**](docs/SearchApi.md#searchCreate) | **POST** /api/v2/searches | Create search
*GraxApi.SearchApi* | [**searchDelete**](docs/SearchApi.md#searchDelete) | **DELETE** /api/v2/searches/{id} | Delete search
*GraxApi.SearchApi* | [**searchDownload**](docs/SearchApi.md#searchDownload) | **GET** /api/v2/searches/{id}/download | Download search results
*GraxApi.SearchApi* | [**searchGet**](docs/SearchApi.md#searchGet) | **GET** /api/v2/searches/{id} | Get search
*GraxApi.SearchApi* | [**searchRecords**](docs/SearchApi.md#searchRecords) | **GET** /api/v2/searches/{id}/records | Read search result records
*GraxApi.SearchApi* | [**searchesList**](docs/SearchApi.md#searchesList) | **GET** /api/v2/searches | List searches


## Documentation for Models

 - [GraxApi.AuditUser](docs/AuditUser.md)
 - [GraxApi.BackupsHealth](docs/BackupsHealth.md)
 - [GraxApi.ChildRecord](docs/ChildRecord.md)
 - [GraxApi.Deletion](docs/Deletion.md)
 - [GraxApi.DeletionCaller](docs/DeletionCaller.md)
 - [GraxApi.DeletionRecord](docs/DeletionRecord.md)
 - [GraxApi.DeletionRecordsPage](docs/DeletionRecordsPage.md)
 - [GraxApi.DeletionsPage](docs/DeletionsPage.md)
 - [GraxApi.Error](docs/Error.md)
 - [GraxApi.ErrorBody](docs/ErrorBody.md)
 - [GraxApi.ModelObject](docs/ModelObject.md)
 - [GraxApi.ObjectsPage](docs/ObjectsPage.md)
 - [GraxApi.Record](docs/Record.md)
 - [GraxApi.RecordChildrenPage](docs/RecordChildrenPage.md)
 - [GraxApi.RecordDeleted](docs/RecordDeleted.md)
 - [GraxApi.RecordField](docs/RecordField.md)
 - [GraxApi.RecordLock](docs/RecordLock.md)
 - [GraxApi.RecordLockID](docs/RecordLockID.md)
 - [GraxApi.RecordPurged](docs/RecordPurged.md)
 - [GraxApi.RecordRestoredFrom](docs/RecordRestoredFrom.md)
 - [GraxApi.RecordVersionsPage](docs/RecordVersionsPage.md)
 - [GraxApi.RecordsLockRequest](docs/RecordsLockRequest.md)
 - [GraxApi.RecordsUnlockRequest](docs/RecordsUnlockRequest.md)
 - [GraxApi.Search](docs/Search.md)
 - [GraxApi.SearchCreate](docs/SearchCreate.md)
 - [GraxApi.SearchFieldFilter](docs/SearchFieldFilter.md)
 - [GraxApi.SearchFilters](docs/SearchFilters.md)
 - [GraxApi.SearchLimits](docs/SearchLimits.md)
 - [GraxApi.SearchRecord](docs/SearchRecord.md)
 - [GraxApi.SearchRecordsPage](docs/SearchRecordsPage.md)
 - [GraxApi.SearchesPage](docs/SearchesPage.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### bearer_token

- **Type**: Bearer authentication (GRAX Token)

