
import Exercise from "@/components/Exercise";
import HeartRate from "@/components/HeartRate";
import Navbar from "@/components/Navbar";
import PatientInfo from "@/components/PatientInfo";
import Records from "@/components/Record";


export default function Home() {
  return (
    <main className="flex flex-row h-screen w-[95vw] bg-b2 ">
      <div className="w-[80vw] h-[95vh] bg-white my-5 mx-4 rounded-xl ">
          <Navbar/> 
          <Records/>
          <Exercise/>
      </div>
      <div className="w-[20vw] h-full flex items-center justify-center rounded-lg">
        <PatientInfo />
      </div>
    </main>
  );
}
