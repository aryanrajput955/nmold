import React from 'react'

const LightingProjects = () => {
  return (
   <>
   <div>
   <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="relative pb-10">
  {/* Section Title */}
  <h1 className="font-josefin font-semibold text-2xl sm:text-3xl lg:text-4xl absolute left-1/2 transform -translate-x-1/2 top-10 sm:top-16 lg:top-32 text-brown-50 z-40 text-center">
    OUR PROJECTS
  </h1>

  {/* Image Container */}
  <div className="relative mx-auto max-w-[90%] lg:max-w-[900px] h-[200px] sm:h-[250px] lg:h-[300px]">
    <img
      className="z-0 h-full w-full object-cover"
      src="./project_img.png"
      alt=""
    />
    {/* Overlay Div */}
    <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
  </div>
</div>

{/* Section Subtitle */}
<h2
  data-aos="fade-right"
  className="text-center font-josefin text-2xl sm:text-3xl lg:text-4xl py-8 sm:py-12 lg:py-16"
>
  Lighting Projects
</h2>



   <div data-aos="fade-up" data-aos-delay="500" class=" pt-4 pb-2    grid grid-cols-2 gap-4 md:grid-cols-4 bg-neutral-800">
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="./lg9.png"
        alt="gallery-photo"
        />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src="./lg8.png"
        alt="gallery-photo"
        />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="./lg7.png"
        alt="gallery-photo"
        />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="./lg10.png"
        alt="gallery-photo"
        />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="./lg11.png"
        alt="gallery-photo"
        />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src="./lg0.png"
        alt="gallery-photo"
        />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="./lg3.png "
        alt="gallery-photo"
        />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src="./lg1.png"
        alt="gallery-photo"
        />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="./lg6.png"
        alt="gallery-photo"
        />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="./lg0.png"
        alt="gallery-photo"
        />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="./lg2.png"
        alt="gallery-photo"
        />
    </div>
  </div>
</div>
        </div>
   </>
  )
}

export default LightingProjects
