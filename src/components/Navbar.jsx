import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.scss";
import { useEffect, useState } from "react";

const Navbar = ({ load, setLoad, text }) => {
    const [lang, setLang] = useState(localStorage.getItem("lang"));

    function translation() {
        var lang_select = document.getElementById("lang");
        localStorage.setItem("lang", lang_select.value);
        setLang(lang_select.value);
		setLoad(true)
    }

    useEffect(() => {
        localStorage.setItem("lang", "en");
    }, []);

    return (
        <nav>
            <img src={logo} alt="Megacom" />
            <div className="nav-links">
                {lang === "uz" ? (
                    <>
                        <p>{text[0]?.uz_text}</p>
                        <p>{text[1]?.uz_text}</p>
                        <p>{text[2]?.uz_text}</p>
                        <p>{text[3]?.uz_text}</p>
                        <p>{text[4]?.uz_text}</p>
                    </>
                ) : (
                    ""
                )}
				{lang === "en" ? (
                    <>
                        <p>{text[0]?.en_text}</p>
                        <p>{text[1]?.en_text}</p>
                        <p>{text[2]?.en_text}</p>
                        <p>{text[3]?.en_text}</p>
                        <p>{text[4]?.en_text}</p>
                    </>
                ) : (
                    ""
                )}
				{lang === "kz" ? (
                    <>
                        <p>{text[0]?.kyr_text}</p>
                        <p>{text[1]?.kyr_text}</p>
                        <p>{text[2]?.kyr_text}</p>
                        <p>{text[3]?.kyr_text}</p>
                        <p>{text[4]?.kyr_text}</p>
                    </>
                ) : (
                    ""
                )}
				{lang === "ru" ? (
                    <>
                        <p>{text[0]?.ru_text}</p>
                        <p>{text[1]?.ru_text}</p>
                        <p>{text[2]?.ru_text}</p>
                        <p>{text[3]?.ru_text}</p>
                        <p>{text[4]?.ru_text}</p>
                    </>
                ) : (
                    ""
                )}

                <select name="" id="lang" onChange={() => translation()} value={lang}>
                    <option value="uz">uz</option>
                    <option value="ru">ru</option>
                    <option value="en">en</option>
                    <option value="kz">kz</option>
                </select>
            </div>
        </nav>
    );
};

export default Navbar;
