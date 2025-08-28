import { ExpandMore, MoreVert } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import Rating from "@mui/material/Rating";
// import FavoriteIcon from "@mui/material/FavoriteIcon";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
function TourCard() {


    return (
        <> 
            <Card>
                <CardHeader
                    
                    title="Card "
                   
                />
                <Link href={"/About"}>
                <CardMedia
                    component="img"
                    height="194"
                    image="/sampleImg.png"
                    alt="Paella dish"
                    
                />
                </Link>
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                       This is Page have the Content . In that the Content Component I Import the TourCard Comoponent .This is Page have the Content . In that the Content Component I Import the TourCard Comoponent .   
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                          <Rating
        name="simple-controlled"
       value={4.4}     
      precision={0.1}
      />


                </CardActions>

            </Card>
        </>
    )
}


export default TourCard;
