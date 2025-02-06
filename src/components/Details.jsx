import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaHome } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Details = () => {

    const { id } = useParams()
    const data = useLoaderData()

    const [project, setProject] = useState({})

    useEffect(() => {
        const singleProject = data.find(item => item._id == id)
        setProject(singleProject)
    }, [data, id])

    const { projectName, description, projectImg, website, clientCode, serverCode } = project
    console.log(project.technology);


    return (
        <div className="" style={{ background: "radial-gradient(circle, rgba(33,38,67,0.9044994706867122) 0%, rgba(33,38,67,1) 36%, rgba(33,38,67,0.9941353250284489) 69%, rgba(33,38,67,0.9773286023393732) 100%)" }}>

            <div className="w-full md:w-10/12 mx-auto px-4 py-12">
                <div className="md:p-6 max-w-3xl mb-6 mx-auto w-full"><Link to='/' className="btn btn-primary">Back to home<FaHome /></Link></div>
                <div className="md:p-6 max-w-4xl w-full mx-auto p-3 border shadow-xl rounded-xl text-white">

                    <div className="mb-8 ml-2">
                        <p className="text-3xl md:text-5xl font-semibold pb-3">{projectName}</p>
                    </div>
                    <div className="h-auto mb-6 md:mb-8">
                        <img className="w-full h-full rounded-xl" src={projectImg} alt="" />
                    </div>
                    <div className="ml-2">

                        <p className="text-xl font-semibold flex flex-wrap items-center gap-3">
                            {project?.technology?.map((item, idx) => <div key={idx}>
                                <div className="badge badge-primary">{item}</div>

                            </div>)}
                        </p>



                        <p className="text-gray-300 text-lg py-4">{description}</p>


                        <div className='flex flex-wrap gap-3 items-center'>
                            <a className="btn btn-primary" target="_blank" href={website}>Website <FaExternalLinkAlt /></a>
                            <a data-tooltip-id="my-tooltip"
                                data-tooltip-content="Client Code"
                                data-tooltip-variant="info"
                                data-tooltip-place="top"
                                className=" text-4xl"
                                target="_blank"
                                href={clientCode}
                            >
                                <FaGithub />
                            </a>
                            {serverCode && <a data-tooltip-id="my-tooltip"
                                data-tooltip-content="Server Code"
                                data-tooltip-variant="info"
                                data-tooltip-place="top"
                                className=" text-4xl"
                                target="_blank"
                                href={serverCode}
                            >
                                <FaGithub />
                            </a>}

                        </div>
                    </div>
                </div>



            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Details;