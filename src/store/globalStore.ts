import { UserInfoFirebase } from "../type";


export class UserDetailsStore {
    private static _userDetail: UserInfoFirebase = {} as UserInfoFirebase;
    static setUserDetails(details: UserInfoFirebase) {
        UserDetailsStore._userDetail = details
    }
    static getUserDetails(): UserInfoFirebase {
        return UserDetailsStore._userDetail
    }
}