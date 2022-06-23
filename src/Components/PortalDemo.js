import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return (
    <div>
      {ReactDOM.createPortal(
        <h1>PortalDemo</h1>,
        document.getElementById("portal-root")
      )}
    </div>
  );
}

export default PortalDemo;
