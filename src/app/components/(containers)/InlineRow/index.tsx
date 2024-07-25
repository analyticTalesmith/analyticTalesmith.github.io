// @/app/components/(containers)/InlineRow/index.tsx

import { ReactElement } from "react";

const InlineRow = ({ className, children }: { className?: string, children: ReactElement[] | ReactElement }) => {
    return (
        <div className={`flex flex-wrap gap-2 pb-2 ${className}`}>
            {children}
        </div>
    )
}

export default InlineRow;