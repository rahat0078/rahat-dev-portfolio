import { FaWhatsapp, } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import profile from '../assets/profile-Layer-1.png';
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {

    const submitForm = (e) => {
            e.preventDefault(); 
            toast.success('Message Sent Successfully')

            e.target.reset();  

    }


    return (
        <div id="contact" className="py-12 text-white container mx-auto">
            <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold">Contact Me</h2>
            <div className="flex flex-col md:flex-row justify-between gap-8 my-8">
                <form onSubmit={submitForm} className="flex-1">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" className="input input-bordered input-accent bg-transparent w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email" className="input input-bordered input-accent bg-transparent w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Message</span>
                        </label>
                        <textarea className="textarea textarea-accent bg-transparent w-full" placeholder="Drop a message"></textarea>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn-primary">Send Message</button>
                    </div>
                </form>

                <div className="flex-1 flex flex-col items-start gap-6">
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                            <img src={profile} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="flex items-center font-semibold text-gray-300 text-xl gap-2"><span className="text-[#405AFF] text-2xl"><FaLocationDot /></span> Kurigram, Rangpur, Bangladesh</p>

                        <p className="flex items-center font-semibold text-gray-300 text-xl gap-2"><span className="text-[#405AFF] text-2xl "><FaWhatsapp /></span> +880 1997115843</p>

                        <p className="flex items-center font-semibold text-gray-300 text-xl gap-2"><span className="text-[#405AFF] text-2xl"><MdOutlineAttachEmail /></span> rarahat1710@gmail.com</p>

                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.0036454401757!2d89.63164797594425!3d25.803453806877528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2c927c013ba5f%3A0xe024a947213d5ca1!2sVocational%20Rd%2C%20Kurigram!5e0!3m2!1sen!2sbd!4v1736023730973!5m2!1sen!2sbd"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded w-full max-w-2xl h-[250px] md:h-[350px]"
                    ></iframe>
                </div>

            </div>
            <Toaster />
        </div>
    );
};

export default Contact;