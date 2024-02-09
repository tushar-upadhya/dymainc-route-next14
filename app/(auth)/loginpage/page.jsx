import LoginForm from "@/components/loginform/LoginForm";
import style from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <form action={""}>
          <button className={style.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
