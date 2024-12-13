import { forwardRef, LabelHTMLAttributes } from "react";
import { cn } from "../../utils";

const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
    ({className, ...props}, ref) => 
        <label
            ref={ref}
            className={cn(
                "text-onSurfacePrimary pb-2 font-sansAlbert", className
            )}
            {...props}
        />
    )

Label.displayName = 'Label';

export { Label };