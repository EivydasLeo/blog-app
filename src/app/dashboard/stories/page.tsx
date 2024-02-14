"use client";
import React, { useEffect } from "react";
import styles from "@/scss/app/dashboard/dashboard.module.scss";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Table from "@/components/Table/Table";
import { Button } from "@/components/Button/Button";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";

const DashboardStories: React.FC = () => {
    const session = useSession();
    const router = useRouter();

    console.log(session, "session");

    useEffect(() => {
        if (session.status === "unauthenticated") {
            router?.push("/dashboard/login");
        }
    }, [session.status, router]);

    const fetcher = async (url: RequestInfo, init?: RequestInit): Promise<any> => {
        const res = await fetch(url, init);
        return await res.json();
    };

    const { data, mutate, isLoading } = useSWR(
        `/api/stories?username=${session?.data?.user?.name}`,
        fetcher,
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const formElements = (e.target as HTMLFormElement).elements;
        const [title, desc, image, content] = Array.from(formElements) as HTMLInputElement[];
        try {
            await fetch("/api/stories", {
                method: "POST",
                body: JSON.stringify({
                    title: title.value,
                    desc: desc.value,
                    image: image.value,
                    content: content.value,
                    username: session?.data?.user?.name,
                }),
            });
            void mutate();
            (e.target as HTMLFormElement).reset();
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id: string): Promise<void> => {
        try {
            await fetch(`/api/stories/${id}`, {
                method: "DELETE",
            });
            void mutate();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={styles.container}>
            {session.status === "loading" && <p>Loading...</p>}
            {session.status === "authenticated" && (
                <>
                    <div className={styles.stories}>
                        {isLoading ? (
                            "loading"
                        ) : (
                            <>
                                <ButtonLink text="Go Back" url="/dashboard" />
                                <Table
                                    stories={data}
                                    onDelete={(e) => {
                                        void handleDelete(e);
                                    }}
                                />
                            </>
                        )}
                    </div>
                    <form
                        className={styles.new}
                        onSubmit={(e) => {
                            void handleSubmit(e);
                        }}
                    >
                        <h1>Add New Story</h1>
                        <input type="text" placeholder="Title" className={styles.input} />
                        <input type="text" placeholder="Desc" className={styles.input} />
                        <input type="text" placeholder="Image" className={styles.input} />
                        <textarea
                            placeholder="Content"
                            className={styles.textArea}
                            cols={30}
                            rows={10}
                        ></textarea>
                        <Button text="Add New Story" title="Add New Story" />
                    </form>
                </>
            )}
        </div>
    );
};

export default DashboardStories;
