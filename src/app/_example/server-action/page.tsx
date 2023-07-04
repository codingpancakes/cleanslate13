import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default function ServerAction() {
	const addTodo = async (formData: FormData) => {
		"use server";
		const title = formData.get("title");

		if (title) {
			// Create a Supabase client configured to use cookies
			const supabase = createServerActionClient({ cookies });

			// This assumes you have a `todos` table in Supabase. Check out
			// the `Create Table and seed with data` section of the README 👇
			// https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md
			await supabase.from("todos").insert({ title });
			revalidatePath("/server-action-example");
		}
	};

	return (
		<form action={(formData) => void addTodo(formData)}>
			<input name="title" />
		</form>
	);
}
