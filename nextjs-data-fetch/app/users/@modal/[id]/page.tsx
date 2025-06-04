import React from "react";

// Fetch a single user by id
async function getUser(id: string) {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    if (!res.ok) throw new Error("Failed to fetch user");
    return res.json();
}

interface ModalProps {
    params: { id: string };
}

export default async function UserModal({ params }: ModalProps) {
    const user = await getUser(params.id);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg min-w-[300px] relative">
                <h2 className="text-xl font-bold mb-4">User Modal</h2>
                <div className="mb-2">
                    <span className="font-semibold">ID:</span> {user.id}
                </div>
                <div className="mb-2">
                    <span className="font-semibold">First Name:</span>{" "}
                    {user.firstName}
                </div>
                <div className="mb-4">
                    <span className="font-semibold">Last Name:</span>{" "}
                    {user.lastName}
                </div>
                <a href="/users" className="text-blue-600 hover:underline">
                    Close
                </a>
            </div>
        </div>
    );
}
