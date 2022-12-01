import { Box, Typography, } from "@mui/material";
// import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {


    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ color: 'wheat' }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Box>
                    {/* <ProgressCircle progress={progress} /> */}
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mt="2px">
                <Typography variant="h5" sx={{ color: '#4cceac' }}>
                    {subtitle}
                </Typography>
                <Typography
                    variant="h5"
                    fontStyle="italic"
                    sx={{ color: '#4cceac' }}
                >
                    {increase}
                </Typography>
            </Box>
        </Box>
    );
};

export default StatBox;
