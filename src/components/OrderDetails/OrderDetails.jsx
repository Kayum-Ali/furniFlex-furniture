import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../../context/BlogContextComponent";
import { getItem } from "../../utility/LocalStorage";


const OrderDetails = () => {
    const {blogProducts} = useContext(BlogContext)
    const [orderDetails,setOrderDetails] = useState([])
    useEffect(()=>{
        const storedItems = getItem()
        if(blogProducts.length > 0){
            const orderedItems = blogProducts.filter(product => storedItems.includes(product.id))
            setOrderDetails(orderedItems)
        }
    },[])
    return (
        <div>
            <h2></h2>
            
        </div>
    );
};

export default OrderDetails;