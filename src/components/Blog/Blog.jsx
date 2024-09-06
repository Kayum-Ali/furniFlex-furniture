import { useContext, useState } from "react";
import { BlogContext } from "../../context/BlogContextComponent";
import BlogContent from "../BlogContent/BlogContent";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";





const Blog = () => {
  const { blogProducts, loading, } = useContext(BlogContext);
  const [dataLength, setDataLength] = useState(6);
  if (loading) {
    return <h1 className="text-red-700 text-center">Loading...</h1>;
  }

  return (
    <div className="container mx-auto">
      <hr className="mt-5" />
      <h2 className="text-center text-3xl font-bold py-5">
        {" "}
        Hasan Furniture {blogProducts.length}
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-8 lg:grid-cols-12 gap-5 pb-12">
        {/* sidebar */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 border-r-2 pr-4">
          <div className="font-bold space-y-4">
            <button className="px-5 py-2.5 hover:bg-black bg-base-300 rounded-lg w-full hover:text-white text-black ">
              Rocking chair
            </button>

            <button className="px-5 py-2.5 hover:bg-black bg-base-300 rounded-lg w-full hover:text-white text-black ">
              Side chair
            </button>

            <button className="px-5 py-2.5 hover:bg-black bg-base-300 rounded-lg w-full hover:text-white text-black ">
              Lounge chair
            </button>
          </div>
        </div>
        <div className="col-span-2 md:col-span-6 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogProducts.slice(0, dataLength).map((product) => (
            <BlogContent key={product.id} product={product}></BlogContent>
          ))}
        </div>
      </div>

      <div
        className={`text-center pl-44 pb-5 ${dataLength === 15 && "hidden"}`}
      >
        <button
          onClick={() => setDataLength(blogProducts.length)}
          className="btn btn-warning  text-xl"
        >
          Show All
        </button>
      </div>

      <div className="flex justify-center pl-44 pb-5">
       
            <div className="join ">
            
                <button onClick={()=> setDataLength(6)} className="join-item btn">  <FaChevronLeft ></FaChevronLeft></button>
                <button className={`join-item btn ${dataLength === 6 && 'btn-active'}`}>1</button>
                <button className={`join-item btn ${dataLength === 15 && 'btn-active'}`}>2</button>
                <button className="join-item btn">3</button>
                <button className="join-item btn">4</button>
                <button onClick={()=>setDataLength(blogProducts.length)} className="join-item btn"><FaChevronRight></FaChevronRight></button>
            </div>
      </div>

   
    </div>
  );
};

export default Blog;
