import React, { useEffect } from 'react';
import { Testimonials } from '../components/Testimonials';

export const TestimonialsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <Testimonials />
        </div>
    );
};
