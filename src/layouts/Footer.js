import React from "react";
import { Button } from "antd";

const ReportPage = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <p>Made with ❤️ by a bunch of over-tired developers</p>
        <Button type="button" className="Button Button-anchor">
          Give feedback
        </Button>
      </div>
      <div className="donations-wrap">
        <p>Donations welcome! 💰</p>
        <p className="address">
          ronin:759ab033ea2f33f5e0630f04b56423d5d3e0e6ac
        </p>
      </div>
    </footer>
  );
};

export default ReportPage;
