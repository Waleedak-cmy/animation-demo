import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
// import Header from "@/components/Header";
// import { Container, Row } from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger);

function useGSAP(effect) {
  useEffect(() => {
    effect();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.revert());
    };
  }, []);
}

const ScrollPage = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const gridSecRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current || !contentRef.current || !gridSecRef.current)
      return;
    const boxes = gsap.utils.toArray(".box");

    if (boxes.length === 0) return;

    gsap.to(boxes, {
      xPercent: -100 * (boxes.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${containerRef.current.offsetWidth}`,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.create({
      trigger: contentRef.current,
      start: "top top",
      pinSpacing: true,
      scrub: true,
    });

    ScrollTrigger.create({
      trigger: gridSecRef.current,
      start: "top center",
      onEnter: () => {
        gridSecRef.current.classList.add("active");
        gsap.to(gridSecRef.current, {
          backgroundColor: "black",
          duration: 0.7,
        });
        gsap.to(".grid", { duration: 0.5, scale: 1.2 });
        gsap.to(".item:nth-child(1)", { x: 0, rotate: 0 });
        gsap.to(".item:nth-child(3)", { x: 0, rotate: 0 });
      },
      onLeave: () => {
        gridSecRef.current.classList.remove("active");
        gsap.to(gridSecRef.current, { backgroundColor: "", duration: 1 });
        gsap.to(".grid", { duration: 1, scale: 1 });
        gsap.to(".item:nth-child(1)", { duration: 1, x: 19, rotate: 355 });
        gsap.to(".item:nth-child(3)", { duration: 1, x: -19, rotate: -355 });
      },
      onLeaveBack: () => {
        gridSecRef.current.classList.add("active");
        gsap.to(gridSecRef.current, { backgroundColor: "", duration: 1 });
        gsap.to(".grid", { duration: 1, scale: 1 });
        gsap.to(".item:nth-child(1)", { duration: 1, x: 19, rotate: 355 });
        gsap.to(".item:nth-child(3)", { duration: 1, x: -19, rotate: -355 });
      },
    });
  });
  console.log("5" - 5);

  return (
    <>
      {/* <Header /> */}
      <div className="container-scroll" ref={containerRef}>
        {Array.from({ length: 7 }).map((_, i) => (
          <div className="box" key={i}>
            <h1 className="text-[91px]">Box {i + 1}</h1>
          </div>
        ))}
      </div>

      <section className="gridsec vh-100" ref={gridSecRef}>
        <div class="container">
          <div class="ow">
            <div className="col-md-12">
              <div className="heading">
                <h3>Grid System</h3>
              </div>

              <div className="grid">
                <div className="item">
                  <h3>1</h3>
                </div>
                <div className="item">
                  <h3>2</h3>
                </div>
                <div className="item">
                  <h3>3</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="content" ref={contentRef}>
        <h2>Vertical Scroll Content</h2>
        <p>Keep scrolling vertically after the last box.</p>
      </div>
    </>
  );
};

export default ScrollPage;
