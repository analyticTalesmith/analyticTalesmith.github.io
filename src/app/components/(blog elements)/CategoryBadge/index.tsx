// @/app/components/(blog elements)/CategoryBadge/index.tsx
import Link from 'next/link';


const CategoryBadge = ({ label }: { label: string }) => {

    return (
        <Link href={`/blogHybrid?category=${label.toLowerCase()}`}>
            <div className="group w-fit bg-surface-container-high border border-surface-container-low px-2 py-1 rounded-lg
                            hover:bg-tertiary-container hover:border-on-tertiary-container ease-in-out duration-200" >
                <p className="text-sm text-outline group-hover:text-on-tertiary-container uppercase">{label}</p>
            </div >
        </Link>
    )
}

export default CategoryBadge;