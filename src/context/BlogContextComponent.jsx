import  { createContext, useEffect, useState } from 'react';

export const BlogContext = createContext(null)
import PropTypes from 'prop-types';

const BlogContextComponent = ({children}) => {
    const [blogProducts, setBlogProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogProducts(data))
        setLoading(false)

    },[])

    const blogInfo = {
        blogProducts,
        setBlogProducts,
        loading,
    }

    return (
        <BlogContext.Provider value={blogInfo}>
            {children}
            
        </BlogContext.Provider>
    );
};

BlogContextComponent.propTypes = {
    children: PropTypes.node.isRequired,
}



export default BlogContextComponent;