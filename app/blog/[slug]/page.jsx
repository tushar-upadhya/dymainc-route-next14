import Image from "next/image";
import style from "./singlePost.module.css";

const getData = async (slug) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${slug}`
    );

    if (!res.ok) {
      throw Error("Error fetch");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);

  // console.log("params:", params);
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        {/* <Image className={style.img} src={"/"} fill alt="singlePost" /> */}
      </div>

      <div className={style.textContainer}>
        <h1 className={style.title}>Title</h1>

        <div className={style.detail}>
          <Image className={style.avatar} src={"/"} fill alt="singlePost" />

          <div className={style.detailText}>
            <span className={style.detailTitle}>{post.title}</span>
            <span className={style.detailValue}>developer</span>
          </div>

          <div className={style.detailText}>
            <span className={style.detailTitle}>Published</span>
            <span className={style.detailValue}>07/02/24</span>
          </div>
        </div>

        <div className={style.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
