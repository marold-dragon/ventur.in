/*
Template Name: Venturin - Portfolio & Agency Tailwind CSS 4 Website Template
Version: 1.0.0
Author: Venturin
Website: https://venturin.site
File: App js
*/

// Preline Plugin File Import
import "preline";

// AOS Animation Library
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Components
import './components/navbar';
import './components/gallary';
import './components/animation';
import './components/video-play';
import './components/swiper';
import './portfolio';
import './contact-form';