import { Box } from "@chakra-ui/layout";
import {
  VStack,
  HStack,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
  Button
} from "@chakra-ui/react";
import { useSignupUserMutation } from "generated";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

const Account = () => {
  const { push } = useRouter();
  const { mutate: signupUser } = useSignupUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (userSignupData) => {
    signupUser(userSignupData, {
      onSuccess: () => push("/login")
    });
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <VStack
        backgroundColor="white"
        padding="3rem"
        marginTop="2rem"
        spacing="4"
        borderRadius="1rem"
        width="30rem"
      >
        <HStack>
          <FormControl isInvalid={errors.firstName}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" />
              <Input
                id="firstName"
                {...register("firstName", { required: "First name is required" })}
                placeholder="First name"
              />
            </InputGroup>
            <FormErrorMessage>{errors?.firstName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.lastName}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" />
              <Input
                id="lastName"
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Last name"
              />
            </InputGroup>
            <FormErrorMessage>{errors?.lastName?.message}</FormErrorMessage>
          </FormControl>
        </HStack>

        <FormControl isInvalid={errors.email}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" />
            <Input
              id="email"
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Email"
            />
          </InputGroup>
          <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
        </FormControl>

        <Button
          borderRadius={20}
          type="submit"
          variant="solid"
          width="full"
          isLoading={isSubmitting}
          loadingText="Submitting"
        >
          Update
        </Button>
      </VStack>
    </Box>
  );
};
export default Account;
