import Header from "@/components/header";
import SideMenu from "@/components/SideMenu";
export default function Home() {
  return (
    <>
  
      <Header />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SideMenu />
    </main>
    </>
  );
}
