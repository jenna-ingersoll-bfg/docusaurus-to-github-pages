<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><img src="Icon-100.png" alt="Logo" /></td>
<td><div id="projectname">
Big Fish Unity SDK<span id="projectnumber"> 10.8.0</span>
</div>
<div id="projectbrief">
Use to access BFG core SDK functionality
</div></td>
</tr>
</tbody>
</table>

  - [BFGSDK](namespace_b_f_g_s_d_k.html)
  - [bfgGameReporting](class_b_f_g_s_d_k_1_1bfg_game_reporting.html)

[Static Public Member Functions](#pub-static-methods) | [List of all
members](class_b_f_g_s_d_k_1_1bfg_game_reporting-members.html)

BFGSDK.bfgGameReporting Class Reference

##  Static Public Member Functions

static void 

[logLevelStart](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a248a3e31bf19219d39acd0a0a90194dc)
(string levelID)

 

Currently only works on Android. Game should call this each time a level
has started.
[More...](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a248a3e31bf19219d39acd0a0a90194dc)  

 

static void 

[logLevelFinished](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#aa0ede9561e9755bd0a086598877c7ed4)
(string levelID)

 

Game should call this each time a level is finished.
[More...](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#aa0ede9561e9755bd0a086598877c7ed4)  

 

static bool 

[logCustomEventSerialized](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a4273bf7d12f4aca4345e49e88c4f174e)
(string name, long \_value, long level, string details1, string
details2, string details3, string additionalDetails)

 

Log a custom event to Big Fish Mobile Telemetry Services. Based on a
prior telemetry service that is now deprecated. Although event name is
no longer required by the Mobile Telemetry Services, this method has not
changed, so it's still required that a value be passed to it. The event
will not be sent if the event name is null. Other null fields will not
be sent.
[More...](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a4273bf7d12f4aca4345e49e88c4f174e)  

 

static bool 

[logCustomEvent](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a44d05c08f336bd1910f67e3b0af8768d)
(string name, string\[\] additionalDetailsKeys, string\[\]
additionalDetailsValues)

 

Log a custom event to Big Fish Mobile Telemetry Services. Based on a
prior telemetry service that is now deprecated. Although event name is
no longer required by the Mobile Telemetry Services, this method has not
changed, so it's still required that a value be passed to it. The event
will not be sent if the event name is null. Other null fields will not
be sent.
[More...](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a44d05c08f336bd1910f67e3b0af8768d)  

 

static bool 

[logCustomEvent](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#addace0bd3f8175202b12faf30fb7fa24)
(string name, Dictionary\< string, string \> additionalDetails)

 

Log a custom event to Big Fish Mobile Telemetry Services.
[More...](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#addace0bd3f8175202b12faf30fb7fa24)  

 

static bool 

[logCustomEvent](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a575be75112fcc98790172342667dbaf0)
(string name, long \_value, long level, string details1, string
details2, string details3, Dictionary\< string, string \>
additionalDetails)

 

Log a custom event to Big Fish Mobile Telemetry Services. Based on a
prior telemetry service that is now deprecated. Although event name is
no longer required by the Mobile Telemetry Services, this method has not
changed, so it's still required that a value be passed to it. The event
will not be sent if the event name is null. Other null fields will not
be sent.
[More...](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a575be75112fcc98790172342667dbaf0)  

 

static bool 

[logCustomEvent](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a4f1ae8a2dd5672301dcfb256751012e7)
(string name, long value, long level, string details1, string details2,
string details3, string\[\] additionalDetailsKeys, string\[\]
additionalDetailsValues)

 

Log a custom event to Big Fish Mobile Telemetry Services. Based on a
prior telemetry service that is now deprecated. Although event name is
no longer required by the Mobile Telemetry Services, this method has not
changed, so it's still required that a value be passed to it. The event
will not be sent if the event name is null. Other null fields will not
be sent.
[More...](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a4f1ae8a2dd5672301dcfb256751012e7)  

 

static void 

[logCustomPlacement](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a8ad277ddf06e7ef58500052276a2b689)
(string placementName)

 

Game should call this to log a custom placement.
[More...](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a8ad277ddf06e7ef58500052276a2b689)  

 

static void 

[dismissVisiblePlacement](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#ab8283af6911045cf202a0c23c8ea1933)
()

 

If a placement is showing, it is automatically and instantly dismissed.
If no placement is showing, does nothing.
[More...](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#ab8283af6911045cf202a0c23c8ea1933)  

 

static void 

[setSuppressPlacement](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a8af06bf78e168555db7ff6cf4384450b)
(bool suppressPlacements)

 

If it would be inappropriate for a placement ad to appear over the game
in the moment, set suppressPlacements to true. As soon as it is ok to
show placements again, be sure to set it back to false.
[More...](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a8af06bf78e168555db7ff6cf4384450b)  

 

static void 

[setPlayerSpend](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a719bdb73f129031eb611562693a4947d)
(float playerSpend)

 

Set the Player Spend (LTV) to be added as a custom field in Zendesk
requests
[More...](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a719bdb73f129031eb611562693a4947d)  

 

static void 

[setLastLevelPlayed](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a864903f31edddf48759de81376cdba17)
(string lastLevel)

 

Set the last level played by the user to be added as a custom field in
the Zendesk request
[More...](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a864903f31edddf48759de81376cdba17)  

 

static void 

[logRewardedVideoSeenWithProviderVideoLocation](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a5316ca49f106dd1e41886e52838738aa)
(string provider, string videoLocation)

 

Log rewarded video event. Calling this method will send an event to Big
Fish servers that reports that a rewarded video was watched. At a
minimum you must provide the videoProvider parameter, otherwise the
event will not send. You can also optionally pass along the
videoLocation where this rewarded video was viewed.
[More...](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a5316ca49f106dd1e41886e52838738aa)  

 

static void 

[logRewardedVideoSeenWithProvider](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#aa2be91c089bb0e84e24b9ebfc9a63dd9)
(string provider)

 

Log rewarded video event, facilitates logging rewarded video when video
location parameter is not applicable.
[More...](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#aa2be91c089bb0e84e24b9ebfc9a63dd9)  

 

static void 

[setCustomData](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a5fcdfdeeca48ffe379c4da5a1c9ccc1d)
(Dictionary\< long, string \> customData)

 

Add custom data fields to the next Zendesk request. Each field is
defined using a Zendesk-specific ID number and a string value.
[More...](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a5fcdfdeeca48ffe379c4da5a1c9ccc1d)  

 

static void 

**getCustomData** ()

 

This method has not been implemented due to the difficulty of returning
a Map\<long, string\> from Objective-c back up to C\#.  

 

static void 

[reportUserAcquisitionEvent](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#acbca40a16ad741ed5c4b60f64f208388)
(string eventName, string eventDetailsJsonString)

 

Report an event to the active User Acquisition SDK
[More...](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#acbca40a16ad741ed5c4b60f64f208388)  

 

## Member Function Documentation

## [◆ ](#ab8283af6911045cf202a0c23c8ea1933)dismissVisiblePlacement()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgGameReporting.dismissVisiblePlacement</td>
<td>(</td>
<td></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

If a placement is showing, it is automatically and instantly dismissed.
If no placement is showing, does nothing.

  - Warning  
    iOS only.

## [◆ ](#addace0bd3f8175202b12faf30fb7fa24)logCustomEvent() \[1/4\]

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static bool BFGSDK.bfgGameReporting.logCustomEvent</td>
<td>(</td>
<td>string </td>
<td><em>name</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>Dictionary&lt; string, string &gt; </td>
<td><em>additionalDetails</em> </td>
</tr>
<tr class="odd">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Log a custom event to Big Fish Mobile Telemetry Services.

WARNING: The Big Fish Mobile Telemetry Services backend rejects custom
events that exceed the maximum size. The maximum size is 6000 bytes as
of v9.1.0 but is subject to change.

  - Returns  
    `true`, if custom event was logged, `false` otherwise.

<!-- end list -->

  - Parameters
    
    |                   |                                                                                     |
    | ----------------- | ----------------------------------------------------------------------------------- |
    | name              | Event name that cannot be null. Pass in "" (empty string) as a string if necessary. |
    | additionalDetails | Additional details passed on in a (string, string) dictionary.                      |
    

<!-- end list -->

  - Returns

## [◆ ](#a575be75112fcc98790172342667dbaf0)logCustomEvent() \[2/4\]

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static bool BFGSDK.bfgGameReporting.logCustomEvent</td>
<td>(</td>
<td>string </td>
<td><em>name</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>long </td>
<td><em>_value</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>long </td>
<td><em>level</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>details1</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>string </td>
<td><em>details2</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>details3</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>Dictionary&lt; string, string &gt; </td>
<td><em>additionalDetails</em> </td>
</tr>
<tr class="even">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Log a custom event to Big Fish Mobile Telemetry Services. Based on a
prior telemetry service that is now deprecated. Although event name is
no longer required by the Mobile Telemetry Services, this method has not
changed, so it's still required that a value be passed to it. The event
will not be sent if the event name is null. Other null fields will not
be sent.

WARNING: the Dictionary(string,string) must not take serialized JSON.
Please use the other
[logCustomEvent()](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a44d05c08f336bd1910f67e3b0af8768d "Log a custom event to Big Fish Mobile Telemetry Services. Based on a prior telemetry service that is ...")
method for that.

  - Returns  
    `true`, if custom event was loged, `false` otherwise.

<!-- end list -->

  - Parameters
    
    |                   |                                                                                     |
    | ----------------- | ----------------------------------------------------------------------------------- |
    | name              | Event name that cannot be null. Pass in "" (empty string) as a string if necessary. |
    | \_value           | An optional arbitrary value you assign to associate with the event.                 |
    | level             | Optional integer value between 0 and 255 associated with the current game level.    |
    | details1          | Optional string data, max size is 32 characters. Required if using details2.        |
    | details2          | Optional string data, max size is 32 characters. Required if using details3.        |
    | details3          | Optional string data, max size is 32 characters.                                    |
    | additionalDetails | Additional details passed on in a (string, string) dictionary.                      |
    

## [◆ ](#a4f1ae8a2dd5672301dcfb256751012e7)logCustomEvent() \[3/4\]

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static bool BFGSDK.bfgGameReporting.logCustomEvent</td>
<td>(</td>
<td>string </td>
<td><em>name</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>long </td>
<td><em>value</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>long </td>
<td><em>level</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>details1</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>string </td>
<td><em>details2</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>details3</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>string[] </td>
<td><em>additionalDetailsKeys</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string[] </td>
<td><em>additionalDetailsValues</em> </td>
</tr>
<tr class="odd">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Log a custom event to Big Fish Mobile Telemetry Services. Based on a
prior telemetry service that is now deprecated. Although event name is
no longer required by the Mobile Telemetry Services, this method has not
changed, so it's still required that a value be passed to it. The event
will not be sent if the event name is null. Other null fields will not
be sent.

  - Returns  
    `true`, if custom event was logged, `false` otherwise.

<!-- end list -->

  - Parameters
    
    |                         |                                                                                        |
    | ----------------------- | -------------------------------------------------------------------------------------- |
    | name                    | Event name that cannot be null. Pass in "" (empty string) as a string if necessary.    |
    | value                   | An optional arbitrary value you assign to associate with the event.                    |
    | level                   | Optional integer value between 0 and 255 associated with the current game level.       |
    | details1                | Optional string data, max size is 32 characters. Required if using details2.           |
    | details2                | Optional string data, max size is 32 characters. Required if using details3.           |
    | details3                | Optional string data, max size is 32 characters.                                       |
    | additionalDetailsKeys   | Optional string array of keys to reference additional details in another parameter.    |
    | additionalDetailsValues | Optional string array of additional details associated with keys in another parameter. |
    

<!-- end list -->

  - Returns

## [◆ ](#a44d05c08f336bd1910f67e3b0af8768d)logCustomEvent() \[4/4\]

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static bool BFGSDK.bfgGameReporting.logCustomEvent</td>
<td>(</td>
<td>string </td>
<td><em>name</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string[] </td>
<td><em>additionalDetailsKeys</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>string[] </td>
<td><em>additionalDetailsValues</em> </td>
</tr>
<tr class="even">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Log a custom event to Big Fish Mobile Telemetry Services. Based on a
prior telemetry service that is now deprecated. Although event name is
no longer required by the Mobile Telemetry Services, this method has not
changed, so it's still required that a value be passed to it. The event
will not be sent if the event name is null. Other null fields will not
be sent.

WARNING: the Dictionary(string,string) must not take serialized JSON.
Please use the other
[logCustomEvent()](class_b_f_g_s_d_k_1_1bfg_game_reporting.html#a44d05c08f336bd1910f67e3b0af8768d "Log a custom event to Big Fish Mobile Telemetry Services. Based on a prior telemetry service that is ...")
method for that.

  - Returns  
    `true`, if custom event was loged, `false` otherwise.

<!-- end list -->

  - Parameters
    
    |                   |                                                                                     |
    | ----------------- | ----------------------------------------------------------------------------------- |
    | name              | Event name that cannot be null. Pass in "" (empty string) as a string if necessary. |
    | \_value           | An optional arbitrary value you assign to associate with the event.                 |
    | level             | Optional integer value between 0 and 255 associated with the current game level.    |
    | details1          | Optional string data, max size is 32 characters. Required if using details2.        |
    | details2          | Optional string data, max size is 32 characters. Required if using details3.        |
    | details3          | Optional string data, max size is 32 characters.                                    |
    | additionalDetails | Additional details passed on in a (string, string) dictionary.                      |
    

## [◆ ](#a4273bf7d12f4aca4345e49e88c4f174e)logCustomEventSerialized()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static bool BFGSDK.bfgGameReporting.logCustomEventSerialized</td>
<td>(</td>
<td>string </td>
<td><em>name</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>long </td>
<td><em>_value</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>long </td>
<td><em>level</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>details1</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>string </td>
<td><em>details2</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>details3</em>,</td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td>string </td>
<td><em>additionalDetails</em> </td>
</tr>
<tr class="even">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Log a custom event to Big Fish Mobile Telemetry Services. Based on a
prior telemetry service that is now deprecated. Although event name is
no longer required by the Mobile Telemetry Services, this method has not
changed, so it's still required that a value be passed to it. The event
will not be sent if the event name is null. Other null fields will not
be sent.

  - Returns  
    `true`, if custom event was logged, `false` otherwise.

<!-- end list -->

  - Parameters
    
    |                   |                                                                                     |
    | ----------------- | ----------------------------------------------------------------------------------- |
    | name              | Event name that cannot be null. Pass in "" (empty string) as a string if necessary. |
    | \_value           | An optional arbitrary value you assign to associate with the event.                 |
    | level             | Optional integer value between 0 and 255 associated with the current game level.    |
    | details1          | Optional string data, max size is 32 characters. Required if using details2.        |
    | details2          | Optional string data, max size is 32 characters. Required if using details3.        |
    | details3          | Optional string data, max size is 32 characters.                                    |
    | additionalDetails | Additional details passed on in a JSON string format.                               |
    

<!-- end list -->

  - Deprecated:\\n Deprecated since Unity Wrapper 7.0, please use
    logCustomEvent(name, additionalDetails).

## [◆ ](#a8ad277ddf06e7ef58500052276a2b689)logCustomPlacement()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgGameReporting.logCustomPlacement</td>
<td>(</td>
<td>string </td>
<td><em>placementName</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Game should call this to log a custom placement.

  - Parameters
    
    |               |                                                                                         |
    | ------------- | --------------------------------------------------------------------------------------- |
    | placementName | Developer-defined interstitial placement category (i.e. main-menu, level-end, launched) |
    

## [◆ ](#aa0ede9561e9755bd0a086598877c7ed4)logLevelFinished()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgGameReporting.logLevelFinished</td>
<td>(</td>
<td>string </td>
<td><em>levelID</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Game should call this each time a level is finished.

  - Parameters
    
    |         |                                            |
    | ------- | ------------------------------------------ |
    | levelID | Identifier of the level that was finished. |
    

## [◆ ](#a248a3e31bf19219d39acd0a0a90194dc)logLevelStart()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgGameReporting.logLevelStart</td>
<td>(</td>
<td>string </td>
<td><em>levelID</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Currently only works on Android. Game should call this each time a level
has started.

  - Parameters
    
    |         |                                           |
    | ------- | ----------------------------------------- |
    | levelID | Identifier of the level that was started. |
    

## [◆ ](#aa2be91c089bb0e84e24b9ebfc9a63dd9)logRewardedVideoSeenWithProvider()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgGameReporting.logRewardedVideoSeenWithProvider</td>
<td>(</td>
<td>string </td>
<td><em>provider</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Log rewarded video event, facilitates logging rewarded video when video
location parameter is not applicable.

  - Parameters
    
    |          |                                        |
    | -------- | -------------------------------------- |
    | provider | provider from which video was supplied |
    

## [◆ ](#a5316ca49f106dd1e41886e52838738aa)logRewardedVideoSeenWithProviderVideoLocation()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgGameReporting.logRewardedVideoSeenWithProviderVideoLocation</td>
<td>(</td>
<td>string </td>
<td><em>provider</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>videoLocation</em> </td>
</tr>
<tr class="odd">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Log rewarded video event. Calling this method will send an event to Big
Fish servers that reports that a rewarded video was watched. At a
minimum you must provide the videoProvider parameter, otherwise the
event will not send. You can also optionally pass along the
videoLocation where this rewarded video was viewed.

  - Parameters
    
    |               |                                                       |
    | ------------- | ----------------------------------------------------- |
    | provider      | provider from which video was displayed (e.g. vungle) |
    | videoLocation | location where video was viewed (e.g. main\_menu)     |
    

## [◆ ](#acbca40a16ad741ed5c4b60f64f208388)reportUserAcquisitionEvent()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgGameReporting.reportUserAcquisitionEvent</td>
<td>(</td>
<td>string </td>
<td><em>eventName</em>,</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>string </td>
<td><em>eventDetailsJsonString</em> </td>
</tr>
<tr class="odd">
<td></td>
<td>)</td>
<td></td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Report an event to the active User Acquisition SDK

  - Warning  
    This event will only be sent if user has opted in to the
    ThirdPartyTargetedAdvertising policy

<!-- end list -->

  - Parameters
    
    |                        |                                |
    | ---------------------- | ------------------------------ |
    | eventName              | Name of event                  |
    | eventDetailsJsonString | JSON string with event details |
    

## [◆ ](#a5fcdfdeeca48ffe379c4da5a1c9ccc1d)setCustomData()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgGameReporting.setCustomData</td>
<td>(</td>
<td>Dictionary&lt; long, string &gt; </td>
<td><em>customData</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Add custom data fields to the next Zendesk request. Each field is
defined using a Zendesk-specific ID number and a string value.

The string values should be consistently formatted for display,
depending on data type, as follows:

  - Text: Text strings can be formatted as the developer thinks
    appropriate or as otherwise specified.
  - Numeric: Integer value. Commas and other separators are not allowed.
  - Decimal: Floating point value, formatted in IEEE 754 string format
    (e.g.Double.toString(someDoubleValue) or
    Float.toString(someFloatValue)).
  - Boolean: "true" or "false".
  - Date: ISO 8601 date format string, must be formatted as
    YYYY-MM-DD(2018-12-06). Including the time is not supported.
  - DropDown: String that matches the tag for the corresponding
    value.For example, BFC/JMS would use sdk\_vip\_\#, such as
    "sdk\_vip\_11" for VIP 11.

<!-- end list -->

  - Parameters
    
    |            |                                                                                                                                                                                                                                                                                                                                                                                                               |
    | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | customData | A collection of ID/Value pairs to provide to Zendesk as extra, game-specific data. The IDs are defined in Zendesk, specifically by each game that requires them and uniquely identifies the corresponding value. For example, an ID/Value pair of 123456789 and "123.45" could be used to specify the total recent purchase amount as $123.45, and give a corresponding custom field with an id of 123456789. |
    

## [◆ ](#a864903f31edddf48759de81376cdba17)setLastLevelPlayed()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgGameReporting.setLastLevelPlayed</td>
<td>(</td>
<td>string </td>
<td><em>lastLevel</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Set the last level played by the user to be added as a custom field in
the Zendesk request

  - Parameters
    
    |           |                                                   |
    | --------- | ------------------------------------------------- |
    | lastLevel | Last level the user played before hitting support |
    

## [◆ ](#a719bdb73f129031eb611562693a4947d)setPlayerSpend()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgGameReporting.setPlayerSpend</td>
<td>(</td>
<td>float </td>
<td><em>playerSpend</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

Set the Player Spend (LTV) to be added as a custom field in Zendesk
requests

  - Parameters
    
    |             |                                           |
    | ----------- | ----------------------------------------- |
    | playerSpend | Value to be added to the Zendesk requests |
    

## [◆ ](#a8af06bf78e168555db7ff6cf4384450b)setSuppressPlacement()

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><table>
<tbody>
<tr class="odd">
<td>static void BFGSDK.bfgGameReporting.setSuppressPlacement</td>
<td>(</td>
<td>bool </td>
<td><em>suppressPlacements</em></td>
<td>)</td>
<td></td>
</tr>
</tbody>
</table></td>
<td><span class="mlabels"><span class="mlabel">inline</span><span class="mlabel">static</span></span></td>
</tr>
</tbody>
</table>

If it would be inappropriate for a placement ad to appear over the game
in the moment, set suppressPlacements to true. As soon as it is ok to
show placements again, be sure to set it back to false.

  - Parameters
    
    |                    |                                 |
    | ------------------ | ------------------------------- |
    | suppressPlacements | Whether to suppress them or not |
    

-----

Generated
by [![doxygen](doxygen.svg)](https://www.doxygen.org/index.html) 1.9.4
