// @/app/components/(blog elements)/BlogPagination/index.tsx

import Link from 'next/link';

interface PaginationProps {
    currentPage: number;
    currentCategory: string;
    totalPages: number;
    maxPageNumbersToShow: number;
    rootUrl: string;
    className?: string;
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
function constructPaginationURLFirst(postRootURL: string, currentCategory: string, catParam: string): string {
    var url: string = '';
    var appendCat: boolean = false;

    if (currentCategory) {
        appendCat = true;
    }

    if (appendCat) {
        url = `${postRootURL}?${catParam}${currentCategory}`
    } else {
        url = `${postRootURL}`
    }

    return (url)
}

function constructPaginationURLPrevious(postRootURL: string, currentPage: number, pageParam: string, currentCategory: string, catParam: string): string {
    var url: string = '';
    var appendPage: boolean = false;
    var appendCat: boolean = false;

    if (currentPage - 1 > 1) {
        appendPage = true;
    }

    if (currentCategory) {
        appendCat = true;
    }

    if (appendPage && appendCat) {
        url = `${postRootURL}?${pageParam}${currentPage - 1}&${catParam}${currentCategory}`
    } else if (appendPage && !appendCat) {
        url = `${postRootURL}?${pageParam}${currentPage - 1}`
        
    } else if (!appendPage && appendCat) {
        url = `${postRootURL}?${catParam}${currentCategory}`
    } else {
        url = `${postRootURL}`
    }

    return (url)
}

function constructPaginationURLNumber(postRootURL: string, pageNumber: number, pageParam: string, currentCategory: string, catParam: string): string {
    var url: string = '';
    var appendPage: boolean = false;
    var appendCat: boolean = false;

    if (pageNumber > 1) {
        appendPage = true;
    }

    if (currentCategory) {
        appendCat = true;
    }

    if (appendPage && appendCat) {
        url = `${postRootURL}?${pageParam}${pageNumber}&${catParam}${currentCategory}`
    } else if (appendPage && !appendCat) {
        url = `${postRootURL}?${pageParam}${pageNumber}`
    } else if (!appendPage && appendCat) {
        url = `${postRootURL}?${catParam}${currentCategory}`
    } else {
        url = `${postRootURL}`
    }

    return (url)
}

function constructPaginationURLNext(postRootURL: string, currentPage: number, pageParam: string, currentCategory: string, catParam: string): string {
    var url: string = '';
    var appendCat: boolean = false;


    /*currentPage < totalPages && (<Link href={`${postRootURL}?${pageParam}${currentPage + 1}*/

    if (currentCategory) {
        appendCat = true;
    }

    if (appendCat) {
        url = `${postRootURL}?${pageParam}${currentPage + 1}&${catParam}${currentCategory}`
    } else {
        url = `${postRootURL}?${pageParam}${currentPage + 1}`
    }

    return (url)
}
function constructPaginationURLLast(postRootURL: string, totalPages:number, pageParam: string, currentCategory: string, catParam: string): string {
    var url: string = '';
    var appendCat: boolean = false;

    if (currentCategory) {
        appendCat = true;
    }

    if (appendCat) {
        url = `${postRootURL}?${pageParam}${totalPages}&${catParam}${currentCategory}`
    } else {
        url = `${postRootURL}?${pageParam}${totalPages}`
    }

    return (url)
}


const BlogPagination = ({ currentPage, currentCategory, totalPages, maxPageNumbersToShow, rootUrl, className}: PaginationProps) => {
    /* TODO
    update with /blog' rootUrl
    */

    if (totalPages > 1) {
        const postRootURL = rootUrl;
        const pageParam = 'page=';
        const catParam = 'category=';
        const pageNumbers = getPaginationRange(maxPageNumbersToShow, currentPage, totalPages);

        return (
            <nav className={`flex row my-auto w-auto ${className}`}>
                <ul className="flex mx-auto border-1 border-r-4 border-b-4 border-black ">
                    {/* The "First" button, if needed. */}
                    {/*currentPage - pageShowRadius > 1*/ pageNumbers[0] !== 1 && (

                        <Link href={constructPaginationURLFirst(postRootURL, currentCategory, catParam)}>
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

                        <Link href={constructPaginationURLPrevious(postRootURL, currentPage, pageParam, currentCategory, catParam)}>
                            <li className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none  border border-r-0 border-black text-center align-middle font-spaceGrotesk text-xs font-medium uppercase text-on-primary-container bg-primary-container transition-all hover:opacity-75 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                                </span>
                            </li>
                        </Link>
                    )}

                    {/* The individual pages. */}
                    {pageNumbers.map((number) => (

                        <Link key={number}
                            href={constructPaginationURLNumber(postRootURL, number, pageParam, currentCategory, catParam)}
                            className={`${currentPage === number ? 'pointer-events-none' : ''} relative h-10 max-h-[40px] w-10 max-w-[40px] select-none border border-r-0 border-black text-center align-middle font-spaceGrotesk text-xs font-medium uppercase text-on-surface bg-surface transition-all hover:opacity-75 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                            aria-disabled={currentPage === number}
                            tabIndex={currentPage === number ? -1 : undefined}>
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                {currentPage === number && <span className="text-primary-container">{number}</span>}
                                {currentPage !== number && <span className="text-outline">{number}</span>}
                            </span>
                        </Link>
                    ))}

                    {/* The "Next" button, if needed. */}
                    {currentPage < totalPages && (<Link href={constructPaginationURLNext(postRootURL, currentPage, pageParam, currentCategory, catParam)}>
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

                        <Link href={constructPaginationURLLast(postRootURL, totalPages, pageParam, currentCategory, catParam)}>
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