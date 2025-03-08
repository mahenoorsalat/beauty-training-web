"use client"
// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React , {useState} from 'react';




export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState('is-it-free');
  
  const faqs = [
    {
      id: 'is-it-free',
      question: 'Is it free for students?',
      answer: '(Yes! No hidden fees.)'
    },
    {
      id: 'how-platform-works',
      question: 'How does the platform work?',
      answer: 'Our platform provides access to high-quality beauty training courses through an easy-to-use online interface. Students can browse courses, enroll, and access learning materials anytime, anywhere.'
    },
    {
      id: 'available-courses',
      question: 'What courses are available?',
      answer: 'We offer a wide range of beauty courses including makeup artistry, skincare, nail techniques, lash extensions, brow styling, and more. Each course is taught by industry experts.'
    }
  ];
  const courseCategories = [
    { title: "Anti-Wrinkle Injections Training Course", image: "/courses/course1.png" },
    { title: "Cheek or Peel Training Course", image: "/courses/course2.png" },
    { title: "Dermaplaning Training Course", image: "/courses/course3.png" },
    { title: "Eyebrow Lamination Training Course", image: "/courses/course4.png" },
    { title: "Eyebrow Waxing Training Course", image: "/courses/course5.png" },
    { title: "Facial Training", image: "/courses/course6.png" },
    { title: "Full Body Massage Training Course", image: "/courses/course7.png" },
    { title: "Hair Extension Training Course", image: "/courses/course8.png" },
    { title: "Hybrid Eyelash Extension Training Course", image: "/courses/course9.png" },
    { title: "Lip Blush Training Course", image: "/courses/course10.png" },
    { title: "Lip Filler Training Course", image: "/courses/course11.png" },
    { title: "Microblading Training Course", image: "/courses/course12.png" },
    { title: "Microneedling Training Course", image: "/courses/course13.png" },
    { title: "Nail Training Course", image: "/courses/course14.png" },
    { title: "Russian Eyelash Extension Training Course", image: "/courses/course15.png" },
    { title: "Semi Perm Eyelash Extension Training Course", image: "/courses/course16.png" },
    { title: "Spray Tan Training Course", image: "/courses/course17.png" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Jenny Wilson",
      image: "/students.png",
      quote: "I found the perfect microblading course within minutes.",
      type: "STUDENTS REVIEW",
      rating: 5,
    },
    {
      id: 2,
      name: "Kristin Watson",
      image: "/teachers.png",
      quote: "This platform helped me connect with new students every week.",
      type: "PROVIDER REVIEW",
      rating: 5,
    },
  ];
  return (
    <div className="min-h-screen font-nunito">
      <Head>
        <title>Beauty Training Courses UK</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Gullia:wght@400;700&family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>



      <section className="hero relative py-16 md:py-32 flex items-center justify-center text-center" style={{
        backgroundImage: " url('MaskGroup.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"

      }}>
        <img src="/home.png" alt="Decorative Image" className="absolute top-10 right-1 w-12 h-12" />
        <div className="container mx-auto px-4 text-black z-10">
          <h1 className="font-gullia text-4xl md:text-6xl mb-6 leading-tight">
            Find & Compare the Best<br />Beauty Training Courses<br />Near You!
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Post your beauty training request and get responses from top-rated
            providers in your area!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/find-course" className="bg-[#658396] text-white py-3 px-8 rounded-full text-center">
              FIND A BEAUTY COURSE
            </Link>
            <Link href="/join-provider" className="bg-[#658396] text-white py-3 px-8 rounded-full text-center">
              JOIN AS A TRAINING PROVIDER
            </Link>
          </div>
        </div>
      </section>


      <section className="about-us py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <Image
                src="/about.png"
                alt="Beauty Training"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div className="relative w-full md:w-1/2">
              <img src="/Flower.png" alt="Decorative Image" className="absolute r-1 " />

              <h2 className="font-gullia text-4xl md:text-5xl mb-4">About Us</h2>
              <h3 className="font-gullia text-2xl md:text-4xl text-[#658396] mb-6">
                Beauty Training Courses UK
                <span className='text-black'>
                  Sets the Standard in Online
                  Course
                </span>
              </h3>
              <h4 className="text-xl font-semibold mb-4">
                Find & Compare the Best Beauty Training Courses in the UK
              </h4>
              <p className="mb-4">
                Looking for the perfect beauty training course? Beauty Training Courses
                UK makes it easy to find, compare, and connect with top-rated beauty
                academies and trainers near you—all in one place!
              </p>
              <p className="mb-4">
                Instead of spending hours searching, simply submit your training
                request, and accredited training providers will contact you with tailored
                course options. Whether you're starting your beauty career or advancing
                your skills, we help you find the right course, at the right price, from
                trusted professionals.
              </p>
              <p className="mb-6">
                Our platform is completely free for students, with no hidden fees or
                obligations. Start your journey in beauty today!
              </p>
              <button className="bg-[#658396] text-white py-2 px-6 rounded-full">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="font-gullia text-4xl md:text-5xl text-center mb-12">Courses</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {courseCategories.slice(0, 12).map((course, index) => (
              <div
                key={index}
                style={{
                  clipPath: "ellipse(100% 100% at 50% 100%)" // Rounds only the bottom
                }}
                className="course-card  bg-blue-100 overflow-hidden flex flex-col items-center text-center rounded-t-3xl"
              >
                <div
                  className="w-full overflow-hidden aspect-square relative mx-auto rounded-full"
                  style={{ maxWidth: '180px' }}
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={180}
                    height={180}
                    className="rounded-full mt-2 object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-gullia text-start  text-black">{course.title}</h3>
                  <p className="text-xs text-start">Get exclusive discount curated for you</p>
                </div>
              </div>
            ))}
          </div>


          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
            {courseCategories.slice(12).map((course, index) => (
              <div
                style={{
                  clipPath: "ellipse(100% 100% at 50% 100%)" // Rounds only the bottom
                }} key={index} className="course-card p-2 bg-blue-100 rounded-lg overflow-hidden flex flex-col items-center text-center">
                <div
                  className="w-full rounded-full overflow-hidden aspect-square relative mx-auto" style={{ maxWidth: '180px' }}>
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={180}
                    height={180}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-gullia text-start  text-black">{course.title}</h3>
                  <p className="text-xs text-start">Get exclusive discount curated for you</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works py-16 " style={{
        backgroundImage: "url('/HowBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="container mx-auto px-4">
          <h2 className="font-gullia text-4xl md:text-5xl text-center mb-16">How It Works</h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* For Students Column */}
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-bold mb-8">FOR STUDENTS</h3>

              <div className="flex flex-col items-start mb-6 gap-5">
                <div className="bg-[#658396] w-fit rounded-lg p-4 mr-4 mb-1">
                  <Image
                    src="/users.png"
                    alt="Chat Bot"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-gullia mb-2">Submit Your Request</h4>
                  <p>Tell us what course you're looking for.</p>
                </div>
              </div>


              <div className="flex flex-col items-start mb-6 gap-5">
                <div className="bg-[#658396] w-fit rounded-lg p-4 mr-4 mb-1">
                  <Image
                    src="/building.png"
                    alt="Chat Bot"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-gullia mb-2">Choose the Best Fit</h4>
                  <p>Compare and book with confidence.</p>
                </div>
              </div>

              <div className="flex flex-col items-start mb-6 gap-5">
                <div className="bg-[#658396] w-fit rounded-lg p-4 mr-4 mb-1">
                  <Image
                    src="/seedling.png"
                    alt="Chat Bot"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-gullia mb-2">Get Responses</h4>
                  <p>Receive quotes from professional training providers.</p>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/HowMid.png"
                  alt="Beauty Training Process"
                  width={300}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>

            {/* For Training Providers Column */}
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-bold mb-8">FOR TRAINING PROVIDERS</h3>

              <div className="flex flex-col items-start mb-6 gap-5">
                <div className="bg-[#658396] w-fit rounded-lg p-4 mr-4 mb-1">
                  <Image
                    src="/seedling.png"
                    alt="Chat Bot"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-gullia mb-2">Create an Account</h4>
                  <p>Register & choose a subscription plan.</p>
                </div>
              </div>

              <div className="flex flex-col items-start mb-6 gap-5">
                <div className="bg-[#658396] w-fit rounded-lg p-4 mr-4 mb-1">
                  <Image
                    src="/building.png"
                    alt="Chat Bot"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-gullia mb-2">Receive Student Leads</h4>
                  <p>Get requests from potential students.</p>
                </div>
              </div>

              <div className="flex flex-col items-start mb-6 gap-5">
                <div className="bg-[#658396] w-fit rounded-lg p-4 mr-4 mb-1">
                  <Image
                    src="/users.png"
                    alt="Chat Bot"
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-gullia mb-2">Grow Your Business</h4>
                  <p>Contact students and fill your classes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-[#658396]  gap-2 text-white py-3 px-8 rounded-full flex items-center">
              GET STARTED
              <Image src="/Send.png" alt="Chat Bot" width={30} height={30} className="pl-3 object-cover" />

            </button>
          </div>
        </div>
      </section>
            {/* Why Choose Us Section */}
            <section  className="why-choose-us py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
              <div className="relative  overflow-hidden w-[110%] h-[110%]  aspect-square">
                <Image 
                className="w-[159%] h-[122%] object-contain"
                  src="/group1.png" 
                  alt="Beauty Training Class"
                  fill
                />
              </div>

              <div className="absolute -bottom-16 -left-16 opacity-30">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" fill="#f0f0f0" />
                </svg>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 md:pl-12 mt-15 h-96 mb-28" style={{
        backgroundImage: "url('/group2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} >
              <h2 className="font-gullia text-4xl md:text-5xl mb-10">Why Choose Us?</h2>
              
              <div className="mb-8">
                <h3 className="font-gullia text-2xl mb-6">FOR STUDENTS</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Compare multiple providers in one place.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Get direct responses from top-rated trainers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>No hidden fees – completely free for students.</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/find-course" className="bg-[#658396] hover:bg-[#658396] text-white py-2 px-6 rounded-full inline-flex items-center">
                    FIND A COURSE 
                    <Image className='ml-2' src="/Send.png" alt="send" width={15} height={15} />
                    </Link>
                </div>
              </div>
              
              <div>
                <h3 className="font-gullia text-2xl mb-6">FOR TRAINING PROVIDERS</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Guaranteed high-quality student leads daily.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Easy-to-use dashboard for managing inquiries.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Flexible subscription options with no long-term commitment.</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/become-provider" className="bg-[#658396] hover:bg-[#658396] text-white py-2 px-6 rounded-full inline-flex items-center">
                    BECOME A PROVIDER 
                    <Image className='ml-2' src="/Send.png" alt="send" width={15} height={15} />

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Users Say Section */}
      <section style={{
        backgroundImage: "url('/testimonialBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} className="testimonials py-16 -translate-y-44  relative">
     
        
        <div className="container mx-auto px-4">
          <h2 className="font-gullia text-4xl md:text-5xl text-center mb-16">What Our Users Say</h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-12">
  {testimonials.map((testimonial) => (
    <div 
      key={testimonial.id} 
      className="flex-col w-full md:w-1/3 justify-center bg-white rounded-lg p-8 text-center relative shadow-lg"
    >
     <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
        <Image 
          src={testimonial.image} 
          alt={testimonial.name}
          width={96} 
          height={96}
          className="object-cover"
        />
      </div>

      {/* Content Below the Image */}
      <div className="mt-16"> 
        <h4 className="font-semibold text-lg mb-2">{testimonial.name}</h4>

        {/* Rating Stars */}
        <div className="flex justify-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote Section */}
        <p className="text-lg italic text-[#658396] mb-6">"{testimonial.quote}"</p>

        {/* Separator Line */}
        <div className="h-1 bg-gray-300 rounded-full w-3/4 mx-auto mb-6"></div>

        {/* Type of Testimonial */}
        <p className="text-gray-500">{testimonial.type}</p>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  ))}
</div>

          
          <div className="text-center mt-12">
            <button className="bg-[#658396]  text-white py-2 px-6 rounded-full inline-flex items-center">
              READ MORE REVIEWS
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section style={{
        backgroundImage: "url('/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} className=" p-8 rounded-lg max-w-2xl mx-auto my-8">
  <h2 className="text-4xl font-serif mb-2">Join for </h2>
  <p className="mb-6"><span className='text-4xl font-gullia'>£300<span className="text-lg">/mo</span></span> No Contracts, Cancel Anytime!</p>
  
  <ul className="space-y-4">
    <li className="flex items-start gap-3">
    <Image
                src="/check.png"
                alt="Beauty Training"
                width={30}
                height={30}
                className="rounded-lg"
              />
      <div>
        <span className="font-bold text-xl">Unlimited Leads</span> – Get access to as many student inquiries as you can handle.
      </div>
    </li>
    <li className="flex items-start gap-3">
    <Image
                src="/check.png"
                alt="Beauty Training"
                width={30}
                height={30}
                className="rounded-lg"
              />
      <div>
        <span className="font-bold text-xl">Instant Lead Alerts </span> –  Get notified the moment a new student submits a request.
      </div>
    </li>
    <li className="flex items-start gap-3">
    <Image
                src="/check.png"
                alt="Beauty Training"
                width={30}
                height={30}
                className="rounded-lg"
              />
      <div>
        <span className="font-bold text-xl">Direct Contact</span> – Reach out to students via email or phone instantly.
      </div>
    </li>
    <li className="flex items-start gap-3">
    <Image
                src="/check.png"
                alt="Beauty Training"
                width={30}
                height={30}
                className="rounded-lg"
              />
      <div>
        <span className="font-bold text-xl">30-Day Free Trial </span> –  Experience the platform risk-free before committing.
      </div>
    </li>
    {/* Add remaining list items with similar structure */}
  </ul>
  
  <button className="mt-6 bg-[#658396] text-white px-6 py-2 rounded-full">
    JOIN NOW & START RECEIVING LEADS
  </button>
</section>

  {/* FAQ Section */}
  <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex-col  gap-8 mb-24">
          <h1 className="text-5xl font-gullia text-center text-gray-900 mb-20">Frequenty Asked Questions</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* FAQ List */}
            <div className="w-full rounded-lg md:w-1/2">
              {faqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className={`border-b border-gray-200 rounded-lg ${
                    expandedFaq === faq.id ? 'bg-[#658396] text-white' : 'bg-white text-gray-700'
                  }`}
                >
                  <button
                    className="flex justify-between items-center w-full text-left py-4 px-6"
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span className="text-2xl">
                      {expandedFaq === faq.id ? '−' : '+'}
                    </span>
                  </button>
                  
                  {expandedFaq === faq.id && (
                    <div className="px-6 pb-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="mt-8">
                <button className="bg-[#658396] text-white px-8 py-3 rounded-full uppercase text-sm font-medium">
                  READ FULL FAQ
                </button>
              </div>
            </div>
            
            {/* Ask a different question */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-normal text-gray-700 mb-6">Ask a different question</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-slate-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-slate-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-slate-500"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Assistance and Contact Section */}
        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 mb-24">
          {/* Left Column - Assistance */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-start">
            <div className="mb-4">
              <h2 className="text-3xl font-normal text-gray-900">Need Assistance?</h2>
              <h2 className="text-3xl font-normal text-gray-900">We're Here to Help!</h2>
              <p className="text-gray-600 mt-2">Our friendly team is exited to makeup your questions with our beauty expert answers.</p>
            </div>
            
            <div className="relative w-40 h-40">
              <div className="text-blue-200">
                {/* Simple flower SVG representation */}
                <Image
                src="/rose.png"
                alt="Beauty Training"
                width={600}
                height={600}
                className="rounded-lg"
              />
              </div>
            </div>
            
            <div className="flex items-center mt-4">
            <Image
                src="/community.png"
                alt="Beauty Training"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div className="ml-2">
                <p className="text-sm font-medium">We're having 5k+ happy</p>
                <p className="text-sm font-medium">beautiful faces.</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="w-full md:w-1/2 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-normal text-gray-900 mb-6">Let's get in touch.</h3>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone no."
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Category"
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Message"
                  className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div className="pt-4">
                <button type="submit" className="border border-gray-700 text-gray-700 rounded-full px-6 py-2 inline-flex items-center">
                  Let's connect
                  <Image
                src="/send1.png"
                alt="Beauty Training"
                width={15}
                height={15}
                className="rounded-lg"
              />
                </button>
              </div>
            </form>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="relative h-10 bg-[#658396] py-20">
      {/* White box container */}
      <div className="max-w-3xl translate-y-5 mx-auto bg-white rounded-3xl shadow-lg px-10 py-12 flex items-center gap-6">
  {/* Title */}
  <h2 className="text-3xl min-w-[250px] font-gullia text-gray-900 text-left">
    Subscribe Newsletters
  </h2>

        {/* Input and Button */}
        <div className="flex w-full max-w-md">
          <input
            type="email"
            placeholder="Your email"
            className="flex-grow bg-white border border-gray-300 rounded-l-full px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button className="bg-white border border-gray-300 text-gray-700 rounded-r-full px-6 py-3 flex items-center gap-2 hover:bg-gray-100 transition">
            Submit
            <Image src="/send1.png" alt="Send" width={18} height={18} />
          </button>
        </div>
      </div>


    </section>
        
        {/* Call to Action Buttons */}
        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button className="bg-[#658396] text-white px-6 py-3 rounded-lg uppercase text-sm font-medium">
            Find a beauty course
          </button>
          <button className="bg-[#658396] text-white px-6 py-3 rounded-lg uppercase text-sm font-medium">
            Join as a training provider
          </button>
        </section>
        


      <div className="fixed bottom-8 right-8 z-50">
        <div className="rounded-full p-2">
          <div className="border-2 border-black relative w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
            <Image src="/chatbot.png" alt="Chat Bot" width={64} height={64} className="object-cover" />
          </div>
          <p className="text-center text-black text-xs mt-1">Chat Bot</p>
        </div>
      </div>

    </div>
  );
}