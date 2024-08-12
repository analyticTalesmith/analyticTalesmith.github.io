type ContainerProps = {
    children: React.ReactNode,
    className?: string,
}


const ContentWrapper = (props: ContainerProps) => {
    const { className, children } = props

    return (
        <div className={`${className} neobrutal bg-surface-container-lowest text-on-surface mb-12`}>
            {children}
        </div>
    )
}

export default ContentWrapper