import { FooterLinks } from "@/data/footer";

const SubFooter = () => {
  return (
    <div className="w-full py-6">
      <div className="flex flex-row flex-wrap items-center gap-6 mb-5">
        {FooterLinks.map((item, index) => (
          <button className="text-black underline">{item.name}</button>
        ))}
      </div>
      <>
        <div className="text-sm">
          'FAROUT' and the 'FAROUT' logo are trade marks of FAROUT UK Limited and are registered in numerous jurisdictions around the world.
        </div>
        <div className="text-sm">© Copyright 2023 FAROUT UK Limited. All rights reserved.</div>
      </>
    </div>
  );
};

export default SubFooter;
