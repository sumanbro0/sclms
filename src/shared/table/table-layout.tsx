"use client";

import PageHeader, { PageHeaderTypes } from "@/shared/page-header";
import ImportButton, { FormType } from "@/shared/import-button";

type TableLayoutProps = {
  data: unknown[];
  header: string;
  fileName: string;
  showBtn?: boolean;
  type: FormType;
} & PageHeaderTypes;

export default function TableLayout({
  data,
  header,
  fileName,
  children,
  type,
  showBtn = true,
  ...props
}: React.PropsWithChildren<TableLayoutProps>) {
  return (
    <>
      <PageHeader {...props}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          {/* <ExportButton data={data} fileName={fileName} header={header} /> */}
          {showBtn && <ImportButton type={type} title={"Add New"} />}
        </div>
      </PageHeader>

      {children}
    </>
  );
}
