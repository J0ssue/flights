import FlightDisplayCard from "./FlightDisplayCard";

interface Props {
    title: string;
    state?: "pre" | "post" | "normal";
    flights: {
        title: string;
        description: string;
        id: string;
        state: string;
    }[];
    handleDelete: (id: string) => void;
    handleMove: (
        direction: "left" | "right",
        id: string,
        state: string
    ) => void;
}

const SectionContainerLayout = ({
    title,
    state,
    flights,
    handleDelete,
    handleMove,
}: Props) => {
    var FlightsElements = flights.map((flight) => (
        <FlightDisplayCard
            id={flight.id}
            key={flight.id}
            state={flight.state}
            type={state || "normal"}
            title={flight.title}
            description={flight.description}
            className="mb-2"
            handleDelete={handleDelete}
            handleMove={(
                direction: "left" | "right",
                id: string,
                state: string
            ) => handleMove(direction, id, state)}
        />
    ));
    return (
        <section className="bg-slate-200 flex-1 rounded p-2">
            <h2 className="font-bold mb-6">{title}</h2>
            {FlightsElements}
        </section>
    );
};

export default SectionContainerLayout;
