const callback = (intersectionObserverEntries, intersectionObserver) => {
  console.log({
    intersectionObserverEntries,
    intersectionObserver,
  });

  intersectionObserverEntries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.intersectionRatio);
    }
  });
};
const options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "10px",
  threshold: 0.5,
};

const observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector("#specificItem"));
