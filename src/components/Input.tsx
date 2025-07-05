import React from "react";

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    placeholder:string;
    // ref?:any
}

export const Input = React.forwardRef<HTMLInputElement, inputProps>(
  ({ placeholder, ...props }, ref) => (

    <div>
      <input
        ref={ref}
        placeholder={placeholder}
        type="text"
        className="px-4 py-2 border rounded m-2 w-64"
        {...props}
      />
    </div>

  )
);