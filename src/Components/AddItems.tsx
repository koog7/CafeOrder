// import React from "react";
import hamburger from '/src/assets/hamburger.png';
import cheeseburger from '/src/assets/cheeseburger.png';
import fries from '/src/assets/fries.png';
import coffee from '/src/assets/coffee.png';
import tea from '/src/assets/tea.png';
import cola from '/src/assets/Cola.png';
import '/src/styles/orderStyles.css';

interface Order {
    name: string;
    priceForOne: number;
    img: string;
    className: string;
}

const ORDERINGS: Order[] = [
    { name: 'Hamburger', priceForOne: 80, img: hamburger, className: 'hamburger' },
    { name: 'Tea', priceForOne: 50, img: tea, className: 'tea' },
    { name: 'Cheeseburger', priceForOne: 90, img: cheeseburger, className: 'cheeseburger' },
    { name: 'Coffee', priceForOne: 70, img: coffee, className: 'coffee' },
    { name: 'Fries', priceForOne: 45, img: fries, className: 'fries' },
    { name: 'Cola', priceForOne: 40, img: cola, className: 'cola' },
];

const AddItems = () => {
    return (
        <div className="container">
            <fieldset>
                <legend>Add item:</legend>
                <div className="grid">
                    {ORDERINGS.map((item) => (
                        <a className="card" href={'#'} key={item.name}>
                            <img className="card-img" width="80px" src={item.img} alt={item.name}/>
                            <div className="card-content">
                                <p className="card-title">{item.name}</p>
                                <p className="card-price">Price: <span>{item.priceForOne} KGS</span></p>
                            </div>
                        </a>
                    ))}
                </div>
            </fieldset>
        </div>
    );
};

export default AddItems;