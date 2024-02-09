import PostCard from "@/components/postCard/PostCard";
import style from "./blog.module.css";

const getData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw Error("Error fetch");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const BlogPage = async () => {
  const posts = await getData();

  return (
    <div className={style.container}>
      {posts.map((post) => (
        <div key={post.id} className={style.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;

// 2 20
