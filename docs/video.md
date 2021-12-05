---
sidebar_position: 5
---

# GET video/:id

With the video ID from other endpoints, for example `/videos/latest` or `/videos/all` you can request the details of a video.

```curl
curl https://app.boldvideo.io/api/videos/eb12n -H "Authorization: SFMyNTY.g2gDbQAAAApVRDBLQUhlQmhMbgYARZ4vMHgBYgABUYA.CR3w"
```

```json
{
  "data":{
    "description":"Suspendisse fringilla eget ligula vitae laoreet. Curabitur velit purus, auctor in luctus at, bibendum id erat. ",
    "duration":1280.6,
    "id":"eb83n",
    "legacy_video_url":null,
    "provider_asset_id":"Tqg6wZAsTsIbPR0cO9K02kODXx2",
    "teaser":"Eure Highroller im Februar",
    "thumbnail":"https://bold-eu1-uploads.boldvideo.io/uploads/customer/thumbnails/db84562b-404b-4e01-8c53-bde1200625ce.jpg",
    "title":"Monatsnews February",
    "type":"video"
  }
}
```
