import React, { useState } from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import "./Main.scss";
import card1 from "../../assets/header-card1.png";
import star from "../../assets/star.png";
const Main = ({ load, setLoad, text }) => {
    var lang = localStorage.getItem("lang");

    return (
        <section className="main-section">
            <Layout>
                <Navbar load={load} setLoad={setLoad} text={text} />
                <button className="header-card1">
                    <img src={card1} alt="icon" />
                    <div>
                        <p>12 автомобилей </p>
                        <h4>KIA RIO</h4>
                    </div>
                </button>
                <button className="header-card2">
                    <div>
                        <h3>20 000 000 сум приз!</h3>
                    </div>
                    <div className="main">
                        <img src={star} alt="icon" />
                        <p>4.9 </p>
                        <span>(15k участников)</span>
                    </div>
                </button>
                <div className="main-section__title">
                    <h1>
                        <span
                            className="wow bounceInUp"
                            data-wow-duration="0.5s"
                            data-wow-delay="0.2s"
                        >
                            {lang == "uz" ? text[5]?.uz_text : ""}
                            {lang == "ru" ? text[5]?.ru_text : ""}
                            {lang == "en" ? text[5]?.en_text : ""}
                            {lang == "kz" ? text[5]?.kyr_text : ""}
                        </span>
                    </h1>
                    <p
                        className="wow fadeInUp"
                        data-wow-duration="0.6s"
                        data-wow-delay="0.3s"
                    >
                        {lang == "uz" ? text[6]?.uz_text : ""}
                        {lang == "ru" ? text[6]?.ru_text : ""}
                        {lang == "en" ? text[6]?.en_text : ""}
                        {lang == "kz" ? text[6]?.kyr_text : ""}
                    </p>
                    <div className="main-section__buttons">
                        <button>
                            {lang == "uz" ? text[7]?.uz_text : ""}
                            {lang == "ru" ? text[7]?.ru_text : ""}
                            {lang == "en" ? text[7]?.en_text : ""}
                            {lang == "kz" ? text[7]?.kyr_text : ""}
                        </button>
                        <span>
                            <p>
                                {lang == "uz" ? text[8]?.uz_text : ""}
                                {lang == "ru" ? text[8]?.ru_text : ""}
                                {lang == "en" ? text[8]?.en_text : ""}
                                {lang == "kz" ? text[8]?.kyr_text : ""}
                            </p>
                            <p>(78) 150-24-35</p>
                        </span>
                    </div>
                </div>
            </Layout>
        </section>
    );
};

export default Main;
