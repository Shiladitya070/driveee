export type FileRaw = {
  ETag: string;
  Key: string;
  LastModified: string;
  Size: number;
  StorageClass: string;
};

export type getFile = {
  name: string;
  key: string;
  url: string;
  date: Date;
  size: number;
};
