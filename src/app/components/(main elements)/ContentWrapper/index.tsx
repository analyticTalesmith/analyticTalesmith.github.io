type ContentWrapperProps = {
    children: React.ReactNode,
}

const ContentWrapper = (props: ContentWrapperProps) => {
    const { children } = props

    return (
        <div className="container flex max-w-7xl px-4">
            {children}
        </div>
    )
}

export default ContentWrapper