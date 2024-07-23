import HorizontalCard from '@/app/components/(blog elements)/BlogPostHorizontalCard';
import * as staticPosts from '@/app/utils/staticPosts'



async function HybridBlogPost() {
    const postData = await staticPosts.LoadPostDBJSON();


    

    //console.log(postData);

    return (
        <div className="container px-6 py-10 mx-auto">
            {
                postData.map((post) => (
                    <HorizontalCard key={post.id} {...post} />
                ))
            }
            </div>
    )
}

export default HybridBlogPost;