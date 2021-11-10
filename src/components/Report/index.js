import React from "react";
import AllAxieStatsForm from "./components/AllAxieStatsForm";
import AllCardStatsForm from "./components/AllCardStatsForm";
import AllPriceForm from "./components/AllPriceForm";
import AllPurityForm from "./components/AllPurityForm";
import BreedAndClassForm from "./components/BreedAndClassForm";
import ErrorMessagesWrap from "./components/ErrorMessagesWrap";
import FormSection from "./components/FormSection";
import CtaWrap from "./components/CtaWrap";
import FooterMessage from "./components/FooterMessage";

const ReportPage = () => {
  return (
    <div className="FilterForm">
      <AllPriceForm />
      <BreedAndClassForm />
      <AllAxieStatsForm />
      <AllCardStatsForm />
      <AllPurityForm />
      <FormSection />
      <FooterMessage />
      <CtaWrap />
      <ErrorMessagesWrap />
    </div>
  );
};

export default ReportPage;
