import {forwardRef, HTMLAttributes } from "react"
import { cn } from "../../utils";


const SecondaryButton = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement> & {containerClass?: string}>(
    ({className, containerClass, ...props}, ref) => (
        <div className={cn('bg-gradient-to-r p-[2px] h-full rounded-lg from-gradientLeft to-gradientRight w-full', className)}>
            <button 
            ref={ref}
            className={cn("w-full bg-white font-semibold text-[20px] text-onSecondary text-center rounded-md px-2.5 py-2 shadow-md", containerClass)} 
            {...props}/>
        </div>
))

SecondaryButton.displayName = "SecondaryButton"
export { SecondaryButton };
