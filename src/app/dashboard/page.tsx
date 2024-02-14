import React from "react";
import styles from "@/scss/app/dashboard/dashboard.module.scss";

import Link from "next/link";

const Dashboard: React.FC = () => {
    return (
        <div className={styles.container}>
            <Link href="/dashboard/stories">Stories</Link>
            <Link href="/dashboard/quotes">Quotes</Link>
        </div>
    );
};

export default Dashboard;
