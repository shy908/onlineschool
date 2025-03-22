import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderCard from './SliderCard';
import shy from '../../assets/shy.jpg';

const testimonials = [
    {
      name: 'Admire Mare',
      image: 'https://miro.medium.com/v2/resize:fit:1000/1*SG29-J4RjliOay85lT0cug.jpeg',
      role: 'Teacher',
      comment:
        'I completed several online courses from different platforms that helped transform my teaching career. The flexible learning environment and the quality of content I accessed helped me innovate in my classroom. I’ve been recognized for incorporating new digital teaching methods, and it all started with online learning.',
      rating: 5,
    },
    {
      name: 'Shy Manuel',
      image: shy,
      role: 'Web Developer',
      comment:
        'Learning web development through online platforms was a game-changer for me. The hands-on coding challenges and community-driven support helped me build a strong portfolio and secure my current job as a web developer. I am thankful for these online platforms that allowed me to learn at my own pace.',
      rating: 5,
    },
    {
      name: 'Joseph Mamonya',
      image: 'https://static.vecteezy.com/system/resources/previews/022/396/701/large_2x/a-beautiful-smiling-young-male-scientist-in-front-of-a-blurry-white-laboratory-background-ai-generated-photo.jpeg',
      role: 'Doctor',
      comment:
        'The flexibility and quality of online medical courses helped me stay current in my field while continuing to practice medicine. I was able to manage my work-life balance and keep up-to-date with the latest research through these online platforms. They provided me with the resources I needed to enhance my professional knowledge.',
      rating: 5,
    },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const Slider = () => {
  return (
    <div className="py-16 bg-gray-100">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass="p-4"
        className="max-w-screen-lg mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SliderCard
            key={index}
            name={testimonial.name}
            image={testimonial.image}
            role={testimonial.role}
            comment={testimonial.comment}
            rating={testimonial.rating}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
