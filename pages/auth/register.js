import Input from "../../components/Input";
import Button from "../../components/Button";
import registerStyles from "../../styles/Register.module.scss";
const Register = () => {
  return (
    <div className={registerStyles.container}>
      <div className={registerStyles.form}>
        <div className={registerStyles.title}>
          <span className={registerStyles.subtitle}>
            Cùng bắt đầu hành trình màu nhiệm nào!
          </span>
          <div>Tạo tài khoản của bạn</div>
        </div>
        <div className={registerStyles.inputContainer}>
          <Input label="Họ và tên" name="name" />
          <Input label="Email" name="email" />
          <Input label="Tạo mật khẩu" name="password" />
        </div>

        <div className={registerStyles.button}>
          <Button type="button" content="Bắt đầu thôi!" important={true} />
        </div>
      </div>
    </div>
  );
};
export default Register;
