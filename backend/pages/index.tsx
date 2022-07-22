import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Code,
  Container,
  Flex,
  Heading,
  Link,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SP } from "next/dist/shared/lib/utils";
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
