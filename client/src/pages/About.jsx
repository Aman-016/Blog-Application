
import CallToAction from '../components/CallToAction';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Aman's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
             Welcome to Aman’s Blog — a learning-focused platform created to share knowledge, experiences, and practical guidance in the field of technology and personal growth. This blog is designed especially for students, beginners, and aspiring developers who want to build strong fundamentals and gain real-world skills.
            </p>

            <p>
           Here, you’ll find easy-to-understand tutorials on programming, web development, and project building, along with tips for improving problem-solving, communication, and career readiness. I believe learning should be simple, practical, and accessible to everyone. That’s why each post is written in a clear and beginner-friendly way, focusing on real examples and step-by-step explanations.
            </p>

            <p>
            Aman’s Blog also reflects my personal journey as a computer science student. From working on academic projects to exploring modern technologies, I share what I learn so others can benefit from the same experiences. Whether it’s Java, basic Python, frontend development, or understanding core concepts like data structures and databases, my goal is to help you grow with confidence.
            </p>

            <p>
              Beyond coding, this blog also covers topics such as interview preparation, project ideas, skill development, and career guidance for fresh graduates. I understand the challenges students face while entering the tech industry, and this platform aims to provide motivation, clarity, and direction.
            </p>

            <p>
              This space is more than just a blog — it’s a community for learners who want to improve every day. If you’re starting your tech journey, working on projects, or preparing for your future career, you’re in the right place.
            </p>

          <p>
            Thank you for visiting Aman’s Blog. Stay curious, keep practicing, and never stop learning. Your growth starts here.
          </p>

          </div>
        </div>
        <div className='mt-10'>
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
