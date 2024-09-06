import PropTypes from 'prop-types';

const BlogContent = ({product}) => {
    // const key = Object.keys(product).join(',');
    // console.log(key)
    const {id,product_title,product_img,product_price,discount_price,product_description} = product;
    return (
        <div>
            <div className="border p-5 rounded-lg">
                <div className="bg-[#F2F2F2] rounded-lg p-10">
                    <img src={product_img} alt="" className="w-full h-48 object-cover" />
                </div>
                <h2 className="font-bold text-2xl py-4 px-1">{product_title.slice(0,22)}</h2>
                <div className="px-1">
                    <span className=" text-gray-900 font-bold"> ${discount_price}</span>
                    <span className="text-sm line-through font-bold text-gray-500 ml-2"> ${product_price}</span>
                    <span className="text-red-500 text-xl font-bold px-3">30% OFF</span>
                </div>
                <p className="opacity-85 px-1 pt-5">{product_description.slice(0,70)}</p>
                <button className="px-5 py-2.5 rounded-lg w-full text-white bg-black mt-5 ">Add to Cart</button>

            </div>
            
        </div>
    );
};

BlogContent.propTypes = {
    product: PropTypes.object.isRequired,
};

export default BlogContent;