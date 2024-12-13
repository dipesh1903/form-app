export enum Pages {
    LOGIN_PAGE = "LOGIN_PAGE",
    OTP_PAGE = "OTP_PAGE",
    USER_DETAILS_PAGE = "USER_DETAILS_PAGE",
    EXISITNG_USER_PAGE = "EXISTING_USER_PAGE",
    LOADER = "LOADER"
}

export enum PassportOptions {
    Yes = 'yes',
    No = 'no'
}

export const Languages: {[x: string]: string} = {
    en: 'Eng',
    hi: 'हिन्दी',
    bn: 'বাংলা'
}

export const USER_INFO_COLLECTION = 'user_info'