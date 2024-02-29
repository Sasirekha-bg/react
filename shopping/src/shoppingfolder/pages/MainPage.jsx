import { useState } from "react";
import Banner from "../components/Banner";
import Collections from "../components/Collections";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Gents } from "../data";

export default function MainPage(){
    let [gentsFashion,setGentsFashion] = useState(Gents);
    return(
        <div>
            <Header />
            <Banner />
            <Collections gentsFashion={gentsFashion}/>
            <Footer />
        </div>
    )
}