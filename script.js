let studentData = {
    "id": "STU-2026-001",
    "personalInfo": {
        "firstName": "Muhammad",
        "lastName": "Ilyas",
        "dateOfBirth": "2008-05-14",
        "gender": "Male",
        "email": "ilyas.student@example.com",
        "phone": "+92-300-1234567",
        "cnic": "12345-1234567-1",
        "profileImage": "https://example.com/images/student-profile.jpg"
    },
    "address": {
        "currentAddress": {
            "street": "Street 12",
            "area": "Johar Town",
            "city": "Lahore",
            "province": "Punjab",
            "country": "Pakistan",
            "postalCode": "54000"
        },
        "permanentAddress": {
            "street": "Main Bazar",
            "area": "Gilgit City",
            "city": "Gilgit",
            "province": "Gilgit-Baltistan",
            "country": "Pakistan",
            "postalCode": "15100"
        }
    },
    "academicInfo": {
        "studentId": "GB-IT-2026-009",
        "grade": "6th",
        "section": "A",
        "rollNumber": 23,
        "admissionDate": "2023-03-01",
        "status": "Active",
        "currentSemester": "Spring 2026",
        "department": "Computer Science"
    },
    "subjects": [
        {
            "subjectId": "CS101",
            "subjectName": "Computer Science",
            "teacher": "Sir Irfan",
            "credits": 3,
            "marks": {
                "midterm": 85,
                "final": 90,
                "assignments": 88,
                "total": 263,
                "grade": "A"
            },
            "attendancePercentage": 95
        },
        {
            "subjectId": "MTH101",
            "subjectName": "Mathematics",
            "teacher": "Mr. Ahmed",
            "credits": 3,
            "marks": {
                "midterm": 78,
                "final": 82,
                "assignments": 80,
                "total": 240,
                "grade": "B+"
            },
            "attendancePercentage": 90
        }
    ],
    "attendanceRecord": {
        "totalClasses": 120,
        "attended": 112,
        "absent": 8,
        "percentage": 93.3
    },
    "feeDetails": {
        "totalFee": 120000,
        "paidAmount": 100000,
        "remainingAmount": 20000,
        "lastPaymentDate": "2026-01-15",
        "paymentStatus": "Partial"
    },
    "extracurricularActivities": [
        {
            "activityName": "Coding Club",
            "position": "Member",
            "achievements": ["Built a React project", "Participated in Hackathon"]
        },
        {
            "activityName": "Debate Competition",
            "position": "Participant",
            "achievements": ["Won 2nd Position"]
        }
    ],
    "guardianInfo": {
        "fatherName": "Abdul Karim",
        "motherName": "Shazia Bibi",
        "guardianContact": "+92-300-9876543",
        "guardianEmail": "guardian@example.com",
        "occupation": "Businessman"
    },
    "loginDetails": {
        "username": "ilyas2026",
        "lastLogin": "2026-02-12T10:30:00Z",
        "accountStatus": "Active",
        "roles": ["student"]
    },
    "documents": [
        {
            "type": "Birth Certificate",
            "fileUrl": "https://example.com/docs/birth-certificate.pdf",
            "verified": true
        },
        {
            "type": "Previous Result Card",
            "fileUrl": "https://example.com/docs/result-card.pdf",
            "verified": true
        }
    ],
    "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Python (Beginner)"
    ],
    "notes": "Excellent performance in Computer Science. Shows strong interest in frontend development and blockchain."
}
//ID
console.log(studentData.id);
//PERSONAL INFO
console.log(studentData.personalInfo.firstName);
console.log(studentData.personalInfo.lastName);
console.log(studentData.personalInfo.email);
console.log(studentData.personalInfo.gender);
console.log(studentData.personalInfo.cnic);
console.log(studentData.personalInfo.dateOfBirth);
console.log(studentData.personalInfo.phone);
console.log(studentData.personalInfo.profileImage);
//address=>Current address
console.log(studentData.address.currentAddress.area);
console.log(studentData.address.currentAddress.city);
console.log(studentData.address.currentAddress.country);
console.log(studentData.address.currentAddress.postalCode);
console.log(studentData.address.currentAddress.province);
console.log(studentData.address.currentAddress.street);
//address=>permanent address
console.log(studentData.address.permanentAddress.area);
console.log(studentData.address.permanentAddress.city);
console.log(studentData.address.permanentAddress.country);
console.log(studentData.address.permanentAddress.postalCode);
console.log(studentData.address.permanentAddress.province);
console.log(studentData.address.permanentAddress.street);
//acadamic info
console.log(studentData.academicInfo.admissionDate);
console.log(studentData.academicInfo.currentSemester);
console.log(studentData.academicInfo.department);
//subjects
console.log(studentData.subjects[0].subjectId);
console.log(studentData.subjects[0].subjectName);
console.log(studentData.subjects[0].marks.total);
console.log(studentData.attendanceRecord.absent);
console.log(studentData.attendanceRecord.attended);
console.log(studentData.attendanceRecord.totalClasses);

console.log(studentData.feeDetails.lastPaymentDate);
console.log(studentData.feeDetails.paidAmount);

console.log(studentData.extracurricularActivities[0].activityName);

console.log(studentData.guardianInfo.fatherName);
console.log(studentData.guardianInfo.motherName);

console.log(studentData.loginDetails.lastLogin);
console.log(studentData.loginDetails.accountStatus);

console.log(studentData.documents[0].verified);
console.log(studentData.documents[0].type);

console.log(studentData.skills[2]);
console.log(studentData.skills[3]);

console.log(studentData.notes);





