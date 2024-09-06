

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
                <h2 className="font-bold text-2xl py-4 px-1">{product_title}</h2>
                <div>
                    <span className="text-sm text-gray-500"> ${discount_price}</span>
                    <span className="text-sm text-gray-400 ml-2"> ${product_price}</span>
                </div>

            </div>
            
        </div>
    );
};

export default BlogContent;