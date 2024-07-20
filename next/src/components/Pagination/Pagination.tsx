import React, { FC, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getLimitProducts } from "@/store/features/ProductsThunk";
import { setPageSw } from "@/store/reducers/ProductsSlice";

const Pagination: FC = () => {
  const [pageCount, setPageCount] = useState<number>(0);
  const { products } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const handlePageClick = (event: any) => {
    dispatch(setPageSw(event.selected + 1));
    dispatch(getLimitProducts({ page: event.selected + 1 }));
  };

  useEffect(() => {
    setPageCount(Math.ceil(products.length / 10));
  }, [products]);

  return (
    <div className="mt-[160px] pb-[60px]">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="pagination flex justify-center text-[16px] gap-[10px]"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active bg-[#E2E8F0] px-[6px]"
      />
    </div>
  );
};

export default Pagination;
