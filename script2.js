// Constants
const SHEET_ID = '13UJ1K4A0-qnwLW4VBgQKbgsuQb3Nw2PgmUUkqk8zBcI';
const SHEET_TITLE = 'Sheet1';
const SHEET_RANGE = 'A:M';
const API_URL = 'https://script.google.com/macros/s/AKfycbw96S77XeXfzJ5Iuol1TIJEwHpQKG1x13dAYmXnvzB3zBZNK_8hMYP7H39Ugr30-2BxhA/exec';

let isSubmitting = false;

function smoothScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function getUserToken() {
    let token = localStorage.getItem('userToken');
    if (!token) {
        token = generateUUID();
        localStorage.setItem('userToken', token);
    }
    console.log('User token:', token);
    return token;
}

function validateEmail(email) {
    const validDomains = ['gmail.com', 'icloud.com'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        return false;
    }
    
    const domain = email.split('@')[1].toLowerCase();
    return validDomains.includes(domain);
}

async function sendEmailDataToSheet(email) {
    const userToken = getUserToken();
    const currentTime = new Date().toLocaleTimeString('vi-VN', { hour12: false });
    const currentDate = new Date().toLocaleDateString('vi-VN');

    console.log('Sending email data to sheet:', { email, userToken });

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                action: 'addEmail',
                email: email,
                userToken2: userToken,
                time: currentTime,
                date: currentDate
            }),
        });
        
        console.log('Request sent successfully');
        return { success: true };
    } catch (error) {
        console.error('Error sending email data:', error);
        return { success: false };
    }
}

function hideAllSections() {
    const sectionsToHide = ['SECTION1'];
    sectionsToHide.forEach(sectionId => {
        document.getElementById(sectionId).style = 'display:none !important';
    });
}

function showGroup25AndSection391() {
    document.getElementById('GROUP25').style = 'display:block !important';
    document.getElementById('SECTION2').style = 'display:block !important';
    smoothScrollToTop();
}

async function handleEmailInput(email) {
    if (isSubmitting) {
        console.log('Đang trong quá trình xử lý, vui lòng đợi.');
        return;
    }

    isSubmitting = true;
    const submitButton = document.getElementById('submit-btn');
    submitButton.disabled = true;

    if (!validateEmail(email)) {
        isSubmitting = false;
        submitButton.disabled = false;
        return;
    }

    // Hiển thị GROUP25 ngay lập tức
    hideAllSections();
    showGroup25AndSection391();

    try {
        await sendEmailDataToSheet(email);
    } catch (error) {
        console.error('Lỗi khi xử lý email:', error);
    } finally {
        isSubmitting = false;
        submitButton.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-btn');
    const loadingElement = document.getElementById('loading');

    submitButton.addEventListener('click', async (e) => {
        e.preventDefault();
        
        if (isSubmitting) {
            console.log('Đang trong quá trình xử lý, vui lòng đợi.');
            return;
        }

        const email = document.getElementById('email').value;
        
        if (!email) {
            return;
        }

        loadingElement.style = 'display:block !important';
        
        try {
            await handleEmailInput(email);
        } finally {
            loadingElement.style = 'display:none !important';
        }
    });
});
