import Bar from "../components/Bar";
import { languages, tools } from "../data";
import {motion} from 'framer-motion'
import {fadingUp} from '../animation'
const Resume = () => {



  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadingUp} initial='initial' animate='animate'>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Electrical / Electronics Engineering
            </h5>
            <p className="font-semibold">IMT Enugu (2010-2015)</p>
            <p className="my-3">
              I am currently working as a web developer, Freelancing
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadingUp} initial='initial' animate='animate'>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
            <p className="font-semibold">Full Stack React developer</p>
            <p className="my-3">I love doing this job</p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar value={language} key={language.name} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar value={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
