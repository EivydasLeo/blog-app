"use client";

import * as React from "react";
import { useFormState, useFormStatus } from "react-dom";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import { cn } from "@/lib/utils";
import { contactFormAction } from "@/lib/actions";
import { Check } from "lucide-react";

const initialState = {
  defaultValues: {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  },
  success: false,
  errors: null,
};

function SubmitButton({
  translations,
}: {
  translations: { sending: string; sendMessage: string };
}) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="sm" disabled={pending}>
      {pending ? translations.sending : translations.sendMessage}
    </Button>
  );
}

export default function ContactForm({
  translations,
  className,
}: {
  locale: string;
  translations: { [key: string]: string };
  className?: React.ComponentProps<typeof Card>["className"];
}) {
  const [state, formAction] = useFormState(contactFormAction, initialState);

  return (
    <div>
      <Card className={cn("w-full max-w-md ml-32", className)}>
        <CardHeader>
          <CardTitle>{translations.cardTitle}</CardTitle>
          <CardDescription>{translations.cardDescription}</CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="flex flex-col gap-6">
            {state.success ? (
              <p className="text-muted-foreground flex items-center gap-2 text-sm">
                <Check className="size-4" />
                {translations.messageSent}
              </p>
            ) : null}
            <div className="flex gap-4">
              <div
                className="group/field grid gap-2 flex-1"
                data-invalid={!!state.errors?.firstName}
              >
                <Label
                  htmlFor="firstName"
                  className="group-data-[invalid=true]/field:text-destructive"
                >
                  {translations.firstName} <span aria-hidden="true">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder={translations.firstNamePlaceholder}
                  className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                  aria-invalid={!!state.errors?.firstName}
                  aria-errormessage="error-firstName"
                  defaultValue={state.defaultValues.firstName as string}
                />
                {state.errors?.firstName && (
                  <p id="error-firstName" className="text-destructive text-sm">
                    {state.errors.firstName}
                  </p>
                )}
              </div>
              <div
                className="group/field grid gap-2 flex-1"
                data-invalid={!!state.errors?.lastName}
              >
                <Label
                  htmlFor="lastName"
                  className="group-data-[invalid=true]/field:text-destructive"
                >
                  {translations.lastName}
                  <span aria-hidden="true">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder={translations.lastNamePlaceholder}
                  className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                  aria-invalid={!!state.errors?.lastName}
                  aria-errormessage="error-lastName"
                  defaultValue={state.defaultValues.lastName as string}
                />
                {state.errors?.lastName && (
                  <p id="error-lastName" className="text-destructive text-sm">
                    {state.errors.lastName}
                  </p>
                )}
              </div>
            </div>
            <div
              className="group/field grid gap-2"
              data-invalid={!!state.errors?.email}
            >
              <Label
                htmlFor="email"
                className="group-data-[invalid=true]/field:text-destructive"
              >
                {translations.email} <span aria-hidden="true">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                placeholder={translations.emailPlaceholder}
                className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                aria-invalid={!!state.errors?.email}
                aria-errormessage="error-email"
                defaultValue={state.defaultValues.email as string}
              />
              {state.errors?.email && (
                <p id="error-email" className="text-destructive text-sm">
                  {state.errors.email}
                </p>
              )}
            </div>
            <div
              className="group/field grid gap-2"
              data-invalid={!!state.errors?.message}
            >
              <Label
                htmlFor="message"
                className="group-data-[invalid=true]/field:text-destructive"
              >
                {translations.message} <span aria-hidden="true">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder={translations.messagePlaceholder}
                className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                aria-invalid={!!state.errors?.message}
                aria-errormessage="error-message"
                defaultValue={state.defaultValues.message as string}
              />
              {state.errors?.message && (
                <p id="error-message" className="text-destructive text-sm">
                  {state.errors.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton
              translations={{
                sending: translations.sending,
                sendMessage: translations.sendMessage,
              }}
            />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
