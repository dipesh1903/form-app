import { useTranslation } from "react-i18next"
import { Input } from "../components/ui/input"
import { PrimaryButton } from "../components/ui/primary-button"
import { SecondaryButton } from "../components/ui/secondary-button"
import { ChangeEvent, createRef, useEffect, useRef, useState } from "react"
import { cn } from "../utils"
import Spinner from "../assets/svg/spinner.svg"
import { Drawer, DrawerContent, DrawerOverlay } from "../components/ui/drawer"
import otpVerificationSuccess from "../assets/gifs/login-success.gif";
import { useConfig } from "../store/config"
import { useAuthDispatch } from "../store/auth/context"
import { AuthActionFactory } from "../store/auth/actionCreator"

type props = {
    onSuccess: () => void
}

export default function VerifyOtp({onSuccess} : props) {

    const { t } = useTranslation()
    const inputRefs = useRef<HTMLInputElement[]>([]);
    const [otpValue, setOtpValue] = useState<string[]>(Array(6).fill(''))
    const [isLoading , setLoading] = useState<boolean>(false);
    const [isDrawerOpen , setDrawerOpen] = useState<boolean>(false);
    const [isError, setError] = useState<boolean>(false);
    const drawerPos = useConfig();
    const dispatchAuth = useAuthDispatch();

    useEffect(() => {
        inputRefs.current[0].focus();
    }, [])

    if (inputRefs.current.length !== 6) {
        inputRefs.current = Array(6)
          .fill(0)
          .map((_, i) => inputRefs.current[i] || createRef());
    }

    function onChange(e: ChangeEvent<HTMLInputElement>, index: number) {
        setError(false);
        const value = e.target.value;
        if(isNaN(+value) || value.length > 1) return;
        const newArr = [...otpValue];
        newArr[index] = value;
        setOtpValue(newArr);
        if (value !== '' && !!inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    }

    function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>, index: number) {
        const key = e.code.toLowerCase();
        if((key == 'backspace' || key === 'delete') && otpValue[index] === '' && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    }

    function onVerifyOtp() {
        setLoading(true)
        const code = otpValue.join("");
        window?.confirmationResult?.confirm(code).then((result) => {
            dispatchAuth(AuthActionFactory.signIn(result.user, true));
            setDrawerOpen(true);
            setTimeout(() => {
                setDrawerOpen(false)
                onSuccess();
            }, 2000)
          }).catch(() => {
            setError(true)
          }).finally(() => setLoading(false))
    }

    return (
        <>
        <div className="max-w-sm sm:m-auto">
            <h1 className="text-[28px] pt-4 leading-none max-w-sm m-auto font-sansAlbert font-semibold">
                {t('otpPage.heading')}</h1>
            <div className="flex gap-2 pt-4">
                {
                    Array(6).fill(1).map((_, index) => (
                        <div key={index} className="w-8 h-8">
                            <Input
                                ref={(el: HTMLInputElement) => inputRefs.current[index] = el}
                                inputClass="px-1 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                                type="number"
                                pattern="[0-9]{1}"
                                value={otpValue[index]}
                                onKeyDown={(e) => onKeyDown(e, index)}
                                onChange={(e) => onChange(e, index)}/>
                        </div>
                    ))
                }
            </div>
            {isError && <p className="text-red-500 py-1">{t('otpPage.errorMsg')}</p>}
            <PrimaryButton className={cn("mt-20", {"pointer-events-none from-gradientLeftOpaque to-gradientRightOpaque": otpValue.join('').length !== 6 || isLoading})}
                onClick={onVerifyOtp}
                >
                <div className="flex justify-center">
                        {isLoading && <img src={Spinner} className="pr-2"/>}
                        <span>{t('otpPage.btnMessage')}</span>
                    </div>
            </PrimaryButton>
            <div className="flex mt-4 items-center gap-2 justify-center">
                <p>{t('otpPage.info')}</p>
                <SecondaryButton className="w-fit"
                    containerClass="py-[1px] px-2 text-[16px]">
                    {t('otpPage.resendBtnMessage')}
                </SecondaryButton>
            </div>
        </div>
        <Drawer open={isDrawerOpen} onOpenChange={() => setDrawerOpen(false)}
            onAnimationEnd={() => {
            setTimeout(() => {
                document.body.style.pointerEvents = "auto";
            }, 1000)}}>
            <DrawerOverlay>
                <DrawerContent style={{left: `${drawerPos.left}px`, width: `${drawerPos.width}px` }} className={cn("flex flex-col p-4 fixed rounded-t-2xl bottom-0 m-auto left-[20px] h-[80%] shadow-drawerShadow bg-white")}>
                    <div className="h-full w-full flex-col items-center justify-center">
                        <img className="h-[60%] w-full" src={otpVerificationSuccess}/>
                        <p className="pt-2 font-semibold text-center size-[24px]">{t('otpPage.successMsg')}</p>
                    </div>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    </>
    )
}

// Logging custom events for each step in the process