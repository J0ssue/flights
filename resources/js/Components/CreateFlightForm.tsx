import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { FormEventHandler } from "react";

interface Props {
    handleCancel: () => void;
}

const CreateFlightForm = ({ handleCancel }: Props) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        state: "normal",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("flights.store"));
        handleCancel();
    };

    return (
        <div className="relative container rounded-md mx-auto bg-slate-100 py-[100px] px-10">
            <form className="bg-white rounded-md p-10" onSubmit={submit}>
                <div className="space-y-12">
                    <div className="pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900 uppercase">
                            <span className="font-bold">ADD</span> - mission
                        </h2>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label
                                    htmlFor="about"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Title
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="about"
                                        name="about"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                    ></input>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label
                                    htmlFor="description"
                                    className="capitalize block text-sm font-medium leading-6 text-gray-900"
                                >
                                    description
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="description"
                                        name="description"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    ></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end">
                    <button
                        type="button"
                        className="rounded-l-md px-3 py-2 bg-slate-400 text-sm font-bold text-gray-900 uppercase"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-r-md uppercase bg-slate-600 px-3 py-2 text-sm font-bold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        create
                    </button>
                </div>
            </form>
            <button
                onClick={handleCancel}
                className="h-[10px] w-[10px] font-bold absolute right-10 top-10"
            >
                x
            </button>
        </div>
    );
};

export default CreateFlightForm;
