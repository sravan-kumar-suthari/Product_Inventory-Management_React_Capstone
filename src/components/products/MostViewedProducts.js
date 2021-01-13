import React from "react";
import {Line} from "react-chartjs-2";
import {connect} from "react-redux";

const mostViewedProducts=props=>{
//console.log(props.productsList);

let productsList=[...props.productsList]
 
let products = productsList.sort((x, y) => (x.views < y.views ? 1 : -1)).slice(0, 3);
 //console.log(products);

    const data={
        labels : products.map(product=>product.productName),
        datasets: [
            {
                label : "Most Viewed products",
                data : products.map(product=>product.views),
                borderColor : ['rgba(255,206,86,0.2'],
                backgroundColor:['rgba(255,206,86,0.2'],
                pointBackgroundColor:'rgba(255,206,86,0.2)',
                pointBorderColor:'rgba(255,206,86,0.2)'
            }
        ]
    }

    return(
        <div style={{"padding" : "10px"}}>

        <Line data={data}/>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        productsList : state.productReducer
    }
}

export default connect(mapStateToProps)(mostViewedProducts);