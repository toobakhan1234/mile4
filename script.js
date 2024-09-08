document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Fetching input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Creating editable form for the resume preview
    const resumeContent = `
        <form id="editableResume">
            <label for="editName">Name:</label>
            <input type="text" id="editName" value="${name}" required><br/>

            <label for="editEmail">Email:</label>
            <input type="email" id="editEmail" value="${email}" required><br/>

            <label for="editPhone">Phone:</label>
            <input type="tel" id="editPhone" value="${phone}" required><br/>

            <label for="editEducation">Education:</label>
            <textarea id="editEducation" rows="4" required>${education}</textarea><br/>

            <label for="editExperience">Experience:</label>
            <textarea id="editExperience" rows="4" required>${experience}</textarea><br/>

            <label for="editSkills">Skills:</label>
            <textarea id="editSkills" rows="4" required>${skills}</textarea><br/>

            <button type="button" onclick="updateResume()">Update Resume</button>
        </form>
    `;

    document.getElementById('generatedResume').innerHTML = resumeContent;
});

// Function to update the generated resume with edited content
function updateResume() {
    const updatedName = document.getElementById('editName').value;
    const updatedEmail = document.getElementById('editEmail').value;
    const updatedPhone = document.getElementById('editPhone').value;
    const updatedEducation = document.getElementById('editEducation').value;
    const updatedExperience = document.getElementById('editExperience').value;
    const updatedSkills = document.getElementById('editSkills').value;

    alert('Resume updated successfully!');
    console.log(`
        Name: ${updatedName}
        Email: ${updatedEmail}
        Phone: ${updatedPhone}
        Education: ${updatedEducation}
        Experience: ${updatedExperience}
        Skills: ${updatedSkills}
    `);
}

