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

type props = {
  locale: string;
};
export default function Header(props: props) {
  const { locale } = props;
  const t = useTranslations("header");


  const navItems = [
    { id: 1, label: t("home"), href: `/${locale}` },
    { id: 2, label: t("todoList"), href: `${locale}/todo-list` },
    { id: 3, label: t("medicalServiceCenters"), href: `/${locale}` },
    { id: 4, label: t("branches"), href: `/${locale}` },
    { id: 5, label: t("faq"), href: `/${locale}` },
  ];
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
              <Grid2>
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
              {
                navItems.map((item) => (
                  <Grid2
                  className="nav-item"
                    key={item.id}
                    component={"a"}
                    href={item.href}
                    px={{ md: 1, lg: 4 }}
                    py={1}
                    
                  >
                    <Typography variant={"button"} color="primary">
                      {item.label}
                    </Typography>
                  </Grid2>
                ))}
            </Grid2>
            <Grid2 container alignItems={"center"} gap={1}>
              <LanguageSwitcher />
              <Button variant="contained" size="medium">
                {t("login")}
              </Button>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </AppBar>
  );
}
