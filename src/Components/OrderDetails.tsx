const OrderDetails = ({ order }: { order: { name: string; count: number }[] }) => {
    return (
        <div>
            <fieldset className={'OrderField'}>
                <legend>Order Details: </legend>
                {order.length === 0 ? (
                    <p>Order empty, add something</p>
                ) : (
                    <ul>
                        {order.map((item) => (
                            <li key={item.name}>
                                {item.name}: {item.count}
                            </li>
                        ))}
                    </ul>
                )}
            </fieldset>
        </div>
    );
};

export default OrderDetails;