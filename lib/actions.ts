/* eslint-disable @typescript-eslint/explicit-function-return-type */
"use server";

import { contactFormSchema } from "@/lib/schema";
import { z } from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/_components/ui/email-template";
import { getTranslations } from "next-intl/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contactFormAction(_prevState: unknown, formData: FormData) {
    const defaultValues = Object.fromEntries(formData.entries());
    const t = await getTranslations("ContactPage");
    const schema = contactFormSchema(t);

    try {
        const data = schema.parse(defaultValues);

        try {
            const { data: emailData, error } = await resend.emails.send({
                from: `Greta <${process.env.RESEND_FROM_EMAIL}>`,
                to: [data.email],
                subject: "Welcome",
                react: EmailTemplate({ firstName: data.firstName }),
            });

            await resend.emails.send({
                from: `Greta <${process.env.RESEND_FROM_EMAIL}>`,
                to: `${process.env.RESEND_ADMIN_EMAIL}`,
                subject: `New message from ${data.firstName} ${data.lastName}`,
                html: `
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong> ${data.message}</p>
        `,
            });

            if (error != null) {
                console.error("Error sending email:", error);
                throw new Error("Failed to send email");
            }

            console.log("Email sent successfully:", emailData);
        } catch (emailError) {
            console.error("Error sending email:", emailError);
            throw new Error("Failed to send email");
        }

        return {
            defaultValues: {
                firstName: "",
                lastName: "",
                email: "",
                message: "",
            },
            success: true,
            errors: null,
        };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return {
                defaultValues,
                success: false,
                errors: Object.fromEntries(
                    Object.entries(error.flatten().fieldErrors).map(([key, value]) => [
                        key,
                        value?.join(", "),
                    ]),
                ),
            };
        }

        return {
            defaultValues,
            success: false,
            errors: {
                form: "An unexpected error occurred. Please try again later.",
            },
        };
    }
}
