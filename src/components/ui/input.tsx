import * as React from 'react';
import { cn } from '../../utils';


const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & {inputClass?: string}>(
  ({ className, type, inputClass, ...props }, ref) => {
    return (
    <div className={cn('bg-gradient-to-r p-[2px] h-full rounded-lg from-gradientLeft to-gradientRight w-full', className)}>
        <div className='w-full h-full bg-white rounded-md'>
        <input
            type={type}
            className={cn(
            'bg-secondary outline-none py-2  h-full focus:outline-none text-onSurfacePrimary rounded-md  w-full'
            ,inputClass )}
            ref={ref}
            {...props}
        />
        </div>
    </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };