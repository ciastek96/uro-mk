import React from "react";
import styled, { css } from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../Button/Button";

const InputStyles = () => css`
  border: 1px solid ${({ theme }) => theme.color.darkGrey};
  border-radius: 5px;
  color: ${({ theme }) => theme.color.dark80};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.Overpass};
  outline-color: ${({ theme }) => theme.color.yellow};
  caret-color: ${({ theme }) => theme.color.yellow};

  &::placeholder {
    color: ${({ theme }) => theme.color.lightGrey};
    font-size: 14px;
    font-family: ${({ theme }) => theme.fontFamily.Overpass};
  }

  ${({ isValid }) =>
    isValid &&
    css`
      outline-color: green;
      caret-color: green;
    `}

  ${({ withErrors }) =>
    withErrors &&
    css`
      outline-color: red;
      caret-color: red;
    `};
`;

const Form = styled.form`
  width: 100%;
  min-width: 280px;
  max-height: 100%;
  background: ${({ theme }) => theme.color.grey};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem clamp(2rem, 50%, 2vw);
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

const Input = styled.input`
  ${InputStyles};
  width: 100%;
  height: 45px;
  margin: 0.5rem auto;
  padding: 0 1rem;
`;

const Textarea = styled.textarea`
  ${InputStyles};
  min-width: 100%;
  max-width: 100%;
  min-height: 250px;
  max-height: 500px;
  height: 45px;
  padding: 1rem;
  margin: 0.5rem auto;
`;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading>Masz pytania? Skontaktuj się z nami</Heading>
      <div>
        <Input
          type="text"
          placeholder="Imię i nazwisko *"
          name="name"
          id="name"
          withErrors={!!errors.name}
          {...register("name", { required: true })}
        />
        {console.log("isValid: ", isValid)}
        {errors.name && <Error>Pole nie może być puste</Error>}
        <Input
          type="text"
          placeholder="Adres e-mail *"
          name="email"
          id="email"
          withErrors={!!errors.email}
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && <Error>Pole nie może być puste</Error>}
        <Textarea
          name="content"
          id="content"
          placeholder="Treść wiadomości... *"
          withErrors={!!errors.content}
          {...register("content", { required: true })}
        />
        {errors.content && <Error>Pole nie może być puste</Error>}
      </div>
      <Button type="submit">Wyślij</Button>

      {console.log(errors)}
    </Form>
  );
};

export default ContactForm;
