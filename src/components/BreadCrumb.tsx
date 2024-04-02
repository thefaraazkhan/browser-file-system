import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";

interface BreadCrumbProps {
  breadCrumbs: string[];
  setBreadCrumbs: React.Dispatch<React.SetStateAction<string[]>>;
}

const BreadCrumb = ({ breadCrumbs, setBreadCrumbs }: BreadCrumbProps) => {
  const handleBreadCrumb = (index: number) => {
    setBreadCrumbs((prevValues) => prevValues.splice(0, index + 1));
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadCrumbs.slice(0, breadCrumbs.length - 1).map((crumb, i) => (
        <p
          className="cursor-pointer hover:underline"
          key={crumb + i}
          onClick={() => handleBreadCrumb(i)}
        >
          {crumb}
        </p>
      ))}
      <Typography color="text.primary">
        {breadCrumbs[breadCrumbs.length - 1]}
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumb;
