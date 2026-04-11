gsap.registerPlugin(ScrollTrigger, Flip)

if (document.querySelectorAll("[data-anim]")) {
    document.querySelectorAll("[data-anim]").forEach(ada => {
        ada.classList.add("animation-invisible")
    })
}

const runAnimationOrnament = () => {
    document.querySelectorAll("[data-anim]").forEach(da => {
        ScrollTrigger.create({
            trigger: da,
            start: da.dataset.animAnchor ? da.dataset.animAnchor : "top bottom",
            onToggle: self => {
                if (!self.isActive) {
                    if (da.classList.contains("animate-loop")) {
                        return da.classList.add("animate-paused")
                    } else {
                        return null;
                    }
                }
                if (da.dataset.loadAnimation) {
                    if (da.classList.contains("animate-loop")) {
                        return da.classList.remove("animate-paused")
                    } else {
                        return self.kill()
                    }
                }

                if (da.dataset.animDuration) da.style.animationDuration = da.dataset.animDuration

                if (da.dataset.animDelay) {
                    setTimeout(() => {
                        da.classList.add("has-animate")
                        da.classList.remove("animation-invisible")
                        da.dataset.loadAnimation = true;
                    }, da.dataset.animDelay)
                } else {
                    da.classList.add("has-animate")
                    da.classList.remove("animation-invisible")
                    da.dataset.loadAnimation = true;
                }
            }
        })
    })
}

const runAnimationOrnamentCover = () => {
    document.querySelectorAll(".cover-section [data-anim]").forEach(vs => {
        ScrollTrigger.create({
            trigger: vs,
            start: "top bottom",
            onToggle: self => {
                if (self.isActive) {
                    if (vs.dataset.animDuration) vs.style.animationDuration = vs.dataset.animDuration

                    if (vs.dataset.animDelay) {
                        setTimeout(() => {
                            vs.classList.add("has-animate")
                            vs.classList.remove("animation-invisible")
                            vs.dataset.loadAnimation = true;
                            self.kill()
                        }, vs.dataset.animDelay)
                    } else {
                        vs.classList.add("has-animate")
                        vs.classList.remove("animation-invisible")
                        vs.dataset.loadAnimation = true;
                        self.kill()
                    }
                } else {
                    vs.classList.add("animation-invisible")
                    self.kill()
                }
            }
        })
    })
}

const runAnimationLoop = () => {
    document.querySelectorAll("[data-animationloop]").forEach(al => {
        ScrollTrigger.create({
            trigger: al,
            start: "-10% bottom",
            onToggle: self => self.isActive ? al.classList.add("animation-loop") : al.classList.remove("animation-loop")
        })
    })
}
const runAnimationWithoutScrollTrigger = () => {
    document.querySelectorAll("[data-anim]").forEach(da => {        
        if (da.dataset.animDelay) {
            setTimeout(() => {
                da.classList.add("has-animate");
                da.classList.remove("animation-invisible");
                da.dataset.loadAnimation = true;
            }, da.dataset.animDelay);
        } else {            
            da.classList.add("has-animate");
            da.classList.remove("animation-invisible");
            da.dataset.loadAnimation = true;
        }

        if (da.dataset.animDuration) {
            da.style.animationDuration = da.dataset.animDuration;
        }
    });
};