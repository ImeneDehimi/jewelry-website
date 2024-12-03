import './Post.css';

const Post = ({image}) => {
    return (
        <div className='post'>
            <img src={image} alt="" />
            <div className="text">
            <p>neckless</p>
            <h3>2500DA</h3>
            <button >Details</button>
            </div>
        </div>
    );
};

export default Post;