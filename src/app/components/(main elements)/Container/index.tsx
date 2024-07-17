type ContainerProps = {
    children: React.ReactNode,
    className?: string,
}


const ContentWrapper = (props: ContainerProps) => {
    const { className, children } = props

    return (
        <div className={`${className} neobrutal bg-surface-container text-on-surface mb-12`}>
            <div className="z-10">
                {children}
            </div>
        </div>
    )
}

export default ContentWrapper