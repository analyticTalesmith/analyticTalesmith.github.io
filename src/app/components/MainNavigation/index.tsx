import ContentWrapper from "@/app/components/ContentWrapper";
import Image from "next/image";
import Logo from "@/app/graphics/main-logo-black-transparent.svg";
import Link from "next/link";

type MainNavigationProps = {
    children: React.ReactNode,
}

const MainNavigation = (/*props: MainNavigationProps*/) => {
    /*const { children } = props*/

    return (
        <div className="flex w-full h-20 py-16 items-center top-0 px-4 ">
            <ContentWrapper>
                <Image
                    alt="Logo"
                    height={68}
                    width={220}
                    src={Logo} />
                <ul className="hidden md:flex gap-x-6 inline-flex ml-auto my-auto">
                    <li>
                        <Link href="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </ContentWrapper>
        </div>
    )
}

export default MainNavigation