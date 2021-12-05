---
sidebar_position: 1
---

# Authentication

The Bold Video API is organized around REST.

The Bold Video API uses API Tokens to authenticate requests. You can view your API Key in the [Bold Project Settings](https://app.boldvideo.io/settings).

Make sure to keep your API Key secure and do not share it in publicly accessible areas such as GitHub.

Authentication to the API is performed via Authorization header.

```curl
curl https://app.boldvideo.io/api/settings -H "Authorization: SFMyNTY.g2gDbQAAAApVRDBLQUhlQmhMbgYARZ4vMHgBYgABUYA.CR3w"
```
All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.

