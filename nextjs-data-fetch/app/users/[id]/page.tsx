import React from "react";

// Fetch a single user by id
async function getUser(id: string) {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    if (!res.ok) throw new Error("Failed to fetch user");
    return res.json();
}

interface UserPageProps {
    params: { id: string };
}

export default async function UserPage({ params }: UserPageProps) {
    const user = await getUser(params.id);

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold mb-4">User Details</h1>
            <div className="bg-white p-6 rounded shadow space-y-2">
                <div>
                    <span className="font-semibold">First Name:</span>{" "}
                    {user.firstName}
                </div>
                <div>
                    <span className="font-semibold">Last Name:</span>{" "}
                    {user.lastName}
                </div>
                <div>
                    <span className="font-semibold">Age:</span> {user.age}
                </div>
                <div>
                    <span className="font-semibold">Gender:</span> {user.gender}
                </div>
                <div>
                    <span className="font-semibold">Email:</span> {user.email}
                </div>
            </div>
        </main>
    );
}
