import { fetchRevenue } from '@/app/lib/data'

export default async function InvoicesTable({
    query,
    currentPage,
}: {
    query: string
    currentPage: number
}) {
    const invoices = await fetchRevenue(query, currentPage)
    return (
        <div className="mt-6 flow-root">
          <div className="inline-block min-w-full align-middle">
            <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
              <div>
                {invoices?.map((invoice) => (
                  <div
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <p>{invoice.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }