import React from 'react';
import Articles from '../Articles/Articles';
import Banner from '../Banner/Banner';
import CampInfrustructure from '../CampInfrastructure/CampInfrustructure';

import TourPrograms from '../TourPrograms/TourPrograms';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <TourPrograms></TourPrograms>
            <CampInfrustructure></CampInfrustructure>
            <Articles></Articles>


        </div>
    );
};

export default Home;