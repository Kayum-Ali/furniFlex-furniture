

const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center h-[60vh]">
                 <h2 className="text-2xl font-bold ">Opps</h2> <br />
                 <p className="text-3xl  mb-5">Not Found</p>
                 <button className="btn btn-warning" onClick={() => window.history.back()}>Go Back</button>
            </div>
            
        </div>
    );
};

export default ErrorPage;