// @/app/components/(main elements)/ContentWrapper/index.tsx

type ContentWrapperProps = {
    children: React.ReactNode,
}

const ContentWrapper = (props: ContentWrapperProps) => {
    const { children } = props

    return (
        <div className="container flex-auto w-full max-w-7xl px-2 sm:px-4 py-28 md:pt-20 justify-center">
            {children}
        </div>
    )
}

export default ContentWrapper