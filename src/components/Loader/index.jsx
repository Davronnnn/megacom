import React from "react";
import { CircleLoader } from "react-spinners";

const Index = ({ mini = false }) => {
    return (
        <div className={"d-flex justify-content-center align-items-center"} style={{height:"100vh"}}>
            <CircleLoader size={mini ? 200 : 300} loading={true} color={"#00c642"} />
        </div>
    );
};

export default Index;