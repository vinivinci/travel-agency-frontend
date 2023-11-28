import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../../Pages/Home';
import PackagesPage from '../../Pages/Packages';
import LoginPage from '../../Pages/Login';
import PackageSelected from '../../Pages/PackageSelected';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pacotes" element={<PackagesPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="pacotes/:id" element={<PackageSelected />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;