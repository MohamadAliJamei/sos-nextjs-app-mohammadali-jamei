"use client";
import { useEffect, useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import {
  Box,
  Button,
  Drawer,
  Grid2,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { getNavItems } from "./common/NavItems";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function MenuDrawer() {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState("fa");
console.log('locale state: ', locale)
  const t = useTranslations("header");

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    fetch(`${BASE_URL}/api/locale`)
      .then((res) => res.json())
      .then((data) => setLocale(data.locale));
  }, []);
  const navItems = getNavItems(locale);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem component={"a"} href={`/${locale}`} sx={{ display: "none" }}>
          <Image
            src={"/images/logo/sos-logo.png"}
            alt={"Logo"}
            width={198}
            height={40}
            priority={false}
          />
        </ListItem>
        <ListItem>
          <Button variant="contained" size="small">
            {t("login")}
          </Button>
        </ListItem>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton LinkComponent={"a"} href={item.href}>
              {/* <ListItemIcon>
                <MailIcon />
              </ListItemIcon> */}
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Grid2 display={{ xs: "block", lg: "none" }} order={{ xs: 1, lg: 2 }}>
      <Button variant="text" size="small" sx={{minWidth: 32}} onClick={toggleDrawer(true)}><MenuIcon /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Grid2>
  );
}
