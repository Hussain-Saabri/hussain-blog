import React from 'react';
import Image from "next/image";

function About() {
  return (
   
      <>
        <body class="bg-gray-100 text-gray-900">
  

  <main class="container max-w-2xl mx-auto mt-8 p-4">
    <div class="bg-white  rounded-lg p-6">
      <div class="flex items-center">
      <Image src='/images/hussain.jpg' alt="logo" width={50} height={50} className="w-24 h-24 rounded-full mr-4" />
        <div>
          <h2 class="text-2xl font-bold">Hussain Sabri</h2>
          
        </div>
      </div>
      <div class="mt-6">
        <h3 class="text-xl font-semibold">About Me</h3>
        <p class="mt-2 text-gray-700">
          I am a passionate Full Stack Developer with experience in building web applications using modern technologies like React, Next.js, Node.js, and Tailwind CSS.
        </p>
      </div>
      <div class="mt-6">
        <h3 class="text-xl font-semibold">Skills</h3>
        <ul class="mt-2 list-disc list-inside container text-gray-700">
          <li>Javascript</li>
          <li>React</li>
          <li>Tailwind</li>
          <li>Next.js</li>
        </ul>
      </div>
      <div class="mt-6">
        
        
      </div>
    </div>
  </main>

  
</body>
      </>
    
  );
}

export default About;