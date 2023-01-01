import Dog from "../assets/dog.jpg";
import "../styles/home.css";

const Home = () => {
    return (
        <>
            <div className="">
                <div className="bg-secondary px-5">
                    <div className="row py-5 mb-2">
                        <h1 className="col-10">VetAppointment</h1>
                    </div>
                    <div className="row pb-5">
                        <div className="col-4 p-5 bg-dark text-white h-75">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit
                                amet fermentum leo. Mauris gravida mi sit amet velit maximus varius.
                                Donec varius vitae turpis a sodales. Morbi lobortis sodales nulla et
                                semper.
                            </p>
                            <button className="btn btn-danger mt-4">Take me there</button>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center">
                            <img src={Dog} className="w-75 opacity-75 "></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fs-3">Under construction...</div>
        </>
    );
};

export default Home;
