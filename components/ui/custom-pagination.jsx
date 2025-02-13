import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const CustomPagination = ({ currentPage, paginationLength, onChangePage }) => {
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const handleClickNext = () => {
    setPage((prev) => {
      const newPage = prev + 1 <= paginationLength ? prev + 1 : prev;
      onChangePage(newPage);
      return newPage;
    });
  };

  const handleClickPrev = () => {
    setPage((prev) => {
      const newPage = prev - 1 >= 1 ? prev - 1 : prev;
      onChangePage(newPage);
      return newPage;
    });
  };

  const generatePaginationLinks = () => {
    const links = [];

    // Add first page link
    links.push(
      <PaginationItem key={1}>
        <PaginationLink
          href="#"
          isActive={page === 1}
          onClick={() => onChangePage(1)}
        >
          1
        </PaginationLink>
      </PaginationItem>,
    );

    if (page > 3) {
      links.push(
        <PaginationItem key="start-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>,
      );
    }

    const startPage = Math.max(2, page - 1);
    const endPage = Math.min(paginationLength - 1, page + 1);

    for (let i = startPage; i <= endPage; i++) {
      links.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={page === i}
            onClick={() => onChangePage(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    if (page < paginationLength - 2) {
      links.push(
        <PaginationItem key="end-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>,
      );
    }

    links.push(
      <PaginationItem key={paginationLength}>
        <PaginationLink
          href="#"
          isActive={page === paginationLength}
          onClick={() => onChangePage(paginationLength)}
        >
          {paginationLength}
        </PaginationLink>
      </PaginationItem>,
    );

    return links;
  };

  return (
    <Pagination className="mt-6">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={handleClickPrev} />
        </PaginationItem>
        {generatePaginationLinks()}
        <PaginationItem>
          <PaginationNext href="#" onClick={handleClickNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
