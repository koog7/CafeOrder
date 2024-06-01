interface OrderItem {
    name: string;
    count: number;
    price: number;
}

const OrderDetails = ({ order, handleRemoveItem }: { order: OrderItem[]; handleRemoveItem: (itemName: string) => void }) => {
    const totalPrice = order.reduce((total, item) => total + item.price * item.count, 0);

    return (
        <div>
            <fieldset>
                <legend>Order Details:</legend>
                {order.length === 0 ? (
                    <p>Order empty, add something</p>
                ) : (
                    <>
                        <ul>
                            {order.map((item) => (
                                <li key={item.name}>
                                    {item.name}: <span className={'pieces-amount'}>{item.count} pcs</span> - <span
                                    className={'pieces'}>{item.count * item.price} KGS</span>
                                    <button className={'btn-delete'} onClick={() => handleRemoveItem(item.name)}>❌</button>
                                </li>
                            ))}
                        </ul>
                        <p>Total Price: <span>{totalPrice} KGS</span></p>
                    </>
                )}
            </fieldset>
        </div>
    );
};

export default OrderDetails;