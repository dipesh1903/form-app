import { setDoc, doc, Timestamp, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { UserInfoFirebase } from "./type";
import { USER_INFO_COLLECTION } from "./constant";
import { convertUserInfoTOFE } from "./utils";
import { UserDetailsStore } from "./store/globalStore";

export async function saveUserDetails(userInfo: UserInfoFirebase, uid: string, isEdit?: boolean): Promise<void> {
    try {
        const ref = doc(db, USER_INFO_COLLECTION, uid)
        await setDoc(ref, 
            {...userInfo, [isEdit ? 'updatedAt': 'createdAt']: Timestamp.fromDate(new Date())})
        UserDetailsStore.setUserDetails(userInfo);
        return Promise.resolve()
    } catch {
        return Promise.reject()
    }
}

export async function getUserDetails(uid: string): Promise<void | UserInfoFirebase> {
    try {
        const ref = doc(db, USER_INFO_COLLECTION, uid)
        const result = await getDoc(ref)
        if (result.exists()) {
            return Promise.resolve(convertUserInfoTOFE(result.data()) as UserInfoFirebase)
        } else {
            return Promise.resolve()
        }
    } catch {
        return Promise.reject()
    }
}