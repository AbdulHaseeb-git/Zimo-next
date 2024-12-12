import Header from '@/app/components/header/Header';
import PostDetailBody from '@/app/components/posts/PostDetailBody';
const PostDetail = async ({ params }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await response.json();

  return (
    <>
      <Header />
      <PostDetailBody post={post}/>
    </>
  );
};
export async function generateStaticParams() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`); 
  const posts = await response.json();
  return posts.map(post => ({
    id: post.id.toString(), 
  }));
}
export default PostDetail;


