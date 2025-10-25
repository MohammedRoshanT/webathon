document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.style.backgroundColor = 'rgba(197, 158, 2, 0.9)';
            link.style.transform = 'translateY(-2px)';
        }
    });

    
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.style.background = 'linear-gradient(135deg, rgba(0, 127, 254, 0.95) 0%, rgba(0, 86, 179, 0.95) 100%)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.background = 'linear-gradient(135deg, var(--header-bg) 0%, #0056b3 100%)';
                header.style.backdropFilter = 'blur(10px)';
            }
        });
    }

 
    const scholarshipForm = document.getElementById('scholarshipFilterForm');
    if (scholarshipForm) {
        scholarshipForm.addEventListener('submit', function (e) {
            e.preventDefault();
            showLoadingState();

            setTimeout(() => {
                handleScholarshipFilter(e);
                hideLoadingState();
            }, 800);
        });
    }

    
    initPageTransitions();
});


function showLoadingState() {
    const resultsContainer = document.getElementById('scholarshipResults');
    if (resultsContainer) {
        resultsContainer.innerHTML = `
            <div class="loading-container">
                <div class="loading-spinner"></div>
                <p>Finding scholarships that match your criteria...</p>
            </div>
        `;
    }
}


function hideLoadingState() {
    const loadingContainer = document.querySelector('.loading-container');
    if (loadingContainer) {
        loadingContainer.style.opacity = '0';
        setTimeout(() => {
            loadingContainer.remove();
        }, 300);
    }
}


function initPageTransitions() {
    const main = document.querySelector('main');
    if (main) {
        main.style.opacity = '0';
        main.style.transform = 'translateY(20px)';

        setTimeout(() => {
            main.style.transition = 'all 0.6s ease';
            main.style.opacity = '1';
            main.style.transform = 'translateY(0)';
        }, 100);
    }

    const aboutSections = document.querySelectorAll('.about-section');
    aboutSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';

        setTimeout(() => {
            section.style.transition = 'all 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 200 + (index * 150));
    });
}


const scholarships = [
    {
        name: "STEM Excellence Scholarship",
        amount: "$5,000",
        field: "STEM",
        minGPA: 7.5,
        maxAge: 25,
        maxIncome: 75000,
        residency: "Resident",
        description: "For students pursuing STEM fields with strong academic performance.",
        applyUrl: "https://www.stemscholarship.org/apply"
    },
    {
        name: "Arts & Humanities Grant",
        amount: "$3,000",
        field: "Arts",
        minGPA: 8.0,
        maxAge: 30,
        maxIncome: 60000,
        residency: "Resident",
        description: "Supporting students in arts and humanities programs.",
        applyUrl: "https://www.artsfoundation.org/grants"
    },
    {
        name: "Business Leadership Award",
        amount: "$4,500",
        field: "Business",
        minGPA: 6.2,
        maxAge: 28,
        maxIncome: 80000,
        residency: "Non-Resident",
        description: "For future business leaders with entrepreneurial spirit.",
        applyUrl: "https://www.scholarshipsfund.org/business-leaders-scholarship/"
    },
    {
        name: "Healthcare Heroes Scholarship",
        amount: "$6,000",
        field: "Healthcare",
        minGPA: 7.7,
        maxAge: 35,
        maxIncome: 70000,
        residency: "Resident",
        description: "Supporting students committed to healthcare careers.",
        applyUrl: "https://www.scholarships.com/scholarships/the-procare-health-heroes-scholarship"
    },
    {
        name: "Education Impact Fund",
        amount: "$2,500",
        field: "Education",
        minGPA: 7.3,
        maxAge: 40,
        maxIncome: 50000,
        residency: "Resident",
        description: "For students dedicated to making a difference in education.",
        applyUrl: "https://www.educationimpactfund.org/"
    },
    {
        name: "International Student Grant",
        amount: "$4,000",
        field: "STEM",
        minGPA: 7.4,
        maxAge: 30,
        maxIncome: 90000,
        residency: "Non-Resident",
        description: "Supporting international students in STEM programs.",
        applyUrl: "https://www.internationalscholarships.com/"
    },
    {
        name: "Community Service Scholarship",
        amount: "$3,500",
        field: "Education",
        minGPA: 8.0,
        maxAge: 25,
        maxIncome: 45000,
        residency: "Resident",
        description: "For students with strong community service backgrounds.",
        applyUrl: "https://www.scholarships.com/"
    },
    {
        name: "Innovation in Technology Award",
        amount: "$7,500",
        field: "STEM",
        minGPA: 7.6,
        maxAge: 35,
        maxIncome: 100000,
        residency: "Non-Resident",
        description: "Recognizing exceptional talent in technology and innovation.",
        applyUrl: "https://awards.gov.in/"
    },
    {
        name: "Fulbright Program (USA)",
        amount: "$4000",
        field: "STEM",
        minGPA: 8.0,
        maxAge: 35,
        maxIncome: 120000,
        residency: "Non-Resident",
        description: "Prestigious U.S. government grant for Master's/PhD students from 155+ countries, covering all costs.",
        applyUrl: "https://foreign.fulbrightonline.org/"
    },
    {
        name: "Chevening Scholarships (UK)",
        amount: "$40000",
        field: "STEM",
        minGPA: 7.5,
        maxAge: 35,
        maxIncome: 100000,
        residency: "Non-Resident",
        description: "UK government's fully-funded scholarship for one-year Master's degrees, focusing on leadership potential.",
        applyUrl: "https://www.chevening.org/apply/"
    },
    {
        name: "DAAD Scholarships (Germany)",
        amount: "€934 - €1,300",
        field: "STEM",
        minGPA: 7.0,
        maxAge: 35,
        maxIncome: 100000,
        residency: "Non-Resident",
        description: "German government funding for Master's/PhD students, including a monthly stipend and health insurance.",
        applyUrl: "https://www.daad.de/en/"
    },
    {
        name: "Erasmus Mundus Joint Master Degrees (EU)",
        amount: "$65000",
        field: "Arts",
        minGPA: 8.0,
        maxAge: 35,
        maxIncome: 100000,
        residency: "Non-Resident",
        description: "European Commission grant for a joint Master's degree across multiple European universities.",
        applyUrl: "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters-degrees"
    },
    {
        name: "Central Sector Scheme of Scholarships for College and University Students(CSSS)",
        amount: " ₹10,000–₹20,000/year",
        field: "STEM",
        minGPA: 7.0,
        maxAge: 35,
        maxIncome:450000,
        residency: "Resident",
        description: "The scheme is a merit-cum-means scholarship scheme implemented by the Ministry of Education (Dept of Higher Education) to provide financial assistance to meritorious students from low-income families to help meet a part of their day-to-day expenses while pursuing higher studies (regular full-time courses)",
        applyUrl: "https://scholarships.gov.in"
    },
    {
        name: "Post-Matric Scholarship Scheme for Minorities",
        amount: "10,000 p.a.",
        field: "STEM",
        minGPA:5.0,
        maxAge: "None",
        maxIncome: 200000,
        residency: "Resident",
        description: "A central sector scheme aimed at providing financial assistance to meritorious students from minority communities (economically weaker sections) so as to enhance their access to and continuation in higher education and improve employability.",
        applyUrl: "https://scholarships.gov.in"
    },
    {
        name: "National Fellowship and Scholarship for Higher Education of ST Students (NFST)",
       amount: "31,000 to 35,000",
       field:"STEM",
       minGPA: 7,
       maxAge: 36,
       maxIncome:600000,
       residency:"Resident",
       description:"This is a Central Sector Scheme which merges two earlier schemes (Rajiv Gandhi National Fellowship and Top Class Education for ST Students) for ST students" ,
       applyUrl:"https://fellowship.tribal.gov.in/"
    },
    {
        name: "INSPIRE Scholarship for Higher Education (SHE)",
        amount:80000,
        field:"STEM",
        minGPA:7.0,
        maxAge:22,
        maxIncome:"None",
        residency:" Resident",
        description:"A scheme under the Ministry of Science & Technology / Department of Science & Technology (DST), Government of India, aiming to attract and retain talented students in the natural/basic sciences by providing them scholarship support, mentorship, summer research projects and exposure",
        applyUrl: "https://www.online-inspire.gov.in"
    },
    {
        name:"AICTE Pragati Scholarship (for girls) / AICTE Saksham Scholarship (for specially-abled)",
        amount: 50000,
        field:"STEM",
        minGPA:"None",
        maxIncome: 800000,
        residency:"Resident",
        description:"Pragati—Designed to support and encourage female students to pursue technical education (degree/diploma) in AICTE-approved institutions by providing financial assistance for tuition, books, computer, software, etc",
        applyUrl:" https://www.aicte-pragati-saksham-gov.in/"
    }



];


function handleScholarshipFilter(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userCriteria = {
        age: parseInt(formData.get('age')),
        income: parseInt(formData.get('income')),
        studyField: formData.get('studyField'),
        gpa: parseFloat(formData.get('gpa')),
        residency: formData.get('residency')
    };

    const matchingScholarships = findMatchingScholarships(userCriteria);
    displayScholarshipResults(matchingScholarships);
}


function findMatchingScholarships(criteria) {
    console.log('User criteria:', criteria); 

    return scholarships.filter(scholarship => {
        console.log('Checking scholarship:', scholarship.name);

     
        if (criteria.age > scholarship.maxAge) {
            console.log(`Age ${criteria.age} > ${scholarship.maxAge} - REJECTED`);
            return false;
        }

        
        if (criteria.income > scholarship.maxIncome) {
            console.log(`Income ${criteria.income} > ${scholarship.maxIncome} - REJECTED`);
            return false;
        }

        
        if (scholarship.field !== criteria.studyField) {
            console.log(`Field ${scholarship.field} !== ${criteria.studyField} - REJECTED`);
            return false;
        }

       
        if (criteria.gpa < scholarship.minGPA) {
            console.log(`GPA ${criteria.gpa} < ${scholarship.minGPA} - REJECTED`);
            return false;
        }

        
        if (scholarship.residency !== criteria.residency) {
            console.log(`Residency ${scholarship.residency} !== ${criteria.residency} - REJECTED`);
            return false;
        }

        console.log('✅ MATCHED:', scholarship.name);
        return true;
    });
}


function displayScholarshipResults(scholarships) {
    const resultsContainer = document.getElementById('scholarshipResults');

    if (scholarships.length === 0) {
        resultsContainer.innerHTML = `
            <div class="placeholder">
                <h3>No matching scholarships found</h3>
                <p>Try adjusting your criteria to see more results.</p>
            </div>
        `;
        return;
    }

    const scholarshipsHTML = scholarships.map(scholarship => `
        <div class="scholarship-card">
            <h3>${scholarship.name}</h3>
            <p><strong>Amount:</strong> ${scholarship.amount}</p>
            <p><strong>Field:</strong> ${scholarship.field}</p>
            <p><strong>Description:</strong> ${scholarship.description}</p>
            <div class="criteria">
                <strong>Requirements:</strong> GPA ≥ ${scholarship.minGPA}, Age ≤ ${scholarship.maxAge}, Income ≤ $${scholarship.maxIncome.toLocaleString()}, ${scholarship.residency}
            </div>
            <div class="scholarship-actions">
                <a href="${scholarship.applyUrl}" target="_blank" class="btn-apply-now">Apply Now</a>
            </div>
        </div>
    `).join('');

    resultsContainer.innerHTML = scholarshipsHTML;
}
