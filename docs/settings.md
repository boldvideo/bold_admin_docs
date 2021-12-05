---
sidebar_position: 2
---

# GET settings

The Settings endpoint provides important site information like featured playlists or menus.

```curl
curl https://app.boldvideo.io/api/settings -H "Authorization: SFMyNTY.g2gDbQAAAApVRDBLQUhlQmhMbgYARZ4vMHgBYgABUYA.CR3wD"
```
The API Tolen used here is an example. You should use the one from the [Project Settings Dashboard](https://app.boldvideo.io/settings).
```json
{
  "data":{
    "featured_playlists":[
      {
        "id":"434de",
        "title":"Demo Playlist",
        "type":"playlist",
        "videos":[
          {
            "description":"Nunc a eros id tortor rutrum pharetra. Suspendisse ultricies tincidunt tortor in molestie. ",
            "duration":57.92,
            "id":"ebb6q",
            "legacy_video_url":null,
            "provider_asset_id":"5UqGx4VPqoy12234uR7bmmmWpqNMkUu6mI",
            "teaser":"Nunc a eros id tortor rutrum pharetra. Suspendisse ultricies tincidunt tortor in molestie. ",
            "thumbnail":"https://bold-eu1-uploads.boldvideo.io/uploads/ranger/thumbnails/66d45b0a-20e0-45f7-b97c-ae60f2ae4b22.jpg",
            "title":"Demo Video 1",
            "type":"video"
          },
          {
            "description":"Nunc a eros id tortor rutrum pharetra. Suspendisse ultricies tincidunt tortor in molestie. ",
            "duration":57.92,
            "id":"ebb6q",
            "legacy_video_url":null,
            "provider_asset_id":"5UqGx4VPqoy12234uR7bmmmWpqNMkUu6mI",
            "teaser":"Nunc a eros id tortor rutrum pharetra. Suspendisse ultricies tincidunt tortor in molestie. ",
            "thumbnail":"https://bold-eu1-uploads.boldvideo.io/uploads/ranger/thumbnails/66d45b0a-20e0-45f7-b97c-ae60f2ae4b22.jpg",
            "title":"Demo Video 2",
            "type":"video"
          },
          {
            "description":"Nunc a eros id tortor rutrum pharetra. Suspendisse ultricies tincidunt tortor in molestie. ",
            "duration":57.92,
            "id":"ebb6q",
            "legacy_video_url":null,
            "provider_asset_id":"5UqGx4VPqoy12234uR7bmmmWpqNMkUu6mI",
            "teaser":"Nunc a eros id tortor rutrum pharetra. Suspendisse ultricies tincidunt tortor in molestie. ",
            "thumbnail":"https://bold-eu1-uploads.boldvideo.io/uploads/ranger/thumbnails/66d45b0a-20e0-45f7-b97c-ae60f2ae4b22.jpg",
            "title":"Demo Video 3",
            "type":"video"
          },
          {
            "description":"Nunc a eros id tortor rutrum pharetra. Suspendisse ultricies tincidunt tortor in molestie. ",
            "duration":57.92,
            "id":"ebb6q",
            "legacy_video_url":null,
            "provider_asset_id":"5UqGx4VPqoy12234uR7bmmmWpqNMkUu6mI",
            "teaser":"Nunc a eros id tortor rutrum pharetra. Suspendisse ultricies tincidunt tortor in molestie. ",
            "thumbnail":"https://bold-eu1-uploads.boldvideo.io/uploads/ranger/thumbnails/66d45b0a-20e0-45f7-b97c-ae60f2ae4b22.jpg",
            "title":"Demo Video 4",
            "type":"video"
          },
          {
            "description":"Nunc a eros id tortor rutrum pharetra. Suspendisse ultricies tincidunt tortor in molestie. ",
            "duration":57.92,
            "id":"ebb6q",
            "legacy_video_url":null,
            "provider_asset_id":"5UqGx4VPqoy12234uR7bmmmWpqNMkUu6mI",
            "teaser":"Nunc a eros id tortor rutrum pharetra. Suspendisse ultricies tincidunt tortor in molestie. ",
            "thumbnail":"https://bold-eu1-uploads.boldvideo.io/uploads/ranger/thumbnails/66d45b0a-20e0-45f7-b97c-ae60f2ae4b22.jpg",
            "title":"Demo Video 5",
            "type":"video"
          },

        ]
      },
    ],
    "menu_items":[
      {
        "icon":"uploads/customer/menu_items/icon_c664ec1a-2308-41ba-bd9b-34b865293dd2.svg",
        "is_ext":false,
        "label":"Home",
        "url":"/"
      },
      {
        "icon":"uploads/customer/menu_items/icon_6d272fb3-5b4a-4dce-8530-11c87731f43d.svg",
        "is_ext":false,
        "label":"News",
        "url":"/pl/geg8b"
      },
      {
        "icon":"uploads/customer/menu_items/icon_33699002-5ec2-4ec6-9c2f-ce62c126dd1f.svg",
        "is_ext":false,
        "label":"Wissen2Go",
        "url":"/pl/5b5de"
      },
      {
        "icon":"uploads/customer/menu_items/icon_7906da6a-66b6-4b21-af9a-0df9dd4f9a80.svg",
        "is_ext":false,
        "label":"Archive",
        "url":"/all"
      }
    ]
  },
  "version":"1.0"
}
```
