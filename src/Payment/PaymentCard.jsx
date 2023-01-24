import TextFields from "../Login/TextFields";
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import CardInfoFields from "./CardInfoFields";
import UseRadioGroup from './UseRadioGroup'
import { Link } from "react-router-dom";
import SuccessMess from "../Successfull/SuccessMess";


const PaymentCard = () => {
    return(
        <>
            <h2>Payment</h2>
            <div className="userInfo">
                <TextFields type="text" lable = "First name *" className='textField' required/>
                <TextFields type="text" lable = "Last name *" className='textField' required/>
                <TextFields type="text" lable = "Email *" className='textField' required/>
            </div>
            <div className="paymentMode">
                {/*
                    https://mui.com/material-ui/react-radio-button/#standalone-radio-buttons
                */}
                <UseRadioGroup />
            </div>
            <div className="cardDetails">
                <CardInfoFields labelName="Name on card" type="text" className="cardInfoField" required/>
                <p className="fullNameWarning">Full name as displayed on card</p>
                <CardInfoFields labelName="Card Number" type="number" className="cardInfoField" required />
                <CardInfoFields labelName="Expiration" type="text" className="cardInfoField" required />
                <CardInfoFields labelName="CVV" type="number" className="cardInfoField" required />
            </div>
            <Link to="/success" element= <SuccessMess />>
                <button className="payBtn">Proceed to pay</button>
            </Link>
            
        </>
    )
}

export default PaymentCard;