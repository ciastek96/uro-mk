import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ButtonTypes } from "../../models/models";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";

const Form = styled.form`
  width: 100%;
  max-height: 100%;
  background: ${({ theme }) => theme.color.grey};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem clamp(2rem, 50%, 2vw);
  border: 1px solid black;
  row-gap: 1rem;
`;

const Error = styled.p`
  color: red;
  margin: 0 1rem;
  font-family: "Overpass", sans-serif;
  font-size: 14px;
`;

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.Montserrat};
  font-size: 16px;
  font-weight: 700;
  color: black;
`;

type FormData = {
  name: string;
  email: string;
  content: string;
  agreement: boolean;
};

const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data: FormData) => {
    setIsLoading(true);
    await console.log(data);
    setIsLoading(false);
  });

  return (
    <Form onSubmit={onSubmit}>
      <Heading>Masz pytania? Skontaktuj się z nami</Heading>
      <>
        <Input
          type="text"
          placeholder="Imię i nazwisko *"
          id="name"
          data-testid="name"
          withErrors={!!errors.name}
          {...register("name", { required: true })}
        />
        {errors.name && <Error>Pole obowiązkowe</Error>}
        <Input
          type="text"
          placeholder="Adres e-mail *"
          id="email"
          data-testid="email"
          withErrors={!!errors.email}
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && <Error>Pole obowiązkowe</Error>}
        <Textarea
          id="content"
          data-testid="content"
          placeholder="Treść wiadomości... *"
          withErrors={!!errors.content}
          {...register("content", { required: true })}
        />
        {errors.content && <Error>Pole obowiązkowe</Error>}
      </>
      <Checkbox
        name="agreement"
        data-testid="agreement"
        label="Wyrażam zgodę na przetwarzanie danych osobowych przez firmę URO-MK w
        celu udzielenia odpowiedzi na zapytanie."
        withErrors={!!errors.agreement}
        registerProps={{ ...register("agreement", { required: true }) }}
      />
      {errors.agreement && <Error>Pole obowiązkowe</Error>}
      <Button isLoading={isLoading} name="submit" type={ButtonTypes.Submit}>
        wyślij
      </Button>

      {console.log(errors)}
    </Form>
  );
};

export default ContactForm;
