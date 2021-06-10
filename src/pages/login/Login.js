import { Box } from "@chakra-ui/layout";
import FormLogin from "../../component/FormLogin/FormLogin";
import MyApp from "../../component/layout/MyApp";

export default function Login() {
  return (
    <MyApp>
      <Box
        as="section"
        minH="90vh"
        w="100%"
        d="flex"
        justifyContent="center"
        alignItems="center"
      >
        <FormLogin />
      </Box>
    </MyApp>
  );
}
