import Header from "./components/header";

export default function Home() {
  return (
    <main>
      {/* Top Notification */}
      <div className="w-full min-h-[30px] bg-black text-white text-sm underline flex justify-center items-center py-[6px] px-[16px]">
        Sale update: now up to 60% off | Selected styles; limited time | Shop now
      </div>

      <div className="flex max-w-[1440px] flex-col items-center justify-between px-[16px] md:px-[48px] mx-auto">
        <Header />
      </div>
    </main>
  );
}
