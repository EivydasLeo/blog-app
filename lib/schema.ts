import { z } from "zod";

export const contactFormSchema = (
    t: (key: string) => string,
): z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    message: z.ZodString;
}> => {
    return z.object({
        firstName: z
            .string()
            .min(2, { message: t("firstNameMin") })
            .max(32, { message: t("firstNameMax") }),
        lastName: z
            .string()
            .min(2, { message: t("lastNameMin") })
            .max(32, { message: t("lastNameMax") }),
        email: z.string().email({ message: t("emailInvalid") }),
        message: z
            .string()
            .min(2, { message: t("messageMin") })
            .max(1000, { message: t("messageMax") }),
    });
};
