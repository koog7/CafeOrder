import { useState } from 'react';
import './App.css';
import AddItems from "./Components/AddItems.tsx";
import OrderDetails from "./Components/OrderDetails.tsx";

interface OrderItem {
    name: string;
    count: number;
    price: number;
}

function App() {

    const [order, setOrder] = useState<OrderItem[]>([]);

    const handleAddItem = (itemName: string, itemPrice: number) => {
        setOrder(prevOrder => {
            const existingItem = prevOrder.find(item => item.name === itemName);
            if (existingItem) {
                return prevOrder.map(item =>
                    item.name === itemName ? { ...item, count: item.count + 1 } : item
                );
            } else {
                return [...prevOrder, { name: itemName, count: 1, price: itemPrice }];
            }
        });
    };

    const handleRemoveItem = (itemName: string) => {
        setOrder(prevOrder => prevOrder.filter(item => item.name !== itemName));
    };

  return (
    <>
        <div className={'cafe-block'}>
            <OrderDetails order={order} handleRemoveItem={handleRemoveItem} />
            <AddItems onAddItem={handleAddItem} />
        </div>
    </>
  );
}

export default App;
