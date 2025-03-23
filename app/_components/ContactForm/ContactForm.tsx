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
} from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { Button } from "@/app/_components/ui/button";
import { Textarea } from "@/app/_components/ui/textarea";
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
}): React.JSX.Element {
    const { pending } = useFormStatus();

    return (
        <Button variant="secondary" type="submit" size="sm" disabled={pending}>
            {pending ? translations.sending : translations.sendMessage}
        </Button>
    );
}

export default function ContactForm({
    translations,
    className,
}: {
    locale: string;
    translations: Record<string, string>;
    className?: React.ComponentProps<typeof Card>["className"];
}): React.JSX.Element {
    const [state, formAction] = useFormState(contactFormAction, initialState);

    return (
        <Card className={cn("w-full max-w-md shadow-[#be7c68]", className)}>
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
                            data-invalid={!(state.errors?.firstName == null)}
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
                                className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive hover:!placeholder-[#be7c68]"
                                aria-invalid={!(state.errors?.firstName == null)}
                                aria-errormessage="error-firstName"
                                defaultValue={state.defaultValues.firstName as string}
                            />
                            {state.errors?.firstName != null && (
                                <p id="error-firstName" className="text-destructive text-sm">
                                    {state.errors.firstName}
                                </p>
                            )}
                        </div>
                        <div
                            className="group/field grid gap-2 flex-1"
                            data-invalid={!(state.errors?.lastName == null)}
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
                                className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive hover:!placeholder-[#be7c68]"
                                aria-invalid={!(state.errors?.lastName == null)}
                                aria-errormessage="error-lastName"
                                defaultValue={state.defaultValues.lastName as string}
                            />
                            {state.errors?.lastName != null && (
                                <p id="error-lastName" className="text-destructive text-sm">
                                    {state.errors.lastName}
                                </p>
                            )}
                        </div>
                    </div>
                    <div
                        className="group/field grid gap-2"
                        data-invalid={!(state.errors?.email == null)}
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
                            className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive hover:!placeholder-[#be7c68]"
                            aria-invalid={!(state.errors?.email == null)}
                            aria-errormessage="error-email"
                            defaultValue={state.defaultValues.email as string}
                        />
                        {state.errors?.email != null && (
                            <p id="error-email" className="text-destructive text-sm">
                                {state.errors.email}
                            </p>
                        )}
                    </div>
                    <div
                        className="group/field grid gap-2"
                        data-invalid={!(state.errors?.message == null)}
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
                            className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive hover:!placeholder-[#be7c68]"
                            aria-invalid={!(state.errors?.message == null)}
                            aria-errormessage="error-message"
                            defaultValue={state.defaultValues.message as string}
                        />
                        {state.errors?.message != null && (
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
    );
}
