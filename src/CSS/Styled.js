import { Box } from '@mui/joy';
import { styled } from '@mui/joy/styles';

export const FlexBox = styled(Box)(({ theme }) => ({
    display: "flex"
}));

export const GridBox = styled(Box)(({ size }) => ({
    width: `${size}%`,
    height: "100vh"
}));

export const SideMenu = styled(Box)(({ size }) => ({
    minWwidth: `${size}%`,
    "& a": {
        padding: "0.75rem 1rem",
        // background: active ? "rgba(6, 6, 0, 0.11)" : "#00000000",
        display: "flex",
        alignItems: "center",
        gap: "0.6rem",
        textDecoration: "none",
        color: "#454545ff",
        "& svg": {
            fill: "#A5A8B0",
            height: "20px",
            // width: "20px",
            aspectRatio: "1/1"
        }
    }
}));

export const PageContainer = styled(Box)(({ size }) => ({
    padding: "0 10%",
    margin: "auto",
    background: "#F9FAFB",
}));

export const FlexJustifyCenter = styled(Box)(({ }) => ({
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
}))

export const Card = styled(Box)(() => ({
    boxShadow: "0px 0px 4px 2px rgba(156, 156, 156, 0.2)",
    borderRadius: "0.25rem",
    padding: "1rem",
    width: "100%",
    background: "#ffffff"
})) 
