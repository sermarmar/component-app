import { Box, Grid } from "@mui/material"
import { ContentLayout } from "./layouts/ContentLayout"
import { NavigatorLayout } from "./layouts/NavigatorLayout"
import { FooterLayout } from "./layouts/FooterLayout"
import { BrowserRouter as Router } from "react-router-dom"

export const HomePage = () => {
    return(
        <>
            <Box>
                <Grid container columns={2}>
                    <Router>
                        <NavigatorLayout />
                        <ContentLayout />
                    </Router>
                </Grid>
                <FooterLayout />
                {
                    // Layout: Navigator Left
                    // Layout: Content Router
                    // Layout: Footer
                }
            </Box>
        </>
    )
}