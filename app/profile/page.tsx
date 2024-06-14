"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Profile of {session?.user?.name}</h1>
            {session?.user ? (
                <div>
                    Your data: <br />
                    EMAIL: {session.user.email} <br />
                    NAME: {session.user.name} <br />
                    ID: {session.user.id}
                </div>
            ) : (
                <div>You are not logged in.</div>
            )}
        </div>
    );
}