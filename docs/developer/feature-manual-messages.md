# Manual Message Delivery

:small_blue_diamond: **Tools to use:** Leanplum, Postman

## What is Messaging? 

Using messaging features, you can send customized messages to your players. This can take the form of push notifications, in-app messages, or an app inbox. 

- **Push notifications** are delivered to the player's device, whether or not they have your game open. Push notifications typically display a notification on the user's device. When the user opens the message and reads it, it goes away forever. 
- **In-app messages** are delivered to the player's device when they are playing your game. In-app messages typically pop up during game play, and once the player closes the window, it is gone forever.
- An **app inbox** serves as an inbox to store persistent messages. Messages sent to the app inbox are saved so that the player can go back and read them anytime.  

Games published by Big Fish use **Leanplum** to set up, define, and implement these messaging channels and more. While all of these messaging channels can sent messages programmatically, you can also send messages manually using Leanplum's API and (optionally) Postman. Manually sending messages may be needed for testing purposes because it allows you to send messages to a device without triggering in-game events. 

:::info

In-app messages do not support manual delivery. 

:::

## Creating the Message in Leanplum {#creating-message}

Before you manually send a message, you must first create and start it in Leanplum:

1. Create a new message in the Leanplum Dashboard. 
2. Select the type of message you'd like to send (push notification, app inbox, etc.)
3. For the **Delivery** method, select **Manual**. 

When you're finished creating the message, click **Start**.

## Sending messages with Postman and Leanplum {#postman}

[Postman](https://www.postman.com) is an API platform for building and using APIs. Using Postman, you can make calls to the Leanplum REST API and control when messages are sent to a client. 

:::tip[Pre-Requisite]

To use the Postman API, you must first create a free account. From there, either download and install the Postman desktop app or use the [web client](https://web.postman.co) to continue. 

:::

Once you have set up a Postman account, follow these steps to begin sending messages with Postman and Leanplum:

1. Save the following JSON code to a text file. This code is a Postman collection with a set of requests to get you started with the Leanplum API.

<details>
  <summary>Leanplum API Collection</summary>

```json
{
	"info": {
		"_postman_id": "308f78f3-1ccc-459f-855f-609101b389ec",
		"name": "Leanplum API Copy",
		"description": "https://docs.leanplum.com/v1/reference#api-methods",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "25059583"
	},
	"item": [
		{
			"name": "User Behavior",
			"item": [
				{
					"name": "Advance",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": []
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=advance&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&userId=&state=",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "advance",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "userId",
									"value": "",
									"description": "REQUIRED AND/OR deviceId"
								},
								{
									"key": "state",
									"value": "",
									"description": "REQUIRED - The name of the state. Set to an empty string to leave the current state but not enter a new one."
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "Unique ID for the device targeted by the request. You must provide a deviceId and/or a userId.",
									"disabled": true
								},
								{
									"key": "createDisposition",
									"value": "CreateNever",
									"description": "The policy that determines whether users are created by the API. Possible values:\n\n- CreateIfNeeded creates a user with the given IDs if one does not already exist.\n- CreateNever requires that the user already exists, otherwise the API action is skipped and a warning will be returned.\n\nThe default value for this method is CreateNever.",
									"disabled": true
								},
								{
									"key": "devMode",
									"value": "",
									"description": "Whether the user is in Development Mode, i.e. the user associated with the request is a developer and not a user. This is important for reporting purposes. Default: false.",
									"disabled": true
								},
								{
									"key": "info",
									"value": "",
									"description": "Any info attached to the state.",
									"disabled": true
								},
								{
									"key": "params",
									"value": "",
									"description": "A flat object of parameters as key-value pairs. Each key must be a string, and up to 50 parameters may be set. Example: {'gender':'F','age':21}.",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-advance\n\nAdvances a user to the next state. If the user/device does not exist, the API request is skipped and a warning will be returned. You can modify this behavior with the createDisposition option (see below). The state is the section of the app the user is currently in. States are like events with duration.\n\nThis method requires your production API clientKey.\n"
					},
					"response": []
				},
				{
					"name": "pauseState",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": []
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=pauseState&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&userId",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "pauseState",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "userId",
									"value": "",
									"description": "REQUIRED AND/OR deviceId"
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "A unique ID for the device targeted by the request. You must provide a deviceId and/or a userId",
									"disabled": true
								},
								{
									"key": "devMode",
									"value": "",
									"description": "Whether the user is in Development Mode, i.e. the user associated with the request is a developer and not a user. This is important for reporting purposes. Default: false.",
									"disabled": true
								},
								{
									"key": "createDisposition",
									"value": "",
									"description": "The policy that determines whether users are created by the API. Possible values:\n\n- CreateIfNeeded creates a user with the given IDs if one does not already exist.\n- CreateNever requires that the user already exists, otherwise the API action is skipped and a warning will be returned.\n\nThe default value for this method is CreateNever.",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-pausestate\n\nPauses the current state, but not the session, for a user. If the user/device does not exist, the API request is skipped and a warning will be returned. You can modify this behavior with the createDisposition option (see below).\n\nThis method requires your production API clientKey."
					},
					"response": []
				},
				{
					"name": "resumeState",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": []
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=resumeState&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&userId",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "resumeState",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "userId",
									"value": "",
									"description": "REQUIRED AND/OR deviceId"
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "A unique ID for the device targeted by the request. You must provide a deviceId and/or a userId.",
									"disabled": true
								},
								{
									"key": "devMode",
									"value": "",
									"description": "Whether the user is in Development Mode, i.e. the user associated with the request is a developer and not a user. This is important for reporting purposes. Default: false.",
									"disabled": true
								},
								{
									"key": "createDisposition",
									"value": "",
									"description": "The policy that determines whether users are created by the API. Possible values:\n\n- CreateIfNeeded creates a user with the given IDs if one does not already exist.\n- CreateNever requires that the user already exists, otherwise the API action is skipped and a warning will be returned.\n\nThe default value for this method is CreateNever.",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-resumestate\n\nResumes the current state for a user. If the user/device does not exist, the API request is skipped and a warning will be returned. You can modify this behavior with the createDisposition option (see below).\n\nThis method requires your production API clientKey."
					},
					"response": []
				},
				{
					"name": "pauseSession",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": []
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=pauseSession&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&userId",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "pauseSession",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "userId",
									"value": "",
									"description": "REQUIRED AND/OR deviceId"
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "A unique ID for the device targeted by the request. You must provide a deviceId and/or a userId",
									"disabled": true
								},
								{
									"key": "devMode",
									"value": "",
									"description": "Whether the user is in Development Mode, i.e. the user associated with the request is a developer and not a user. This is important for reporting purposes. Default: false.",
									"disabled": true
								},
								{
									"key": "createDisposition",
									"value": "",
									"description": "The policy that determines whether users are created by the API. Possible values:\n\n- CreateIfNeeded creates a user with the given IDs if one does not already exist.\n- CreateNever requires that the user already exists, otherwise the API action is skipped and a warning will be returned.\n\nThe default value for this method is CreateNever.",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-pausesession\n\nPauses the current session and state for a user. If the user/device does not exist, the API request is skipped and a warning will be returned. You can modify this behavior with the createDisposition option (see below).\n\nThis method requires your production API clientKey."
					},
					"response": []
				},
				{
					"name": "resumeSession",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": []
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=resumeSession&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&userId",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "resumeSession",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "userId",
									"value": "",
									"description": "REQUIRED AND/OR deviceId"
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "A unique ID for the device targeted by the request. You must provide a deviceId and/or a userId",
									"disabled": true
								},
								{
									"key": "devMode",
									"value": "",
									"description": "Whether the user is in Development Mode, i.e. the user associated with the request is a developer and not a user. This is important for reporting purposes. Default: false.",
									"disabled": true
								},
								{
									"key": "createDisposition",
									"value": "",
									"description": "The policy that determines whether users are created by the API. Possible values:\n\n- CreateIfNeeded creates a user with the given IDs if one does not already exist.\n- CreateNever requires that the user already exists, otherwise the API action is skipped and a warning will be returned.\n\nThe default value for this method is CreateNever.",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-resumesession\n\nResumes the current session and state for a user. Use either after pauseSession, or start if the app started in the background. If the user/device does not exist, the API request is skipped and a warning will be returned. You can modify this behavior with the createDisposition option (see below).\n\nThis method requires your production API clientKey."
					},
					"response": []
				},
				{
					"name": "heartbeat",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": []
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=heartbeat&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&userId",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "heartbeat",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "userId",
									"value": "",
									"description": "REQUIRED AND/OR deviceId"
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "A unique ID for the device targeted by the request. You must provide a deviceId and/or a userId.",
									"disabled": true
								},
								{
									"key": "devMode",
									"value": "",
									"description": "Whether the user is in Development Mode, i.e. the user associated with the request is a developer and not a user. This is important for reporting purposes. Default: false.",
									"disabled": true
								},
								{
									"key": "createDisposition",
									"value": "",
									"description": "The policy that determines whether users are created by the API. Possible values:\n\n- CreateIfNeeded creates a user with the given IDs if one does not already exist.\n- CreateNever requires that the user already exists, otherwise the API action is skipped and a warning will be returned.\n\nThe default value for this method is CreateNever.",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-heartbeat\n\nSends a pulse to indicate that the current session is still in progress, so as not to automatically end it. Sessions are automatically timed out after 2 hours of inactivity — or 30 minutes if the session was paused first. If the user/device does not exist, the API request is skipped and a warning will be returned. You can modify this behavior with the createDisposition option (see below).\n\nThis method requires your production API clientKey."
					},
					"response": []
				},
				{
					"name": "start",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": []
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=start&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&userId",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "start",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "userId",
									"value": "",
									"description": "REQUIRED AND/OR deviceId"
								},
								{
									"key": "deviceId",
									"value": "",
									"description": " Unique ID for the device targeted by the request. You must provide a deviceId and/or a userId",
									"disabled": true
								},
								{
									"key": "devMode",
									"value": "",
									"description": "Whether the user is in Development Mode, i.e. the user associated with the request is a developer and not a user. This is important for reporting purposes. Default: false.",
									"disabled": true
								},
								{
									"key": "createDisposition",
									"value": "",
									"description": "The policy that determines whether users are created by the API. Possible values:\n\n- CreateIfNeeded creates a user with the given IDs if one does not already exist.\n- CreateNever requires that the user already exists, otherwise the API action is skipped and a warning will be returned.\n\nThe default value for this method is CreateNever.",
									"disabled": true
								},
								{
									"key": "appVersion",
									"value": "",
									"description": "The version of the app used on this device. E.g. 2.0.1.",
									"disabled": true
								},
								{
									"key": "systemName",
									"value": "",
									"description": "The name of the OS the current device is running. E.g. iOS.",
									"disabled": true
								},
								{
									"key": "systemVersion",
									"value": "",
									"description": "The version number of the OS the current device is running. E.g. 6.0.",
									"disabled": true
								},
								{
									"key": "browserName",
									"value": "",
									"description": "The name of the browser the current device is running. E.g. Chrome.\n\n",
									"disabled": true
								},
								{
									"key": "browserVersion",
									"value": "",
									"description": "The version number of the browser the current device is running. E.g. 17.0.",
									"disabled": true
								},
								{
									"key": "deviceName",
									"value": "",
									"description": "A human-readable name representing the device.",
									"disabled": true
								},
								{
									"key": "deviceModel",
									"value": "",
									"description": "The model name of the device. E.g. iPad.",
									"disabled": true
								},
								{
									"key": "iosPushToken",
									"value": "",
									"description": "The token used for Apple iOS push notifications on this device.",
									"disabled": true
								},
								{
									"key": "gcmRegistrationId",
									"value": "",
									"description": "The registration ID used for Google Cloud Messaging push notifications on this device.",
									"disabled": true
								},
								{
									"key": "webPushSubscription",
									"value": "",
									"description": "The JSON-encoded subscription used for web push notifications on this device.",
									"disabled": true
								},
								{
									"key": "userAttributes",
									"value": "",
									"description": "A map of user attributes as key-value pairs. Each key must be a string. Attributes are saved across sessions. Only supplied attributes will be updated (i.e., if you omit an existing attribute, it will be preserved). Example: {\"gender\":\"F\",\"age\":21}.",
									"disabled": true
								},
								{
									"key": "locale",
									"value": "",
									"description": "The current locale the user is in. E.g. en_US.",
									"disabled": true
								},
								{
									"key": "country",
									"value": "",
									"description": "The country the user is in, specified by ISO 2-letter code. E.g. US for United States. Set to (detect) to detect the country based on the IP address of the user.",
									"disabled": true
								},
								{
									"key": "region",
									"value": "",
									"description": "The region (state) the user is in. E.g. ca for California. Set to (detect) to detect the region based on the IP address of the user.",
									"disabled": true
								},
								{
									"key": "city",
									"value": "",
									"description": "The city the user is in. E.g. San Francisco. Set to (detect) to detect the city based on the IP address of the user.",
									"disabled": true
								},
								{
									"key": "location",
									"value": "",
									"description": "The location (latitude/longitude) of the user. E.g. 37.775,-122.4183. Set to (detect) to detect the location based on the IP address of the user.",
									"disabled": true
								},
								{
									"key": "locationAccuracyType",
									"value": "",
									"description": "The type of location that is provided (IP, CELL, or GPS). Default: IP.",
									"disabled": true
								},
								{
									"key": "timezone",
									"value": "",
									"description": "The timezone abbreviation for the user. See list of timezone abbreviations.",
									"disabled": true
								},
								{
									"key": "timezoneOffsetSeconds",
									"value": "",
									"description": "The timezone offset from GMT in seconds.",
									"disabled": true
								},
								{
									"key": "background",
									"value": "",
									"description": "Whether the app started in the background. In this case, the session won't be counted until resumeSession is executed. Default: false.",
									"disabled": true
								},
								{
									"key": "includeDefaults",
									"value": "",
									"description": "Whether to include default (\"defaults in code\") values in output. Default: true.",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-start\n\nStarts a new session and returns the variables that have changed for the user. If the user/device does not exist, a new user will be created (see the createDisposition option below). This method requires your production API clientKey."
					},
					"response": []
				},
				{
					"name": "stop",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": []
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=stop&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&userId",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "stop",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "userId",
									"value": "",
									"description": "REQUIRED AND/OR deviceId"
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "A unique ID for the device targeted by the request. You must provide a deviceId and/or a userId",
									"disabled": true
								},
								{
									"key": "devMode",
									"value": "",
									"description": "Whether the user is in Development Mode, i.e. the user associated with the request is a developer and not a user. This is important for reporting purposes. Default: false.",
									"disabled": true
								},
								{
									"key": "createDisposition",
									"value": "",
									"description": "The policy that determines whether users are created by the API. Possible values:\n\n- CreateIfNeeded creates a user with the given IDs if one does not already exist.\n- CreateNever requires that the user already exists, otherwise the API action is skipped and a warning will be returned.\n\nThe default value for this method is CreateNever.",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-stop\n\n\nEnds the current session. If the user/device does not exist, the API request is skipped and a warning will be returned. You can modify this behavior with the createDisposition option (see below). This method requires your production API clientKey"
					},
					"response": []
				},
				{
					"name": "track",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": []
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=track&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&userId&event",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "track",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "userId",
									"value": "",
									"description": "REQUIRED AND/OR deviceId"
								},
								{
									"key": "event",
									"value": "",
									"description": "REQUIRED - The name of the event. Use \"Purchase\" to identify a monetization event, with the event value being the revenue. You can change the default monetization event name in Analytics by going to the metric chooser and clicking the Monetization metric category."
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "A unique ID for the device targeted by the request. You must provide a deviceId and/or a userId",
									"disabled": true
								},
								{
									"key": "devMode",
									"value": "",
									"description": "Whether the user is in Development Mode, i.e. the user associated with the request is a developer and not a user. This is important for reporting purposes. Default: false.\n\n",
									"disabled": true
								},
								{
									"key": "createDisposition",
									"value": "",
									"description": "The policy that determines whether users are created by the API. Possible values:\n\n- CreateIfNeeded creates a user with the given IDs if one does not already exist.\n- CreateNever requires that the user already exists, otherwise the API action is skipped and a warning will be returned.\n\nThe default value for this method is CreateNever.",
									"disabled": true
								},
								{
									"key": "value",
									"value": "",
									"description": "The event value. For example, for a purchase event, this would be the purchase price.",
									"disabled": true
								},
								{
									"key": "currencyCode",
									"value": "",
									"description": "The ISO 4217 currency code associated with value. Leanplum will automatically convert value into your preferred currency, while retaining the original price and currency code as event parameters localCurrency and localPrice. Currency conversion rates are updated every hour.",
									"disabled": true
								},
								{
									"key": "info",
									"value": "",
									"description": "Any info attached to the event.",
									"disabled": true
								},
								{
									"key": "time",
									"value": "",
									"description": "Option to provide the UNIX timestamp for when the event occurred, which may be different from the current time.",
									"disabled": true
								},
								{
									"key": "params",
									"value": "",
									"description": "A flat object of parameters as key-value pairs. Each key must be a string, and up to 50 parameters may be set. Example: {\"gender\":\"F\",\"age\":21}.",
									"disabled": true
								},
								{
									"key": "messageId",
									"value": "",
									"description": "The message ID this event is associated with. Set this to track a user's interaction with a message. To track a message Send or a View, set the event argument to an empty string. For other interactions, set the event argument to the type of action (example values include Open, Cancel, Accept). The Leanplum SDK does this automatically, so this should be used for advanced use cases only.",
									"disabled": true
								},
								{
									"key": "disposition",
									"value": "",
									"description": "Determines how tracked events affect sessions and user activity. If present, disposition must have one of the following values:\n\n- active (default): Used for events reflect user activity. Active events should mark the user as active, and should be tracked within a session. (Replaces the deprecated option allowOffline: false.)\n- passive: Used for events that do not correspond to user activity. These events do not need to occur within a session, and do not mark a user as active. For example, sending a user a message would be tracked passively, since it affects a user, but does not represent user activity. (Replaces the deprecated option allowOffline: true.)\n- requireActive: Used for events that must only be tracked within a session. These events are rejected, and return a warning response with ignored: true if the user does not have an active session. Clients should detect the warning by the ignored field, as warning messages may change.\n",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-track\n\n\nTracks one occurrence of an event for a user. If the user/device does not exist, a new user will be created (see the createDisposition option below). This method requires your production API clientKey."
					},
					"response": []
				}
			],
			"description": "All API`s under https://docs.leanplum.com/v1/reference#user-behavior-1"
		},
		{
			"name": "User Information",
			"item": [
				{
					"name": "setUserAttributes",
					"request": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=setUserAttributes&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&userId=",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "setUserAttributes",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "userId",
									"value": "",
									"description": "REQUIRED AND/OR deviceId"
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "A unique ID for the device targeted by the request. You must provide a deviceId and/or a userId",
									"disabled": true
								},
								{
									"key": "createDisposition",
									"value": "",
									"description": "The policy that determines whether users are created by the API. Possible values:\n\n- CreateIfNeeded creates a user with the given IDs if one does not already exist.\n- CreateNever requires that the user already exists, otherwise the API action is skipped and a warning will be returned.\n\nThe default value for this method is CreateIfNeeded.",
									"disabled": true
								},
								{
									"key": "userAttributes",
									"value": "",
									"description": "A map of user attributes as key-value pairs. Each key must be a string. Attributes are saved across sessions. Only supplied attributes will be updated (i.e., if you omit an existing attribute, it will be preserved). Example: {\"gender\":\"F\",\"age\":21}",
									"disabled": true
								},
								{
									"key": "userAttributeValuesToAdd",
									"value": "",
									"description": "A map of values to add to existing user attribute sets. For example, supply {\"Interests\":\"Sports\"} to add Sports to the existing set of Interests.",
									"disabled": true
								},
								{
									"key": "userAttributeValuesToRemove",
									"value": "",
									"description": "A map of values to remove from existing user attribute sets. For example, supply {\"Interests\":\"Sports\"} to remove Sports from the existing set of interests.",
									"disabled": true
								},
								{
									"key": "userAttributeValuesToIncrement",
									"value": "",
									"description": "A map of values to increment onto existing user attributes. The existing attribute value and the increment must both be integers or the operation will be skipped. If the existing attribute is not set, its value will be inferred as 0.\n\nFor example, supply {\"unreadMessages\":1} to add 1 to the number of unread messages.",
									"disabled": true
								},
								{
									"key": "unsubscribeCategoriesToAdd",
									"value": "",
									"description": "A list of email categories to unsubscribe a user from.",
									"disabled": true
								},
								{
									"key": "unsubscribeCategoriesToRemove",
									"value": "",
									"description": "A list of email categories to re-subscribe a user to.",
									"disabled": true
								},
								{
									"key": "unsubscribeChannelsToAdd",
									"value": "",
									"description": "A messaging channel (e.g. Email) to unsubscribe the user from. Use this to unsubscribe a user from all marketing email categories.\n\n",
									"disabled": true
								},
								{
									"key": "unsubscribeChannelsToRemove",
									"value": "",
									"description": "A messaging channel (e.g. Email) to re-subscribe the user to. Use this to re-subscribe a user to all marketing email categories (except any categories they have unsubscribed from).\n\n",
									"disabled": true
								},
								{
									"key": "newUserId",
									"value": "",
									"description": "If supplied, updates the user of the current session with newUserId. This can have certain effects:\n\n- Login: If the current user has no user ID and the user given by newUserId already exists, the current and existing user profiles will be merged, and the current profile will be deleted.\n- Register: If there is no current user ID and the user given by newUserId does not exist, the current user will be simply assigned newUserId as its user ID.\n- Switch user: If the current user has a user ID, the current session will be ended and a new session will be started with the user given by newUserId. A user with newUserId will be created if one does not already exist.\n",
									"disabled": true
								},
								{
									"key": "events",
									"value": "",
									"description": "A map of event data to update for the current user. The keys are the event names, each should have a nested object with at least one of the following attributes:\n\n- count: New lifetime count of this event for the current user.\ncountIncrement: Amount to increment the lifetime count of this event.\n\n- value: New lifetime value of this event for the current user.\n\n- valueIncrement: Amount to increment the lifetime value of this event.\n- firstTime: Time that this event first occurred, in seconds since midnight UTC on January 1, 1970.\n\n- lastTime: Time that this event last occurred, in seconds since midnight UTC on January 1, 1970.\nExample: Here's how to set the lifetime count for an event called \"myEvent\":\n\n{ \"myEvent\": { count: 1 } }\n",
									"disabled": true
								},
								{
									"key": "states",
									"value": "",
									"description": "A map of state data to update for the current user. The keys are the state names, and each should have a nested object with at least one of the following attributes:\n\n- count: New lifetime count of this state for the current user.\n\n- countIncrement: Amount to increment the lifetime count of this state.\n\n- firstTime: Time that this state first occurred, in seconds since midnight UTC on January 1, 1970.\n\n- lastTime: Time that this state last occurred, in seconds since midnight UTC on January 1, 1970.\n\nExample: Here's how to set the lifetime count for a state called \"splashPage\":\n\n{ \"splashPage\": { count: 23 } }\n",
									"disabled": true
								},
								{
									"key": "created",
									"value": "",
									"description": "The time at which the user was created, in seconds since midnight UTC on January 1, 1970.\n\n",
									"disabled": true
								},
								{
									"key": "lastActive",
									"value": "",
									"description": "The time at which the user was last active, in seconds since midnight UTC on January 1, 1970.\n\n",
									"disabled": true
								},
								{
									"key": "totalSessions",
									"value": "",
									"description": "The total number of sessions that a user has had in their lifetime.\n\n",
									"disabled": true
								},
								{
									"key": "timeSpentInApp",
									"value": "",
									"description": "The total number of seconds spent in the app in the user's lifetime.\n\n",
									"disabled": true
								},
								{
									"key": "locale",
									"value": "",
									"description": "The current locale the user is in. E.g. en_US.\n\n",
									"disabled": true
								},
								{
									"key": "country",
									"value": "",
									"description": "The country the user is in, specified by ISO 2-letter code. E.g. US for United States. Set to (detect) to detect the country based on the IP address of the user.\n\n",
									"disabled": true
								},
								{
									"key": "region",
									"value": "",
									"description": "The region (state) the user is in. E.g. ca for California. Set to (detect) to detect the region based on the IP address of the user.\n\n",
									"disabled": true
								},
								{
									"key": "city",
									"value": "",
									"description": "The city the user is in. E.g. San Francisco. Set to (detect) to detect the city based on the IP address of the user.\n\n",
									"disabled": true
								},
								{
									"key": "location",
									"value": "",
									"description": "The location (latitude/longitude) of the user. E.g. 37.775,-122.4183. Set to (detect) to detect the location based on the IP address of the user.\n\n",
									"disabled": true
								},
								{
									"key": "locationAccuracyType",
									"value": "",
									"description": "The type of location that is provided (IP, CELL, or GPS). Default: IP.\n\n",
									"disabled": true
								},
								{
									"key": "timezone",
									"value": "",
									"description": "The timezone abbreviation for the user.",
									"disabled": true
								},
								{
									"key": "timezoneOffsetSeconds",
									"value": "",
									"description": "The timezone offset from GMT in seconds.\n\n",
									"disabled": true
								},
								{
									"key": "devices",
									"value": "",
									"description": "A list of device objects associated with this user.\n\n\n",
									"disabled": true
								},
								{
									"key": "devMode",
									"value": "",
									"description": "Whether the user is in Development Mode, i.e. the user associated with the request is a developer and not a user. This is important for reporting purposes. Default: false.\n\n",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-setuserattributes\n\nSets user attributes for the user given by userId and/or deviceId. If the user has an open session, the attributes for the current session will also be updated. Attributes will then propagate on data going forward. User properties not supplied in this method will not be affected. If the user/device does not exist, a new user will be created (see the createDisposition option below)."
					},
					"response": []
				},
				{
					"name": "setDeviceAttributes",
					"request": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=setDeviceAttributes&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&deviceId=",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "setDeviceAttributes",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "REQUIRED"
								},
								{
									"key": "userId",
									"value": "",
									"description": "The current user ID. You can set this to whatever your company uses for user IDs. Leave it blank to use the device ID. For more info, see selecting a user.\n\n",
									"disabled": true
								},
								{
									"key": "createDisposition",
									"value": "",
									"description": "The policy that determines whether users are created by the API. Possible values:\n\n- CreateIfNeeded creates a user with the given IDs if one does not already exist.\n\n- CreateNever requires that the user already exists, otherwise the API action is skipped and a warning will be returned.\nThe default value for this method is CreateIfNeeded.",
									"disabled": true
								},
								{
									"key": "devMode",
									"value": "",
									"description": "Whether the user is in Development Mode, i.e. the user associated with the request is a developer and not a user. This is important for reporting purposes. Default: false.\n\n",
									"disabled": true
								},
								{
									"key": "appVersion",
									"value": "",
									"description": "The version of the app used on this device. E.g. 2.0.1.\n\n",
									"disabled": true
								},
								{
									"key": "systemName",
									"value": "",
									"description": "The name of the OS the current device is running. E.g. iOS.\n\n",
									"disabled": true
								},
								{
									"key": "systemVersion",
									"value": "",
									"description": "The version number of the OS the current device is running. E.g. 6.0.\n\n",
									"disabled": true
								},
								{
									"key": "browserName",
									"value": "",
									"description": "The name of the browser the current device is running. E.g. Chrome.\n\n",
									"disabled": true
								},
								{
									"key": "browserVersion",
									"value": "",
									"description": "The version number of the browser the current device is running. E.g. 17.0.\n\n",
									"disabled": true
								},
								{
									"key": "deviceName",
									"value": "",
									"description": "A human-readable name representing the device.\n\n",
									"disabled": true
								},
								{
									"key": "deviceModel",
									"value": "",
									"description": "The model name of the device. E.g. iPad.\n\n",
									"disabled": true
								},
								{
									"key": "iosPushToken",
									"value": "",
									"description": "The token used for Apple iOS push notifications on this device.\n\n",
									"disabled": true
								},
								{
									"key": "gcmRegistrationId",
									"value": "",
									"description": "The registration ID used for Google Cloud Messaging push notifications on this device.\n\n",
									"disabled": true
								},
								{
									"key": "webPushSubscription",
									"value": "",
									"description": "The JSON-encoded subscription used for web push notifications on this device.\n\n",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-setdeviceattributes\n\nSets attributes for the current device. If the device is shared between multiple users, pass a userId with the deviceId to update the device for each user. (Passing just the deviceId will only update it once). If the device already exists, the attributes will be updated. If the device and user do not exist, a new user will be created along with this device (see the createDisposition option below). See selecting a user for more."
					},
					"response": []
				},
				{
					"name": "setTrafficSourceInfo",
					"request": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=setTrafficSourceInfo&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&userId&trafficSource=",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "setTrafficSourceInfo",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "userId",
									"value": "",
									"description": "REQUIRED AND/OR deviceId"
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "A unique ID for the device targeted by the request. You must provide a deviceId and/or a userId",
									"disabled": true
								},
								{
									"key": "createDisposition",
									"value": "",
									"description": "The policy that determines whether users are created by the API. Possible values:\n\n- CreateIfNeeded creates a user with the given IDs if one does not already exist.\n\n- CreateNever requires that the user already exists, otherwise the API action is skipped and a warning will be returned.\nThe default value for this method is CreateIfNeeded.",
									"disabled": true
								},
								{
									"key": "trafficSource",
									"value": "",
									"description": "REQUIRED: An object of traffic source parameters. See the next rows for description of each.\n"
								},
								{
									"key": "trafficSource.publisherSubPublisher",
									"value": "Not for use. Only for description ---->",
									"description": "Name of the developer used to refer the user. Example: GameDeveloper1.",
									"disabled": true
								},
								{
									"key": "trafficSource.publisherSubSite",
									"value": "Not for use. Only for description ---->",
									"description": "Name of the app or website used to refer the user. Example: MyLittleApp.",
									"disabled": true
								},
								{
									"key": "trafficSource.publisherSubCampaign",
									"value": "Not for use. Only for description ---->",
									"description": "Name of the campaign used to refer the user. Example: US CPI.",
									"disabled": true
								},
								{
									"key": "trafficSource.publisherSubAdGroup",
									"value": "Not for use. Only for description ---->",
									"description": "Name of the ad group used to refer the user. Example: banners.",
									"disabled": true
								},
								{
									"key": "trafficSource.publisherSubAd",
									"value": "Not for use. Only for description ---->",
									"description": "Name of the ad used to refer the user. Example: blue1.",
									"disabled": true
								},
								{
									"key": "time",
									"value": "",
									"description": "The time at which the session started, in seconds since midnight UTC on January 1, 1970. This should be no more than 2 minutes after the session started. If not provided, uses the current time.\n\n",
									"disabled": true
								},
								{
									"key": "devMode",
									"value": "",
									"description": "Whether the user is in Development Mode, i.e. the user associated with the request is a developer and not a user. This is important for reporting purposes. Default: false.\n\n",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-settrafficsourceinfo\n\nSets traffic source information for the current session of a user. If the user/device does not exist, a new user will be created (see the createDisposition option below)."
					},
					"response": []
				},
				{
					"name": "registerDevice",
					"request": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=registerDevice&appId={{testAppKey}}&clientKey={{testDevKey}}&apiVersion={{apiVersion}}&deviceId=&email=",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "registerDevice",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDevKey}}",
									"description": "REQUIRED - Your Development key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "REQUIRED"
								},
								{
									"key": "email",
									"value": "",
									"description": "REQUIRED - The email address corresponding to the Leanplum user account to which the device belongs."
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-registerdevice\n\nRegisters the current device for development. This method requires your development API clientKey."
					},
					"response": []
				},
				{
					"name": "deleteUser",
					"request": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=deleteUser&appId={{testAppKey}}&clientKey={{testDevKey}}&apiVersion={{apiVersion}}&userId=",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "deleteUser",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDevKey}}",
									"description": "REQUIRED - Your Development key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED OR deviceId"
								},
								{
									"key": "userId",
									"value": "",
									"description": "REQUIRED"
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "Required if no userId. The deviceId to delete. Only use this if there is no userId set. Note that deviceId will only delete data from devices where a user has never logged-in. If a logged-in user has been on the device, you must call the deleteUser API with the userId.\n\n",
									"disabled": true
								},
								{
									"key": "fullErasure",
									"value": "",
									"description": "Deletes all session and analytics data for the selected user. This may take up to 15 days to process fully. Defaults to false — should be set to true for GDPR-related deletion requests.\n\n",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-registerdevice\n\nRegisters the current device for development. This method requires your development API clientKey."
					},
					"response": []
				},
				{
					"name": "block",
					"request": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=block&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&userId=",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "block",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "userId",
									"value": "",
									"description": "REQUIRED OR deviceId"
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "The deviceId to block data collection for. Required if no userId.\nA deviceId block will only block data from devices where a user has not logged-in on the device. If a user has logged-in on the device before, you must call the block API with the userId.",
									"disabled": true
								},
								{
									"key": "devMode",
									"value": "",
									"description": "Whether the user is in Development Mode, i.e. the user associated with the request is a developer and not a user. This is important for reporting purposes. Default: false.\n\n",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-block\n\nStops all data collection for a user going forward. block also erases any data previously associated with that user, including all of their attribute and analytics data. The block will take effect as soon as the “success” response is returned. It may take up to 15 days to delete the user’s data completely.\n\nNote that the block call deletes a user's past data, but does not delete the user entirely. This allows you to use the unblock call to resume data collection."
					},
					"response": []
				},
				{
					"name": "unblock",
					"request": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=block&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&userId",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "block",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "userId",
									"value": "",
									"description": "REQUIRED OR deviceId"
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "The deviceId to unblock data collection for. Required if no userId.\nA deviceId block or unblock call will only work for devices where a user has not logged-in on the device. If a user has logged-in on the device before, you must use userId with the block or unblock API calls.",
									"disabled": true
								},
								{
									"key": "devMode",
									"value": "",
									"description": "Whether the user is in Development Mode, i.e. the user associated with the request is a developer and not a user. This is important for reporting purposes. Default: false.",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-unblock\n\nResumes data collection for a specific user, and ends a previous block on data collection. This will not restore any of data that was deleted by the previous block call."
					},
					"response": []
				}
			],
			"description": "https://docs.leanplum.com/v1/reference#user-information-1"
		},
		{
			"name": "Messages",
			"item": [
				{
					"name": "getMessage",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=getMessage&appId={{testAppKey}}&clientKey={{testContentReadOnlyKey}}&apiVersion={{apiVersion}}&id",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "getMessage",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testContentReadOnlyKey}}",
									"description": "REQUIRED - Your Content Read-only key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "id",
									"value": "",
									"description": "REQUIRED - The numeric message ID."
								},
								{
									"key": "includeDrafts",
									"value": "",
									"description": "Include drafts and unpublished changes. Default: false.",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#get_api-action-getmessage\n\nGets information about a message. This method requires your content read-only API clientKey."
					},
					"response": []
				},
				{
					"name": "getMessages",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=getMessages&appId={{testAppKey}}&clientKey={{testContentReadOnlyKey}}&apiVersion={{apiVersion}}",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "getMessages",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testContentReadOnlyKey}}",
									"description": "REQUIRED - Your Content Read-only key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "includeDrafts",
									"value": "",
									"description": "Include drafts and unpublished changes. Default: false.",
									"disabled": true
								},
								{
									"key": "recent",
									"value": "",
									"description": "Only return information about active or recently finished messages. Default: true.",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#get_api-action-getmessages\n\nGets information about all the messages for a given app. This method requires your content read-only API clientKey."
					},
					"response": []
				},
				{
					"name": "getUnsubscribeCategories",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=getUnsubscribeCategories&appId={{testAppKey}}&clientKey={{testContentReadOnlyKey}}&apiVersion={{apiVersion}}",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "getUnsubscribeCategories",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testContentReadOnlyKey}}",
									"description": "REQUIRED - Your Content Read-only key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#get_api-action-getunsubscribecategories\n\nGets information about all the email subscription categories for a given app. This method requires your content read-only API clientKey."
					},
					"response": []
				},
				{
					"name": "sendMessage",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": []
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=sendMessage&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&userId&messageId",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "sendMessage",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "userId",
									"value": "",
									"description": "REQUIRED AND/OR deviceId"
								},
								{
									"key": "messageId",
									"value": "",
									"description": "REQUIRED - The ID of the message, found in the URL when viewing a message (e.g. www.leanplum.com/dashboard#/{APP_ID}/messaging/{MESSAGE_ID}."
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "A unique ID for the device targeted by the request. You must provide a deviceId and/or a userId",
									"disabled": true
								},
								{
									"key": "values",
									"value": "",
									"description": "A JSON object of key-value pairs to override template variables used in the message. See below for example.",
									"disabled": true
								},
								{
									"key": "force",
									"value": "",
									"description": "Whether to send the message regardless of whether the user meets the targeting criteria. Default: false.",
									"disabled": true
								},
								{
									"key": "devMode",
									"value": "",
									"description": "Whether the user is in Development Mode, i.e. the user associated with the request is a developer and not a user. This is important for reporting purposes. Default: false.",
									"disabled": true
								},
								{
									"key": "createDisposition",
									"value": "",
									"description": "The policy that determines whether users are created by the API. Possible values:\n\n- CreateIfNeeded creates a user with the given IDs if one does not already exist.\n- CreateNever requires that the user already exists, otherwise the API action is skipped and a warning will be returned.\n\nThe default value for this method is CreateNever.",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-sendmessage\n\nSends a message (typically a push notification) to one device or user. You must provide a deviceId and/or a userId. If deviceId is provided, the message will be sent to the corresponding device only; if only userId is provided, the message will be sent to all devices of the user with specified userId. If the user/device does not exist, the API request is skipped and a warning will be returned. You can modify this behavior with the createDisposition option (see below).\n\nMessages are queued, so they will be sent after the request completes.\n\nThis method requires your production API clientKey."
					},
					"response": []
				},
				{
					"name": "addAndroidNotificationChannel",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": []
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=addAndroidNotificationChannel&appId={{testAppKey}}&clientKey={{testDevKey}}&apiVersion={{apiVersion}}&id&name&importance",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "addAndroidNotificationChannel",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDevKey}}",
									"description": "REQUIRED - Your Development key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "id",
									"value": "",
									"description": "REQUIRED - The channel ID. Also used when updating existing channels.\n\n"
								},
								{
									"key": "name",
									"value": "",
									"description": "REQUIRED - The human-readable name that will appear on the Leanplum dashboard (e.g. Promotions, Transactional, etc.). Should be distinguishable from all other channel names."
								},
								{
									"key": "importance",
									"value": "",
									"description": "REQUIRED - Sets the importance of all notifications in the channel, which determines how much the channel can interrupt the user. The default is 3: notifications will show everywhere, make noise, but does not visually intrude. "
								},
								{
									"key": "description",
									"value": "",
									"description": "The user-visible description of this channel.",
									"disabled": true
								},
								{
									"key": "groupId",
									"value": "",
									"description": "https://developer.android.com/reference/android/app/NotificationChannel#setGroup(java.lang.String)",
									"disabled": true
								},
								{
									"key": "enableLights",
									"value": "",
									"description": "Whether to enable lights.",
									"disabled": true
								},
								{
									"key": "lightColor",
									"value": "",
									"description": "https://developer.android.com/reference/android/graphics/Color.html",
									"disabled": true
								},
								{
									"key": "enableVibration",
									"value": "",
									"description": "Whether to enable vibration.",
									"disabled": true
								},
								{
									"key": "vibrationPattern",
									"value": "",
									"description": "https://developer.android.com/reference/android/app/NotificationChannel.html#setVibrationPattern(long[])",
									"disabled": true
								},
								{
									"key": "lockscreenVisibility",
									"value": "",
									"description": "https://developer.android.com/reference/android/app/Notification.html#VISIBILITY_PRIVATE",
									"disabled": true
								},
								{
									"key": "bypassDnd",
									"value": "",
									"description": "https://developer.android.com/reference/android/app/NotificationChannel.html#setBypassDnd(boolean)",
									"disabled": true
								},
								{
									"key": "showBadge",
									"value": "",
									"description": "Whether to show badge.",
									"disabled": true
								},
								{
									"key": "sound",
									"value": "",
									"description": "URI of sound file, which must be stored locally on the device. See Andoroid Docs here.",
									"disabled": true
								},
								{
									"key": "default",
									"value": "",
									"description": "This is a Leanplum parameter, indicating whether this channel should be the default channel referenced in the dashboard. Leanplum automatically defines the first channel you create as the “default” channel, preventing the dashboard user from having to manually choose a channel for every campaign.",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-addandroidnotificationchannel\n\nCreates new notification channels and updates existing ones. Updateable parameters include channel name, description, and default. This method requires your development API clientKey.\n\nLeanplum will not interfere with any channel defined directly in your app code or by other mobile marketing providers. For instance, if your app has both a “Promotions” channel and a “Transactional” channel, but your marketer should only have access to Promotions, then you should only send that channel to Leanplum."
					},
					"response": []
				},
				{
					"name": "getAndroidNotificationChannels",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=getAndroidNotificationChannels&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "getAndroidNotificationChannels",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#get_api-action-getandroidnotificationchannels\n\nGets all Android notification channels defined in Leanplum and their associated settings. No additional arguments are required. This method requires your production API clientKey.\n\nThis method requires your production API clientKey."
					},
					"response": []
				},
				{
					"name": "deleteAndroidNotificationChannel",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": []
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=deleteAndroidNotificationChannel&appId={{testAppKey}}&clientKey={{testDevKey}}&apiVersion={{apiVersion}}&channelId",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "deleteAndroidNotificationChannel",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDevKey}}",
									"description": "REQUIRED - Your Development key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "channelId",
									"value": "",
									"description": "REQUIRED - The ID of the channel you want to delete permanently. Note - this is the same as the id parameter in the addAndroidNotificationChannel method."
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-deleteandroidnotificationchannel\n\nPermanently removes an Android notification channel from Leanplum. This method requires your development API clientKey.\n\nNote — You cannot delete the channel that is defined as default (unless it is the only channel). To delete the default channel, mark another channel as default first."
					},
					"response": []
				},
				{
					"name": "startCampaign",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "accept",
								"value": "application/json"
							},
							{
								"key": "content-type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"appId\": {{testAppKey}},\n    \"clientKey\": {{testDevKey}},\n    \"apiVersion\": \"1.0.6\",\n    \"userId\": \"qa.56026\",\n    \"devMode\": false,\n    \"createDisposition\": \"CreateNever\",\n    \"campaignId\": \"5354289082466304\"\n}"
						},
						"url": {
							"raw": "https://api.leanplum.com/api?action=startCampaign",
							"protocol": "https",
							"host": [
								"api",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "startCampaign"
								}
							]
						}
					},
					"response": []
				}
			],
			"description": "Use the following API methods to get messages, unsubscribe categories, Android notification channels, and send messages.\n\n"
		},
		{
			"name": "A/B Tests",
			"item": [
				{
					"name": "getAbTest",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=getAbTest&appId={{testAppKey}}&clientKey={{testContentReadOnlyKey}}&apiVersion={{apiVersion}}",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "getAbTest",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testContentReadOnlyKey}}",
									"description": "REQUIRED - Your Content Read-only key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "id",
									"value": "",
									"description": "REQUIRED - The numeric A/B test ID.",
									"disabled": true
								},
								{
									"key": "includeDrafts",
									"value": "",
									"description": "Include drafts and unpublished changes. Default: false.\n\n",
									"disabled": true
								}
							]
						},
						"description": "https://www.leanplum.com/api?action=getAbTest\n\nGets information about A/B tests."
					},
					"response": []
				},
				{
					"name": "getAbTests",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=getAbTests&appId={{testAppKey}}&clientKey={{testContentReadOnlyKey}}&apiVersion={{apiVersion}}",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "getAbTests",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testContentReadOnlyKey}}",
									"description": "REQUIRED - Your Content Read-only key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "includeDrafts",
									"value": "",
									"description": "Include drafts and unpublished changes. Default: false.\n\n",
									"disabled": true
								},
								{
									"key": "recent",
									"value": "",
									"description": "Only return information about active or recently finished A/B tests. Default: true.\n\n",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#get_api-action-getabtests\n\nGets information about A/B tests."
					},
					"response": []
				},
				{
					"name": "getVariant",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=getVariant&appId={{testAppKey}}&clientKey={{testContentReadOnlyKey}}&apiVersion={{apiVersion}}&id",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "getVariant",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testContentReadOnlyKey}}",
									"description": "REQUIRED - Your Content Read-only key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "id",
									"value": "",
									"description": "REQUIRED - The numeric variant ID."
								},
								{
									"key": "includeDrafts",
									"value": "",
									"description": "Include drafts and unpublished changes. Default: false.\n\n",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#get_api-action-getvariant\n\nGets information about an A/B test variant."
					},
					"response": []
				}
			],
			"description": "https://docs.leanplum.com/v1/reference#ab-tests"
		},
		{
			"name": "Export Data",
			"item": [
				{
					"name": "addPostback",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=addPostback&appId={{testAppKey}}&clientKey={{testDataExportKey}}&apiVersion={{apiVersion}}&type=&postbackUrl=",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "addPostback",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDataExportKey}}",
									"description": "REQUIRED - Your Data Export Key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "type",
									"value": "",
									"description": "REQUIRED - The type of postback to add. The only value allowed is messageEvents, which will be triggered on message events for push notifications, in-app messages, and emails. See below for a list of all the message events that trigger postbacks."
								},
								{
									"key": "channels",
									"value": "",
									"description": "The messaging channels that will trigger postbacks — possible values include Push Notification, Email, and In-app Message. For example, this ...&channels=[Push Notification, In-app Message]... would activate postbacks for push notification and in-app message events. If no channels are set, all three channels will trigger postbacks by default.\n\nSee below for a list of all the events that will trigger postbacks (by channel).\n\n-  Push Notification — Sent, Open, Held Back\n-   Email — Sent, Deferred, Delivered, Bounce, Open, Click, Marked as spam, Unsubscribe, Held Back\n-   In-app Message (events by template):\n-   All templates — View, held back.\n-  Center Popup, Confirm, Interstitial — Accept\n-   Rich interstitial — Select Button 1, Select Button 2\n-  Satisfaction Survey — Submit\n-  Banner — Select\nNote that you cannot specify which specific events trigger postbacks, however, you can ignore certain events on your end if you prefer.",
									"disabled": true
								},
								{
									"key": "postbackUrl",
									"value": "",
									"description": "REQUIRED - The URL template to post after the trigger occurs. The template uses the same format as templated values on the dashboard. Possible values (https://docs.leanplum.com/v1/reference#post_api-action-addpostback)."
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-addpostback\n\nAdds a postback rule to be triggered on incoming data. The maximum number of postbacks allowed is three per app. This method requires your data export API clientKey.\nNote — We've updated our postbacks feature! See here for details on what's new."
					},
					"response": []
				},
				{
					"name": "listPostbacks",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=listPostbacks&appId={{testAppKey}}&clientKey={{testDataExportKey}}&apiVersion={{apiVersion}}",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "listPostbacks",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDataExportKey}}",
									"description": "REQUIRED - Your Data Export Key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-addpostback\n\nList current postback rules. This method requires your data export API clientKey."
					},
					"response": []
				},
				{
					"name": "deletePostback",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=deletePostback&appId={{testAppKey}}&clientKey={{testDataExportKey}}&apiVersion={{apiVersion}}&postbackId=",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "deletePostback",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDataExportKey}}",
									"description": "REQUIRED - Your Data Export Key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "postbackId",
									"value": "",
									"description": "REQUIRED - The ID of the postback to delete."
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-deletepostback\n\nDeletes a particular postback. This method requires your data export API clientKey."
					},
					"response": []
				},
				{
					"name": "exportData",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=exportData&appId={{testAppKey}}&clientKey={{testDataExportKey}}&apiVersion={{apiVersion}}&startDate=",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "exportData",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDataExportKey}}",
									"description": "REQUIRED - Your Data Export Key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "startDate",
									"value": "",
									"description": "REQUIRED - First date in range to include in PDT/PST (format: YYYYmmdd). Example: 20140223."
								},
								{
									"key": "exportFormat",
									"value": "",
									"description": "The format to export data. Can be either json or csv. Default: json.",
									"disabled": true
								},
								{
									"key": "endDate",
									"value": "",
									"description": "Last date in range to include in PDT/PST (format: YYYYmmdd). Defaults to startDate if not provided. Example: 20140223.\n\n",
									"disabled": true
								},
								{
									"key": "startTime",
									"value": "",
									"description": "First time (when data became available) to include (seconds since midnight UTC on January 1, 1970). If not provided, accepts all times before endTime, or all times if endTime is also not provided. The main use is to set this to the last time you exported data to only get the new data since your last export.\n\n",
									"disabled": true
								},
								{
									"key": "endTime",
									"value": "",
									"description": "Last time (when data became available) to include (seconds since midnight UTC on January 1, 1970). If not provided, accepts all times after startTime, or all times if startTime is also not provided.\n\n",
									"disabled": true
								},
								{
									"key": "callbackUrl",
									"value": "",
									"description": "URL to POST a response to when the export completes. The response is the response format of getExportResults.\n\n",
									"disabled": true
								},
								{
									"key": "s3BucketName",
									"value": "",
									"description": "The name of an AWS S3 bucket to copy exported files to.\n\n",
									"disabled": true
								},
								{
									"key": "s3AccessId",
									"value": "",
									"description": "The AWS Access ID used to authenticate to S3. Required if s3BucketName is set.\n\n",
									"disabled": true
								},
								{
									"key": "s3AccessKey",
									"value": "",
									"description": "The AWS Secret Access Key used to authenticate to S3. Required if s3BucketName is set.\n\n",
									"disabled": true
								},
								{
									"key": "s3ObjectPrefix",
									"value": "",
									"description": "An optional prefix of files to write to S3. Example: dirname/ to write files to a directory within the S3 bucket.\n\n",
									"disabled": true
								},
								{
									"key": "compressData",
									"value": "",
									"description": "An option to compress the data. Only works when uploading to S3. If set to true, the files will be compressed using gzip before being uploaded.\n\n",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#get_api-action-exportdata\n\nExports raw data to downloadable files. Data is split into roughly 256 MB files, and is not necessarily ordered. Exports can be made in JSON or CSV format. For JSON format, each file contains 1 line per session, with each session JSON-encoded. For CSV format, data is split into separate files for sessions, states, events, event parameters, and user attributes. Export files are automatically deleted 24 hours after export occurs. Data becomes available to export every 2 hours, and only for complete sessions. You cannot export data that has become available more than 60 days ago. You may only export data 24 times per day. Exports with invalid arguments do not count towards this limit.\n\nThis method requires your data export API clientKey.\n\nUse getExportResults with the returned jobId to get the results."
					},
					"response": []
				},
				{
					"name": "exportReport",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=exportReport&appId={{testAppKey}}&clientKey={{testDataExportKey}}&apiVersion={{apiVersion}}&startDate=&dataType=&dataType=",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "exportReport",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDataExportKey}}",
									"description": "REQUIRED - Your Data Export Key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "startDate",
									"value": "",
									"description": "REQUIRED - First date in range to include in PDT/PST (format: YYYYmmdd). Example: 20140223."
								},
								{
									"key": "dataType",
									"value": "",
									"description": "REQUIRED - The type of the id provided. It can be either:\n\nUserActivity for general statistics about your app\nAbTestResults for stats about an A/B test\nMessageResults for stats about a message, or\nBookmarkedReport for stats about a bookmarked report.\nIf you choose AbTestResults, MessageResults, or BookmarkedReport, you must also supply the corresponding abTestId, messageId, or bookmarkName."
								},
								{
									"key": "endDate",
									"value": "",
									"description": "Last date in range to include in PDT/PST (format: YYYYmmdd). Defaults to startDate if not provided. Example: 20150708.\n\n",
									"disabled": true
								},
								{
									"key": "abTestId",
									"value": "",
									"description": "Supply if any only if dataType is set to AbTestResults.\n\n",
									"disabled": true
								},
								{
									"key": "messageId",
									"value": "",
									"description": "Supply if and only if the dataType is set to MessageResults.\n\n",
									"disabled": true
								},
								{
									"key": "bookmarkName",
									"value": "",
									"description": "Supply if and only if the dataType is set to BookmarkedReport. This is the name of the report, as it appears in your Analytics tab.\n\n",
									"disabled": true
								},
								{
									"key": "eventNames",
									"value": "",
									"description": "A JSON-encoded array containing names of the events to be included in the report. Example: [\"Add to cart\", \"Purchase\"]\n\n",
									"disabled": true
								},
								{
									"key": "dataType",
									"value": ""
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#get_api-action-exportreport\n\nExports statistics for an A/B test, message, bookmarked report, or user activity in your app (as in the Analytics tab of the dashboard) over specified period of time. Report data becomes available to export every 2 hours, and only for complete sessions. You may only export report data 100 times per day per app. Exports with invalid arguments do not count towards the limit.\n\nThis method requires your data export API clientKey.\n\nUse getExportResults with the returned jobId to get the results."
					},
					"response": []
				},
				{
					"name": "exportUser",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=exportUser&appId={{testAppKey}}&clientKey={{testDataExportKey}}&apiVersion={{apiVersion}}&userId=",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "exportUser",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDataExportKey}}",
									"description": "REQUIRED - Your Data Export Key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "userId",
									"value": "",
									"description": "REQUIRED AND/OR deviceId"
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "A unique ID for the device targeted by the request. You must provide a deviceId and/or a userId",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#get_api-action-exportreport\n\nExports statistics for an A/B test, message, bookmarked report, or user activity in your app (as in the Analytics tab of the dashboard) over specified period of time. Report data becomes available to export every 2 hours, and only for complete sessions. You may only export report data 100 times per day per app. Exports with invalid arguments do not count towards the limit.\n\nThis method requires your data export API clientKey.\n\nUse getExportResults with the returned jobId to get the results."
					},
					"response": []
				},
				{
					"name": "exportUsers",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=exportUsers&appId={{testAppKey}}&clientKey={{testDataExportKey}}&apiVersion={{apiVersion}}&segment=",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "exportUsers",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDataExportKey}}",
									"description": "REQUIRED - Your Data Export Key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "segment",
									"value": "",
									"description": "Limit export to only users that match the segment. The syntax is identical to that produced by the \"Insert Value\" feature on the dashboard. Examples: Country = \"US\", {Country = \"US\"} and {App version = 1}.\n\n"
								},
								{
									"key": "userAttribute",
									"value": "",
									"description": "Export users with a specific attribute set. The export results will include the userId and attribute value for each user. For example, userAttribute email would export all email users along with their email addresses.",
									"disabled": true
								},
								{
									"key": "abTestId",
									"value": "",
									"description": "Limit export to only users that are in the given A/B test. The output will include the variant ID and name for each user.\n\n",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#get_api-action-exportusers\n\n\nExports multiple user IDs. This may be executed up to 10 times successfully per day. This method requires your data export API clientKey.\n\nUse getExportResults with the returned jobId to get the results."
					},
					"response": [
						{
							"name": "exportUsers Example",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "https://www.leanplum.com/api?action=exportUsers&appId={{testAppKey}}&clientKey={{testDataExportKey}}&apiVersion={{apiVersion}}&segment=[{{\"Source\" = \"Voting Fallback\"}},{Occurrences of \"S15 Email Trigger (FB Sign In) Sent\" = 0},{Occurrences of \"S15 Email Trigger (Sign In) Sent\" = 0},{Occurrences of \"S15 Email Trigger (FB Sign Up) Sent\" = 0},{Occurrences of \"S15 Email Trigger (FB Sign In) Sent\" = 0}]",
									"protocol": "https",
									"host": [
										"www",
										"leanplum",
										"com"
									],
									"path": [
										"api"
									],
									"query": [
										{
											"key": "action",
											"value": "exportUsers",
											"description": "REQUIRED"
										},
										{
											"key": "appId",
											"value": "{{testAppKey}}",
											"description": "REQUIRED"
										},
										{
											"key": "clientKey",
											"value": "{{testDataExportKey}}",
											"description": "REQUIRED - Your Data Export Key"
										},
										{
											"key": "apiVersion",
											"value": "{{apiVersion}}",
											"description": "REQUIRED"
										},
										{
											"key": "segment",
											"value": "[{{\"Source\" = \"Voting Fallback\"}},{Occurrences of \"S15 Email Trigger (FB Sign In) Sent\" = 0},{Occurrences of \"S15 Email Trigger (Sign In) Sent\" = 0},{Occurrences of \"S15 Email Trigger (FB Sign Up) Sent\" = 0},{Occurrences of \"S15 Email Trigger (FB Sign In) Sent\" = 0}]",
											"description": "Limit export to only users that match the segment. The syntax is identical to that produced by the \"Insert Value\" feature on the dashboard. Examples: Country = \"US\", {Country = \"US\"} and {App version = 1}.\n\n"
										},
										{
											"key": "userAttribute",
											"value": "",
											"description": "Export users with a specific attribute set. The export results will include the userId and attribute value for each user. For example, userAttribute email would export all email users along with their email addresses.",
											"disabled": true
										},
										{
											"key": "abTestId",
											"value": "",
											"description": "Limit export to only users that are in the given A/B test. The output will include the variant ID and name for each user.\n\n",
											"disabled": true
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Access-Control-Allow-Origin",
									"value": "*"
								},
								{
									"key": "Content-Type",
									"value": "application/json;charset=utf-8"
								},
								{
									"key": "X-Cloud-Trace-Context",
									"value": "5c5e94d0f20832d36a2c5b3d4ca6d7a3"
								},
								{
									"key": "Date",
									"value": "Fri, 15 Feb 2019 10:53:47 GMT"
								},
								{
									"key": "Server",
									"value": "Google Frontend"
								},
								{
									"key": "Content-Length",
									"value": "91"
								}
							],
							"cookie": [],
							"body": "{\n    \"response\": [\n        {\n            \"jobId\": \"export_users_4741543583416320_5839356911884151920\",\n            \"success\": true\n        }\n    ]\n}"
						}
					]
				},
				{
					"name": "getExportResults",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=getExportResults&appId={{testAppKey}}&clientKey={{testDataExportKey}}&apiVersion={{apiVersion}}&jobId=",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "getExportResults",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDataExportKey}}",
									"description": "REQUIRED - Your Data Export Key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "jobId",
									"value": "",
									"description": "REQUIRED - The export job ID.\n\n"
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#get_api-action-getexportresults\n\n\nRetrieves the result of an export job generated by: exportData, exportReport, and exportUsers. This method requires your data export API clientKey."
					},
					"response": []
				}
			],
			"description": "Use these API methods to work with postbacks, data exports, reports, and user info.\n\n"
		},
		{
			"name": "Import Data",
			"item": [
				{
					"name": "multi | CSV upload",
					"request": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=multi&appId={{testAppKey}}&clientKey={{testDevKey}}&apiVersion={{apiVersion}}&createJob=true&gcsBucket={{gcsBucket}}&file&defaultAction=setUserAttributes",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "multi",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDevKey}}",
									"description": "REQUIRED - Your Development key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "createJob",
									"value": "true",
									"description": "REQUIRED - Whether to create an asynchronous job to import the data. This is required to be set to true."
								},
								{
									"key": "gcsBucket",
									"value": "{{gcsBucket}}",
									"description": "REQUIRED - The name of the Google Cloud Storage bucket that contains the CSV file to be imported."
								},
								{
									"key": "file",
									"value": "",
									"description": "REQUIRED - The Google Cloud Storage object name of the CSV file. The object must be made public to be read by Leanplum's servers, so the filename should be set to something obscure."
								},
								{
									"key": "defaultAction",
									"value": "setUserAttributes",
									"description": "The default API action to apply across all rows in the CSV file. For example, if the file contains all user attributes to be imported, defaultAction should be set to setUserAttributes.\n\n"
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-multi\n\nImports a (potentially large) CSV file with API actions to be executed. The file will be imported asynchronously as a job. Use getMultiResults to get the job status."
					},
					"response": []
				},
				{
					"name": "multi | CSV upload no file",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "text/csv"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "userId,userAttributes.testArray\nGosho,\"[tamagochi,asdasd,qwoiejqoiwje,123123,asdkj]\"\nDragan,\"[tamagochi,asdasd,qwoiejqoiwje,123123,asdkj]\"\nDragan10,\"[tamagochi,asdasd,qwoiejqoiwje,123123,asdkj]\""
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=multi&appId={{testAppKey}}&clientKey={{testDevKey}}&apiVersion={{apiVersion}}&defaultAction=setUserAttributes",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "multi",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDevKey}}",
									"description": "REQUIRED - Your Development key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "defaultAction",
									"value": "setUserAttributes",
									"description": "REQUIRED - The default API action to apply across all rows in the CSV file. For example, if the file contains all user attributes to be imported, defaultAction should be set to setUserAttributes.\n\n"
								}
							]
						},
						"description": "Upload CSV by typing the raw text straight in to the Body of the request. No file uploads needed."
					},
					"response": []
				},
				{
					"name": "multi (JSON)",
					"request": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=multi&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&time=&data=",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "multi",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "time",
									"value": "",
									"description": "REQUIRED - The time at which the request was issued (UNIX time). This is used to resolve the time difference between Leanplum and the API caller when computing the times of events."
								},
								{
									"key": "data",
									"value": "",
									"description": "REQUIRED - A JSON-encoded list of API methods to execute. All methods must be for the same app referred to by the appId parameter. Each data object must include the required arguments for its API action."
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#multi-json\n\nBatches separate API actions. Each nested object in the data array is an individual API action, and must include the required parameters for that method. You'll need to check each nested API method's documentation for info on required parameters and options."
					},
					"response": []
				},
				{
					"name": "getMultiResults",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=getMultiResults&appId={{testAppKey}}&clientKey={{testDevKey}}&apiVersion={{apiVersion}}&jobId=",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "getMultiResults",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDevKey}}",
									"description": "REQUIRED - Your Development key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "jobId",
									"value": "",
									"description": "REQUIRED - The ID of the job to query. The job ID is returned by multi."
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#get_api-action-getmultiresults\n\nGets the status of a multi import job."
					},
					"response": []
				}
			]
		},
		{
			"name": "Files and Variables",
			"item": [
				{
					"name": "getVars",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=getVars&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "getVars",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "createDisposition",
									"value": "",
									"description": "The policy that determines whether users are created by the API. Possible values:\n\n- CreateIfNeeded creates a user with the given IDs if one does not already exist.\n- CreateNever requires that the user already exists, otherwise the API action is skipped and a warning will be returned.\n\nThe default value for this method is CreateNever.",
									"disabled": true
								},
								{
									"key": "userId",
									"value": "",
									"description": "The current user ID. You can set this to an email address or whatever you use at your company for user IDs. Leave it blank to use the device ID. If deviceId and userId are not specified, the default variables will be retrieved for the app. Developer mode permission is required.",
									"disabled": true
								},
								{
									"key": "deviceId",
									"value": "",
									"description": "The device ID for which to retrieve the variables. If deviceId and userId are not specified, the default variables will be retrieved for the app. Developer mode permission is required.",
									"disabled": true
								},
								{
									"key": "devMode",
									"value": "",
									"description": "Whether the user is in Development Mode, i.e. the user associated with the request is a developer and not a user. This is important for reporting purposes. Default: false.",
									"disabled": true
								},
								{
									"key": "includeDefaults",
									"value": "",
									"description": "Whether to include default ('defaults in code') values in output. Default: true.",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#get_api-action-getvars\n\nGets the variable diff for the app or current device. If the user/device does not exist, the API request is skipped and a warning will be returned. You can modify this behavior with the createDisposition option (see below). If neither userId or deviceId are provided, it will return the default variables that would be seen by a blank user."
					},
					"response": []
				},
				{
					"name": "setVars",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": []
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=setVars&appId={{testAppKey}}&clientKey={{testDevKey}}&apiVersion={{apiVersion}}&vars",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "setVars",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDevKey}}",
									"description": "REQUIRED - Your Development key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "vars",
									"value": "",
									"description": "REQUIRED - A JSON-encoded representation of the variables. Variable values can be strings, numbers, booleans, arrays, or objects.\n\nExample: { \"message\": \"hello world!\" }"
								},
								{
									"key": "deviceId",
									"value": "",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-setvars\n\nSets the list of variables to be used in the Leanplum content management system."
					},
					"response": []
				},
				{
					"name": "deleteVars",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": []
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=setVars&appId={{testAppKey}}&clientKey={{testDevKey}}&apiVersion={{apiVersion}}&vars",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "setVars",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDevKey}}",
									"description": "REQUIRED - Your Development key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "vars",
									"value": "",
									"description": "REQUIRED - A list of variables to be removed."
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-deletevars\n\nDeletes the list of variables from the Leanplum content management system."
					},
					"response": []
				},
				{
					"name": "downloadFile",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://www.leanplum.com/api?action=setVars&appId={{testAppKey}}&clientKey={{testProdKey}}&apiVersion={{apiVersion}}&filename",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "setVars",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testProdKey}}",
									"description": "REQUIRED - Your Production key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "filename",
									"value": "",
									"description": "REQUIRED - The name of the file to download."
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#get_api-action-downloadfile\n\nRedirects to a file uploaded to the Leanplum dashboard (the File tab). Must be the only API method in a batch."
					},
					"response": []
				},
				{
					"name": "uploadFile",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": []
						},
						"url": {
							"raw": "https://www.leanplum.com/api?action=uploadFile&appId={{testAppKey}}&clientKey={{testDevKey}}&apiVersion={{apiVersion}}&data&file{k}",
							"protocol": "https",
							"host": [
								"www",
								"leanplum",
								"com"
							],
							"path": [
								"api"
							],
							"query": [
								{
									"key": "action",
									"value": "uploadFile",
									"description": "REQUIRED"
								},
								{
									"key": "appId",
									"value": "{{testAppKey}}",
									"description": "REQUIRED"
								},
								{
									"key": "clientKey",
									"value": "{{testDevKey}}",
									"description": "REQUIRED - Your Development key"
								},
								{
									"key": "apiVersion",
									"value": "{{apiVersion}}",
									"description": "REQUIRED"
								},
								{
									"key": "data",
									"value": "",
									"description": "REQUIRED - A JSON array-encoded string representing each file's metadata. Used when uploading multiple files at once."
								},
								{
									"key": "file{k}",
									"value": "",
									"description": "REQUIRED - Supply if data is also supplied. The file data to be uploaded for file \"k\", where \"k\" is based on the order of the metadata in data[] (0-based). The first metadata item in data[] will be matched with file0, the second with file1, etc. There should be one file uploaded per entry in data."
								},
								{
									"key": "filename",
									"value": "",
									"description": "Supply if and only if data is not supplied. The filename of the file being uploaded relative to the application.",
									"disabled": true
								},
								{
									"key": "file",
									"value": "",
									"description": "Supply if and only if data is not supplied. The file data to be uploaded.",
									"disabled": true
								},
								{
									"key": "size",
									"value": "",
									"description": "Supply if and only if data is not supplied. The size of the file in bytes.",
									"disabled": true
								},
								{
									"key": "hash",
									"value": "",
									"description": "Supply if and only if data is not supplied. The MD5 hash representing the file. Used to detect changes to files in the SDK in Development Mode.",
									"disabled": true
								}
							]
						},
						"description": "https://docs.leanplum.com/v1/reference#post_api-action-uploadfile\n\nUploads up to 16 files or 50 MB at a time to use in the File picker and File tab of the Leanlum dashboard."
					},
					"response": []
				}
			],
			"description": "https://docs.leanplum.com/v1/reference#files-and-variables"
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "apiVersion",
			"value": "1.0.6"
		},
		{
			"key": "testProdKey",
			"value": "prod_AgROlG2haBQBiO3H1KWFpqSPmFrf6XSjRyoBXPW2fV0"
		},
		{
			"key": "testAppKey",
			"value": "app_V5AZKGCgtUGIppbYYMG07dplAvlpSqqGYYiZIJxpW4Q"
		},
		{
			"key": "testContentReadOnlyKey",
			"value": "cro_05hI67ujYJDmbD7x44YWFcfSXXsDU69ZFRih6UvCjDU"
		},
		{
			"key": "testDevKey",
			"value": "dev_vnBBHmW2c3Va7bMvDzTWRMGpIMaZivZ7aaxoTcgSIcU",
			"type": "string"
		}
	]
}
```

</details>

2. In your Postman workspace, click **Import** and upload the saved JSON file. 

Once the collection has been added, you may need to update variables like ``testAppKey`` to reflect the environment and app you are trying to use. You can find the keys in **Leanplum > Development > App Settings** of the [Leanplum API Copy](https://www.leanplum.com/dashboard2/5098074856816640/settings/api-keys).

Variables can be updated in the parent group ``Leanplum API Copy``.

For more information on using Postman with Leanplum's API, see [How to setup Leanplum's API collection in Postman
](https://support.leanplum.com/hc/en-us/articles/4404473240596-How-to-setup-Leanplum-s-API-collection-in-Postman) ::upper-right-arrow::

## Sending messages using only the Leanplum API

Instead of using Postman, you can use Leanplum's [web page to send requests](https://docs.leanplum.com/reference/api-introduction) that also lists descriptions for the different possible requests. 

:::warning

Leanplum's web page to send requests does not allow you to save values. To save values, we recommend using [Postman](#postman) to send messages manually.

:::

Once you have [created the message](#creating-messages) in Leanplum's dashboard, use the API call ``sendMessage`` to trigger the message. This will send the message to the device specified. Make sure to edit the ``userId`` and ``messageId`` params to the desired values. 

The response will let you know if you have successfully sent the message.

If you created a campaign that is available for Manual Delivery, you can use ``startCampaign`` to trigger the messages. If you use ``startCampaign``, the variables will be in the **Body** section instead of **Params**.