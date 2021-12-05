---
sidebar_position: 3
---

# GET videos/latest

Lists the latest public videos.
```curl
curl https://app.boldvideo.io/api/videos/latest -H "Authorization: SFMyNTY.g2gDbQAAAApVRDBLQUhlQmhMbgYARZ4vMHgBYgABUYA.CR3wD"
```

```json
{
  "data":[
    {
      "description":"Fusce blandit ac metus eu tempus. Sed nibh ex, pretium vitae porta ut, dignissim ornare ex",
      "duration":959.92,
      "id":"wmgy9",
      "legacy_video_url":null,
      "provider_asset_id":"Ffb6B5lfj01hC2xZ2sas4tY912121212",
      "teaser":"Fusce blandit ac metus eu tempus. Sed nibh ex, pretium vitae porta ut, dignissim ornare ex",
      "thumbnail":"https://bold-eu1-uploads.boldvideo.io/uploads/customer/thumbnails/cbd1ac68-43c7-44ef-a946-1099681633f4.jpg",
      "title":"Video 1",
      "type":"video"
    },
    {
      "description":"Fusce blandit ac metus eu tempus. Sed nibh ex, pretium vitae porta ut, dignissim ornare ex",
      "duration":959.92,
      "id":"wmgy9",
      "legacy_video_url":null,
      "provider_asset_id":"Ffb6B5lfj01hC2xZ2sas4tY912121212",
      "teaser":"Fusce blandit ac metus eu tempus. Sed nibh ex, pretium vitae porta ut, dignissim ornare ex",
      "thumbnail":"https://bold-eu1-uploads.boldvideo.io/uploads/customer/thumbnails/cbd1ac68-43c7-44ef-a946-1099681633f4.jpg",
      "title":"Video 2",
      "type":"video"
    },
    {
      "description":"Fusce blandit ac metus eu tempus. Sed nibh ex, pretium vitae porta ut, dignissim ornare ex",
      "duration":959.92,
      "id":"wmgy9",
      "legacy_video_url":null,
      "provider_asset_id":"Ffb6B5lfj01hC2xZ2sas4tY912121212",
      "teaser":"Fusce blandit ac metus eu tempus. Sed nibh ex, pretium vitae porta ut, dignissim ornare ex",
      "thumbnail":"https://bold-eu1-uploads.boldvideo.io/uploads/customer/thumbnails/cbd1ac68-43c7-44ef-a946-1099681633f4.jpg",
      "title":"Video 3",
      "type":"video"
    },
    {
      "description":"Fusce blandit ac metus eu tempus. Sed nibh ex, pretium vitae porta ut, dignissim ornare ex",
      "duration":959.92,
      "id":"wmgy9",
      "legacy_video_url":null,
      "provider_asset_id":"Ffb6B5lfj01hC2xZ2sas4tY912121212",
      "teaser":"Fusce blandit ac metus eu tempus. Sed nibh ex, pretium vitae porta ut, dignissim ornare ex",
      "thumbnail":"https://bold-eu1-uploads.boldvideo.io/uploads/customer/thumbnails/cbd1ac68-43c7-44ef-a946-1099681633f4.jpg",
      "title":"Video 4",
      "type":"video"
    },
    {
      "description":"Fusce blandit ac metus eu tempus. Sed nibh ex, pretium vitae porta ut, dignissim ornare ex",
      "duration":959.92,
      "id":"wmgy9",
      "legacy_video_url":null,
      "provider_asset_id":"Ffb6B5lfj01hC2xZ2sas4tY912121212",
      "teaser":"Fusce blandit ac metus eu tempus. Sed nibh ex, pretium vitae porta ut, dignissim ornare ex",
      "thumbnail":"https://bold-eu1-uploads.boldvideo.io/uploads/customer/thumbnails/cbd1ac68-43c7-44ef-a946-1099681633f4.jpg",
      "title":"Video 5",
      "type":"video"
    },
    {
      "description":"Fusce blandit ac metus eu tempus. Sed nibh ex, pretium vitae porta ut, dignissim ornare ex",
      "duration":959.92,
      "id":"wmgy9",
      "legacy_video_url":null,
      "provider_asset_id":"Ffb6B5lfj01hC2xZ2sas4tY912121212",
      "teaser":"Fusce blandit ac metus eu tempus. Sed nibh ex, pretium vitae porta ut, dignissim ornare ex",
      "thumbnail":"https://bold-eu1-uploads.boldvideo.io/uploads/customer/thumbnails/cbd1ac68-43c7-44ef-a946-1099681633f4.jpg",
      "title":"Video 6",
      "type":"video"
    },

  ]
}
```
By default the last 6 videos are being listed, which can be changed using the `limit` parameter:
```curl
curl https://app.boldvideo.io/api/videos/latest?limit=2 -H "Authorization: SFMyNTY.g2gDbQAAAApVRDBLQUhlQmhMbgYARZ4vMHgBYgABUYA.CR3wD"
```
