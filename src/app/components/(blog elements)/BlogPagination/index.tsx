// @/app/components/(blog elements)/BlogPagination/index.tsx

import Link from 'next/link';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    maxPageNumbersToShow: number;
    rootUrl: string;
}
function getPaginationRange(maxPageNumbersToShow: number, currentPage: number, totalPages: number): number[] {
    
        //Show pages: { maxPageNumbersToShow - ((maxPageNumbersToShow + 1) % 2) } <br />
        //Page radisu: {  }

    const radius = Math.floor((maxPageNumbersToShow - ((maxPageNumbersToShow + 1) % 2)) / 2);
    const startOverflow = (currentPage - radius) < 1 ? Math.abs(currentPage - (radius+1)) : 0;
    const endOverflow = (currentPage + radius) > totalPages ? (currentPage + radius) - totalPages: 0;


    const startPage = Math.max(1, currentPage - (radius + endOverflow));
    const endPage = Math.min(totalPages, currentPage + (radius + startOverflow));

    //const startPage = Math.max(currentPage - radius);
    //const endPage = Math.min(currentPage + radius, totalPages);

    //const startShift = Math.max(0, radius - (currentPage - startPage));
    //const endShift = Math.max(0, radius - (totalPages - currentPage));

    const pageNumbers = []

    for (let i = Math.max(1, startPage); i <= Math.min(totalPages, endPage); i++) {
        pageNumbers.push(i);
    }

    return pageNumbers
}

const BlogPagination = ({ currentPage, totalPages, maxPageNumbersToShow, rootUrl }: PaginationProps) => {
    /* TODO
    update with /blog' rootUrl
    */

    if (totalPages > 1) {
        const postRootURL = rootUrl;
        const pageParam = 'page=';
        const pageNumbers = getPaginationRange(maxPageNumbersToShow, currentPage, totalPages);

        return (
            <nav className="flex row my-auto w-auto">
                <ul className="flex mx-auto overflow-hidden border-2 border-black rounded-lg">
                    {/* The "First" button, if needed. */}
                    {/*currentPage - pageShowRadius > 1*/ pageNumbers[0] !== 1 && (

                        <Link href={postRootURL}>
                            <li className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none  border border-r-0 border-black text-center align-middle font-spaceGrotesk text-xs font-medium uppercase text-on-tertiary-container bg-tertiary-container transition-all hover:opacity-75 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                                    </svg>


                                </span>
                            </li>
                        </Link>)}
                    {/* The "Prev" button, if needed. */}
                    {currentPage > 1 && (

                        <Link href={currentPage - 1 <= 1 ? postRootURL : `${postRootURL}?${pageParam}${currentPage - 1}`}>
                            <li className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none  border border-r-0 border-black text-center align-middle font-spaceGrotesk text-xs font-medium uppercase text-on-primary-container bg-primary-container transition-all hover:opacity-75 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                                </span>
                            </li>
                        </Link>


                        //<li>
                        //    <Link href={currentPage - 1 <= 1 ? postRootURL : `${postRootURL}?${pageParam}${currentPage - 1}`}>Prev</Link>
                        //</li>
                    )}

                    {/* The individual pages. */}
                    {pageNumbers.map((number) => (

                        <Link key={number}
                            href={currentPage === number ? postRootURL : `${postRootURL}?${pageParam}${number}`}
                            className={`${currentPage === number ? 'pointer-events-none' : ''} relative h-10 max-h-[40px] w-10 max-w-[40px] select-none border border-r-0 border-black text-center align-middle font-spaceGrotesk text-xs font-medium uppercase text-on-surface bg-surface transition-all hover:opacity-75 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                            aria-disabled={currentPage === number}
                            tabIndex={currentPage === number ? -1 : undefined}>
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                {currentPage === number && <span className="text-primary-container">{number}</span>}
                                {currentPage !== number && <span className="text-outline">{number}</span>}
                            </span>
                        </Link>
                    ))}
                    {/*< Link href = { ${ postRootURL } ? ${ pageParam }${ currentPage + 1}}*/}

                    {/* The "Next" button, if needed. */}

                    {currentPage < totalPages && (<Link href={`${postRootURL}?${pageParam}${currentPage + 1}`}>
                        <li className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none border border-r-0 border-black text-center align-middle font-spaceGrotesk text-xs font-medium uppercase text-on-primary-container bg-primary-container transition-all hover:opacity-75 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>

                            </span>
                        </li>
                    </Link>)}
                    {/* The "Last" button, if needed. */}
                    {pageNumbers[pageNumbers.length-1] !== totalPages && (

                        <Link href={`${postRootURL}?${pageParam}${totalPages}`}>
                            <li className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none  border border-r-0 border-black text-center align-middle font-spaceGrotesk text-xs font-medium uppercase text-on-tertiary-container bg-tertiary-container transition-all hover:opacity-75 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                    </svg>



                                </span>
                            </li>
                        </Link>)}


                </ul>
            </nav>
        );
    }
    else {
        return (<></>)
    }
};

export default BlogPagination;


//<div class="flex row">
//    <button
//        class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg rounded-r-none border border-r-0 border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//        type="button">
//        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
//                aria-hidden="true" class="w-4 h-4">
//                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
//            </svg>
//        </span>
//    </button>
//    <button
//        class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg rounded-r-none rounded-l-none border border-r-0 border-gray-900 bg-gray-100 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//        type="button">
//        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//            1
//        </span>
//    </button>
//    <button
//        class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg rounded-r-none rounded-l-none border border-r-0 border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//        type="button">
//        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//            2
//        </span>
//    </button>
//    <button
//        class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg rounded-r-none rounded-l-none border border-r-0 border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//        type="button">
//        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//            3
//        </span>
//    </button>
//    <button
//        class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg rounded-r-none rounded-l-none border border-r-0 border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//        type="button">
//        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//            4
//        </span>
//    </button>
//    <button
//        class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg rounded-r-none rounded-l-none border border-r-0 border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//        type="button">
//        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//            5
//        </span>
//    </button>
//    <button
//        class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg rounded-l-none border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//        type="button">
//        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
//                aria-hidden="true" class="w-4 h-4">
//                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
//            </svg>
//        </span>
//    </button>
//</div>