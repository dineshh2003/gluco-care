import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 my-5 h-[10vh] mx-4 flex items-center justify-evenly text-xl font-serif ">
      <Link href="/"  className="hover:text-b1">
        Medical Profile
      </Link>
      <Link href="/predict-diabetes"  className="hover:text-b1">
      Predict-Diabetes
      </Link>
      <Link href="/chatbot"  className="hover:text-b1">
        Chat-bot
      </Link>
      <Link href="/diet" className="hover:text-b1" >
        Diet
      </Link>
      <Link href="/fix-meeting"  className="hover:text-b1">
        Check-up
      </Link>
    </div>
  );
};

export default Navbar;
