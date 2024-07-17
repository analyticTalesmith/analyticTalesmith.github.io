type ContainerProps = {
    children: React.ReactNode,
    className?: string,
}


const ContentWrapper = (props: ContainerProps) => {
    const { className, children } = props

    return (
        <div className={`${className} bg-surface-container text-on-surface mb-12 py-4 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]`}>
            <div className="p-4">
                {children}
            </div>
        </div>
    )
}

export default ContentWrapper