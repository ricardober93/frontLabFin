import { Box } from '@chakra-ui/layout'
import FormLogin from '../../component/FormLogin/FormLogin'
import MyApp from '../../component/layout/MyApp'

export default function Login() {
    return (
        <MyApp>
        <Box as="section" h="100%" w="100%" d="flex" justifyContent="center" alignItems="center">
            <Box as="section" w="40%" >
               <FormLogin />
            </Box>
        </Box>
        </MyApp>
    )
}
