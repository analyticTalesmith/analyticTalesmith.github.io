'use client'

import { useSearchParams } from 'next/navigation';

export default function SearchBar() {
    const searchParams = useSearchParams()

    const search = searchParams.get('page')

    // URL -> `/dashboard?search=my-project`
    // `search` -> 'my-project'
    console.log({ search })
    return <>Search: {search}</>
}