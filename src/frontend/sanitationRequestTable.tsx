export function FeedBackDisplay(props: {
    form: {
        name: string;
        priority: string;
        location: string;
        requestType: string;
        permission: string;
        status: string;
    };
}) {
    return (
        <div
            className={
                "justify-items-center w-full text-2xl border-2 border-gray-400 rounded-2xl p-10 flex flex-col gap-5 rounded-2"
            }
        >
            <div className={"flex flex-col justify-items-center gap-2 px-10"}>
                <h1>Name:</h1>
                <p className={"pl-16"}>{props.form.name}</p>
            </div>
            <div className={"flex flex-col justify-items-center gap-2 px-10"}>
                <h1>Feedback:</h1>
                <p className={"pl-16"}>{props.form.priority}</p>
            </div>
            <div className={"flex flex-col justify-items-center gap-2 px-10"}>
                <h1>Feedback:</h1>
                <p className={"pl-16"}>{props.form.location}</p>
            </div>
            <div className={"flex flex-col justify-items-center gap-2 px-10"}>
                <h1>Feedback:</h1>
                <p className={"pl-16"}>{props.form.requestType}</p>
            </div>
            <div className={"flex flex-col justify-items-center gap-2 px-10"}>
                <h1>Feedback:</h1>
                <p className={"pl-16"}>{props.form.permission}</p>
            </div>
            <div className={"flex flex-col justify-items-center gap-2 px-10"}>
                <h1>Feedback:</h1>
                <p className={"pl-16"}>{props.form.status}</p>
            </div>
        </div>
    );
}