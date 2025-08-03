import type { FC } from "react";
import { CompanyInfoTop } from "../components/CompanyInfo-Top";
import { CompanyInfoMiddle } from "../components/CompanyInfo-Middle";

export const CompanyPage:FC = () => {
    return (
        <>
          <CompanyInfoTop />
          <CompanyInfoMiddle />
        </>
    )
}