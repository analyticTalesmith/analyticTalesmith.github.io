import BrutBanner from '@/app/components/(SVGs)/(banners)/Banner_Shapes';

type HeaderProps = {
    className?: string
}


const NeoBrutHeading = (props: HeaderProps) => {
    const { className } = props;

    return (
        <div className={`${className} min-h-[75px] sm:min-h-[100px] md:min-h-[150px] lg:min-h-[200px] relative overflow-hidden bg-red border-b-4 border-black`}>
            <BrutBanner  />
            <div className="relative p-4 z-1">
            </div>
        </div>
    )
}

export default NeoBrutHeading;