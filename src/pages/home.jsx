import { Outlet } from "react-router-dom";
import AsideBar from "../components/AsideBar";
import Content from "../components/Content";

export default function home() {
return (
    <>
        <main className="w-[80%] mt-[2em] mx-auto">
            <section>
                <Outlet />
            </section>

            <section className="flex">
                <aside>
                    <AsideBar />
                </aside>

                <aside>
                    <Content />
                </aside>
            </section>
        </main>
    </>
)
}
