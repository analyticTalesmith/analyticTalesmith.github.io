type ContainerProps = {
    children: React.ReactNode,
    className?: string,
}


const ContentWrapper = (props: ContainerProps) => {
    const { className, children } = props

    return (
        <div className={`${className} neobrutal bg-surface-container-lowest text-on-surface mb-12`}>
            <div className="z-0">
                {children}
            </div>
        </div>
    )
}

export default ContentWrapper