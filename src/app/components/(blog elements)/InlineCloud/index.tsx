// @/app/compeonts/(blog elements)/InlineCloud/index.tsx

import { ReactElement } from "react";

const InlineCloud = ({ className, children }: { className?: string, children: ReactElement[] }) => {
    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            {children}
        </div>
    )
}

export default InlineCloud;