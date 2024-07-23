// @/app/components/(blog elements)/CategoryFilter/index.tsx

import Link from 'next/link';


const CategoryFilter = ({ category, rootURL }: { category: string, rootURL: string }) => {

    return (
        //<Link href={`/blogHybrid?category=${label.toLowerCase()}`}>
        //    <div className="group w-fit bg-surface-container-high border border-surface-container-low px-2 py-1 rounded-lg
        //                    hover:bg-tertiary-container hover:border-on-tertiary-container ease-in-out duration-200" >
        //        <p className="text-sm text-outline group-hover:text-on-tertiary-container uppercase">{label}</p>
        //    </div >
        //</Link>
        <div className="relative inline-block space-x-4 space-y-4">
            <span className="text-xl leading-none align-middle my-auto md:text-2xl font-bold font-spaceGrotesk text-on-surface">
                Category:
            </span>
            <span className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium rounded bg-tertiary-container text-on-tertiary-container">
                {category}
                <Link href={rootURL}>
                <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-on-tertiary-container bg-transparent rounded-sm hover:bg-tertiary hover:text-on-tertiary" aria-label="Remove">
                    <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Remove badge</span>
                    </button></Link>
            </span>
        </div>
    )
}

export default CategoryFilter;