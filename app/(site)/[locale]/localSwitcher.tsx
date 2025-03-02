"use client";

import styles from "@/app/styles/components/LocalSwitcher/localSwitcher.module.scss";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { type ChangeEvent, useTransition } from "react";
import { LocalesData } from "@/app/utils/dummyData/data";

export default function LocalSwitcher(): JSX.Element {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const nextLocale = e.target.value;

        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };

    return (
        <div className={styles.container}>
            <select
                defaultValue={localActive}
                className={styles.select}
                onChange={onSelectChange}
                disabled={isPending}
                aria-label="Select language"
            >
                {LocalesData.map((locale) => (
                    <option key={locale} value={locale}>
                        {locale.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
}
