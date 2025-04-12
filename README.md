# Concordia University Course Registration UI Redesign
<details>
<summary>🌟Click to view Screenshots 📸</summary>

### Screenshot 1: Main page
![image](https://github.com/user-attachments/assets/be4aa302-5171-4261-84f2-b7252ccc4cc1)

### Screenshot 2: Course Information 
![image](https://github.com/user-attachments/assets/abfddaa9-9ab2-4e9a-996b-d522a31791f7)

</details>

[💻Watch the Demo on YouTube 🎥](https://youtu.be/WGM50Wz1WeE)


## Description

This project presents the design, implementation, and evaluation of a redesigned user interface for Concordia University's course registration platform. The primary goal is to address student frustration with the current fragmented and unintuitive system by creating a centralized interface that combines course planning, scheduling, course information, and professor reviews into a single platform.

The existing registration platform at Concordia University often presents challenges for students in managing schedules, checking prerequisites, verifying professor reviews, and accessing course details, leading to potential errors and stress. This redesign aims to simplify and unify the system for course registration, academic planning, and accessing essential course information.

A high-fidelity Figma mockup and a functional clickable prototype (built with HTML, CSS, and JavaScript) were created to illustrate the user flow and demonstrate the key features. Student feedback collected via surveys suggests the redesigned system offers a clearer and more student-friendly course selection process.

## Key Features

* **Centralized Platform:** Combines course planning, scheduling, details, prerequisites, and professor reviews.
* **Intuitive Navigation:** Based on the current Concordia student hub interface with a clean header and left sidebar navigation.
* **Detailed Course Pages:** Consolidated pages for each course offering key information:
    * Prerequisites/Corequisites.
    * Access to course materials (e.g., course outline download button).
    * Student reviews and discussion forum (similar to RateMyProfessor).
    * Visual representations of workload (Exams, Labs, Projects).
    * Requisite Tree visualization.
    * Course schedule timetable view per section.
    * Professor contact information and RateMyProfessor links.
* **Improved Enrollment/Course Selection UX:**
    * Standard "shopping cart" feel for adding courses.
    * Search bar with auto-suggestions for finding courses.
    * Filtering options (e.g., Program Requisites, Technical Electives).
    * Concise course bubbles linking to detailed pages.
    * Visual Schedule Builder access (placeholder button).
* **Term Navigation:** Easily switch between academic terms (e.g., Fall 2024, Winter 2025) to view schedules.
* **Status Indicators:** Clear visual cues for enrolled vs. pending (requires action) courses.

## Technologies Used

* **Frontend:** HTML, CSS, JavaScript
* **Design:** Figma (for high-fidelity mockups)
* **Icons:** Font Awesome

## Project Structure

* `Home.html`: The main HTML structure for the student hub interface.
* `styles.css`: Contains all the CSS rules for styling the interface.
* `app.js`: Handles the dynamic functionalities, including term navigation, course filtering, adding/removing courses, displaying course details in a modal, and interactive elements like comment likes/dislikes.
