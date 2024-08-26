interface Props {
    handleCancel: () => void;
    handleDelete: () => void;
}

const CreateFlightForm = ({ handleCancel, handleDelete }: Props) => {
    return (
        <div className="relative container rounded-md mx-auto bg-slate-100 py-[100px] px-10">
            <div className="bg-white rounded-md p-10">
                <div className="space-y-12">
                    <div className="pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900 uppercase">
                            <span className="font-bold">DELETE</span> - mission
                        </h2>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <p>
                                Are you sure you? You can't undo this action
                                afterwards
                            </p>
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
                        onClick={handleDelete}
                    >
                        delete
                    </button>
                </div>
            </div>
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
