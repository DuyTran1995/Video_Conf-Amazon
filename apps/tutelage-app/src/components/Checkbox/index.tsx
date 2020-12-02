import React from 'react';

interface Props {
  isChecked: boolean;
  name: string;
  labelName: string;
  handleChangeChecked: (isCheck: boolean, name: string) => void;
}
const CheckBox = (props: Props) => {
  const { isChecked, name, labelName, handleChangeChecked } = props;
  const onChangeCheckBox = () => {
    handleChangeChecked(!isChecked, name);
  };
  return (
    <>
      <div className="form-check--custom">
        <label className="form-check-label">
          <input
            type="checkbox"
            className="d-none"
            checked={isChecked}
            name={name}
            onChange={onChangeCheckBox}
          />
          <span>{labelName}</span>
        </label>
      </div>
    </>
  );
};

export default CheckBox;
