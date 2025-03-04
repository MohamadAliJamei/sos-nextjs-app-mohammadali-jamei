import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import LanguageSwitcher from "../LanguageSwitcher";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations('header');
  return (
    <header>
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
                <Link href={"/"}>
                  <Image
                    src={"/images/logo/sos-logo.png"}
                    alt={"Logo"}
                    width={198}
                    height={40}
                  />
                </Link>
              </Grid2>
              <Grid2 component={"a"} href={"/"} px={{md: 1, lg: 4}} py={1}>
                <Typography variant={"button"} color="primary">
                  {t("home")}
                </Typography>
              </Grid2>
              <Grid2 component={"a"} href={"/"} px={{md: 1, lg: 4}} py={1}>
                <Typography variant={"button"} color="primary">
                  {t("todoList")}
                </Typography>
              </Grid2>
              <Grid2 component={"a"} href={"/"} px={{md: 1, lg: 4}} py={1}>
                <Typography variant={"button"} color="primary">
                  {t("medicalServiceCenters")}
                </Typography>
              </Grid2>
              <Grid2 component={"a"} href={"/"} px={{md: 1, lg: 4}} py={1}>
                <Typography variant={"button"} color="primary">
                  {t("branches")}
                </Typography>
              </Grid2>
              <Grid2 component={"a"} href={"/"} px={{md: 1, lg: 4}} py={1}>
                <Typography variant={"button"} color="primary">
                  {t("faq")}
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2 container alignItems={'center'} gap={1}>
              <LanguageSwitcher />
              <Button variant="contained" size="medium">
                {t("login")}
              </Button>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </header>
  );
}
