import { forwardRef } from "react";

export const Input = forwardRef(({ extraClassName = "", ...props }, ref) => (
    <input
        className={`input ${extraClassName} ${
            props["aria-invalid"] === "true" ? "border border-danger border-3" : ""
        }`}
        {...props}
        ref={ref}
    />
));

Input.displayName = "Input";
