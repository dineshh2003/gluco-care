
import Navbar from "@/components/Navbar";
import PatientInfo from "@/components/PatientInfo";

export default function Home() {
  return (
    <main className="flex flex-row h-screen w-[95vw] bg-b2">
      <div className="w-[80vw] h-full ">
          <Navbar/>
          
      </div>
      <div className="w-[20vw] h-full flex items-center justify-center rounded-lg">
        <PatientInfo />
      </div>
    </main>
  );
}
