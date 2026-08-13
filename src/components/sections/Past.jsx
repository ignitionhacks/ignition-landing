import { useState, useRef, useEffect } from 'react';
import "./Past.css";
import leftArrow from '../../assets/illustrations/past/left-arrow.webp';
import rightArrow from '../../assets/illustrations/past/right-arrow.webp';
import whale from '../../assets/illustrations/past/whale.webp';
import pastBg from '../../assets/backgrounds/past-bg.webp';
import team from '../../assets/illustrations/past/slideshow/team.webp';
import candid1 from '../../assets/illustrations/past/slideshow/candid1.webp';
import candid2 from '../../assets/illustrations/past/slideshow/candid2.webp';
import booth1 from '../../assets/illustrations/past/slideshow/booth1.webp';
import booth2 from '../../assets/illustrations/past/slideshow/booth2.webp';
import booth3 from '../../assets/illustrations/past/slideshow/booth3.webp';
import merch from '../../assets/illustrations/past/slideshow/merch.webp';
import karaoke from '../../assets/illustrations/past/slideshow/karaoke.webp';
import ramen from '../../assets/illustrations/past/slideshow/ramen.webp';

const slides = [merch, candid1, booth1, team, candid2, booth2, karaoke, booth3, ramen];

export default function Past() {
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);
    const [direction, setDirection] = useState('right');
    const [animating, setAnimating] = useState(false);
    const timerRef = useRef(null);

    // Warm adjacent slides only (avoids downloading all 9 images up front)
    useEffect(() => {
        const next = (index + 1) % slides.length;
        const prev = (index - 1 + slides.length) % slides.length;
        [slides[next], slides[prev]].forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, [index]);

    const navigate = (dir) => {
        if (animating) return;
        const newIndex = dir === 'right'
            ? (index + 1) % slides.length
            : (index - 1 + slides.length) % slides.length;
        setPrevIndex(index);
        setIndex(newIndex);
        setDirection(dir);
        setAnimating(true);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setPrevIndex(null);
            setAnimating(false);
        }, 800);
    };

    return (
        <section className="past-section" id="gallery">
            <div className="past-bg-wrapper">
                <img src={pastBg} className="past-bg-image" alt="" loading="lazy" decoding="async" />

                <div className="slideshow-viewport">
                    {prevIndex !== null && (
                        <img
                            src={slides[prevIndex]}
                            className={`slideshow-image ${direction === 'right' ? 'exit-to-left' : 'exit-to-right'}`}
                            alt=""
                            decoding="async"
                        />
                    )}
                    <img
                        key={index}
                        src={slides[index]}
                        className={`slideshow-image ${direction === 'right' ? 'enter-from-right' : 'enter-from-left'}`}
                        alt=""
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                <img src={leftArrow} className="left-arrow-illustration" alt="Previous" loading="lazy" decoding="async" onClick={() => navigate('left')} />
                <img src={rightArrow} className="right-arrow-illustration" alt="Next" loading="lazy" decoding="async" onClick={() => navigate('right')} />
                <img src={whale} className="whale-illustration" alt="" loading="lazy" decoding="async" />
            </div>
        </section>
    );
}
