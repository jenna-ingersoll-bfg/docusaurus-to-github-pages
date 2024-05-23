# Security & Privacy Standards (SANDBOX TESTING PAGE)

# 3rd Party Version Updates

<style> {` th, td { vertical-align: top; } `}</style>
<style> {` table { display: table; width: 100%; } `}</style>

The BFG SDK depends on a number of external 3rd party SDKs to function. Many of these, listed below, are integrated directly into the BFG SDK and you do not need to integrate them separately.

:::info 

In certain circumstances, you may decide to use a different version of a 3rd party library than the one included with the BFG SDK. Note that for a successful integration, you are responsible for ensuring that the versions of these external APIs are compatible with the version of the BFG SDK you are using.

:::

## Unity SDK Compatibility Chart 

<sup>NOTE: 3rd party services in <strong>bold</strong> were updated in the corresponding Big Fish SDK release.</sup>

<table>
  <thead>
    <tr>
      <th><strong>BFG SDK Version</strong></th>
      <th><strong>3rd Party SDK<br />Version (iOS)</strong></th>
      <th><strong>3rd Party SDK<br />Version (Android)</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>

**10.8.0**<br />
21 May 2024

Required Unity: v2018.4<br />
Minimum iOS: v12<br />
Minimum Android: v23<br />
Target Android: v34
      </td>
      <td>
        <ul>
          <li>AppsFlyer v6.10.0</li>
          <li>**Facebook v17.0.0**</li>
          <li>Firebase</li>
          <ul>
            <li>Crashlytics v9.3.0</li>
            <li>Analytics v9.3.0</li>
          </ul>
          <li>Rave v3.9.11</li>
          <li>Zendesk</li>
          <ul>
            <li>CommonUISDK v1.1.0</li>
            <li>ProviderSDK v4.0.0</li>
            <li>ZendeskCoreSDK v2.2.1</li>
            <li>ZendeskSDK v7.0.0</li>
          </ul>
        </ul>
      </td>
      <td>
        <ul>
          <li>AppsFlyer v6.4.2</li>
          <li>Facebook v16.2.0</li>
          <li>Firebase</li>
          <ul>
            <li>Crashlytics v11.6.0</li>
            <li>Analytics v11.6.0</li>
          </ul>
          <li>**Google Billing v6.2.0**</li>
          <li>Rave v4.2.2</li>
          <li>Zendesk v5.1.0</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>

**10.7.1**<br />
29 March 2024

Required Unity: v2018.4<br />
Minimum iOS: v12<br />
Minimum Android: v23<br />
Target Android: v34
      </td>
      <td>
        <ul>
          <p style={{ color: 'SteelBlue' }} >**NO CHANGES THIS RELEASE**</p>
          <li>AppsFlyer v6.10.0</li>
          <li>Facebook v11.2.1</li>
          <li>Firebase</li>
          <ul>
            <li>Crashlytics v9.3.0</li>
            <li>Analytics v9.3.0</li>
          </ul>
          <li>Rave v3.9.11</li>
          <li>Zendesk</li>
          <ul>
            <li>CommonUISDK v1.1.0</li>
            <li>ProviderSDK v4.0.0</li>
            <li>ZendeskCoreSDK v2.2.1</li>
            <li>ZendeskSDK v7.0.0</li>
          </ul>
        </ul>
      </td>
      <td>
        <ul>
          <li>AppsFlyer v6.4.2</li>
          <li>Facebook v16.2.0</li>
          <li>**Firebase**</li>
          <ul>
            <li>**Crashlytics v11.6.0**</li>
            <li>**Analytics v11.6.0**</li>
          </ul>
          <li>Google Billing v6.0.1</li>
          <li>**Rave v4.2.2**</li>
          <li>Zendesk v5.1.0</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>

**10.7.0**<br />
22 March 2024

**10.6.1**<br />
15 February 2024

**10.6.0**<br />
09 January 2024

Required Unity: v2018.4<br />
Minimum iOS: v12<br />
Minimum Android: v22<br />
Target Android: v34
      </td>
      <td>
        <ul>
          <li>AppsFlyer v6.10.0</li>
          <li>Facebook v11.2.1</li>
          <li>Firebase</li>
          <ul>
            <li>Crashlytics v9.3.0</li>
            <li>Analytics v9.3.0</li>
          </ul>
          <li>Rave v3.9.11</li>
          <li>Zendesk</li>
          <ul>
            <li>CommonUISDK v1.1.0</li>
            <li>ProviderSDK v4.0.0</li>
            <li>ZendeskCoreSDK v2.2.1</li>
            <li>**ZendeskSDK v7.0.0**</li>
          </ul>
        </ul>
      </td>
      <td>
        <ul>
          <li>AppsFlyer v6.4.2</li>
          <li>**Facebook v16.2.0**</li>
          <li>Firebase</li>
          <ul>
            <li>Crashlytics v9.3.0</li>
            <li>Analytics v9.3.0</li>
          </ul>
          <li>Google Billing v6.0.1</li>
          <li>Rave v3.9.14</li>
          <li>Zendesk v5.1.0</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<details>
  <summary>Previous Unity SDK Releases</summary>
  <table>
    <thead>
      <tr>
        <th><strong>BFG SDK Version</strong></th>
        <th><strong>3rd Party SDK<br />Version (iOS)</strong></th>
        <th><strong>3rd Party SDK<br />Version (Android)</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>

**10.5.0**<br />
26 September 2023

Required Unity: v2018.4<br />
Minimum iOS: v11<br />
Minimum Android: v22<br />
Target Android: v34
        </td>
        <td>
          <ul>
            <p style={{ color: 'SteelBlue' }} >**NO CHANGES THIS RELEASE**</p>
            <li>AppsFlyer v6.10.0</li>
            <li>Facebook v11.2.1</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v9.3.0</li>
              <li>Analytics v9.3.0</li>
            </ul>
            <li>Rave v3.9.11</li>
            <li>Zendesk</li>
            <ul>
              <li>CommonUISDK v1.1.0</li>
              <li>ProviderSDK v4.0.0</li>
              <li>ZendeskCoreSDK v2.2.1</li>
              <li>ZendeskSDK v6.0.0</li>
            </ul>
          </ul>
        </td>
        <td>
          <ul>
            <li>AppsFlyer v6.4.2</li>
            <li>**Facebook v16.0.1**</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v9.3.0</li>
              <li>Analytics v9.3.0</li>
            </ul>
            <li>**Google Billing v6.0.1**</li>
            <li>**Rave v3.9.14**</li>
              <li>Zendesk v5.1.0</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>

**10.4.0**<br />
23 June 2023

Required Unity: v2018.4<br />
Minimum iOS: v11<br />
Minimum Android: v22<br />
Target Android: v33
        </td>
        <td>
          <ul>
            <li>AppsFlyer v6.10.0</li>
            <li>**Facebook v11.2.1**</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v9.3.0</li>
              <li>Analytics v9.3.0</li>
            </ul>
            <li>Rave v3.9.11</li>
            <li>Zendesk</li>
            <ul>
              <li>CommonUISDK v1.1.0</li>
              <li>ProviderSDK v4.0.0</li>
              <li>ZendeskCoreSDK v2.2.1</li>
              <li>ZendeskSDK v6.0.0</li>
            </ul>
          </ul>
        </td>
        <td>
          <ul>
            <li>AppsFlyer v6.4.2</li>
            <li>Facebook v12.3.0</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v9.3.0</li>
              <li>Analytics v9.3.0</li>
            </ul>
            <li>**Google Billing v5.0.0**</li>
            <li>Rave v3.9.8</li>
            <li>Zendesk v5.1.0</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**10.3.0**<br />
06 April 2023

Required Unity: v2018.4<br />
Minimum iOS: v11<br />
Minimum Android: v22<br />
Target Android: v33
        </td>
        <td>
          <ul>
            <li>**AppsFlyer v6.10.0**</li>
            <li>Facebook v9.2.0</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v9.3.0</li>
              <li>Analytics v9.3.0</li>
            </ul>
            <li>Rave v3.9.11</li>
            <li>Zendesk</li>
            <ul>
              <li>CommonUISDK v1.1.0</li>
              <li>ProviderSDK v4.0.0</li>
              <li>ZendeskCoreSDK v2.2.1</li>
              <li>**ZendeskSDK v6.0.0**</li>
            </ul>
          </ul>
        </td>
        <td>
          <ul>
            <p style={{ color: 'SteelBlue' }} >**NO CHANGES THIS RELEASE**</p>
            <li>AppsFlyer v6.4.2</li>
            <li>Facebook v12.3.0</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v9.3.0</li>
              <li>Analytics v9.3.0</li>
            </ul>
            <li>Google Billing v4.1.0</li>
            <li>Rave v3.9.8</li>
            <li>Zendesk v5.1.0</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**10.2.0**<br />
23 November 2023

Required Unity: v2018.4<br />
Minimum iOS: v10<br />
Minimum Android: v22<br />
Target Android: v33
        </td>
        <td>
          <ul>
            <p style={{ color: 'SteelBlue' }} >**NO CHANGES THIS RELEASE**</p>
            <li>AppsFlyer v6.4.2</li>
            <li>Facebook v9.2.0</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v9.3.0</li>
              <li>Analytics v9.3.0</li>
            </ul>
            <li>Rave v3.9.11</li>
            <li>Zendesk</li>
            <ul>
              <li>CommonUISDK v1.1.0</li>
              <li>ProviderSDK v4.0.0</li>
              <li>ZendeskCoreSDK v2.2.1</li>
              <li>ZendeskSDK v4.0.0</li>
            </ul>
          </ul>
        </td>
        <td>
          <ul>
            <li>AppsFlyer v6.4.2</li>
            <li>Facebook v12.3.0</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v9.3.0</li>
              <li>Analytics v9.3.0</li>
            </ul>
            <li>Google Billing v4.1.0</li>
            <li>Rave v3.9.8</li>
            <li>**Zendesk v5.1.0**</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**10.1.0**<br />
25 August 2023

Required Unity: v2018.4<br />
Minimum iOS: v10<br />
Minimum Android: v22<br />
Target Android: v33
        </td>
        <td>
          <ul>
            <li>AppsFlyer v6.4.2</li>
            <li>Facebook v9.2.0</li>
            <li>**Firebase**</li>
            <ul>
              <li>**Crashlytics v9.3.0**</li>
              <li>**Analytics v9.3.0**</li>
            </ul>
            <li>Rave v3.9.11</li>
            <li>Zendesk</li>
            <ul>
              <li>CommonUISDK v1.1.0</li>
              <li>ProviderSDK v4.0.0</li>
              <li>ZendeskCoreSDK v2.2.1</li>
              <li>ZendeskSDK v4.0.0</li>
            </ul>
          </ul>
        </td>
        <td>
          <ul>
            <li>AppsFlyer v6.4.2</li>
            <li>Facebook v12.3.0</li>
            <li>**Firebase**</li>
            <ul>
              <li>**Crashlytics v9.3.0**</li>
              <li>**Analytics v9.3.0**</li>
            </ul>
            <li>**Google Billing v4.1.0**</li>
            <li>Rave v3.9.8</li>
            <li>Zendesk v3.0.2</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**10.0.0**<br />
25 July 2023

Required Unity: v2018.4<br />
Minimum iOS: v10<br />
Minimum Android: v22<br />
Target Android: v32
        </td>
        <td>
          <ul>
            <p style={{ color: 'SteelBlue' }} >**NO CHANGES THIS RELEASE**</p>
            <li>AppsFlyer v6.4.2</li>
            <li>Facebook v9.2.0</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v4.3.1</li>
              <li>Analytics v6.6.2</li>
            </ul>
            <li>Rave v3.9.11</li>
            <li>Zendesk</li>
            <ul>
              <li>CommonUISDK v1.1.0</li>
              <li>ProviderSDK v4.0.0</li>
              <li>ZendeskCoreSDK v2.2.1</li>
              <li>ZendeskSDK v4.0.0</li>
            </ul>
          </ul>
        </td>
        <td>
          <ul>
            <li>AppsFlyer v6.4.2</li>
            <li>**Facebook v12.3.0**</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v17.2.2</li>
              <li>Analytics v17.6.0</li>
              <li>Messaging v20.3.0</li>
              <li>Perf v19.0.7</li>
            </ul>
            <li>Google Billing v3.0.0</li>
            <li>**Rave v3.9.8**</li>
            <li>Zendesk v3.0.2</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**9.6.1**<br />
**9.6.0**<br />
**9.5.0**
        </td>
        <td>
          <ul>
            <li>iOS API: Minimum v10</li>
            <li>**AppsFlyer v6.4.2**</li>
            <li>Facebook v9.2.0</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v4.3.1</li>
              <li>Analytics v6.6.2</li>
            </ul>
            <li>Rave v3.9.11</li>
            <li>Zendesk</li>
            <ul>
              <li>CommonUISDK v1.1.0</li>
              <li>ProviderSDK v4.0.0</li>
              <li>ZendeskCoreSDK v2.2.1</li>
              <li>ZendeskSDK v4.0.0</li>
            </ul>
          </ul>
        </td>
        <td>
          <ul>
            <p style={{ color: 'SteelBlue' }} >**NO CHANGES THIS RELEASE**</p>
            <li>AppsFlyer v6.4.2</li>
            <li>Facebook v8.2.0</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v17.2.2</li>
              <li>Analytics v17.6.0</li>
              <li>Messaging v20.3.0</li>
              <li>Perf v19.0.7</li>
            </ul>
            <li>Google Billing v3.0.0</li>
            <li>Rave v3.9.1</li>
            <li>Zendesk v3.0.2</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**9.4.1**<br />
**9.4.0**
        </td>
        <td>
          <ul>
            <p style={{ color: 'SteelBlue' }} >**NO CHANGES THIS RELEASE**</p>
            <li>iOS API: Minimum v10</li>
            <li>AppsFlyer v6.2.6</li>
            <li>Facebook v9.2.0</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v4.3.1</li>
              <li>Analytics v6.6.2</li>
            </ul>
            <li>Rave v3.9.11</li>
            <li>Zendesk</li>
            <ul>
              <li>CommonUISDK v1.1.0</li>
              <li>ProviderSDK v4.0.0</li>
              <li>ZendeskCoreSDK v2.2.1</li>
              <li>ZendeskSDK v4.0.0</li>
            </ul>
          </ul>
        </td>
        <td>
          <ul>
            <li>**AppsFlyer v6.4.2**</li>
            <li>Facebook v8.2.0</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v17.2.2</li>
              <li>Analytics v17.6.0</li>
              <li>Messaging v20.3.0</li>
              <li>Perf v19.0.7</li>
            </ul>
            <li>Google Billing v3.0.0</li>
            <li>Rave v3.9.1</li>
            <li>Zendesk v3.0.2</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

  **9.3.2**<br />
  **9.3.1**<br />
  **9.3.0**<br />
  **9.2.1**<br />
  **9.2.0**<br />
  **9.1.0**
        </td>
        <td>
          <ul>
            <p style={{ color: 'SteelBlue' }} >**NO CHANGES THIS RELEASE**</p>
            <li>iOS API: Minimum v10</li>
            <li>AppsFlyer v6.2.6</li>
            <li>Facebook v9.2.0</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v4.3.1</li>
              <li>Analytics v6.6.2</li>
            </ul>
            <li>Rave v3.9.11</li>
            <li>Zendesk</li>
            <ul>
              <li>CommonUISDK v1.1.0</li>
              <li>ProviderSDK v4.0.0</li>
              <li>ZendeskCoreSDK v2.2.1</li>
              <li>ZendeskSDK v4.0.0</li>
            </ul>
          </ul>
        </td>
        <td>
          <ul>
            <li>AppsFlyer v6.2.3</li>
            <li>**Facebook v8.2.0**</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v17.2.2</li>
              <li>Analytics v17.6.0</li>
              <li>Messaging v20.3.0</li>
              <li>Perf v19.0.7</li>
            </ul>
            <li>Google Billing v3.0.0</li>
            <li>Rave v3.9.1</li>
            <li>Zendesk v3.0.2</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**9.0.2**
        </td>
        <td>
          <ul>
            <li>iOS API: Minimum v10</li>
            <li>**AppsFlyer v6.2.6**</li>
            <li>**Facebook v9.2.0**</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v4.3.1</li>
              <li>Analytics v6.6.2</li>
            </ul>
            <li>**Rave v3.9.11**</li>
            <li>Zendesk</li>
            <ul>
              <li>CommonUISDK v1.1.0</li>
              <li>ProviderSDK v4.0.0</li>
              <li>ZendeskCoreSDK v2.2.1</li>
              <li>ZendeskSDK v4.0.0</li>
            </ul>
          </ul>
        </td>
        <td>
          <ul>
            <li>**AppsFlyer v6.2.3**</li>
            <li>Facebook v4.41.0</li>
            <li>**Firebase**</li>
            <ul>
              <li>**Crashlytics v17.2.2**</li>
              <li>**Analytics v17.6.0**</li>
              <li>**Messaging v20.3.0**</li>
              <li>**Perf v19.0.7**</li>
            </ul>
            <li>**Google Billing v3.0.0**</li>
            <li>Rave v3.9.1</li>
            <li>Zendesk v3.0.2</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**9.0.1**<br />
**9.0.0**
        </td>
        <td>
          <ul>
            <li>iOS API: Minimum v10</li>
            <li>AppsFlyer v6.2.4</li>
            <li>Facebook v9.0.1</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v4.3.1</li>
              <li>Analytics v6.6.2</li>
            </ul>
            <li>Rave v3.9.10-402</li>
            <li>Zendesk</li>
            <ul>
              <li>CommonUISDK v1.1.0</li>
              <li>ProviderSDK v4.0.0</li>
              <li>ZendeskCoreSDK v2.2.1</li>
              <li>ZendeskSDK v4.0.0</li>
            </ul>
          </ul>
        </td>
        <td>
          <ul>
            <li>AppsFlyer v4.8.15</li>
            <li>Facebook v4.41.0</li>
            <li>Firebase</li>
            <ul>
              <li>Messaging v20.1.5</li>
            </ul>
            <li>Rave v3.9.1</li>
            <li>Zendesk v3.0.2</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</details>

## Native Android SDK Compatibility Chart

<sup>NOTE: 3rd party services in <strong>bold</strong> were updated in the corresponding Big Fish SDK release.</sup>

<table>
  <thead>
    <tr>
      <th><strong>BFG SDK Version</strong></th>
      <th><strong>3rd Party SDK Version</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>

**8.8.0**<br />
21 May 2024

Minimum Android: v23<br />
Target Android: v34
      </td>
      <td>
        <ul>
          <li>AppsFlyer v6.4.2</li>
          <li>Facebook v16.2.0</li>
          <li>Firebase</li>
          <ul>
            <li>**Crashlytics v18.6.3**</li>
            <li>Analytics v20.3.0</li>
          </ul>
          <li>**Google Billing v6.2.0**</li>
          <li>**Rave v4.2.7**</li>
          <li>Zendesk v5.1.0</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>

**8.7.0**<br />
29 March 2024

Minimum Android: v23<br />
Target Android: v34
      </td>
      <td>
        <ul>
          <li>AppsFlyer v6.4.2</li>
          <li>Facebook v16.2.0</li>
          <li>Firebase</li>
          <ul>
            <li>Crashlytics v18.2.12</li>
            <li>Analytics v20.3.0</li>
          </ul>
          <li>Google Billing v6.0.1</li>
          <li>**Rave v4.2.2**</li>
          <li>Zendesk v5.1.0</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>

**8.6.1**<br />
15 February 2024

**8.6.0**<br />
09 January 2024

Minimum Android: v21<br />
Target Android: v34
      </td>
      <td>
        <ul>
          <li>AppsFlyer v6.4.2</li>
          <li>**Facebook v16.2.0**</li>
          <li>Firebase</li>
          <ul>
            <li>Crashlytics v18.2.12</li>
            <li>Analytics v20.3.0</li>
          </ul>
          <li>Google Billing v6.0.1</li>
          <li>Rave v3.9.14</li>
          <li>Zendesk v5.1.0</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<details>
  <summary>Previous Native Android SDK Releases</summary>
  <table>
    <thead>
      <tr>
        <th><strong>BFG SDK Version</strong></th>
        <th><strong>3rd Party SDK Version</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>

**8.5.0**<br />
26 September 2023

Minimum Android: v21<br />
Target Android: v34
        </td>
        <td>
          <ul>
            <li>AppsFlyer v6.4.2</li>
            <li>**Facebook v16.0.1**</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v18.2.12</li>
              <li>Analytics v20.3.0</li>
            </ul>
            <li>**Google Billing v6.0.1**</li>
            <li>**Rave v3.9.14**</li>
            <li>Zendesk v5.1.0</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**8.4.0**<br />
23 June 2023

**8.3.0**<br />
06 April 2023

Minimum Android: v21<br />
Target Android: v33
        </td>
        <td>
          <ul>
            <li>AppsFlyer v6.4.2</li>
            <li>Facebook v12.3.0</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v18.2.12</li>
              <li>Analytics v20.3.0</li>
            </ul>
            <li>**Google Billing v5.0.0**</li>
            <li>Rave v3.9.8</li>
            <li>Zendesk v5.1.0</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**8.2.0**<br />
23 November 2022

Minimum Android: v21<br />
Target Android: v33
        </td>
        <td>
          <ul>
            <li>AppsFlyer v6.4.2</li>
            <li>Facebook v12.3.0</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v18.2.12</li>
              <li>Analytics v20.3.0</li>
            </ul>
            <li>Google Billing v4.0.0</li>
            <li>Rave v3.9.8</li>
            <li>**Zendesk v5.1.0**</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**8.1.0**<br />
25 August 2022

Minimum Android: v20<br />
Target Android: v33

**8.0.0**<br />
25 July 2022

Minimum Android: v20<br />
Target Android: v31
        </td>
        <td>
          <ul>
            <li>AppsFlyer v6.4.2</li>
            <li>**Facebook v12.3.0**</li>
            <li>Firebase</li>
            <ul>
              <li>**Crashlytics v18.2.12**</li>
              <li>Analytics v20.3.0</li>
            </ul>
            <li>**Google Billing v4.0.0**</li>
            <li>**Rave v3.9.8**</li>
            <li>Zendesk v3.0.2</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**7.8.0**<br />
**7.7.0**<br />
**7.6.0**
        </td>
        <td>
          <ul>
            <li>**AppsFlyer v6.4.2**</li>
            <li>Facebook v8.2.0</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v17.2.2</li>
              <li>Analytics v20.3.0</li>
            </ul>
            <li>**Google Billing v3.0.3**</li>
            <li>Rave v3.9.1</li>
            <li>Zendesk v3.0.2</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**7.5.2**<br />
**7.5.1**<br />
**7.5.0**<br />
**7.4.0**
        </td>
        <td>
          <ul>
            <li>AppsFlyer v6.2.3</li>
            <li>Facebook v8.2.0</li>
            <li>**Firebase**</li>
            <ul>
              <li>**Crashlytics v17.2.2**</li>
              <li>**Analytics v20.3.0**</li>
            </ul>
            <li>Google Billing v3.0.3</li>
            <li>Rave v3.9.1</li>
            <li>Zendesk v3.0.2</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**7.3.0**
        </td>
        <td>
          <ul>
            <li>AppsFlyer v6.2.3</li>
            <li>Facebook v8.2.0</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v17.0.0</li>
              <li>Analytics v20.1.5</li>
            </ul>
            <li>**Google Billing v3.0.3**</li>
            <li>Rave v3.9.1</li>
            <li>Zendesk v3.0.2</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**7.1.7**
        </td>
        <td>
          <ul>
            <li>AppsFlyer v6.2.3</li>
            <li>**Facebook v8.2.0**</li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v17.0.0</li>
              <li>Analytics v20.1.5</li>
            </ul>
            <li>Rave v3.9.1</li>
            <li>Zendesk v3.0.2</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**7.1.6**
        </td>
        <td>
          <ul>
            <li>**AppsFlyer v6.2.3**</li>
            <li>Facebook v4.4.1/li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics v17.0.0</li>
              <li>Analytics v20.1.5</li>
            </ul>
            <li>Rave v3.9.1</li>
            <li>Zendesk v3.0.2</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**7.1.5**<br />
**7.1.4**<br />
**7.1.3**<br />
**7.1.2**<br />
**7.1.1**<br />
**7.1.0**
        </td>
        <td>
          <ul>
            <li>AppsFlyer v4.8.15</li>
            <li>Facebook v4.4.1/li>
            <li>Firebase</li>
            <ul>
              <li>**Crashlytics v17.0.0**</li>
              <li>Analytics v20.1.5</li>
            </ul>
            <li>Rave v3.9.1</li>
            <li>**Zendesk v3.0.2**</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>

**7.0.0**
        </td>
        <td>
          <ul>
            <li>AppsFlyer v4.8.15</li>
            <li>Facebook v4.4.1/li>
            <li>Firebase</li>
            <ul>
              <li>Crashlytics (Fabric)</li>
              <li>Analytics v20.1.5</li>
            </ul>
            <li>Rave v3.9.1</li>
            <li>Zendesk v1.10.1.1</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</details>
