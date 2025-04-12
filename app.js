document.addEventListener('DOMContentLoaded', function() {
    // Sample data for courses by term
    const coursesData = {
        'Fall 2024': [
            { code: 'COMP 346', times: ['TUE 2:45 PM', 'THU 2:45 PM'], room: 'H 967 SGW', instructor: 'Dr. Javad Sadri', units: 4, enrolled: true },
            { code: 'COMP 348', times: ['MON 8:45 AM', 'WED 8:45 AM'], room: 'H 621 SGW', instructor: 'Dr. Nikolaos Diamantis', units: 3, enrolled: true },
            { code: 'COMP 352', times: ['MON 11:45 AM', 'WED 11:45 AM'], room: 'MB 3.210 SGW', instructor: 'Dr. Dhrubajyoti Goswami', units: 3, enrolled: true },
            { code: 'SOEN 287', times: ['FRI 10:15 AM', 'FRI 1:15 PM'], room: 'ONLINE', instructor: 'Dr. Daniel Sinnig', units: 3, enrolled: true },
        ],
        'Winter 2025': [
            { code: 'SOEN 357', times: ['FRI 5:45 PM', 'MON 5:45 PM'], room: 'CL 220 SGW', instructor: 'Dr. Hakim Meliah', units: 3, enrolled: true },
            { code: 'SOEN 390', times: ['MON 9:45 PM'], room: 'ONLINE', instructor: 'Dr. Nikolaos Tsantalis', units: 4, enrolled: true },
            { code: 'SOEN 345', times: ['MON 9:45 PM'], room: 'ONLINE', instructor: 'Dr. Nikolaos Tsantalis', units: 4, pending: true },
            { code: 'SOEN 343', times: ['MON 9:45 PM'], room: 'ONLINE', instructor: 'Dr. Nikolaos Tsantalis', units: 4, pending: true },
        ],
        'Summer 2025': [
            { code: 'COMP 371', times: ['TUE 1:15 PM', 'THU 1:15 PM'], room: 'CC 310 LOY', instructor: 'Dr. Sudhir Mudur', units: 4, enrolled: true },
            { code: 'COMP 376', times: ['WED 5:45 PM', 'FRI 5:45 PM'], room: 'H 820 SGW', instructor: 'Dr. Joey Paquet', units: 3, enrolled: true },
            { code: 'SOEN 321', times: ['MON 10:15 AM'], room: 'ONLINE', instructor: 'Dr. Mourad Debbabi', units: 3, enrolled: true },
            { code: 'ENGR 290', times: ['TUE 8:45 AM'], room: 'ONLINE', instructor: 'Dr. Bo Tan', units: 3, enrolled: true },
        ],
        'Fall 2025': [
            { code: 'COMP 426', times: ['MON 6:00 PM', 'WED 6:00 PM'], room: 'FG B080 SGW', instructor: 'Dr. Javad Sadri', units: 3, enrolled: true },
            { code: 'COMP 472', times: ['TUE 2:45 PM', 'THU 2:45 PM'], room: 'MB S2.330 SGW', instructor: 'Dr. Leila Kosseim', units: 4, enrolled: true },
            { code: 'COMP 474', times: ['WED 5:45 PM', 'FRI 5:45 PM'], room: 'H 535 SGW', instructor: 'Dr. Olga Ormandjieva', units: 3, enrolled: true },
            { code: 'SOEN 331', times: ['MON 1:15 PM'], room: 'ONLINE', instructor: 'Dr. Constantinos Constantinides', units: 3, enrolled: true },
        ]
    };

    // Current term state
    let currentTerm = 'Winter 2025';
    let myCourses = coursesData[currentTerm];
    
    // Course database with categories
    const courseDatabase = [
        { code: 'COMP 228', category: 'PROGRAM REQUISITES', units: 3 },
        { code: 'COMP 232', category: 'PROGRAM REQUISITES', units: 3 },
        { code: 'COMP 248', category: 'PROGRAM REQUISITES', units: 3.5 },
        { code: 'COMP 249', category: 'PROGRAM REQUISITES', units: 3.5 },
        { code: 'COMP 335', category: 'PROGRAM REQUISITES', units: 4 },
        { code: 'COMP 346', category: 'PROGRAM REQUISITES', units: 4 },
        { code: 'COMP 348', category: 'PROGRAM REQUISITES', units: 3 },
        { code: 'COMP 352', category: 'PROGRAM REQUISITES', units: 3 },
        { code: 'SOEN 287', category: 'PROGRAM REQUISITES', units: 3 },
        { code: 'SOEN 341', category: 'PROGRAM REQUISITES', units: 3 },
        { code: 'COMP 233', category: 'TECHNICAL ELECTIVES', units: 3 },
        { code: 'COMP 339', category: 'TECHNICAL ELECTIVES', units: 3 },
        { code: 'COMP 345', category: 'TECHNICAL ELECTIVES', units: 4 },
        { code: 'COMP 371', category: 'TECHNICAL ELECTIVES', units: 4 },
        { code: 'COMP 376', category: 'TECHNICAL ELECTIVES', units: 3 },
        { code: 'COMP 426', category: 'TECHNICAL ELECTIVES', units: 3 },
        { code: 'COMP 428', category: 'TECHNICAL ELECTIVES', units: 4 },
        { code: 'COMP 442', category: 'TECHNICAL ELECTIVES', units: 4 },
        { code: 'COMP 443', category: 'TECHNICAL ELECTIVES', units: 4 },
        { code: 'COMP 445', category: 'TECHNICAL ELECTIVES', units: 4 },
        { code: 'COMP 472', category: 'TECHNICAL ELECTIVES', units: 4 },
        { code: 'COMP 474', category: 'TECHNICAL ELECTIVES', units: 3 },
        { code: 'COMP 476', category: 'TECHNICAL ELECTIVES', units: 3 },
        { code: 'SOEN 321', category: 'TECHNICAL ELECTIVES', units: 3 },
        { code: 'SOEN 331', category: 'TECHNICAL ELECTIVES', units: 3 },
        { code: 'SOEN 342', category: 'TECHNICAL ELECTIVES', units: 3 },
        { code: 'SOEN 343', category: 'TECHNICAL ELECTIVES', units: 3 },
        { code: 'COMP 218', category: 'COMP SCI OPTIONAL', units: 3 },
        { code: 'COMP 326', category: 'COMP SCI OPTIONAL', units: 3 },
        { code: 'COMP 353', category: 'COMP SCI OPTIONAL', units: 4 },
        { code: 'COMP 354', category: 'COMP SCI OPTIONAL', units: 4 },
        { code: 'COMP 361', category: 'COMP SCI OPTIONAL', units: 3 },
        { code: 'COMP 367', category: 'COMP SCI OPTIONAL', units: 3 },
        { code: 'COMP 465', category: 'COMP SCI OPTIONAL', units: 3 },
        { code: 'COEN 225', category: 'COMP SCI OPTIONAL', units: 3 },
        { code: 'COEN 228', category: 'COMP SCI OPTIONAL', units: 4 },
        { code: 'COEN 346', category: 'COMP SCI OPTIONAL', units: 3 },
        { code: 'ENGR 290', category: 'NON-CREDITED', units: 3 },
        { code: 'ENGR 301', category: 'NON-CREDITED', units: 3 },
        { code: 'ENGR 371', category: 'NON-CREDITED', units: 3 },
    ];

    let selectedCourses = [
        { code: 'COMP 228' }
    ];
    
    let filteredCourses = [...courseDatabase]; // Start with all courses
    let currentFilter = 'ALL';
    
    // Handle term navigation
    const prevTermBtn = document.querySelector('.arrow-btn:first-child');
    const nextTermBtn = document.querySelector('.arrow-btn:last-of-type');
    const termDisplay = document.querySelector('.term span');
    const termIcon = document.querySelector('.term i');
    const termContainer = document.querySelector('.term');
    
    const terms = ['Fall 2024', 'Winter 2025', 'Summer 2025', 'Fall 2025'];
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
    
    // Function to update courses based on current term
    function updateCourses() {
        myCourses = coursesData[currentTerm];
        renderMyCourses();
    }
    
    // Render my courses
    function renderMyCourses() {
        const coursesContainer = document.querySelector('.my-courses');
        
        // Keep the header
        const headerContent = `
            <h2>MY COURSES</h2>
            <div class="courses-grid header">
                <div>COURSE</div>
                <div>TIMES</div>
                <div>ROOM</div>
                <div>UNITS</div>
                <div>STATUS</div>
            </div>
        `;
        
        let coursesHTML = headerContent;
        
        myCourses.forEach(course => {
            coursesHTML += `
                <div class="course-item${course.pending ? ' pending' : ''}">
                    <div>${course.code}</div>
                    <div>${course.times.join(', ')}</div>
                    <div>${course.room}</div>
                    <div class="text-center">${course.units}</div>
                    <div>${course.enrolled ? '<div class="status-dot"></div>' : 
                           '<button class="enroll-btn">FINISH ENROLLING</button>'}</div>
                </div>
            `;
        });
        
        coursesContainer.innerHTML = coursesHTML;
        
        // Reattach event listeners for enroll buttons
        const enrollBtns = document.querySelectorAll('.enroll-btn');
        enrollBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                alert('Continuing enrollment process...');
            });
        });
    }
    
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
            currentTerm = terms[currentTermIndex];
            termDisplay.textContent = currentTerm;
            updateTermStyle(currentTerm);
            updateCourses();
        }
    });
    
    nextTermBtn.addEventListener('click', function() {
        if (currentTermIndex < terms.length - 1) {
            currentTermIndex++;
            currentTerm = terms[currentTermIndex];
            termDisplay.textContent = currentTerm;
            updateTermStyle(currentTerm);
            updateCourses();
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
        const searchValue = this.value.toUpperCase().trim();
        applyFilters(currentFilter, searchValue);
    });
    
    // Apply filters based on category and search value
    function applyFilters(category, searchValue = '') {
        if (category === 'ALL') {
            filteredCourses = courseDatabase.filter(course => 
                !selectedCourses.some(sc => sc.code === course.code) &&
                course.code.toUpperCase().includes(searchValue)
            );
        } else {
            filteredCourses = courseDatabase.filter(course => 
                course.category === category && 
                !selectedCourses.some(sc => sc.code === course.code) &&
                course.code.toUpperCase().includes(searchValue)
            );
        }
        renderFilteredCourses();
    }
    
    // Render the filtered courses
    function renderFilteredCourses() {
        const coursesContainer = document.querySelector('.filtered-courses');
        coursesContainer.innerHTML = '';
        
        filteredCourses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.className = 'filtered-course';
            courseDiv.innerHTML = `
                <span>${course.code}</span>
                <div class="actions">
                    <i class="fas fa-info-circle"></i>
                    <i class="fas fa-plus"></i>
                </div>
            `;
            coursesContainer.appendChild(courseDiv);
            
            // Add event listener to the plus icon
            const plusIcon = courseDiv.querySelector('.fa-plus');
            plusIcon.addEventListener('click', function() {
                addToSelected(course);
            });
            
            // Add event listener to info icon
            const infoIcon = courseDiv.querySelector('.fa-info-circle');
            infoIcon.addEventListener('click', function() {
                showCourseInfo(course);
            });
        });
    }
    
    // Function to add course to selected list
    function addToSelected(course) {
        selectedCourses.push({ code: course.code });
        filteredCourses = filteredCourses.filter(c => c.code !== course.code);
        
        renderFilteredCourses();
        renderSelectedCourses();
    }
    
    // Function to render selected courses
    function renderSelectedCourses() {
        const selectedCoursesContainer = document.querySelector('.selected-courses-list');
        if (!selectedCoursesContainer) {
            console.error('Selected courses container not found');
            return;
        }
        
        selectedCoursesContainer.innerHTML = '';
        
        selectedCourses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.className = 'selected-course';
            courseDiv.innerHTML = `
                <span>${course.code}</span>
                <div class="actions">
                    <i class="fas fa-trash"></i>
                </div>
            `;
            selectedCoursesContainer.appendChild(courseDiv);
            
            // Add event listener to remove course
            const trashIcon = courseDiv.querySelector('.fa-trash');
            trashIcon.addEventListener('click', function() {
                removeFromSelected(course);
            });
        });
    }
    
    // Function to remove course from selected list
    function removeFromSelected(course) {
        selectedCourses = selectedCourses.filter(c => c.code !== course.code);
        
        // Add back to filtered courses if it matches the current filter
        const courseInDb = courseDatabase.find(c => c.code === course.code);
        if (courseInDb && (currentFilter === 'ALL' || courseInDb.category === currentFilter)) {
            filteredCourses.push(courseInDb);
            filteredCourses.sort((a, b) => a.code.localeCompare(b.code));
        }
        
        renderFilteredCourses();
        renderSelectedCourses();
    }
    
    // Show course information
    function showCourseInfo(course) {
        const modal = document.getElementById('courseInfoModal');
        const modalCourseCode = document.getElementById('modalCourseCode');
        const modalTreeCourseCode = document.getElementById('modalTreeCourseCode');
        
        // Set the course code in the modal header and tree
        modalCourseCode.textContent = course.code;
        modalTreeCourseCode.textContent = course.code;
        
        // Show the modal
        modal.style.display = 'block';
        
        // Close button functionality
        const closeBtn = document.querySelector('.close-modal');
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });

        // Initialize the section buttons
        initSectionButtons();
    }
    
    // Handle filter options
    const filterOptions = document.querySelectorAll('.filter-option');
    filterOptions.forEach(option => {
        option.addEventListener('click', function() {
            const filterText = this.textContent.trim();
            currentFilter = filterText;
            
            // Update visual indicator of selected filter
            filterOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            
            // Apply the filter
            applyFilters(currentFilter, searchInput.value.toUpperCase().trim());
        });
    });
    
    // Initialize UI
    function initializeUI() {
        // Create containers for the filtered and selected courses if they don't exist
        const coursesContainer = document.querySelector('.courses-container');
        if (coursesContainer) {
            // Check if we need to create the filtered-courses container
            if (!document.querySelector('.filtered-courses')) {
                const filteredCoursesDiv = document.createElement('div');
                filteredCoursesDiv.className = 'filtered-courses';
                coursesContainer.appendChild(filteredCoursesDiv);
            }
            
            // Check if we need to create the selected-courses-list container
            const selectedCoursesContainer = document.querySelector('.selected-courses');
            if (selectedCoursesContainer && !document.querySelector('.selected-courses-list')) {
                const selectedCoursesListDiv = document.createElement('div');
                selectedCoursesListDiv.className = 'selected-courses-list';
                selectedCoursesContainer.appendChild(selectedCoursesListDiv);
            }
        }
        
        // Set the initial "ALL" filter
        const programReqsOption = document.querySelector('.filter-option:nth-child(1)');
        if (programReqsOption) {
            currentFilter = programReqsOption.textContent.trim();
            programReqsOption.classList.add('selected');
            applyFilters(currentFilter);
        } else {
            applyFilters('ALL');
        }
        
        renderSelectedCourses();
    }
    
    // Initialize the UI
    initializeUI();
    
    // Handle schedule builder button
    const scheduleBtn = document.querySelector('.schedule-builder');
    scheduleBtn.addEventListener('click', function() {
        alert('Opening schedule builder...');
    });

    // At the end before initializing UI, add:
    renderMyCourses();
    
    // Add event listener to info icon
    const infoIcons = document.querySelectorAll('.fa-info-circle');
    infoIcons.forEach(infoIcon => {
        infoIcon.addEventListener('click', function() {
            // Find the parent course element
            const courseElement = this.closest('.filtered-course');
            const courseCode = courseElement.querySelector('span').textContent;
            
            // Find the course in the database
            const course = courseDatabase.find(c => c.code === courseCode);
            if (course) {
                showCourseInfo(course);
            }
        });
    });

    // Handle section buttons in the course modal
    function initSectionButtons() {
        const sectionBtns = document.querySelectorAll('.section-btn');
        sectionBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                sectionBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // In a real app, you would update the timetable here
                // For demo purposes, we'll just show an alert
                const sectionName = this.textContent.trim();
                console.log(`Switching to ${sectionName} schedule`);
                
                // Code to update the timetable would go here
            });
        });
    }
});