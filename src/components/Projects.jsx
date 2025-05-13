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
        <div id="projects" className="text-white py-8 md:py-16 container mx-auto">
            <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold pb-6">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                {
                    projects.map(project => <div key={project._id} className="card card-compact bg-[#252A46] shadow-xl">
                        <figure>
                            <img
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