'use client'

import { motion, Variants, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import Icon_ArrowUp from '@/app/components/Icons/Icon_ArrowUp';

const isBrowser = () => typeof window !== 'undefined';

const ScrollToTopContainerVariants: Variants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

function ScrollToTopButton() {
    const heightScale = 2;
    const controls = useAnimationControls();
    const [threshold, setThreshold] = useState(0);

    useEffect(() => {
        if (!isBrowser()) return;

        const updateThreshold = () => {
            setThreshold(window.innerHeight/heightScale);
        };

        const handleScroll = () => {
            if (window.scrollY > threshold) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        };

        window.addEventListener('resize', updateThreshold);
        window.addEventListener('scroll', handleScroll);

        // Initial check
        updateThreshold();
        handleScroll();

        return () => {
            window.removeEventListener('resize', updateThreshold);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls, threshold]);

    const scrollToTop = () => {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.button
            className="fixed bottom-0 right-0 p-10 z-30"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}>
            <Icon_ArrowUp />
        </motion.button>
    );
}

export default ScrollToTopButton;