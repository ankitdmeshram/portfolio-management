import { Box } from '@mui/joy'
import React from 'react'
import { SideMenu } from '../CSS/Styled'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    const menu = [
        {
            url: "",
            text: "Home",
            icon: <HomeOutlinedIcon />
        },
        {
            url: "portfolio",
            text: "Portfolios",
            icon: <WorkOutlineOutlinedIcon />
        },
        {
            url: "experiments",
            text: "Experimentals",
            icon: <ScienceOutlinedIcon />
        },
        {
            url: "archives",
            text: "Slack Archives",
            icon: <WorkOutlineOutlinedIcon />
        },
        {
            url: "refer-a-friend",
            text: "Refer a friend",
            icon: <PersonAddOutlinedIcon />
        },
        {
            url: "grif-a-subscription",
            text: "Gift a subscription",
            icon: <CardGiftcardOutlinedIcon />
        },
        {
            url: "account",
            text: "Account",
            icon: <PersonOutlineOutlinedIcon />
        }
    ]

    return (
        <Box sx={{ position: "fixed", boxShadow: "0px 0px 4px #00000033", height: "100vh", width: "15%" }}>
            <Box sx={{ p: 2, pb: 1 }}>
                <img
                    src="https://premium.capitalmind.in/wp-content/themes/clarity/components/header/Logo_CMPremium.png"
                    alt="logo"
                    style={{ width: '100%', maxWidth: "150px" }}
                />
            </Box>

            <SideMenu>
                {
                    menu.map(m => <>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? "bg-dark" : ""
                                }`
                            }

                            to={m.url}>{m.icon} {m.text}</NavLink>
                    </>
                    )
                }
            </SideMenu>
        </Box>
    )
}

export default Sidebar