import React from "react";

// import classnames from 'classnames';
// import { usePagination, DOTS } from './usePagination';
import { DOTS } from "./UsePagination";
import UsePagination from "./UsePagination";
import { Box, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
type Props = {
  onPageChange: any;
  totalCount: any;
  siblingCount: number;
  currentPage: any;
  pageSize: any;
};

const Pagination = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    // className,
  } = props;

  const paginationRange: any = UsePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <>
      {matches ? (
        <Stack direction="row" display="block">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Button
              variant="text"
              disabled={currentPage === 1}
              onClick={onPrevious}
            >
              Previous
            </Button>
            <Button
              variant="text"
              disabled={currentPage === lastPage}
              onClick={onNext}
            >
              Next
            </Button>
          </Box>
          {paginationRange.map((pageNumber: any) => {
            if (pageNumber === DOTS) {
              return <Button>&#8230;</Button>;
            }

            return (
              <Button
                sx={{
                  fontWeight: `${
                    pageNumber === currentPage ? "bold" : undefined
                  }`,
                }}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </Button>
            );
          })}
        </Stack>
      ) : (
        <Stack direction="row">
          <Button
            variant="text"
            disabled={currentPage === 1}
            onClick={onPrevious}
          >
            Previous
          </Button>
          {paginationRange.map((pageNumber: any) => {
            if (pageNumber === DOTS) {
              return <Button>&#8230;</Button>;
            }

            return (
              <Button
                sx={{
                  fontWeight: `${
                    pageNumber === currentPage ? "bold" : undefined
                  }`,
                }}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </Button>
            );
          })}
          <Button
            variant="text"
            disabled={currentPage === lastPage}
            onClick={onNext}
          >
            Next
          </Button>
        </Stack>
      )}
    </>
  );
};

export default Pagination;
