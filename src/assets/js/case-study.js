// Case Study Dynamic Routing
// This file handles dynamic loading of case study data based on URL slug

document.addEventListener('DOMContentLoaded', function() {
    loadCaseStudy();
});

async function loadCaseStudy() {
    // Get slug from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    if (!slug) {
        // If no slug, redirect to portfolio page
        window.location.href = 'project.html';
        return;
    }
    
    try {
        // Fetch case study data
        const response = await fetch('/assets/data/case-studies.json');
        const caseStudies = await response.json();
        
        // Find case study by slug
        const caseStudy = caseStudies.find(cs => cs.slug === slug);
        
        if (!caseStudy) {
            // If case study not found, redirect to portfolio page
            window.location.href = 'project.html';
            return;
        }
        
        // Populate the page with case study data
        populateCaseStudy(caseStudy);
        
        // Update page title
        document.title = `${caseStudy.title} - Case Study | Venturin`;
        
    } catch (error) {
        console.error('Error loading case study:', error);
        // On error, redirect to portfolio page
        window.location.href = 'project.html';
    }
}

function populateCaseStudy(data) {
    // Basic info
    document.getElementById('case-study-title').textContent = data.title;
    document.getElementById('case-study-description').textContent = data.description;
    document.getElementById('case-study-hero').src = data.image;
    document.getElementById('case-study-hero').alt = data.title;
    
    // Project details
    document.getElementById('case-study-services').textContent = data.services;
    document.getElementById('case-study-industry').textContent = data.industry;
    document.getElementById('case-study-timeline').textContent = data.timeline;
    
    if (data.live_link && data.live_link !== '#') {
        document.getElementById('case-study-live-link').href = data.live_link;
    }
    
    // Video embed
    if (data.video_embed) {
        const videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = data.video_embed;
    } else {
        document.getElementById('video-section').style.display = 'none';
    }
    
    // Problem
    document.getElementById('case-study-problem').textContent = data.problem;
    
    // Challenge
    document.getElementById('case-study-challenge').textContent = data.challenge;
    
    const challengesList = document.getElementById('case-study-challenges-list');
    challengesList.innerHTML = '';
    data.challenges_list.forEach(challenge => {
        const li = document.createElement('li');
        li.textContent = challenge;
        challengesList.appendChild(li);
    });
    
    // Solution
    document.getElementById('case-study-solution').textContent = data.solution;
    
    // Gallery
    const gallery = document.getElementById('case-study-gallery');
    gallery.innerHTML = '';
    data.gallery.forEach((imgSrc, index) => {
        const a = document.createElement('a');
        a.href = imgSrc;
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `${data.title} - Gallery ${index + 1}`;
        img.className = 'rounded-lg';
        img.loading = 'lazy';
        a.appendChild(img);
        gallery.appendChild(a);
    });
    
    // Timeline
    const timeline = document.getElementById('case-study-timeline');
    timeline.innerHTML = '';
    data.timeline_steps.forEach(step => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'flex gap-4';
        
        const leftDiv = document.createElement('div');
        leftDiv.className = 'flex flex-col items-center';
        
        const circle = document.createElement('div');
        circle.className = 'size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold';
        circle.textContent = step.step;
        
        leftDiv.appendChild(circle);
        
        if (step.step < data.timeline_steps.length) {
            const line = document.createElement('div');
            line.className = 'w-0.5 h-full bg-default-200 mt-2';
            leftDiv.appendChild(line);
        }
        
        const rightDiv = document.createElement('div');
        rightDiv.className = 'pb-6';
        
        const title = document.createElement('h3');
        title.className = 'text-lg font-medium';
        title.textContent = step.title;
        
        const desc = document.createElement('p');
        desc.className = 'text-default-600';
        desc.textContent = step.description;
        
        rightDiv.appendChild(title);
        rightDiv.appendChild(desc);
        
        stepDiv.appendChild(leftDiv);
        stepDiv.appendChild(rightDiv);
        timeline.appendChild(stepDiv);
    });
    
    // Impact
    document.getElementById('case-study-impact').textContent = data.impact;
    
    // Metrics
    const metrics = document.getElementById('case-study-metrics');
    metrics.innerHTML = '';
    data.metrics.forEach(metric => {
        const metricDiv = document.createElement('div');
        metricDiv.className = 'text-center p-4 bg-default-50 rounded-lg';
        
        const value = document.createElement('div');
        value.className = 'text-3xl font-bold text-primary';
        value.textContent = metric.value;
        
        const label = document.createElement('div');
        label.className = 'text-sm text-default-600';
        label.textContent = metric.label;
        
        metricDiv.appendChild(value);
        metricDiv.appendChild(label);
        metrics.appendChild(metricDiv);
    });
    
    // Testimonial
    document.getElementById('case-study-testimonial').textContent = data.testimonial;
    document.getElementById('case-study-client-name').textContent = data.client_name;
    document.getElementById('case-study-client-role').textContent = data.client_role;
    document.getElementById('case-study-client-avatar').src = data.client_avatar;
    document.getElementById('case-study-client-avatar').alt = data.client_name;
}
