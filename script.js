// ===================== INITIALIZE DATA =====================
let studentData = JSON.parse(localStorage.getItem("students")) || [];
let adminData = JSON.parse(localStorage.getItem("admins")) || [];

// ===================== STUDENT REGISTRATION =====================
const studentRegisterForm = document.getElementById('student-register-form');
if (studentRegisterForm) {
    studentRegisterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('student-username').value.trim();
        const studentID = document.getElementById('student-id').value.trim();
        const email = document.getElementById('student-email').value.trim();
        const password = document.getElementById('student-password').value;

        const exists = studentData.some(student =>
            student.email === email || student.studentID === studentID
        );

        if (exists) {
            alert('Student already registered with this email or student ID.');
        } else {
            studentData.push({ username, studentID, email, password });
            localStorage.setItem("students", JSON.stringify(studentData));
            alert('Student registered successfully! Redirecting to login...');
            window.location.href = "student-login.html";
        }
    });
}

// ===================== STUDENT LOGIN (Gmail + Password only) =====================
const studentLoginForm = document.getElementById('student-login-form');
if (studentLoginForm) {
    studentLoginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;

        const student = studentData.find(s =>
            s.email === email && s.password === password
        );

        if (student) {
            alert('Login successful!');
            localStorage.setItem("loggedInStudent", JSON.stringify(student));
            window.location.href = "student-dashboard.html"; // redirect to dashboard
        } else {
            alert('Invalid email or password!');
        }
    });
}

// ===================== ADMIN REGISTRATION =====================
const adminRegisterForm = document.getElementById('coordinator-register-form');
if (adminRegisterForm) {
    adminRegisterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('coordinator-username').value.trim();
        const id = document.getElementById('coordinator-id').value.trim();
        const email = document.getElementById('coordinator-email').value.trim();
        const password = document.getElementById('coordinator-password').value;

        const exists = adminData.some(admin =>
            admin.email === email || admin.id === id
        );

        if (exists) {
            alert('Coordinator already registered with this email or ID.');
        } else {
            adminData.push({ username, id, email, password });
            localStorage.setItem("admins", JSON.stringify(adminData));
            alert('Registration successful! Redirecting to login...');
            window.location.href = "coordinator-login.html";
        }
    });
}

// ===================== ADMIN LOGIN =====================
const adminLoginForm = document.getElementById('coordinator-login-form');
if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('admin-login-username').value.trim();
        const id = document.getElementById('admin-login-id').value.trim();
        const email = document.getElementById('admin-login-email').value.trim();
        const password = document.getElementById('admin-login-password').value;

        const admin = adminData.find(a =>
            a.username === username &&
            a.id === id &&
            a.email === email &&
            a.password === password
        );

        if (admin) {
            alert('Login successful!');
            localStorage.setItem("loggedInAdmin", JSON.stringify(admin));
            window.location.href = "coordinator-dashboard.html"; // optional dashboard
        } else {
            alert('Invalid credentials!');
        }
    });
}
