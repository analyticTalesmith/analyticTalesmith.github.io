import ContentWrapper from "@/app/components/ContentWrapper";

type MainNavProps = {
    children: React.ReactNode,
}

const MainNav = (props: MainNavProps) => {
    const { children } = props

    return (
        <div className="w-full">
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </div>
    )
}

export default MainNav