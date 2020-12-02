import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import './style.scss';

interface Props {
  totalPage: number;
}

const CustomPagination = (props: Props) => {
  const { totalPage } = props;

  const showPaginationItem = (totalPage: number) => {
    const paginationItem = [];
    for (let i = 0; i < totalPage; i++) {
      paginationItem.push(
        <PaginationItem key={i} className="page-item" active={i + 1 === 1 ? true : false}>
          <PaginationLink className="page-link" href="#i">
            <span>{i + 1}</span>
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return paginationItem;
  };
  return (
    <>
      <div className="block-pagi mb-4">
        <Pagination
          aria-label="Page navigation example"
          className="pagination justify-content-center"
        >
          <PaginationItem className="page-item">
            <PaginationLink className="page-link" previous href="#!">
              <span className="ic-arrow-prev-01"></span>
            </PaginationLink>
          </PaginationItem>

          {showPaginationItem(totalPage)}

          <PaginationLink className="page-link" next href="#!">
            <span className="ic-arrow-next-01"></span>
          </PaginationLink>
        </Pagination>
      </div>
    </>
  );
};

export default CustomPagination;
