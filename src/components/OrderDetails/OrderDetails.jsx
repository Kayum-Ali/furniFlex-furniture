import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../../context/BlogContextComponent";
import { getItem } from "../../utility/LocalStorage";
import { RxCross1 } from "react-icons/rx";



const OrderDetails = () => {
    const {blogProducts,loading} = useContext(BlogContext)
    const [orderDetails,setOrderDetails] = useState([])
    // if(loading){
    //     return <div>Loading...</div>
    // }
    useEffect(()=>{
        const storedItems = getItem()
        if(blogProducts.length > 0){
            const orderedItems = blogProducts.filter(product => storedItems.includes(product.id))
            setOrderDetails(orderedItems)
        }
    },[])
    return (
        <div className="container mx-auto">

            <hr className="mt-5"/>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5 px-3">
                <div className="col-span-1 md:col-span-2 lg:col-span-4">
                    <h2 className="lg:text-2xl font-bold py-3">An overview of your order</h2>
                    {
                        orderDetails.map(order=> {
                            return (
                                <div key={order.id} className="bg-[#FAFAFA] rounded-lg p-8 my-5">
                                    <div className="2nd-Wrapper flex justify-between gap-2">
                                        <div className="flex gap-5">
                                            <div className="flex gap-3 flex-col lg:flex-row">
                                                <div className=""><h2 className="border p-2 rounded-lg">-1+</h2></div>
                                                <div className="bg-[#EAEAEA] rounded-lg">
                                                    <img className="w-32 lg:w-24  " src={order.product_img} alt="" />
                                                </div>

                                            </div>
                                            <div>
                                                <h2 className="lg:text-2xl font-medium">{order.product_title}</h2>
                                            </div>

                                        </div>
                                        <div className="cross-icon">
                                            <RxCross1 className=""></RxCross1>
                                        </div>

                                    </div>
                                   
                                  <div className="flex justify-between py-4">
                                     <p>Quantity: {orderDetails.filter(item=>item.id===order.id).length}</p>
                                     <h2 className="text-xl font-bold">${order.product_price}</h2>
                                  </div>
                                    <hr className="mt-5"/>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-2 ">
                    <h2  className="lg:text-2xl font-bold py-3">Order Details</h2>
                    <div className="bg-[#FAFAFA] border-2 p-4 my-5 rounded-lg">
                        <div className="text-[#9C9C9C] text-xl font-medium">
                            <div className="flex justify-between">
                                <h2 className=" ">Subtotal</h2>
                                <p>$1071.00</p>
                            </div>
                            <div className="flex justify-between">
                                <h2 className=" ">Shipping</h2>
                                <p>Free</p>
                            </div>
                            <div className="flex justify-between">
                                <h2 className=" ">Estimated Tax</h2>
                                <p>$ -</p>
                            </div>
                            <hr className="my-5" />
                            <div className="flex justify-between text-black">
                                <h2 className=" ">Total</h2>
                                <p>$1071.00</p>
                            </div>

                        </div>

                    </div>
                    <button   className="px-5 py-2.5 flex items-center justify-center gap-3 rounded-lg w-full text-white bg-black mt-5 ">Go to checkout</button>

                </div>

            </div>

            
        </div>
    );
};

export default OrderDetails;