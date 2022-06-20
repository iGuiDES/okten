function Test(props) {

    console.log(props);
    const {itemName} = props;

    return (
        <div>
            <h2>{itemName}. This is my first component!</h2>
        </div>
    );
}

export default Test;