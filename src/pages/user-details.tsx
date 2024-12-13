import { useTranslation } from "react-i18next"
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../utils";
import { Dropdown, DropdownContent, DropdownMenuItem, DropdownTrigger } from "../components/ui/dropdown-menu";
import { useEffect, useRef, useState } from "react";
import { PrimaryButton } from "../components/ui/primary-button";
import Spinner from "../assets/svg/spinner.svg";
import { PassportOptions } from "../constant";
import { UserInfoFirebase } from "../type";
import { saveUserDetails } from "../api";
import { useAuth } from "../store/auth/context";
import { UserDetailsStore } from "../store/globalStore";

type props = {
    onSuccess: () => void
}

export default function UserDetails({onSuccess}: props) {

    const [isPassportDropdownOpen, setPassportDropdown] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isFormValid, setFormValid] = useState<boolean>(false);
    const inputRefs = useRef<HTMLInputElement[]>([]);
    const formRef = useRef<HTMLFormElement>(null);
    const auth = useAuth()
    const isFormEdit = useRef<boolean>(false);

    const { t } = useTranslation();

    function checkValidity() {
        const isValid = !!formRef.current?.checkValidity() && !!inputRefs.current[0].value;
        setFormValid(isValid)
    }

    useEffect(() => {
        const userDetails = UserDetailsStore.getUserDetails()
        if (userDetails && Object.keys(userDetails).length) {
            isFormEdit.current = true
            inputRefs.current.forEach(ref => {
                ref.value = userDetails[ref.name as keyof UserInfoFirebase] || ''
            })
            checkValidity();
        }
    }, [])

    function addUserDetails() {
        setLoading(true);
        const inputValues: UserInfoFirebase = {} as UserInfoFirebase ;
        inputRefs.current.forEach(ref => {
            const keys: keyof UserInfoFirebase = ref.name as keyof UserInfoFirebase
            inputValues[keys] = ref.value
        })
        saveUserDetails(inputValues, auth.user.uid, isFormEdit.current).then(() => {
            setLoading(false);
            onSuccess();
        }).catch ((error) => {
            setLoading(false)
            console.log('error is', error)
        })
    }

    return (
        <div className="max-w-sm sm:m-auto text-center">
            <h1 className="text-[28px] py-4 leading-none max-w-sm m-auto font-sansAlbert font-semibold">
                {t('userDetails.heading')}
            </h1>
            <div className="flex flex-col justify-between">
                <form ref={formRef}>
                    <div className="my-2">
                        <Label>{t('userDetails.passport')}<span className="text-red-500 pl-1 align-sub">*</span></Label>
                        <div className="flex-1">
                            <Dropdown open={isPassportDropdownOpen} onOpenChange={() => setPassportDropdown(false)}>
                                <DropdownTrigger asChild>
                                <Input
                                    name="hasPassport"
                                    inputClass="p-2"
                                    ref={(el: HTMLInputElement) => inputRefs.current[0] = el}
                                    type="text"
                                    required
                                    readOnly
                                    className={cn("w-full h-fit p-[2px] rounded-md")}
                                    onClick={() => setPassportDropdown(true)} />
                                </DropdownTrigger>
                                <DropdownContent sideOffset={6} className="p-2 hover:cursor-pointer max-h-72 max-w-72 rounded-lg shadow-lg overflow-scroll" >
                                    {
                                        Object.values(PassportOptions).map((state, index) => (
                                            <DropdownMenuItem key={index}
                                                className="px-3 outline-none py-1 mb-[2px] rounded-md"
                                                onClick={() => {inputRefs.current[0].value = state; checkValidity()}}>
                                                {state}
                                            </DropdownMenuItem>
                                        ))
                                    }
                                </DropdownContent>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="my-2">
                        <Label>{t('userDetails.name')}<span className="text-red-500 pl-1 align-sub">*</span></Label>
                        <Input
                            name="name"
                            ref={(el: HTMLInputElement) => inputRefs.current[1] = el}
                            inputClass="p-2"
                            type="text"
                            onChange={() => checkValidity()}
                            required
                            />
                    </div>
                    <div className="my-2">
                        <Label>{t('userDetails.address')}</Label>
                        <Input 
                            name="address"
                            ref={(el: HTMLInputElement) => inputRefs.current[2] = el}
                            inputClass="p-2"
                            type="text"/>
                    </div>
                </form>
                <PrimaryButton className={cn("mt-2", 
                    {"pointer-events-none from-gradientLeftOpaque to-gradientRightOpaque": !isFormValid || isLoading})}
                    onClick={addUserDetails}>
                    <div className="flex justify-center">
                        {isLoading && <img src={Spinner} className="pr-2"/>}
                        <span>{t('userDetails.btnMessage')}</span>
                    </div>
                </PrimaryButton>
            </div>
        </div>
    )
}