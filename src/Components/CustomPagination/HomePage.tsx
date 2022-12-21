import React, { useState, useMemo } from "react";
import Pagination from "./Pagination";
import { pData } from "./data";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Cards from "./Cards";

type Props = {};
let PageSize = 5;

const HomePage = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return pData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <>
      <Grid container>
        {/* <Grid item lg={3} md={4} sm={12} xs={12}></Grid> */}
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Container maxWidth={false}>
            <Stack id="ShopNearby">
              <Typography variant="h5">Data</Typography>
              <Stack 
              sx={{
                bgcolor:"secondary.dark"
              }}
              >
                {currentTableData.map((item: any) => (
                  <Cards  key={item.id} item={item} />
                ))}
              </Stack>
              <Stack
                sx={{
                  //   alignItems: "flex-end",
                  alignItems: { xs: "center", lg: "flex-end" },
                  padding: "20px 0 !important",
                }}
              >
                <Pagination
                  currentPage={currentPage}
                  totalCount={pData.length}
                  pageSize={PageSize}
                  onPageChange={(page: number) => setCurrentPage(page)}
                  siblingCount={0}
                />
              </Stack>
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
