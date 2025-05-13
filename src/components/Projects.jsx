import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    return (
        <div id="projects" className="text-white container mx-auto">
            <h2 className="text-center pb-4 md:pb-6 title">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                {
                    projects.map(project => <div key={project._id} className="card card-compact bg-[#252A46] shadow-xl rounded-lg">
                        <figure>
                            <img
                                className="h-full w-full max-h-80"
                                src={project.projectImg}
                                alt="Thumbnail" />
                            
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.projectName}</h2>
                            <p className="text-[16px] text-gray-300">{project.description}</p>
                            <div className="card-actions justify-end pt-4">
                                <Link to={`/details/${project._id}`} className="btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;