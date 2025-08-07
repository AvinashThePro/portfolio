import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profileImages.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-4 sm:px-6 md:px-10 lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-snug">
            Hi, I am
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-snug">
            Avinash Kumar Singh
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[#8245ec] leading-snug">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'App Developer',
                'MERN-Stack Developer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 mt-6 leading-relaxed">
            I am a passionate full-stack and mobile app developer with a strong
            foundation in building responsive and scalable web and mobile
            applications. Proficient in the MERN stack (MongoDB, Express.js,
            React, Node.js) and Flutter, I have gained hands-on experience
            through academic projects and internships. I enjoy crafting seamless
            user experiences and developing modern, efficient solutions for both
            web and mobile platforms.
          </p>

          <a
            href="https://drive.google.com/file/d/17Wr2tgERis64G2i8cvtzOFGxFDZ6S-0Q/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow:
                '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            MY RESUME
          </a>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Avinash Kumar Singh"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
