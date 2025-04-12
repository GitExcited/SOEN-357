document.addEventListener('DOMContentLoaded', function() {
    // Sample data for courses
    const myCourses = [
        { code: 'SOEN 357', times: ['FRI 5:45 PM', 'MON 5:45 PM'], room: 'CL 220 SGW', instructor: 'Dr. Hakim Meliah', units: 3, enrolled: true },
        { code: 'SOEN 390', times: ['MON 9:45 PM'], room: 'ONLINE', instructor: 'Dr. Nikolaos Tsantalis', units: 4, enrolled: true },
        { code: 'SOEN 345', times: ['MON 9:45 PM'], room: 'ONLINE', instructor: 'Dr. Nikolaos Tsantalis', units: 4, pending: true },
        { code: 'SOEN 343', times: ['MON 9:45 PM'], room: 'ONLINE', instructor: 'Dr. Nikolaos Tsantalis', units: 4, pending: true },
    ];

    const selectedCourses = [
        { code: 'COMP 443', info: true },
        { code: 'COMP 335', info: true },
        { code: 'COEN 225', info: true },
    ];

    // Current term state
    let currentTerm = 'Winter 2025';
    
    // Handle term navigation
    const prevTermBtn = document.querySelector('.arrow-btn:first-child');
    const nextTermBtn = document.querySelector('.arrow-btn:last-of-type');
    const termDisplay = document.querySelector('.term span');
    const termIcon = document.querySelector('.term i');
    const termContainer = document.querySelector('.term');
    
    const terms = ['Fall 2025', 'Winter 2026', 'Summer 2025', 'Fall 2026'];
    let currentTermIndex = terms.indexOf(currentTerm);
    
    // Term styles configuration
    const termStyles = {
        'Fall': {
            icon: 'fa-leaf',
            backgroundColor: '#F2A154',  // orange fall color
            textColor: '#FFFFFF',
            iconColor: '#8B4513'  // saddle brown
        },
        'Winter': {
            icon: 'fa-snowflake',
            backgroundColor: '#DBEAFE',  // light blue
            textColor: '#000000',
            iconColor: '#3B82F6'  // blue
        },
        'Summer': {
            icon: 'fa-sun',
            backgroundColor: '#FDE68A',  // light yellow
            textColor: '#000000',
            iconColor: '#F59E0B'  // amber
        }
    };
    
    // Function to update term styling
    function updateTermStyle(term) {
        const season = term.split(' ')[0]; // Extract 'Fall', 'Winter', or 'Summer'
        const style = termStyles[season];
        
        if (style) {
            termIcon.className = 'fas ' + style.icon;
            termContainer.style.backgroundColor = style.backgroundColor;
            termContainer.style.color = style.textColor;
            termIcon.style.color = style.iconColor;
        }
    }
    
    prevTermBtn.addEventListener('click', function() {
        if (currentTermIndex > 0) {
            currentTermIndex--;
            termDisplay.textContent = terms[currentTermIndex];
            updateTermStyle(terms[currentTermIndex]);
        }
    });
    
    nextTermBtn.addEventListener('click', function() {
        if (currentTermIndex < terms.length - 1) {
            currentTermIndex++;
            termDisplay.textContent = terms[currentTermIndex];
            updateTermStyle(terms[currentTermIndex]);
        }
    });
    
    // Initialize with current term style
    updateTermStyle(currentTerm);
    
    // Handle sign out
    const signOutBtn = document.querySelector('.sign-out');
    signOutBtn.addEventListener('click', function() {
        alert('You have been signed out');
    });
    
    // Handle navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Handle enroll buttons
    const enrollBtns = document.querySelectorAll('.enroll-btn');
    enrollBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Continuing enrollment process...');
        });
    });
    
    // Handle search
    const searchInput = document.querySelector('.search-input input');
    searchInput.addEventListener('input', function() {
        console.log('Searching for:', this.value);
        // Implement search functionality here
    });
    
    // Handle filter button
    const filterBtn = document.querySelector('.filter-btn');
    filterBtn.addEventListener('click', function() {
        alert('Filter options would appear here');
    });
    
    // Handle schedule builder button
    const scheduleBtn = document.querySelector('.schedule-builder');
    scheduleBtn.addEventListener('click', function() {
        alert('Opening schedule builder...');
    });
    
    // Handle info and plus icons in selected courses
    const courseActions = document.querySelectorAll('.selected-course .actions i');
    courseActions.forEach(icon => {
        icon.addEventListener('click', function() {
            if (this.classList.contains('fa-info-circle')) {
                alert('Course information would appear here');
            } else if (this.classList.contains('fa-plus')) {
                alert('Add to schedule');
            }
        });
    });
});