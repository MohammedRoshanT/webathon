// Simple navbar functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.style.backgroundColor = '#357abd';
        }
    });
    
    // Scholarship form functionality
    initScholarshipForm();
});

// Scholarship form functionality
function initScholarshipForm() {
    const form = document.getElementById('scholarshipFilterForm');
    const resultsContainer = document.getElementById('scholarshipResults');
    
    if (!form || !resultsContainer) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const age = parseInt(formData.get('age'));
        const income = parseInt(formData.get('income'));
        const studyField = formData.get('studyField');
        const gpa = parseFloat(formData.get('gpa'));
        const residency = formData.get('residency');
        
        // Filter scholarships based on criteria
        const filteredScholarships = filterScholarships(age, income, studyField, gpa, residency);
        
        // Display results
        displayResults(filteredScholarships);
    });
}

// Sample scholarship data
const scholarships = [
    {
        name: "STEM Excellence Scholarship",
        amount: "$5,000",
        requirements: {
            minGPA: 3.5,
            fields: ["STEM"],
            maxIncome: 80000,
            minAge: 16,
            maxAge: 25
        },
        description: "For students pursuing STEM fields with strong academic performance."
    },
    {
        name: "Merit-Based Achievement Award",
        amount: "$3,000",
        requirements: {
            minGPA: 3.8,
            fields: ["STEM", "Arts", "Business", "Healthcare", "Education"],
            maxIncome: 100000,
            minAge: 17,
            maxAge: 30
        },
        description: "High-achieving students across all fields of study."
    },
    {
        name: "Need-Based Support Grant",
        amount: "$4,000",
        requirements: {
            minGPA: 2.5,
            fields: ["STEM", "Arts", "Business", "Healthcare", "Education"],
            maxIncome: 50000,
            minAge: 16,
            maxAge: 35
        },
        description: "For students with financial need and academic potential."
    },
    {
        name: "Arts & Humanities Scholarship",
        amount: "$2,500",
        requirements: {
            minGPA: 3.0,
            fields: ["Arts"],
            maxIncome: 75000,
            minAge: 16,
            maxAge: 28
        },
        description: "Supporting students in arts and humanities programs."
    },
    {
        name: "Business Leadership Award",
        amount: "$3,500",
        requirements: {
            minGPA: 3.2,
            fields: ["Business"],
            maxIncome: 90000,
            minAge: 18,
            maxAge: 32
        },
        description: "For future business leaders and entrepreneurs."
    },
    {
        name: "Healthcare Heroes Scholarship",
        amount: "$4,500",
        requirements: {
            minGPA: 3.3,
            fields: ["Healthcare"],
            maxIncome: 85000,
            minAge: 17,
            maxAge: 30
        },
        description: "Supporting students pursuing healthcare careers."
    },
    {
        name: "Education Excellence Grant",
        amount: "$2,800",
        requirements: {
            minGPA: 3.1,
            fields: ["Education"],
            maxIncome: 70000,
            minAge: 18,
            maxAge: 35
        },
        description: "For students committed to education and teaching."
    }
];

// Filter scholarships based on user criteria
function filterScholarships(age, income, studyField, gpa, residency) {
    return scholarships.filter(scholarship => {
        const req = scholarship.requirements;
        
        // Check age range
        if (age < req.minAge || age > req.maxAge) return false;
        
        // Check income limit
        if (income > req.maxIncome) return false;
        
        // Check GPA requirement
        if (gpa < req.minGPA) return false;
        
        // Check field of study
        if (!req.fields.includes(studyField)) return false;
        
        return true;
    });
}

// Display filtered results
function displayResults(scholarships) {
    const resultsContainer = document.getElementById('scholarshipResults');
    
    if (scholarships.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <h3>No matching scholarships found</h3>
                <p>Try adjusting your criteria or check back later for new opportunities.</p>
            </div>
        `;
        return;
    }
    
    let html = '<div class="scholarship-grid">';
    
    scholarships.forEach(scholarship => {
        html += `
            <div class="scholarship-card">
                <h3>${scholarship.name}</h3>
                <div class="amount">${scholarship.amount}</div>
                <p class="description">${scholarship.description}</p>
                <div class="requirements">
                    <h4>Requirements:</h4>
                    <ul>
                        <li>Minimum GPA: ${scholarship.requirements.minGPA}</li>
                        <li>Maximum Income: $${scholarship.requirements.maxIncome.toLocaleString()}</li>
                        <li>Age Range: ${scholarship.requirements.minAge}-${scholarship.requirements.maxAge} years</li>
                        <li>Fields: ${scholarship.requirements.fields.join(', ')}</li>
                    </ul>
                </div>
                <button class="apply-btn">Apply Now</button>
            </div>
        `;
    });
    
    html += '</div>';
    resultsContainer.innerHTML = html;
    
    // Add click handlers for apply buttons
    document.querySelectorAll('.apply-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Application process would open here!');
        });
    });
}