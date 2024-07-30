
import { Container, Typography, Box } from "@mui/material";
import React from "react";
import BarChartIcon from '@mui/icons-material/BarChart';
import { ShoppingBag } from "@mui/icons-material";
import MapIcon from '@mui/icons-material/Map';
import { Home } from "@mui/icons-material";
function Sidebar() {
    return (
        <Container sx={{ width: 300 }}>
            <Container sx={{ display: "flex", justifyContent: "space-around" }}>
                <Box
                    component="img"
                    sx={{
                        width: 30,
                        height: 30,
                        borderRadius: '8px',
                        boxShadow: 3
                    }}

                    alt="Example"
                    src="chrome://branding/content/about-logo.png"
                />
                <Typography variant="h5">Firefox</Typography>
            </Container>
            <Typography sx={{ margin: 5 }}>General</Typography>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <BarChartIcon fontSize="small" color="primary" />
                <p> Charts</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <MapIcon fontSize="small" color="primary" />
                <p>Maps</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Home fontSize="small" color="primary" />
                <p> Home</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <ShoppingBag fontSize="small" color="primary" />
                <p> Cart</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <BarChartIcon fontSize="small" color="primary" />
                <p> Charts</p>
            </div>

            <Typography sx={{ margin: 5 }}>Extra</Typography>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <BarChartIcon fontSize="small" color="primary" />
                <p> Charts</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <MapIcon fontSize="small" color="primary" />
                <p>Maps</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Home fontSize="small" color="primary" />
                <p> Home</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <ShoppingBag fontSize="small" color="primary" />
                <p> Cart</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <BarChartIcon fontSize="small" color="primary" />
                <p> Charts</p>
            </div>


        </Container>

    )
}

export default Sidebar;