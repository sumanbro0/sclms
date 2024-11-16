import { metaObject } from "@/config/site.config";
import { invoiceData } from "../../../shared/data/invoice-data";
import TableLayout from "@/shared/table/table-layout";
import InvoiceTable from "@/shared/admin/classes/classes-list/table";

export const metadata = {
  ...metaObject("Enhanced Table"),
};

const pageHeader = {
  title: "Guardians",
  breadcrumb: [],
};

export default function GuardiansPage() {
  return (
    <TableLayout
      type="student"
      title={pageHeader.title}
      breadcrumb={pageHeader.breadcrumb}
      data={invoiceData}
      fileName="invoice_data"
      header="ID,Name,Username,Avatar,Email,Due Date,Amount,Status,Created At"
    >
      <InvoiceTable data={invoiceData} />
    </TableLayout>
  );
}
