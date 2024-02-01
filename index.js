gsap.from(".animation", {opacity: 0, duration: 2, delay: 1, stagger: .6})
gsap.fromTo('.move', { opacity: 0, scale: 0}, { duration: 1, delay: .5, opacity: 1, scale: 1 })