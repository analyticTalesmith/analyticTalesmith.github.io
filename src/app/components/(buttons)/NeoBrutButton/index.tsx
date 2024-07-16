import ArrowRight from '@/app/components/Icons/Icon_ArrowRight';
import Link from 'next/link';

interface ButtonProps {
    text: string;
}

const NeoBrutButton: React.FC<ButtonProps> = ({ text }) => {
    return (
        <Link href="/blog">
            <button type="button"
                className="inline-flex items-center rounded-lg mt-8 h-12 border-black border-2 px-12 py-3 text-sm font-medium bg-primary-container hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-inverse-primary text-on-primary-container active:text-on-inverse-primary"
            >
                <span>{text}</span>
                <ArrowRight className={'h-3 w-6 stroke-2'} />
            </button>
        </Link>
    )
}

export default NeoBrutButton;