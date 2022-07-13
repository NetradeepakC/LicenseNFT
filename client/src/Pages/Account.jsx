import React from "react";
import MainContent from "../Account/MainContent";
import Details from "../Account/Details";
import Footer from "../Componenets/Footer"
import TopBar from "../Account/TopBar";

export default function Account() {
    
    return (
        <div className="flex flex-col">
            <TopBar />
            <MainContent />
            <Details />
            <Footer />
        </div>
    )

    
}
