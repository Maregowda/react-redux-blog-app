import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const SinglePagePost = () => {
    //retreive post id
    const {postId} = useParams();

    const post = useSelector((state) => selectPostById(state, Number(postId)));

    if(!post){
        return (
            <section>
                <h2>Post Not Found!</h2>
            </section>
        )
    }

  return (
    <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p className="postCredit">
            <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
            <PostAuthor userId = {post.userId} />
            <TimeAgo timeStamp={post.date}/>
        </p>
        <ReactionButton post={post} />
    </article>
  )
}

export default SinglePagePost
