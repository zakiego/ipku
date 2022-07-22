import { Center, Code, Container, Flex, HStack } from "@chakra-ui/react";
import Head from "next/head";

export default function Index() {
  return (
    <div>
      <Head>
        <title>IP-ku</title>
      </Head>
      <Flex
        bg="blackAlpha.900"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Container>
          <Center>
            <Code
              fontSize={{ base: "xs", md: "xl" }}
              px={{ base: "3", md: "3" }}
              py="3"
              rounded="lg"
            >
              curl -X GET https://ipku.vercel.app/api
            </Code>
          </Center>
        </Container>
      </Flex>
    </div>
  );
}
