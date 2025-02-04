# PPR Sandbox

## Streaming Metadata

The `./src/app/streaming-metadata` directory sets up 4 examples showing how metadata can be streamed using PPR and the behavior seen in `next dev` and `next start`.

A key takeaway is that `generateMetadata` will block streaming (sending the first byte of HTML) if it's dynamic. This can be worked around by using [React 19's support for document metadata](https://react.dev/blog/2024/12/05/react-19#support-for-metadata-tags)
