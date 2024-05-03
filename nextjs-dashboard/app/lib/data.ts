import { sql } from '@vercel/postgres'

const ITEMS_PER_PAGE = 6;

export async function fetchRevenue(query: string) {
    // Add noStore() here prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
  
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
      // console.log('Fetching revenue data...');
      // await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const data = await sql<Revenue>`SELECT * FROM pets WHERE name=${query}`
  
      // console.log('Data fetch completed after 3 seconds.');
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch pets data.');
    }
}

export async function fetchInvolecesPages(query: string) {
    try {
        const count = await sql`SELECT COUNT(*) FROM pets`

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
      } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of invoices.');
      }
}

export async function fetchCustomers() {
  try {
    const data = await sql<CustomerField>`
      SELECT * FROM pets ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}