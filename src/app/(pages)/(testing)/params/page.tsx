'use client'

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';


function PageQuery() {
    return (<input placeholder="Search..." />)
}

function Page() {
    const [page, setPage] = useState('');
    const [category, setCategory] = useState('');
    const searchParams = useSearchParams();

    useEffect(() => {
        const pageParam = searchParams.get('page');
        const categoryParam = searchParams.get('category');
        if (pageParam) {
            setPage(pageParam);
        }

        if (categoryParam) {
            setCategory(categoryParam);
        }

    }, [searchParams]);

    return (<div>
        {page && <div>Page: {page}</div>}
        {category && <div>Category: {category}</div>}
    </div>);
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