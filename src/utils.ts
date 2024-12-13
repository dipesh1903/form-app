import clsx, { ClassValue } from "clsx";
import { DocumentData } from "firebase/firestore";
import { twMerge } from "tailwind-merge";
import { UserInfoFirebase } from "./type";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function convertUserInfoTOFE(data: DocumentData): UserInfoFirebase {
    return ({
        hasPassport: data.hasPassport,
        name: data.name,
        address: data.address
    });
}