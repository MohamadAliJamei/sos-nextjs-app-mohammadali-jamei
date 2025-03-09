import {
  AppBar,
  Box,
  Button,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import LanguageSwitcher from "../LanguageSwitcher";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import MenuDrawer from "../MenuDrawer";
import { getNavItems } from "./NavItems";

type props = {
  locale: string;
};
export default function Header(props: props) {
  const { locale } = props;
  const t = useTranslations("header");

  const navItems = getNavItems(locale);

  return (
    <AppBar color="inherit">
      <Box
        sx={{
          boxShadow: "0px 8px 8px 0px #12121233",
          py: 1,
        }}
      >
        <Container>
          <Grid2
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid2 container gap={1} alignItems={"center"} component={"nav"}>
              <Grid2 order={{ xs: 2, lg: 1 }} sx={{
                '& img': {
                  width: {xs: '131px', lg: '198px'},
                  height: {xs: '26px', lg: '40px'}
                }
              }}>
                <Link href={`/${locale}`}>
                  <Image
                    src={"/images/logo/sos-logo.png"}
                    alt={"Logo"}
                    width={198}
                    height={40}
                    priority={false}
                  />
                </Link>
              </Grid2>
              <MenuDrawer />
              <Grid2
                display={{ xs: "none", lg: "flex" }}
                gap={1}
                order={{ lg: 2 }}
              >
                {navItems.map((item) => (
                  <Grid2
                    className="nav-item"
                    key={item.id}
                    component={"a"}
                    href={item.href}
                    px={{ md: 1, xl: 4 }}
                    py={1}
                  >
                    <Typography variant={"button"} color="primary">
                      {item.label}
                    </Typography>
                  </Grid2>
                ))}
              </Grid2>
            </Grid2>
            <Grid2 container alignItems={"center"} gap={1}>
              <LanguageSwitcher />
              <Button
                variant="contained"
                sx={{
                  fontSize: { xs: "0.75rem", lg: "0.875rem" },
                  padding: { xs: "4px 8px", lg: "16px 32px" },
                  borderRadius: { xs: "8px", lg: "16px" },
                }}
              >
                {t("login")}
              </Button>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </AppBar>
  );
}
