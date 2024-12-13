import { useTranslation } from "react-i18next"
import successLogin from '../assets/gifs/form-success.gif';
import { SecondaryButton } from "../components/ui/secondary-button";
import CallIcon from "../assets/svg/call-icon.svg";
import LocationIcon from "../assets/svg/location-icon.svg";
import { Pages } from "../constant";
import { useAuthDispatch } from "../store/auth/context";
import { AuthActionFactory } from "../store/auth/actionCreator";

type props = {
    isExistingUser?: boolean
    goToPage: (page: Pages) => void
}

export default function ExisitngUser({isExistingUser, goToPage}: props) {

    const { t } = useTranslation();
    const dispatch = useAuthDispatch();
    const heading = isExistingUser ? "existingUser.headingExistingUser" : "existingUser.headingSuccess"

    return (
        <div className="text-center max-w-sm flex sm:m-auto flex-col items-center sm:items-start">
            <p className="my-4 font-semibold font-sansAlbert text-[24px] opacity-75">{t(heading)}</p>
            <img className="w-[160px] m-auto" src={successLogin} />
            <p className="font-semibold font-sansAlbert text-[20px] mb-4 opacity-75">{t('existingUser.message')}</p>
            <>
                <div className="shadow-md p-4 w-full">
                    <div className="flex items-center gap-2 justify-between self-start w-full">
                        <p className="font-semibold text-start text-onSurfaceSecondary">{t('existingUser.actionRegisterMsg')}</p>
                        <SecondaryButton className="w-fit"
                            onClick={() => {
                                dispatch(AuthActionFactory.signOut())
                                goToPage(Pages.LOGIN_PAGE);
                            }}
                            containerClass="py-[1px] px-4 text-[16px]">
                            {t('existingUser.actionRegisterBtnMsg')}
                        </SecondaryButton>
                    </div>
                    <div className="w-full flex items-center my-1">
                        <div className="w-full h-[0.5px] opacity-50 bg-gradient-to-r from-gradientLeftOpaque to-gradientRightOpaque"></div>
                        <p className="px-1 text-onSurfaceSecondary font-semibold">or</p>
                        <div className="w-full h-[0.5px] opacity-50 bg-gradient-to-r from-gradientLeftOpaque to-gradientRightOpaque"></div>
                    </div>
                    <div className="flex items-center gap-2 justify-between self-start w-full">
                        <p className="font-semibold text-start text-onSurfaceSecondary">{t('existingUser.actionEditMsg')}</p>
                        <SecondaryButton className="w-fit"
                            containerClass="py-[1px] px-4 text-[16px]"
                            onClick={() => goToPage(Pages.USER_DETAILS_PAGE)}
                            >
                            {t('existingUser.actionEditBtnMsg')}
                        </SecondaryButton>
                    </div>
                </div>
                <div className="h-[2px] w-full bg-gradient-to-r from-gradientLeftOpaque to-gradientRightOpaque"></div>
            </>
            <div className="self-start w-full mt-10 max-sm:rounded-sm shadow-md ">
                <div className="p-4">
                    <p className="text-onSurfaceSecondary w-fit pr-2 border-b-gradientLeft border-b-[1px] mb-4">{t('existingUser.companyContactMsg')}</p>
                    <div className="flex">
                        <div className="flex-1">
                            <a href="tel:+918670592956">
                                <div className="flex">
                                    <img src={CallIcon} />
                                    <span className="pl-2">{t('existingUser.phoneNumber')}</span>
                                </div>
                            </a>
                            <div className="flex mt-2">
                                <img src={LocationIcon} />
                                <span className="pl-2 text-left">{t('existingUser.address')}</span>
                            </div>
                        </div>
                        <div className="flex-1 ml-1 bg-locationBackground"></div>
                    </div>
                </div>
                <div className="h-[2px] w-full bg-gradient-to-r from-gradientLeftOpaque to-gradientRightOpaque"></div>
            </div>
        </div>
    )
}