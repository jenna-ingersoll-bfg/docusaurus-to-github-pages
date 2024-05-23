# Security & Privacy Standards (SANDBOX TESTING PAGE)

# 3rd Party Version Updates

The BFG SDK depends on a number of external 3rd party SDKs to function. Many of these, listed below, are integrated directly into the BFG SDK and you do not need to integrate them separately.

:::info 

In certain circumstances, you may decide to use a different version of a 3rd party library than the one included with the BFG SDK. Note that for a successful integration, you are responsible for ensuring that the versions of these external APIs are compatible with the version of the BFG SDK you are using.

:::

## Unity SDK Compatibility Chart 

<sup>NOTE: 3rd party services in <strong>bold</strong> were updated in the corresponding Big Fish SDK release.</sup>

<table>
  <tr>
    <th><strong>BFG SDK Version</strong></th>
    <th><strong>3rd Party SDK Version (iOS)</strong></th>
    <th><strong>3rd Party SDK Version (Android)</strong></th>
  </tr>
  <tr>
    <td>

**10.8.0**
21 May 2024

Required Unity: v2018.4
Minimum iOS: v12
Minimum Android: v23
Target Android: v34
    </td>
    <td>

- AppsFlyer v6.10.0
- **Facebook v17.0.0**
- Firebase
  - Crashlytics v9.3.0
  - Analytics v9.3.0
- Rave v3.9.11
- Zendesk
  - CommonUISDK v1.1.0
  - ProviderSDK v4.0.0
  - ZendeskCoreSDK v2.2.1
  - ZendeskSDK v7.0.0

    </td>
    <td>

- AppsFlyer v6.4.2
- Facebook v16.2.0
- Firebase
  - Crashlytics v11.6.0
  - Analytics v11.6.0
- **Google Billing v6.2.0**
- Rave v4.2.2
- Zendesk v5.1.0

    </td>
  </tr>
</table>
