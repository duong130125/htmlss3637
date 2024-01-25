function createStudent() {
    let studentId = document.getElementById("studentId").value;
    let studentName = document.getElementById("studentName").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let validationResult = validateStudent(studentId, studentName, age, phone, email);

    if (validationResult.isValid) {
        displayStudentInfo(validationResult.student);
    } else {
        displayError(validationResult.errorMsg);
    }
}

function validateStudent(studentId, studentName, age, phone, email) {
    if (studentId.length !== 6) {
        return {
            isValid: false,
            errorMsg: "Mã Sinh viên phải có 6 ký tự."
        };
    }

    if (studentName.trim() === "") {
        return {
            isValid: false,
            errorMsg: "Tên Sinh viên không được để trống."
        };
    }

    if (age < 18) {
        return {
            isValid: false,
            errorMsg: "Tuổi phải là 18 tuổi trở lên."
        };
    }

    if (!/^[0-9]{10,11}$/.test(phone)) {
        return {
            isValid: false,
            errorMsg: "Số điện thoại phải có định dạng VN."
        };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return {
            isValid: false,
            errorMsg: "Định dạng email không hợp lệ."
        };
    }

    return {
        isValid: true,
        student: {
            studentId: studentId,
            studentName: studentName,
            age: age,
            phone: phone,
            email: email
        }
    };
}

function displayStudentInfo(student) {
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>Thông tin Sinh viên</h2>" +
        "<p><strong>Mã Sinh viên:</strong> " + student.studentId + "</p>" +
        "<p><strong>Tên Sinh viên:</strong> " + student.studentName + "</p>" +
        "<p><strong>Tuổi:</strong> " + student.age + "</p>" +
        "<p><strong>Số điện thoại:</strong> " + student.phone + "</p>" +
        "<p><strong>Email:</strong> " + student.email + "</p>";
}

function displayError(errorMsg) {
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<p class='error'>" + errorMsg + "</p>";
}
