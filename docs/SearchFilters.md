# GraxApi.SearchFilters

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**[SearchFilters]**](SearchFilters.md) | Child filters. | [optional] 
**fields** | [**[SearchFieldFilter]**](SearchFieldFilter.md) | Field filters. | [optional] 
**mode** | **String** | Mode of the filter. &#x27;and&#x27; requires all child and field filters match, &#x27;or&#x27; only requires one. | [optional] 

<a name="ModeEnum"></a>
## Enum: ModeEnum

* `and` (value: `"and"`)
* `or` (value: `"or"`)

