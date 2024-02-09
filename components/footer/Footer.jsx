import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>tushar upadhyay</div>
      <div className={style.text}>
        Lama creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
