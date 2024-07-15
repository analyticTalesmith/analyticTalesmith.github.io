import React from 'react';
import FlexColumn from '@/app/components/FlexColumn';
import Image from 'next/image';

interface HeroProps {
    headingText: string;
    bodyText: string | React.ReactNode;
    heroButton: React.ReactNode;
    heroImage: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({headingText, bodyText, heroButton, heroImage }) =>
    {
    return (
        <section className="bg-surface-container m-4 text-on-surface py-4 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            <FlexColumn>
                <div className="mx-auto max-w-3xl text-center">
                       <h1 className="text-6xl font-spaceGrotesk bg-gradient-to-r from-primary to-tertiary bg-clip-text font-extrabold text-transparent">{headingText}</h1>
                       <div className="font-jost mx-auto mt-8 max-w-xl sm:text-xl/relaxed">
                            {bodyText}
                    </div>
                    {heroButton }
                </div>
                <div className="content-center text-center items-center">
                 <div className="w-full p:6 md:p-auto my-8 h-[300px] md:h-fit md:my-auto">
                    {heroImage}</div></div>
            </FlexColumn>
        </section>
        //<div>
        //    <h1>{headingText}</h1>
        //    <h2>{subheadingText}</h2>
        //    <p>{bodyText}</p>
        //    <div>{heroButton}</div>
        //    <div>{heroImage}</div>
        //</div>
    );
}

export default Hero;