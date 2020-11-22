// animated when it's visible once
// animated the scale as the user scrolls
// check how much of a box its visible
// infinite pagination

import React, { 
  useState,
  useEffect,
  useRef,
  MutableRefObject 
} from 'react';
import './App.css';

const useIntersectionObserver = (
  domNode: MutableRefObject<HTMLElement>, 
  rootMargin: string = '0px'
): any => {
  const [isIntersecting, setIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver>(null!);
  
  useEffect(() => {
    // IntersectionObserver is created lazily once
    // https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
    const getObserver= () => {
      if (observerRef.current === null) {
        observerRef.current = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting);
        }, { root: null, rootMargin: rootMargin, threshold: 0 });
        return observerRef.current;
      }
      return null;
    };

    const observer = getObserver();
    const currentDomNode = domNode.current;
    if (observer !== null) {
      observer.observe(currentDomNode);
      return () => observer.unobserve(currentDomNode);
    }
  }, [rootMargin, domNode]);

  return isIntersecting;
};

const App = () => {
  const domNode = useRef<HTMLDivElement>(null!);
  const isIntersecting = useIntersectionObserver(domNode);
  return (
    <>
      <aside className='app__sidebar'></aside>
      <div className='app__box' ref={isIntersecting}/>
    </>
  );
};

export default App;