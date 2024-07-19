'use client'

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';


function PageQuery() {
    return (<input placeholder="Search..." />)
}

function Page() {
    const searchParams = useSearchParams();

    return (<div>Page: ${searchParams.get('page')}</div>);
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