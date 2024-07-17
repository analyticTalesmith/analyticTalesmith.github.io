type SVGIconProps = {
    className?: string;
}

const Icon: React.FC<SVGIconProps> = ({ className }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='15'
            fill='none'
            viewBox='0 0 15 15'
        >
            <path
                fill='currentColor'
                fillRule='evenodd'
                d='M3.646 11.354a.5.5 0 010-.707L10.293 4H6a.5.5 0 010-1h5.5a.5.5 0 01.5.5V9a.5.5 0 01-1 0V4.707l-6.646 6.647a.5.5 0 01-.708 0z'
                clipRule='evenodd'
            ></path>
        </svg>
    );
}

export default Icon;