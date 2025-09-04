import Header from '@/components/shared/Header';
import NavBar from '@/components/shared/NavBar';
import React from 'react';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className='h-[166px]'>
                <div className="fixed w-full shadow-md shadow-violet-100 pb-2 px-2 z-50">
                    <Header />
                    <NavBar />
                </div>
            </div>
            {children}
        </div>
    );
};

export default CommonLayout;