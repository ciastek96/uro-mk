import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";

const Form = styled.form`
  width: 100%;
  min-width: 280px;
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

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
        {errors.name && <Error>Pole obowiązkowe</Error>}
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
        {errors.email && <Error>Pole obowiązkowe</Error>}
        <Textarea
          name="content"
          id="content"
          placeholder="Treść wiadomości... *"
          withErrors={!!errors.content}
          {...register("content", { required: true })}
        />
        {errors.content && <Error>Pole obowiązkowe</Error>}
      </div>
      <Checkbox
        name="agreement"
        label="Wyrażam zgodę na przetwarzanie danych osobowych przez firmę URO-MK w
        celu udzielenia odpowiedzi na zapytanie."
        withErrors={!!errors.agreement}
        registerProps={{ ...register("agreement", { required: true }) }}
      />
      {errors.agreement && <Error>Pole obowiązkowe</Error>}
      <Button type="submit">Wyślij</Button>

      {console.log(errors)}
    </Form>
  );
};

export default ContactForm;
