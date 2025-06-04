import React from "react";
import Link from "next/link";

// Fetch users server-side (Next.js 13+ server component)
async function getUsers() {
    const res = await fetch("https://dummyjson.com/users");
    if (!res.ok) throw new Error("Failed to fetch users");
    const data = await res.json();
    return data.users;
}

export default async function UsersPage() {
    const users: { id: number; firstName: string }[] = await getUsers();

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <ul className="space-y-2">
                {users.map((user) => (
                    <li key={user.id} className="bg-white p-4 rounded shadow">
                        <Link
                            href={{
                                pathname: `/users`,
                                query: { modal: user.id },
                            }}
                            as={`/users/${user.id}`}
                            scroll={false}
                            className="text-blue-600 hover:underline"
                        >
                            {user.firstName}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
