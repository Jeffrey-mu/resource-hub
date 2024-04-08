import path from 'node:path'
import { fileURLToPath } from 'node:url'
import uploadFiles from 'upload-files-to-oss'

export const __dirname = path.dirname(fileURLToPath(import.meta.url))

uploadFiles({
  accessKeyId: process.env.jeffreyOssId,
  accessKeySecret: process.env.jeffreyOssKey,
  bucket: 'testadss',
  region: 'oss-ap-southeast-1',
}, path.join(__dirname, '../dist'))
