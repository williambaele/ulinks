import React from 'react';

const HeroBanner = () => {
    return (
        <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div>
              <h1 class="block text-5xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">Create your link-in-bio <span class="text-blue-600">seamless.</span></h1>
              <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">Hand-picked professionals and expertly crafted components, designed for any kind of entrepreneur.</p>
        
              <div class="mt-7 grid grid-cols-5 gap-3 w-full h-10">
               <div className="col-span-4 bg-green-200"></div>
               <div className="col-span-1 bg-purple-200"></div>

              </div>
        
         
            </div>
        
            <div class="h-full bg-green-100 ml-4 w-full">
          
            </div>
          </div>
        </div>
    );
};

export default HeroBanner;