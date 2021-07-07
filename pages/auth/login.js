import Input from "../../components/Input";
import Link from "next/link";
import Button from "../../components/Button";
import loginStyles from "../../styles/Login.module.scss";
const Login = () => {
  return (
    <div className={loginStyles.container}>
      <div className={loginStyles.form}>
        <div className={loginStyles.title}>
          <span className={loginStyles.subtitle}>Chào mừng</span>
          Đăng nhập
        </div>
        <div className={loginStyles.inputContainer}>
          <Input label="Email" name="email" />
          <Input label="Mật khẩu" name="password" />
        </div>
        <div className={loginStyles.linkContainer}>
          <Link href="#">
            <a>Quên mật khẩu?</a>
          </Link>
          <Link href="#">
            <a>Đăng ký</a>
          </Link>
        </div>
        <div className={loginStyles.buttonContainer}>
          <Button type="button" content="Đăng nhập" important={true}></Button>
          <Button type="button" content="Sử dụng tài khoản Google" important={true}></Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
