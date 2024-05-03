import { sql } from '@vercel/postgres'
import { redirect } from 'next/navigation'

async function create(formData: FormData) {
    'use server';
    const { rows } = await sql`
        INSERT INTO pets (name)
        VALUES (${formData.get('name')})
    `;
    redirect(`/dashboard`)
}

export default function Page() {
    return (

        <div className="flex items-center justify-center bg-white p-8">
            <div className="mx-auto w-full max-w-xs">

                <div>
                    <label for="price" className="block text-sm font-medium leading-6 text-gray-900">고양이 이름</label>
                    <div className="relative mt-2">

                        <form action={create}>
                            <input type="text" name="name" className="block w-full rounded-md border-0 mb-4 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">저장</button>
                        </form>

                    </div>
                </div>

            </div>
        </div>

    );
}