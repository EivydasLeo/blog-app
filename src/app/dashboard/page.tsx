"use client";
import React, { useEffect } from "react";
import styles from "@/scss/app/dashboard/dashboard.module.scss";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Post {
    _id: string;
    title: string;
    image: string;
}

const Dashboard: React.FC = () => {
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
        `/api/posts?username=${session?.data?.user?.name}`,
        fetcher,
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const formElements = (e.target as HTMLFormElement).elements;
        const [title, desc, image, content] = Array.from(formElements) as HTMLInputElement[];
        try {
            await fetch("/api/posts", {
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
            await fetch(`/api/posts/${id}`, {
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
                    <div className={styles.posts}>
                        {isLoading
                            ? "loading"
                            : data?.map((post: Post) => (
                                  <div className={styles.post} key={post._id}>
                                      <div className={styles.imgContainer}>
                                          <Image src={post.image} alt="" width={200} height={100} />
                                      </div>
                                      <h2 className={styles.postTitle}>{post.title}</h2>
                                      <span
                                          className={styles.delete}
                                          onClick={() => {
                                              void handleDelete(post._id);
                                          }}
                                      >
                                          X
                                      </span>
                                  </div>
                              ))}
                    </div>
                    <form
                        className={styles.new}
                        onSubmit={(e) => {
                            void handleSubmit(e);
                        }}
                    >
                        <h1>Add New Post</h1>
                        <input type="text" placeholder="Title" className={styles.input} />
                        <input type="text" placeholder="Desc" className={styles.input} />
                        <input type="text" placeholder="Image" className={styles.input} />
                        <textarea
                            placeholder="Content"
                            className={styles.textArea}
                            cols={30}
                            rows={10}
                        ></textarea>
                        <button className={styles.button}>Send</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Dashboard;
