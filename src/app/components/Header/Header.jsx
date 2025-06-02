import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-[#7e7609]">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex justify-center items-center gap-x-5">
                    <Link href="/" className="text-[white] text-[18px] font-bold hover:text-[#e96767]">
                        Home
                    </Link>

                     {/* <Link href="/" className="text-[white] text-[18px] font-bold hover:text-[#e96767]">
                        Product
                    </Link>

                    <Link href="/" className="text-[white] text-[18px] font-bold hover:text-[#e96767]">
                        About
                    </Link> */}
                </div>
            </div>
        </div>
    );
}
