---
sidebar_position: 2
---

# Google Meet

Instead of manually uploading the recordings of your Google Meetings, you can now use our Google Drive Integration to import recordings directly.

To get started you need to first authenticate with a Google Account. To that, open the [settings page](https://app.boldvideo.io/settings) in your Bold Admin panel:

![Authenticate with Google](/img/google-screen1.png)

Click the "Connect"-Button next to the Google Meet Logo and, if prompted, enter the credentials to your Google-Account. 

![Authenticate with Google](/img/google-screen2.png)

Once connected, you should see your Google email, first- and lastname and Photo in your Bold Settings Page:

![Connected to Google](/img/google-screen3.png)

You can now head back to your [video library](https://app.boldvideo.io/videos) where you should see a new button in the top right corner "Google Meet Import".

If you activate the checkbox "Zoom synchronisation", Bold will import every upcoming Zoom Meeting that is being recorded to the Zoom Cloud into your video library.

Once you finish a Zoom Meeting and the recording has stopped, you'll see a notification at the top of [your video library](https://app.boldvideo.io/videos). When the processing on Zoom's side is done, the video will be automatically added to your video library.

![Zoom notification](/img/zoom-screen3.png)

:::info
All imported recordings will have the status "unlisted" so that they don't accidentally show up in any of your connected frontends or clients.
:::

## How to uninstall

To disconnect your Zoom Account from Bold, simply click the "Remove"-Button near the Zoom Integration section on your [settings page](https://app.boldvideo.io/settings).

![Disconnect Zoom](/img/zoom-screen4.png)

## FAQ

<details>
  <summary>Can I also import past recordings from Zoom Cloud?</summary>
  <div>
    Not at this point. A recordings browser to import past meetings is currently being developed and will be released in the coming weeks.
  </div>
</details>
<details>
  <summary>Does Bold re-encode the Zoom Recordings?</summary>
  <div>
    Yes, all imported videos are encoded into the same Adaptive Bitrate HLS format, to ensure always the best experience and the right video size for a viewer's device and connection speed.
  </div>
</details>
