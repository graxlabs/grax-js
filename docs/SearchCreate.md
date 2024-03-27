# GraxApi.SearchCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**SearchFilters**](SearchFilters.md) |  | [optional] 
**limits** | [**SearchLimits**](SearchLimits.md) |  | [optional] 
**notify** | **Boolean** | Whether to notify when the search is complete. | [optional] 
**object** | **String** | Object to search. | [optional] 
**reverse** | **Boolean** | Whether to search in reverse order. | [optional] 
**status** | **String** | Status of the records to search. | [optional] 
**timeField** | **String** | Time field to search. Can be &#39;createdAt&#39;, &#39;modifiedAt&#39;, &#39;latestModifiedAt&#39;, &#39;rangeLatestModifiedAt&#39;, &#39;allModifiedAt&#39;, &#39;deletedAt&#39; or &#39;purgedAt&#39;. Defaults to &#39;createdAt&#39;. | [optional] 
**timeFieldMax** | **Date** | Maximum time for the search. | [optional] 
**timeFieldMin** | **Date** | Minimum time for the search. | [optional] 


