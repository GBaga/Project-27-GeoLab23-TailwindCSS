import React from "react";

function Button(props) {
  return (
    <button className="w-[128px] h-[52px] bg-[rgba(76,175,79,1)] text-[#fff] rounded-[4px]">
      {props.btnText}
    </button>
  );
}

export default Button;
