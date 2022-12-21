import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import RoomIcon from "@mui/icons-material/Room";
// import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import StarIcons from "../starIcons/StarIcons";
import StarBorderIcon from "@mui/icons-material/StarBorder";

type Props = {
  item: any;
};

function Cards({ item }: Props) {
  return (
    <Card
      sx={{
        m: 2,
      }}
    >
      <CardMedia
        component="img"
        // image={this.props.item.image}
        // alt={this.props.item.shopName}
      />
      <Stack>
        <CardContent>
          <Typography variant="h5">{item.shopName}</Typography>
          <Stack sx={{ flexDirection: "row" }}>
            <Stack sx={{ flexDirection: "row" }}>
              <Typography component="span">
                <RoomIcon
                  sx={{
                    color: "secondary.main",
                  }}
                />
                {item.distance}
              </Typography>
              <Typography component="span">
                <AccessTimeIcon
                  sx={{
                    color: "secondary.main",
                  }}
                />
                {item.time}
              </Typography>
            </Stack>
            <StarBorderIcon />
          </Stack>
          <Typography variant="body2" component="span">
            {item.address}
          </Typography>
        </CardContent>
      </Stack>

      <CardActions>
        <Button disableRipple variant="text">
          More Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cards;
