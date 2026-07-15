export interface MediaFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Media {
  id: number;
  documentId: string;

  name: string;
  alternativeText: string | null;
  caption: string | null;
  focalPoint: unknown | null;

  width: number;
  height: number;

  formats: {
    thumbnail?: MediaFormat;
    small?: MediaFormat;
    medium?: MediaFormat;
    large?: MediaFormat;
  };

  hash: string;
  ext: string;
  mime: string;

  size: number;

  url: string;

  previewUrl: string | null;

  provider: string;

  provider_metadata: unknown | null;

  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}