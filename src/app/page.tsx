import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import SubFooter from "./components/footer/subFooter";

export default function Home() {
  const sectionClass = "flex max-w-[1440px] flex-col items-center justify-between px-[16px] md:px-[48px] mx-auto";

  return (
    <main>
      {/* TOP NOTIFICATION AREA */}
      <div className="w-full min-h-[30px] bg-black text-white text-sm underline flex justify-center items-center py-[6px] px-[16px]">
        Sale update: now up to 60% off | Selected styles; limited time | Shop now
      </div>

      {/* HEADER AREA */}
      <div className={sectionClass}>
        <Header />
      </div>

      {/* FOOTER AREA */}
      <div className={`w-full bg-[#E6E6E6]`}>
        <div className={`${sectionClass}`}>
          <Footer />
        </div>
        <div className="bg-white h-[1px]" />
        <div className="flex max-w-[1440px] px-[16px] md:px-[48px] mx-auto">
          <SubFooter />
        </div>
      </div>
    </main>
  );
}
