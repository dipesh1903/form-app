import { useEffect, useRef } from "react"

import CompanyLogo from "../components/company-logo/indesx";
import { useConfigDispatch } from "../store/config";
import { Languages } from "../constant";
import { Dropdown, DropdownContent, DropdownMenuItem, DropdownTrigger } from "../components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { SecondaryButton } from "../components/ui/secondary-button";
import { Outlet } from "react-router-dom";
import Loader from "../components/ui/loader";

type props = {
    showLoader?: boolean
}

export default function Container({showLoader}: props) {
    const dispatch = useConfigDispatch();
    const { i18n } = useTranslation();
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mainRef && mainRef.current) {
            const pos = mainRef.current.getBoundingClientRect();
            dispatch(pos);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function updateLanguage(lang: string) {
        i18n.changeLanguage(lang)
        const url = new URL(window.location.href)
        url.searchParams.set('lng', lang)
        history.pushState({}, '', url.href);
    }

    return (
        <div ref={mainRef} className="max-w-2xl min-h-dvh flex-1 m-auto p-6 md:border-[2px] border-opacity-50">
            <div className="flex justify-between items-center">
                <CompanyLogo />
                <Dropdown >
                    <DropdownTrigger asChild>
                    <SecondaryButton className="rounded-lg p-[2px] from-gradientLeftOpaque to-gradientLeftOpaque"
                        containerClass="py-[1px] px-4 text-[12px]">
                        {Languages[i18n.language.toLowerCase()] || i18n.language}
                    </SecondaryButton>
                    </DropdownTrigger>
                    <DropdownContent sideOffset={6} align="end" className="p-2 hover:cursor-pointer max-h-72 max-w-72 rounded-lg shadow-lg overflow-scroll" >
                        {
                            Object.entries(Languages).map((state, index) => (
                                <DropdownMenuItem key={index}
                                    className="px-3 outline-none py-1 mb-[2px] rounded-md"
                                    onClick={() => updateLanguage(state[0])}
                                    >
                                    {state[1]}
                                </DropdownMenuItem>
                            ))
                        }
                    </DropdownContent>
                </Dropdown>
            </div>
            {showLoader ? <Loader /> : <Outlet /> }
        </div>
    )
}