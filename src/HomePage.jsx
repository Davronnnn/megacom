import React, { useEffect, useState } from "react";
import Gift from "./sections/Gifts";
import Main from "./sections/Main";
import WinnersList from "./sections/Winners";
import "./Home.scss";
import Registration from "./sections/Registration";
import Questions from "./sections/Question";
import Footer from "./sections/Footer";
import WOW from "wowjs";
import axios from "axios";
import FormSection from "./sections/Form";
const HomePage = () => {
    const [load, setLoad] = useState(false);
    const [text, setText] = useState([]);

    const [lang, setLang] = useState("uz");

    useEffect(() => {
        new WOW.WOW({
            live: false,
        }).init();
        axios
            .get("https://backend.megacom.win/translation/get-words")

            .then((res) => {
                setText(res.data);
            })
            .catch((err) => {});
    }, []);

    useEffect(() => {
        if (localStorage.getItem("lang")) {
            setLang(localStorage.getItem("lang"));
        }
        setLoad(false);
        console.log(lang);
    }, [load]);

    if (load) return <div></div>;
    return (
        <div>
            <Main
                load={load}
                setLoad={setLang}
                text={text}
                setLoad={setLoad}
                lang={lang}
            />
            <Gift text={text} lang={lang} />
            <WinnersList text={text} lang={lang} />
            <Registration text={text} lang={lang} />
            <Questions text={text} lang={lang} />
            <FormSection text={text} lang={lang} />
            <Footer text={text} lang={lang} />
        </div>
    );
};

export default HomePage;
