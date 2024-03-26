"use server";

import { cookies } from "next/headers";

export async function getUsername() {
    return cookies().get("username")?.value;
}

export async function setUsername(formData: FormData) {
    const rawFormData = {
        username: formData.get("username"),
    };

    cookies().set("username", String(rawFormData.username));
}
