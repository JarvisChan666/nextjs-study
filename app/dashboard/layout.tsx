import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
      {/* 你导入到这个文件中的任何组件都将成为布局的一部分。 */}
      {/* 位于 /dashboard 中的页面将自动嵌套在 <Layout /> 中，如下所示： */}
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}