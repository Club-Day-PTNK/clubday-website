import switchStyle from "../../styles/home/Switch.module.scss";

import classNames from "classnames/bind";

let cx = classNames.bind(switchStyle);

const ToggleSwitch = ({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  disabled,
}) => {
  function handleKeyPress(e) {
    if (e.keyCode !== 32) return;

    e.preventDefault();
    onChange(!checked);
  }

  return (
    <div className={switchStyle.toggleSwitch}>
      <input
        type="checkbox"
        name={name}
        className={switchStyle.checkbox}
        id={id}
        checked={checked}
        onChange={(e) => {}}
        disabled={disabled}
      />
      {id ? (
        <label
          className={switchStyle.label}
          htmlFor={id}
          tabIndex={disabled ? -1 : 1}
          onKeyDown={(e) => {
            handleKeyPress(e);
          }}
        >
          <span
            className={cx({ inner: true, disabled: disabled })}
            data-yes={optionLabels[0]}
            data-no={optionLabels[1]}
            tabIndex={-1}
          >
            <span
              className={cx({ switch: true, disabled: disabled })}
              tabIndex={-1}
            />
          </span>
        </label>
      ) : null}
    </div>
  );
};

// Set optionLabels for rendering.
ToggleSwitch.defaultProps = {
  optionLabels: ["", ""],
};

export default ToggleSwitch;
