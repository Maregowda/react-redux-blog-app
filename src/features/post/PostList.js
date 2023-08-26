import { useSelector} from "react-redux";
import { getPostsError, getPostsStatus, selectPostIds} from "./postSlice";

import PostsExcerpt from "./PostsExcerpt";


const PostList = () => {

    const orderedPosts = useSelector(selectPostIds)
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    let content;
    if(postStatus === 'loading') {
        content = <p>"Loading..."</p>
    } else if(postStatus === 'succeeded') {
        content = orderedPosts.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    }else if(postStatus === 'failed'){
        content = <p>{error}</p>;
    }
    
  return (
    <section>
        {content}
    </section>
  )
}

export default PostList
