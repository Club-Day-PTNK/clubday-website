import Button from "../Button";

import callToActionStyle from "../../styles/home/CallToAction.module.scss";

const CallToAction = ({}) => {
  return (
    <div className={callToActionStyle.container}>
      <h2>Sẵn sàng để tham gia?</h2>
      <ul className={callToActionStyle.buttonContainer}>
        <li>
          <Button
            type="link"
            content="Đăng ký"
            onClick={() => {}}
            href="#"
          ></Button>
        </li>
        <li>
          <Button
            type="button"
            content="Liên hệ"
            onClick={() => {}}
            href="#"
            important={true}
          ></Button>
        </li>
      </ul>
    </div>
  );
};

export default CallToAction;
