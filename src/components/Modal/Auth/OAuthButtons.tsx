/* eslint-disable jsx-a11y/alt-text */
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";


const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant="oauth" mb={2}>
        <Image
          color="gray.100"
          src="/images/googlelogo.png"
          height="20px"
          mr={4}
          isLoading={loading}
          onClick={() => signInWithGoogle()}
        />
        Continue with Google
      </Button>
      <Button variant="oauth">Some other providers</Button>
      {error && <Text>{error}</Text>}
    </Flex>
  );
};
export default OAuthButtons;