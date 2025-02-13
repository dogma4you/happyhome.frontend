"use client";
import React, { Fragment } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Typography from "@/components/ui/typography";

const TableWrapper = ({ className, children, headerData = [] }) => {
  return (
    <Table className={className}>
      <TableHeader>
        {headerData && (
          <TableRow>
            {headerData.map((title) => {
              return <TableHead>{title}</TableHead>;
            })}
          </TableRow>
        )}
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  );
};

const DataTable = ({
  data = [],
  headerData,
  tableClassName,
  renderContent = () => {},
  renderMobileContent = () => {},
}) => {
  const { isMobile } = useWindowSize();
  const TableContainer = isMobile ? Fragment : TableWrapper;

  if (isMobile) {
    if (data.length === 0) return <div>No Data</div>;
    return (
      <div className={"gap-y-4 flex flex-col"}>
        {data.map((tableItemData) => renderMobileContent(tableItemData))}
      </div>
    );
  }

  return (
    <TableContainer className={tableClassName} headerData={headerData}>
      {data.length ? (
        data.map((tableItemData) => {
          return renderContent(tableItemData);
        })
      ) : (
        <tr colSpan={100}>
          <Typography variant={"body1"} className={"text-center"}>
            No Data
          </Typography>
        </tr>
      )}
    </TableContainer>
  );
};

export default DataTable;
