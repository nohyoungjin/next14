'use server'

import { sql } from '@vercel/postgres'

export async function createInvoice(formData: FormData) {
    const rawFormData = {
        amount: formData.get('amount')
    }
    console.log(rawFormData)

    await sql`
    INSERT INTO pets (name) VALUES (${amount})`;
}