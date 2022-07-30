import "../styles/AdviceCard.css"
import "../styles/Dice.css";
import "../styles/AdviceContent.css";
import React from "react";
import Divider from "./Divider";
import Dice from "./Dice";
import AdviceContent from "./AdviceContent";

const AdviceCard = () => {
        return(
            <div className="advice-card" >
                <AdviceContent />
                <Divider />
                <Dice />
            </div>
        );
};

export default AdviceCard;