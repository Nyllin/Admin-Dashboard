import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
// icon
import UpcomingIcon from "@mui/icons-material/Upcoming";
import PersonIcon from "@mui/icons-material/Person";
import styled from "@emotion/styled";
import SellIcon from "@mui/icons-material/Sell";
import StarRateIcon from "@mui/icons-material/StarRate";
import MailIcon from "@mui/icons-material/Mail";
import DraftsIcon from "@mui/icons-material/Drafts";
import PushPinIcon from "@mui/icons-material/PushPin";
import DeleteIcon from "@mui/icons-material/Delete";
const MailNav = () => {
  const MailNavLink = styled(NavLink)(({theme})=>({
    display: "flex",
    color:"#000",
    textDecoration: "none",
    marginBottom: "5px",
    padding: "10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
    "&.active" : {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    }
  }))
  
  
  
 
  return (
    <Box>
      <Card>
        <CardContent>
          <MailNavLink
            to="/admin/mailbox/primary"
            className={(isActive) => (isActive ? "active" : "")}
          >
            <UpcomingIcon />
            <Typography variant="subtitle1" ml={2}>
              Primary <span> (23)</span>
            </Typography>
            
          </MailNavLink>
          <MailNavLink
            to="/admin/mailbox/social"
            className={(isActive) => (isActive ? "active" : "")}
          >
            <PersonIcon />
            <Typography variant="subtitle1" ml={2}>
              Social <span>(23)</span>
            </Typography>
          </MailNavLink>
          <MailNavLink
            to="/admin/mailbox/promotions"
            className={(isActive) => (isActive ? "active" : "")}
          >
            <SellIcon />
            <Typography variant="subtitle1" ml={2}>
              Promotions <span>(23)</span>
            </Typography>
          </MailNavLink>
          <MailNavLink
            to="/admin/mailbox/started"
            className={(isActive) => (isActive ? "active" : "")}
          >
            <StarRateIcon />
            <Typography variant="subtitle1" ml={2}>
              Started <span>(23)</span>
            </Typography>
          </MailNavLink>
          <MailNavLink
            to="/admin/mailbox/sendmails"
            className={(isActive) => (isActive ? "active" : "")}
          >
            <MailIcon />
            <Typography variant="subtitle1" ml={2}>
              Send Mails <span>(23)</span>
            </Typography>
          </MailNavLink>
          <MailNavLink
            to="/admin/mailbox/drafts"
            className={(isActive) => (isActive ? "active" : "")}
          >
            <DraftsIcon />
            <Typography variant="subtitle1" ml={2}>
              Drafts <span>(23)</span>
            </Typography>
          </MailNavLink>
          <MailNavLink
            to="/admin/mailbox/spams"
            className={(isActive) => (isActive ? "active" : "")}
          >
            <PushPinIcon />
            <Typography variant="subtitle1" ml={2}>
              Spams <span>(23)s</span>
            </Typography>
          </MailNavLink>
          <MailNavLink
            to="/admin/mailbox/trash"
            className={(isActive) => (isActive ? "active" : "")}
          >
            <DeleteIcon />
            <Typography variant="subtitle1" ml={2}>
              Trash <span>(23)s</span>
            </Typography>
          </MailNavLink>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MailNav;
