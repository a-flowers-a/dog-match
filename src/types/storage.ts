export enum StorageKey {
  Session = "session",
}

export interface BaseStorageItem {
  key: StorageKey;
}

export interface SessionStorageItem extends BaseStorageItem {
  value: boolean;
}

export type StorageItem = SessionStorageItem;
