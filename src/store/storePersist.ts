/* eslint-disable @typescript-eslint/no-explicit-any */
function isJsonString(str: string): boolean {
    try {
      JSON.parse(str);
    } catch (e) {
      console.error((e as Error).message);
      return false;
    }
    return true;
  }
  
  export const storePersist = {
    set: (key: string, state: any): void => {
      window.localStorage.setItem(key, JSON.stringify(state));
    },
    get: (key: string): any | false => {
      const result = window.localStorage.getItem(key);
      if (!result) {
        return false;
      } else {
        if (!isJsonString(result)) {
          window.localStorage.removeItem(key);
          return false;
        } else return JSON.parse(result);
      }
    },
    remove: (key: string): void => {
      window.localStorage.removeItem(key);
    },
    getAll: (): Storage => {
      return window.localStorage;
    },
    clear: (): void => {
      window.localStorage.clear();
    },
  };

  export const LOCAL_STORAGE_KEY = {
    APP_FORM_LOGIN_DETAILS: 'APP_FORM_LOGIN_DETAILS'
  }
  
  export default storePersist;
  
  