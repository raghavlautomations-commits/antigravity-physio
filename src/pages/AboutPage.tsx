import React, { useEffect } from 'react';
import { About } from '../components/About';

export const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <About />
        </div>
    );
};
