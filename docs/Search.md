# GraxApi.Search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **Date** | Time the search job was created. | [optional] 
**deleting** | **Date** | Time the search will be automatically deleted if its results are not accessed. | [optional] 
**filterStatus** | **String** | Status of the records to search. | [optional] 
**filters** | [**SearchFilters**](SearchFilters.md) |  | [optional] 
**id** | **String** | ID of the search job. | [optional] 
**limits** | [**SearchLimits**](SearchLimits.md) |  | [optional] 
**name** | **String** | Name of the search job. | [optional] 
**object** | **String** | Object searched. | [optional] 
**progress** | **Number** | Progress of the search job. | [optional] 
**recordsFound** | **Number** | Number of records found. | [optional] 
**recordsScanned** | **Number** | Number of records scanned. | [optional] 
**recordsTimeFirst** | **Date** | Time of the first found record. | [optional] 
**recordsTimeLast** | **Date** | Time of the last found record. | [optional] 
**reverse** | **Boolean** | Whether records were searched in reverse order. | [optional] 
**status** | **String** | Status of the search job. | [optional] 
**timeField** | **String** | Time field used for the search. Can be &#39;createdAt&#39;, &#39;modifiedAt&#39;, &#39;latestModifiedAt&#39;, &#39;rangeLatestModifiedAt&#39;, &#39;allModifiedAt&#39;, &#39;deletedAt&#39; or &#39;purgedAt&#39;. | [optional] 
**timeFieldMax** | **Date** | Maximum time for the search. | [optional] 
**timeFieldMin** | **Date** | Minimum time for the search. | [optional] 
**updated** | **Date** | Time the search job was last updated. | [optional] 


