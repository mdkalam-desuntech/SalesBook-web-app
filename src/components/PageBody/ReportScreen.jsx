import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs";
import Staff from "./Staff";
import ContactGroup from "./ContactGroup";
import Period from "./Period";

const ReportScreen = () => {
  const [selectedContacts, setSelectedContacts] = useState([
    "Arghya Dutta",
    "+6",
  ]);
  const [totalContacts] = useState(1918);
  return (
    <div className="h-full ">
      <Breadcrumbs />
      <div className="flex-1  p-2 ">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-2">
          <Staff />
          <ContactGroup />
          <Period />
        </div>
      </div>
    </div>
  );
};

export default ReportScreen;
