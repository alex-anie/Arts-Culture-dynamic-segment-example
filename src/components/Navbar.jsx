import { Activity, Search } from "react-feather";

export default function Navbar() {
  return (
   <>
    <main className="">
        <header>
            <nav className="flex justify-between bg-slate-200 rounded-3xl py-2">
                {/* logo */}
                <div className="">
                    <Activity className="inline-block ml-10 mr-2 text-orange-500" />
                    <p className="inline-block text-xl">{`Arts & Culture`}</p>
                </div>

                {/* Navlinks */}
                <div className="bg-white rounded-3xl py-1 px-2 mr-5">
                    <Search className="inline-block mr-1 text-slate-500"/>
                    <input type="search" id="site-search" name="q" placeholder="Search anything" className="bg-transparent outline-none text-slate-800"/>
                </div>
            </nav>
        </header>
    </main>
   </>
  )
}
