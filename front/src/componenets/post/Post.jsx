import './Post.css';

import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Post = ({product:{name,price,img, id}}) => {

    return (
        <div className='post'>
            <div className="post-img">
            <img src={img} alt="" />
            </div>
            <div className="text">
            <p>{name}</p>
            <h3>{price} DA</h3>
            <Link to={`/post/${id}`}><button>Détails</button></Link>
            </div>
        </div>
    );
};

export default Post;