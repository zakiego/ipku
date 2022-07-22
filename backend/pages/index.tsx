import { Code, Flex } from "@chakra-ui/react";
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
        <Code>curl -X GET https://ipku.vercel.app/api</Code>S
      </Flex>
    </div>
  );
}
