import { NextPage } from 'next';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import { motion } from 'framer-motion';
import { fadingUp, stagger } from '../animation';
const About: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <h6 className="my-3 text-base font-medium">
        Am Jephthah Mbah, a web developer, Dedicated to creating commercial and
        genuine websites to help businesses grow. With years of experience, I
        specializes in developing great website. As a web developer, i mainly
        worked for small to medium-sized companies in the technology sector.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">My work</h4>

        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
              variants={fadingUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
