import {forwardRef, HTMLAttributes } from "react"
import { cn } from "../../utils";


const PrimaryButton = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
    ({className, ...props}, ref) => (
    <button 
        ref={ref}
        className={cn("w-full bg-gradient-to-r font-semibold text-[20px] from-gradientLeft to-gradientRight text-onPrimary text-center rounded-md px-2.5 py-2 shadow-md  hover:bg-opacity-80", className)} 
        {...props}/>
))

PrimaryButton.displayName = "PrimaryButton"
export { PrimaryButton };
