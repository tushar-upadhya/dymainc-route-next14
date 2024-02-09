import Image from "next/image";
import style from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.imgContainer}>
          <Image src={"/post.png"} alt="post" fill className={style.img} />
        </div>

        <span className={style.date}>07/02/24</span>
      </div>

      <div className={style.bottom}>
        <h1 className={style.title}>{post.title}</h1>
        <p className={style.desc}>{post.body}</p>
        <Link className={style.link} href={`/blog/${post.id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
