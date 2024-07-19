'use client'

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';


function PageQuery() {
    const searchParams = useSearchParams();

    return (<input placeholder="Search..." />)
}

function Page() {
    const searchParams = useSearchParams();

    return (`Page: ${searchParams.get('page')}`);
}

export default function SearchBar() {
    //const searchParams = useSearchParams();

    return(<Suspense fallback={ <PageQuery /> }>
        {/*<div>Page: {searchParams.get('page')}</div>*/}
        < Page />
    </Suspense>)

    // URL -> `/dashboard?search=my-project`
    // `search` -> 'my-project'
}