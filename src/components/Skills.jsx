import skillsBG from '../assets/skillsBG.jpg';

const Skills = () => {
    return (
        <div className="container mx-auto text-[#2126432c] bg-cover bg-no-repeat h-[450px]" style={{
            backgroundImage: `linear-gradient(rgba(33, 38, 67, 0.36), rgba(33, 38, 67, 0.76)), url(${skillsBG})`
        }}>
            Skills
        </div>
    );
};

export default Skills;