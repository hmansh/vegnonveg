import React from 'react';
import Product from '../../Product/Product';

const useStyle = {
    mainContainer: {
        height: '100%',
        width: '100%',
        maxWidth: '1500px',
        margin: 'auto',
        padding: '1rem',
    },
    upperContainer: {
        height: '60%',
        width: '100%',
        display: 'flex'
    },
    lowerContainer: {
        height: '40%',
        width: '100%',
        display: "flex",
        overflow: 'scroll',
        padding: '1rem',
    },
    productCrousel: {
        height: '100%',
        width: '100%'
    },
    productDetails: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    information: {
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end'
    },
    companyName: {
        textTransform: 'uppercase',
        fontSize: '1.5rem',
        lineHeight: '1.2',
        letterSpacing: '0.007em',
    },
    productName: {
        fontSize: '2.2rem',
        lineHeight: '1.2',
        letterSpacing: '0.007em',
    },
    productPrice: {
        fontSize: '1.2rem'
    },
    productDesc: {
        fontSize: '0.9rem'
    },
    sizes: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        height: '20%',
    },
    sizeButtons: {
        height: '2rem',
        width: '5rem',
        background: '#fff',
        color: '#000',
        fontSize: '0.7rem',
        border: '3px solid #000'
    },
    options: {},
    button: {
        background: '#000',
        color: 'white',
        width: '100%',
        height: '2rem',
        fontSize: '0.7rem',
        margin: '0.5rem 0',
    },
}

export default function ProductPage(props) {
    React.useEffect(() => {
        console.log(props);
    }, []);
    return (
        <div style={useStyle.mainContainer}>
            <div style={useStyle.upperContainer}>
                <div style={useStyle.productCrousel}>

                </div>
                <div style={useStyle.productDetails}>
                    <div style={useStyle.information}>
                        <div style={useStyle.companyName}>Nike</div>
                        <div style={useStyle.productName}>Air Force 1 2020</div>
                        <div style={useStyle.productPrice}>$7,999</div>
                        <div style={useStyle.productDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Dignissimos tempore similique totam. Nam nesciunt libero 
                        consequuntur ipsam optio sint et quo culpa, error 
                        laudantium maiores, deserunt corporis aspernatur nemo dolorem.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Dignissimos tempore similique totam. Nam nesciunt libero 
                        consequuntur ipsam optio sint et quo culpa, error 
                        laudantium maiores, deserunt corporis aspernatur nemo dolorem.</div>
                    </div>
                    <div style={useStyle.sizes}>
                        {[5, 6, 7, 8, 9, 10, 11, 12].map(item => {
                            return <button style={useStyle.sizeButtons}>{item}</button>
                        })}
                    </div>
                    <div style={useStyle.options}>
                        <button style={useStyle.button}>Wishlist</button>
                        <button style={useStyle.button}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div style={useStyle.lowerContainer}>
                {/* <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/> */}
            </div>
        </div>
    )
}