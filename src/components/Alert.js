import React from "react";

function Alert(props) {

  const upperCase=(word)=>{
    let captile=word[0].toUpperCase() + word.slice(1)
    return captile
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{upperCase(props.alert.type)} :</strong> {props.alert.msg}
      
    </div>
  );
}

export default Alert;
