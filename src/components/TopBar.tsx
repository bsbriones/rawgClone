import { Flex, Heading, Input, Box, HStack } from "@chakra-ui/react";

const TopBar = () => {
  return (
    <Box paddingX="2.5rem" paddingY="1.5rem">
      <Flex justifyContent="center" alignItems="center">
        <Heading size="md" marginRight="1rem">
          RAWG
        </Heading>

        <Input
          placeholder="Search Games..."
          marginRight={5}
          borderRadius="2rem"
        />
        <HStack marginLeft="1rem">
          <Heading
            size="sm"
            fontSize="14px"
            marginRight="1rem"
            whiteSpace="nowrap"
          >
            Log In
          </Heading>
          <Heading
            size="sm"
            fontSize="14px"
            marginRight="1rem"
            whiteSpace="nowrap"
          >
            Sign Up
          </Heading>
          <Heading size="sm" fontSize="14px">
            Api
          </Heading>
        </HStack>
      </Flex>
    </Box>
  );
};

export default TopBar;
