import React from "react";
import { Button } from "antd";

const CtaWrap = () => {
  return (
    <div className="cta-wrap">
      <Button type="button" className="Button Button-anchor">
        ← Back
      </Button>
      <Button type="button" className="Button">
        <span>Create filter</span>
      </Button>
    </div>
  );
};

export default CtaWrap;
