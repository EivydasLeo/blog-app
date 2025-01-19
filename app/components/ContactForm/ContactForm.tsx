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

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="sm" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm({ className }: React.ComponentProps<typeof Card>) {
  const [state, formAction] = useFormState(contactFormAction, initialState);

  return (
    <Card className={cn("w-full max-w-md ml-32", className)}>
      <CardHeader>
        <CardTitle>How can we help?</CardTitle>
        <CardDescription>
          Need help with your project? We&apos;re here to assist you.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="flex flex-col gap-6">
          {state.success ? (
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              <Check className="size-4" />
              Your message has been sent. Thank you.
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
                First Name <span aria-hidden="true">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                aria-invalid={!!state.errors?.firstName}
                aria-errormessage="error-firstName"
                defaultValue={state.defaultValues.firstName}
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
                Last Name <span aria-hidden="true">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                aria-invalid={!!state.errors?.lastName}
                aria-errormessage="error-lastName"
                defaultValue={state.defaultValues.lastName}
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
              Email <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="john.doe@example.com"
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              aria-invalid={!!state.errors?.email}
              aria-errormessage="error-email"
              defaultValue={state.defaultValues.email}
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
              Message <span aria-hidden="true">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              aria-invalid={!!state.errors?.message}
              aria-errormessage="error-message"
              defaultValue={state.defaultValues.message}
            />
            {state.errors?.message && (
              <p id="error-message" className="text-destructive text-sm">
                {state.errors.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
