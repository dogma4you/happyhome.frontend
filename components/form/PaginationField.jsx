import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationField = ({
  totalCount,
  pagePerView,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCount / pagePerView);

  const handlePageClick = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPaginationItems = () => {
    const pages = [];
    const startPage = Math.max(2, currentPage - 2); // Start from page 2, since page 1 is always displayed
    const endPage = Math.min(totalPages - 1, currentPage + 2); // End before the last page

    // Always display the first page
    pages.push(
      <PaginationItem key={1} onClick={() => handlePageClick(1)}>
        <PaginationLink isActive={currentPage === 1}>1</PaginationLink>
      </PaginationItem>,
    );

    // Add ellipsis if there's a gap between the first page and the start of the visible range
    if (startPage > 2) {
      pages.push(
        <PaginationItem>
          <PaginationEllipsis key="start-ellipsis" />
        </PaginationItem>,
      );
    }

    // Display pages in the current range
    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <PaginationItem key={page} onClick={() => handlePageClick(page)}>
          <PaginationLink isActive={currentPage === page}>
            {page}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    // Add ellipsis if there's a gap between the end of the visible range and the last page
    if (endPage < totalPages - 1) {
      pages.push(
        <PaginationItem>
          <PaginationEllipsis key="end-ellipsis" />
        </PaginationItem>,
      );
    }

    // Always display the last page
    if (totalPages > 1) {
      pages.push(
        <PaginationItem
          key={totalPages}
          onClick={() => handlePageClick(totalPages)}
        >
          <PaginationLink isActive={currentPage === totalPages}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return pages;
  };

  return (
    <Pagination className="mt-6">
      <PaginationContent>
        <PaginationItem
          disabled={currentPage === 1}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          <PaginationPrevious href="#" />
        </PaginationItem>
        {renderPaginationItems()}
        <PaginationItem
          disabled={currentPage === totalPages}
          onClick={() => handlePageClick(currentPage + 1)}
        >
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationField;
