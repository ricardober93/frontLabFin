import React from "react";
import { Box } from "@chakra-ui/layout";
import FormLogin from "../../component/FormLogin/FormLogin";
import MyApp from "../../component/layout/MyApp";
import { BrandImg } from "../../component/BrandImg/BrandImg"


export default function Login() {
  return (
    <MyApp>
      <Box
        as="section"
        minH="90vh"
        w="100%"
        d="flex"
        justifyContent="center"
        alignItems="center">
        <BrandImg />
        <FormLogin />
      </Box>
    </MyApp>
  );
}
