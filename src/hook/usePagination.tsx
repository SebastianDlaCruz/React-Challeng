import { useState } from "react";

interface Props<T> {
  initialData: T[];
  itemsPerPage: number;
}

const usePagination = <T,>({ initialData, itemsPerPage }: Props<T>) => {
  const totalPages = Math.ceil(initialData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const backPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const items = initialData.slice(startIndex, endIndex);

  return {
    nextPage,
    backPage,
    items,
    currentPage,
  };
};

export default usePagination;
