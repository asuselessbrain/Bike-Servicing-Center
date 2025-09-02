import Header from '@/components/shared/Header';
import NavBar from '@/components/shared/NavBar';
import React from 'react';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className="">
                <Header />
                <NavBar />
            </div>
            {children}
        </div>
    );
};

export default CommonLayout;