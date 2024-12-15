import { UserInfoFirebase } from "../type";


export class UserDetailsStore {
    private static _userDetail: UserInfoFirebase | null = null
    static setUserDetails(details: UserInfoFirebase) {
        UserDetailsStore._userDetail = details
    }
    static getUserDetails(): UserInfoFirebase | null {
        return UserDetailsStore._userDetail
    }
    static clearUserDetails() {
        UserDetailsStore._userDetail = null
    }
}