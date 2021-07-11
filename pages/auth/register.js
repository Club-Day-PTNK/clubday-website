import Input from "../../components/Input";
import Button from "../../components/Button";
const Register = () => {
  return (
    <div>
      <div>
        <div>
          <div>Cùng bắt đầu hành trình màu nhiệm nào!</div>
          <br />
          <div>Tạo tài khoản của bạn</div>
        </div>
        <div>
          <Input label="Họ và tên" name="name" />
          <Input label="Lớp của bạn" name="class" />
          <Input label="Email" name="email" />
          <Input label="Tạo mật khẩu" name="password" />
        </div>
      </div>
      <div>
        <Button type="button" content="Bắt đầu thôi!" important={true}/> 
      </div>
    </div>
  );
};
export default Register;
