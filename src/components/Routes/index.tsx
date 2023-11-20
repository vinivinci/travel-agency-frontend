import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../../Pages/Home';
import PackagesPage from '../../Pages/Packages';
import LoginPage from '../../Pages/Login';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pacotes" element={<PackagesPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;