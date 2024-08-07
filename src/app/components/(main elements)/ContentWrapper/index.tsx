type ContentWrapperProps = {
    children: React.ReactNode,
}

const ContentWrapper = (props: ContentWrapperProps) => {
    const { children } = props

    return (
        <div className="container flex-1 flex max-w-7xl px-2 sm:px-4 py-28 md:pt-20 ">
            {children}
        </div>
    )
}

export default ContentWrapper