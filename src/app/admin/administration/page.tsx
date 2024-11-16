import { routes } from "@/config/routes";
// import { orderData } from '@/data/order-data';

import { getColumns } from "@/shared/ecommerce/order/order-list/columns";

import BasicTableWidget from "@/shared/controlled-table/basic-table-widget";
import { metaObject } from "@/config/site.config";
import { orderData } from "../../../shared/data/order-data";
import TableLayout from "../../../shared/table/table-layout";

export const metadata = {
  ...metaObject("Table with search"),
};

const pageHeader = {
  title: "Users",
  breadcrumb: [],
};

export default function AdminTablePage() {
  return (
    <TableLayout
      title={pageHeader.title}
      showBtn={false}
      breadcrumb={pageHeader.breadcrumb}
      data={orderData}
      fileName="order_data"
      header="Order ID,Name,Email,Avatar,Items,Price,Status,Created At,Updated At"
    >
      <BasicTableWidget
        title="Search Table"
        variant="minimal"
        data={orderData}
        // @ts-ignore
        getColumns={getColumns}
        enablePagination
        searchPlaceholder="Search order..."
        className="min-h-[480px] [&_.widget-card-header]:items-center [&_.widget-card-header_h5]:font-medium"
      />
    </TableLayout>
  );
}
