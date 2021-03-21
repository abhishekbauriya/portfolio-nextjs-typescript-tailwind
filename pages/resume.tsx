import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";

const resume = () => {
    
    return (
        <motion.div className="px-6 py-2" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
            {/* Education & Experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-3 text-2xl font-bold">Electronics & Telecommunication Engineering</h5>
                        <p className="font-semibold">A. P. Shah Institute of Technology</p>
                        <p className="my-3">
                            I am a Web Developer, App Developer  
                            from A. P. Shah Institute of Technology, Mumbai. 
                            I am very passionate and dedicated to my work. I have years of 
                            work experience as blogging and worked with wordpress technology,  
                            were in the domains of web development. I enjoy working 
                            in a team and occassionally do freelancing.
                        </p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Looking for Opportunity</h5>
                    <div>
                        <h5 className="my-3 text-2xl font-bold">Software Engineer</h5>
                        <p className="font-semibold"></p>
                        <p className="my-3">
                            First things I'm excited to work on new technologies. I am fast learner grab those things easily and learn it in innovative way. This opportunity will teach myself solving real time problems. Help me to gain extra knowledge from your company. Also my dedication and hard work is what you can be assured. Apart from these things I have learnt web development skills own and built some of the website. But trying more harder to achieve my goals. That's why want to learn some thing that can enhance my carrier. Always passionate about myself and job.
                        </p>
                    </div>
                </motion.div>
            </div>
            
            {/* Languages & Tool */}

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                    <div className="my-2">
                        {languages.map((language, i) => (
                            <Bar value={language} key={i} />
                        ))}
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Soft SKills</h5>
                    <div className="my-2">
                        {tools.map((tool, i) => (
                            <Bar value={tool} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default resume