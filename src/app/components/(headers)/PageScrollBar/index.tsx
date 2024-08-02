'use client'
import { useScroll, motion } from "framer-motion";


type Props = {

};

const PageScrollBar: React.FC<Props> = ({ }) => {
    const { scrollYProgress } = useScroll();


    return (
        <>
        <motion.div
                style={{
                    scaleX: scrollYProgress,
                    transformOrigin: "left",
                    background: "#ffa144",
                    position: "sticky",
                    top: 0,
                    width: "100%",
                    height: "3px",
                    zIndex: 999
                }}
                
            />
        </>
    );
};

export default PageScrollBar;