import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-[#7e7609] rounded-xl">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex justify-center items-center gap-x-10">
                    <Link href="/" className="text-[white] text-[18px] font-bold hover:text-[#422323]">
                        Home
                    </Link>

                     <Link href="/" className="text-[white] text-[18px] font-bold hover:text-[#422323]">
                       Contact
                    </Link>

                    <Link href="/" className="text-[white] text-[18px] font-bold hover:text-[#422323]">
                        About
                    </Link>
                </div>
            </div>
        </div>
    );
}
