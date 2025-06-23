import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className="drop-left">
                <label htmlFor="items">Browse Categories</label>
                <select name="items" id="items">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div className="title-middle">
                <h1>Imagesbazaar</h1>
            </div>
            <div className="nav-right">
                <button id="pricing">Pricing</button>
                <button id="sign">Sign up</button>
            </div>
        </div>
    )
};
export default Header
