import { useContext, useState } from 'react';
import './Explore.css'
import { AppContext } from '../../context/AppContext';
import DisplayCategory from '../../components/DisplayCategory/DisplayCategory';
import DisplayItem from '../../components/DisplayItem/DisplayItem';
import CustomerForm from '../../components/CustomerForm/CustomerForm';
import CartItem from '../../components/CartItem/CartItem';
import CartSummary from '../../components/CartSummary/CartSummary';

const Explore = () => {
    const {categories} = useContext(AppContext);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    return (
        <div className="explore-container text-light">
            <div className="left-column">
                <div className="first-row" style={{overflowY:'auto'}}>
                    <DisplayCategory 
                    selectedCategory = {selectedCategory}
                    setSelectedCategory = {setSelectedCategory}
                    categories ={categories}></DisplayCategory>
                </div>
                <hr className="horizontal-line"></hr>
                <div className="second-row" style={{overflowY:'auto'}}>
                    <DisplayItem selectedCategory={selectedCategory}></DisplayItem>
                </div>
            </div>
 
            <div className="right-column flex flex-column">
                <div className="customer-form-container" style={{height: '15%'}}>
                    <CustomerForm customerName={customerName}
                    mobileNumber={mobileNumber}
                    setMobileNumber={setMobileNumber}
                    setCustomerName={setCustomerName}>
                    </CustomerForm>
                </div>

                <hr className="my-3 text-light"></hr>
                <div className="cart-item-container" style={{height:'55%', overflowY:'auto'}}>
                    <CartItem></CartItem>
                </div>

                <div className="cart-summary-container" style={{height:'30%'}}>
                    <CartSummary
                    customerName={customerName}
                    mobileNumber={mobileNumber}
                    setMobileNumber={setMobileNumber}
                    setCustomerName={setCustomerName}>
                    </CartSummary>
                </div>
            </div>
        </div>
    )
}

export default Explore;