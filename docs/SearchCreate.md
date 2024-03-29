# GraxApi.SearchCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**SearchFilters**](SearchFilters.md) |  | [optional] 
**limits** | [**SearchLimits**](SearchLimits.md) |  | [optional] 
**notify** | **Boolean** | Whether to notify when the search is complete. | [optional] 
**_object** | **String** | Object to search. | [optional] 
**reverse** | **Boolean** | Whether to search in reverse order. | [optional] 
**status** | **String** | Status of the records to search. | [optional] 
**timeField** | **String** | Time field to search. Can be &#x27;createdAt&#x27;, &#x27;modifiedAt&#x27;, &#x27;latestModifiedAt&#x27;, &#x27;rangeLatestModifiedAt&#x27;, &#x27;allModifiedAt&#x27;, &#x27;deletedAt&#x27; or &#x27;purgedAt&#x27;. Defaults to &#x27;createdAt&#x27;. | [optional] 
**timeFieldMax** | **Date** | Maximum time for the search. | [optional] 
**timeFieldMin** | **Date** | Minimum time for the search. | [optional] 
