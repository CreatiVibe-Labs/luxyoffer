const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const API = {
    register: (data) => hitAPI('register', data, 'POST'),
    login: (data) => hitAPI('login', data, 'POST'),
    forgotPassword: (data) => hitAPI('forgot-password', data, 'POST'),
    verifyOtp: (data) => hitAPI('verify-otp', data, 'POST'),
    resetPassword: (data) => hitAPI('reset-password', data, 'POST'),
};

async function hitAPI(endpoint, data, method, token = null) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
        let finalMessage = 'Something went wrong';

        if (result.errors) {
            // Get the first field's first error
            const firstField = Object.keys(result.errors)[0];
            finalMessage = result.errors[firstField][0] || finalMessage;
        } else if (result.message) {
            finalMessage = result.message;
        }

        return { 'success': false, 'message': finalMessage };
    }

    return { 'success': true, 'message': result };
}