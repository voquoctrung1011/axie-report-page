import React from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import FillForm from "../../components/Report";

const ReportPage = () => {
  return (
    <div className="HomePage">
      <Header />
      <FillForm />
      <Footer />
    </div>
  );
};

export default ReportPage;
