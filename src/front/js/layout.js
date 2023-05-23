import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import injectContext from "./store/appContext";

import Navbar from "./component/Navbar";
import Home from "./pages/home";
import AvatarDescription from "./pages/AvatarDescription";
import BendingDescription from "./pages/BendingDescription";
import CharacterDescription from "./pages/CharacterDescription";
import CitiesDescription from "./pages/CitiesDescription";
import FurryFriendsDescription from "./pages/FurryFriendsDescription";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<AvatarDescription />} path="/avatar_description/:id" />
                        <Route element={<BendingDescription />} path="/bending_description/:id" />
                        <Route element={<CharacterDescription />} path="/character_description/:id" />
                        <Route element={<CitiesDescription />} path="/cities_description/:id" />
                        <Route element={<FurryFriendsDescription />} path="/furry_friends_description/:id" />

                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
