import React, { useEffect } from 'react';
import { Contact } from '../components/Contact';

export const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <Contact />
        </div>
    );
};
