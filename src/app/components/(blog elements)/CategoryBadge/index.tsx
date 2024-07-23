// @/app/components/(blog elements)/CategoryBadge/index.tsx


const CategoryBadge = ({ label }: { label: string }) => {

    return (
        <div className = "w-fit bg-surface-container-high border border-surface-container-low px-2 py-1 rounded-lg" >
            <p className="text-sm text-outline uppercase">{label}</p>
        </div >
    )
}

export default CategoryBadge;