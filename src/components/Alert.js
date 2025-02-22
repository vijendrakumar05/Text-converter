import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "45px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type1} warning alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type1)}</strong>: {props.alert.msg}
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Cloe" arial-label="close"></button> */}
        </div>
      )}
    </div>
  );
}

//video 15 till.
// import React from 'react'

// export default function Alert(props) {
//     const capitalize=(word) => {
//     const lower = word.toLowerCase();
//     return lower.charAt(0).toUpperCase()+lower.slice(1);
//   }
//   return (
//     props.alert && <div className={`alert alert-${props.alert.type1} warning alert-dismissible fade show`} role="alert">
//          <strong>{capitalize(props.alert.type1)}</strong>: {props.alert.msg}
// <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Cloe" arial-label="close"></button>
//     </div>
//   )
// }
