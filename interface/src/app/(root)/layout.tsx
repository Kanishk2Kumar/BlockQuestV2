import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <main>
      <div className="mx-12">
        <Header />
        <div className="mt-10 pb-10">{children}</div>
      </div>
    </main>
  );
};

export default Layout;