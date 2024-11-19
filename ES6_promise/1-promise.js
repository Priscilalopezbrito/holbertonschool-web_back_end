/* eslint-disable */
import { resolve } from 'eslint/lib/shared/relative-module-resolver';
import JSON from 'eslint-plugin-import/memo-parser';

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
        resolve({ status: 200, body: 'Success' });
    } else {
        reject(new Error('The fake API is not working currently'));
    }
  });
}
