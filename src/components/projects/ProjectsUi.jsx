import React from 'react';
import { atom, useAtom } from "jotai";

const pictures = [  
  "Pizza_store_1",
  "Pizza_store_2",
  "Uber_clone_1",
  "Uber_clone_2",
  "Gym_app",
  "Gym_app_2",
  "E-commerce_shop",
  "E-commerce_shop_2",
  "Restaurant",
  "Restaurant_1"  
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

const ProjectsUi = () => {

  const [page, setPage] = useAtom(pageAtom);

  return (    
    <main className="w-full h-full pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
      <div  />
      <div className="w-full overflow-auto pointer-events-auto flex justify-center">
        <div className="overflow-auto flex flex-wrap items-center gap-4 max-w-full p-10">
          {[...pages].map((_, index) => (
            <button
              key={index}
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                index === page
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(index)}
            >
              {index === 0 ? "Cover" : `Page ${index}`}
            </button>
          ))}
          <button
            className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
              page === pages.length
                ? "bg-white/90 text-black"
                : "bg-black/30 text-white"
            }`}
            onClick={() => setPage(pages.length)}
          >
            Back Cover
          </button>
        </div>
      </div>
    </main>      
    
  )
}

export default ProjectsUi