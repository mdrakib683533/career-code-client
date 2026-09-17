import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {

    
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback = 'loading'>
                <HotJobs></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;