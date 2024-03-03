import React from "react";
import { OrganizationList } from "@clerk/nextjs";
function Page() {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl={"/organization/:id"}
      afterSelectOrganizationUrl={"/organization/:id"}
    />
  );
}

export default Page;
