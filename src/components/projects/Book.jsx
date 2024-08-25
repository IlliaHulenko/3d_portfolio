import React, { useEffect, useState } from 'react';
import Page from './Page';
import { pageAtom, pages } from './ProjectsUi';
import { useAtom } from 'jotai';

const Book = ({...props}) => {
  const [page] = useAtom(pageAtom);

  const [delayedPage, setDelayedPage] = useState(page);

  useEffect(() => {
    let timeout;
    const goToPage = () => {
      setDelayedPage((delayedPage) => {
        if (page === delayedPage) {
          return delayedPage;
        } else {
          timeout = setTimeout(
            () => {
              goToPage();
            },
            Math.abs(page - delayedPage) > 2 ? 50 : 150
          );
          if (page > delayedPage) {
            return delayedPage + 1;
          }
          if (page < delayedPage) {
            return delayedPage - 1;
          }
        }
      });
    };
    goToPage();
    return () => {
      clearTimeout(timeout);
    };
  }, [page]);

  return (
    <group {...props} rotation-y={-Math.PI / 2}>
      {
        [...pages].map((pageData, index) => (          
          <Page            
            key={index} 
            page={delayedPage}
            number={index} 
            bookOpened={delayedPage > index}
            bookClosed={delayedPage === 0 || delayedPage === pages.length}
            {...pageData}            
          />                     
        ))
      }
    </group>
  )
}

export default Book