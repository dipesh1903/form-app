import { useTranslation } from "react-i18next"
import ProcessFlowImg from "../assets/svg/process-flow.svg";
import { PrimaryButton } from "../components/ui/primary-button";
import { Input } from "../components/ui/input";
import { ChangeEvent, useEffect, useState } from "react";
import { cn } from "../utils";
import { ConfirmationResult, getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Spinner from "../assets/svg/spinner.svg";
import { toast } from "react-toastify";

type props = {
    onSuccess: () => void
}

export default function Login({onSuccess}: props) {

    const { t } = useTranslation();
    const [phoneNumber , setPhoneNumber] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);
    const auth = getAuth();

    useEffect(() => {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'app-sign-in-button', {
            'size': 'invisible',
    })
    return () => {delete window.recaptchaVerifier}
    }, [auth]);

    async function onCaptchaVerify(phoneNumber: string) {
        try {
            await window?.recaptchaVerifier?.verify();
            onSignInSubmit(phoneNumber)
        } catch (error) {
            setLoading(false)
            toast.error(t('toastError.otpFail'))
            console.log(error);
        }
    }

    function onchange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        if (value.length > 10) return;
        setPhoneNumber(value);
    }

    function onSignInSubmit(phoneNumber: string) {
        signInWithPhoneNumber(auth, `+91${phoneNumber}`, window.recaptchaVerifier)
            .then((confirmationResult: ConfirmationResult) => {
            window.confirmationResult = confirmationResult;
            onSuccess();
            }).catch((error) => {
                window.recaptchaVerifier?.clear();
                toast.error(t('toastError.otpFail'))
                console.log('error is', error)
            }).finally(() => setLoading(false))
    }

    return (
        <div className="text-center max-w-sm sm:m-auto">
            <p className="text-[20px] leading-[1.2] pt-10 max-w-sm m-auto font-sansAlbert font-semibold">
                {t('loginPage.heading')}</p>
            <img src={ProcessFlowImg} className="py-10" />
            <p className="text-onSecondary pb-2">{t('loginPage.subMessage')}</p>

            <Input className="my-2"
                placeholder={t('loginPage.inputPlaceholder')}
                maxLength={10}
                minLength={10}
                pattern="[0-9]{10}"
                value={phoneNumber}
                inputClass="p-2 py-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                onChange={(e: ChangeEvent<HTMLInputElement>) => onchange(e)}/>

            <PrimaryButton id="app-sign-in-button"
                className={cn("mt-2", {"pointer-events-none from-gradientLeftOpaque to-gradientRightOpaque": String(phoneNumber).length < 10 || isLoading})}
                onClick={() => {setLoading(true); onCaptchaVerify(phoneNumber)}}>
                    <div className="flex justify-center">
                        {isLoading && <img src={Spinner} className="pr-2"/>}
                        <span>{t('loginPage.btnMessage')}</span>
                    </div>
            </PrimaryButton>
        </div>
    )
}