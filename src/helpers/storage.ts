import { StorageItem, StorageKey } from "../types/storage";

/**
 * Gets the value stored in sessionstorage of the passed key.
 * Handles not found by returning empty string
 * @param key string keyname of the data to retrieve
 * @returns string value of the key passed, empty string if not found
 */
export function getStorageItem(key: StorageKey): string {
  const foundValue = window.sessionStorage.getItem(key);
  return foundValue !== null ? JSON.parse(foundValue) : "";
}

/**
 * Stringifies the value in @param storageItem and sets it in sessionStorage,
 * associated to the passed key
 * @param storageItem the string keyname and the value to be set
 */
export function setStorageItem(storageItem: StorageItem): void {
  window.sessionStorage.setItem(
    storageItem.key,
    JSON.stringify(storageItem.value)
  );
}
