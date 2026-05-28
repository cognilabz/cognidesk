import {
  CreateBucketCommand,
  DeleteObjectCommand,
  HeadBucketCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { loadStudioTargetManifest, studioEnv } from "@/server/config";

const env = studioEnv();

const s3 = new S3Client({
  region: env.artifact.region,
  forcePathStyle: env.artifact.forcePathStyle,
  ...(env.artifact.endpoint ? { endpoint: env.artifact.endpoint } : {}),
  ...(env.artifact.accessKeyId && env.artifact.secretAccessKey
    ? {
        credentials: {
          accessKeyId: env.artifact.accessKeyId,
          secretAccessKey: env.artifact.secretAccessKey,
        },
      }
    : {}),
});

export async function ensureArtifactBucket(bucket = loadStudioTargetManifest().dashboards.artifactBucket) {
  try {
    await s3.send(new HeadBucketCommand({ Bucket: bucket }));
  } catch {
    await s3.send(new CreateBucketCommand({ Bucket: bucket }));
  }
}

export async function putArtifact(input: {
  bucket?: string;
  key: string;
  body: string | Uint8Array;
  contentType: string;
}) {
  const bucket = input.bucket ?? loadStudioTargetManifest().dashboards.artifactBucket;
  await ensureArtifactBucket(bucket);
  await s3.send(new PutObjectCommand({
    Bucket: bucket,
    Key: input.key,
    Body: input.body,
    ContentType: input.contentType,
  }));
}

export async function getArtifactText(input: {
  bucket?: string;
  key: string;
}) {
  const bucket = input.bucket ?? loadStudioTargetManifest().dashboards.artifactBucket;
  const result = await s3.send(new GetObjectCommand({ Bucket: bucket, Key: input.key }));
  return await result.Body?.transformToString() ?? "";
}

export async function deleteArtifact(input: {
  bucket?: string;
  key: string;
}) {
  const bucket = input.bucket ?? loadStudioTargetManifest().dashboards.artifactBucket;
  await s3.send(new DeleteObjectCommand({ Bucket: bucket, Key: input.key }));
}
