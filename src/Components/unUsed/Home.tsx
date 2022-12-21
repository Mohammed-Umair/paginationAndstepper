import {
  Box,
  Card,
  CardContent,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

type Props = {};

type State = {
  data: any;
  hasMore: boolean;
  input: string;
  open: boolean;
  openRowData: any;
};

let page: number = 0;
let totalPage: number = 0;

class Home extends Component<Props, State> {
  state: State = {
    data: [],
    hasMore: true,
    input: "",
    open: false,
    openRowData: [],
  };

  dataFilter = () => {};

  getApiData = async () => {
    await axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
      )
      .then((response) => {
        // const data = response?.data?.hits;
        // console.log("response", response.data);

        totalPage = response?.data?.nbPages;
        let tempArr: any[] = [];

        response?.data?.hits?.map((item: any) => {
          tempArr.push(item);
        });

        this.setState({
          hasMore: page < totalPage ? true : false,
        });

        this.setState({
          data: [...this.state.data, ...tempArr],
        });

        page = page + 1;
      });
  };
  timer: NodeJS.Timer | undefined;

  componentDidMount() {
    this.dataFilter();
    this.getApiData();
    this.timer = setInterval(() => {
      page < totalPage && this.state.hasMore === true && this.getApiData();
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleRowClick = (row: any) => {
    console.log("row", row);
    this.setState({ open: true });
    this.setState({ openRowData: row });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    // console.log("data", this.state.data);
    console.log("row", this.state.openRowData);

    const columns = [
      // { field: "id", headerName: "ID", width: 70 },
      { field: "title", headerName: "title", width: 300 },
      { field: "url", headerName: "url", width: 470 },
      {
        field: "created_at",
        headerName: "created_at",

        width: 220,
      },
      {
        field: "author",
        headerName: "author",

        width: 120,
      },
    ];

    const rowData = this.state.data
      .filter((item: any) => {
        if (this.state.input === "") {
          return item;
        } else if (
          item.author.toLowerCase().includes(this.state.input.toLowerCase()) ||
          item.title.toLowerCase().includes(this.state.input.toLowerCase())
        ) {
          return item;
        }
      })
      .map((item: any, index: any) => {
        return {
          id: index,
          title: item?.title,
          url: item?.url,
          created_at: item?.created_at,
          author: item?.author,
        };
      });

    return (
      <>
        <Box
          sx={{
            p: 4,
          }}
        >
          <InfiniteScroll
            dataLength={rowData.length}
            next={this.getApiData}
            hasMore={this.state.hasMore}
            loader={""}
          >
            <TextField
              placeholder="Search..."
              sx={{
                mb: 2,
              }}
              onChange={(e) =>
                this.setState({
                  input: e.target.value,
                })
              }
            />
            <DataGrid
              sx={{
                width: "95%",
                m: "auto",
                boxShadow: 5,
              }}
              rows={rowData}
              columns={columns}
              autoHeight={true}
              rowsPerPageOptions={[100]}
              onRowClick={(rowData): any => this.handleRowClick(rowData.row)}
            />
          </InfiniteScroll>

          <Modal
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Card sx={{ minWidth: 200 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }}>
                    {JSON.stringify(this.state.openRowData)}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Modal>
        </Box>
      </>
    );
  }
}

export default Home;
