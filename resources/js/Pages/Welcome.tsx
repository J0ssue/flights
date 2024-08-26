import { Head, router } from "@inertiajs/react";
import { PageProps } from "@/types";
import { useState } from "react";
import SectionContainerLayout from "@/Components/SectionContainerLayout";
import CreateFlightForm from "@/Components/CreateFlightForm";
import DeleteFlightForm from "@/Components/DeleteFlightForm";
import Alert from "@/Components/Alert";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    flights,
}: PageProps<{
    laravelVersion: string;
    phpVersion: string;
    flights: [
        { title: string; description: string; id: string; state: string }
    ];
}>) {
    const [idForDelete, setIdForDelete] = useState<string | null>(null);
    const [displayForm, setDisplayForm] = useState<boolean>(false);

    var PreFlights = flights?.filter((flight) => flight.state === "pre") || [];
    var PostFlights =
        flights?.filter((flight) => flight.state === "post") || [];
    var NormalFlights =
        flights?.filter((flight) => flight.state === "normal") || [];

    function handleCreateButtonClick() {
        //        router.visit("/flights/create");
        setDisplayForm(true);
    }

    function handleDelete() {
        router.delete(`/flights`, { data: { id: idForDelete } });
        setIdForDelete(null);
    }

    function handleMove(direction: string, id: string, state: string) {
        if (direction === "left") {
            if (state === "pre") return;
            else if (state === "normal") {
                router.patch("/flights", { data: { id, state: "pre" } });
            } else if (state === "post") {
                router.patch("/flights", { data: { id, state: "normal" } });
            }
        }
        if (direction === "right") {
            if (state === "post") return;
            else if (state === "normal") {
                router.patch("/flights", {
                    data: { id, state: "post" },
                });
            } else if (state === "pre") {
                router.patch("/flights", { data: { id, state: "normal" } });
            }
        }
    }

    return (
        <>
            <Head title="Flights" />
            <div className="relative container h-full mx-auto bg-slate-100 py-[100px] px-10">
                {/* <Alert message="Message" /> */}
                <header className="flex justify-between">
                    <h1 className="font-bold">Flight Mission Control Tool</h1>
                    <button
                        className="uppercase font-bold p-2 rounded bg-slate-300"
                        onClick={handleCreateButtonClick}
                    >
                        add mission
                    </button>
                </header>
                <main className="flex flex-col md:flex-row pt-10 gap-y-10 md:gap-y-0 md:gap-x-10">
                    <SectionContainerLayout
                        title="Pre-Flight"
                        state="pre"
                        flights={PreFlights}
                        handleDelete={(id) => {
                            setIdForDelete(id);
                        }}
                        handleMove={(direction, id, state) => {
                            handleMove(direction, id, state);
                        }}
                    />
                    <SectionContainerLayout
                        title="Flight"
                        flights={NormalFlights}
                        handleDelete={(id) => {
                            setIdForDelete(id);
                        }}
                        handleMove={(direction, id, state) => {
                            handleMove(direction, id, state);
                        }}
                    />
                    <SectionContainerLayout
                        title="Post-Flight"
                        state="post"
                        flights={PostFlights}
                        handleMove={(direction, id, state) => {
                            handleMove(direction, id, state);
                        }}
                        handleDelete={(id) => {
                            setIdForDelete(id);
                        }}
                    />
                </main>
            </div>
            {displayForm ? (
                <div className="absolute h-full w-full bg-indigo-950 top-0 left-0 flex flex-col justify-center items-center">
                    <CreateFlightForm
                        handleCancel={() => setDisplayForm(false)}
                    />
                </div>
            ) : null}
            {idForDelete ? (
                <div className="absolute h-full w-full bg-indigo-950 top-0 left-0 flex flex-col justify-center items-center">
                    <DeleteFlightForm
                        handleDelete={handleDelete}
                        handleCancel={() => setIdForDelete(null)}
                    />
                </div>
            ) : null}
        </>
    );
}
