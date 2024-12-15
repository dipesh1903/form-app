import i18n from "i18next";                      
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({              
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
                "loginPage": {
                    "heading": "Now is your chance to work abroad and earn for a better future",
                    "subMessage": "Verify your phone number to Proceed",
                    "btnMessage": "Send Otp",
                    "inputPlaceholder": "Phone number",
                    "errorMessage": "Incorrect Phone number"
                },
                "otpPage": {
                    "heading": "Verify Otp",
                    "btnMessage": "Verify",
                    "info": "If not received ?",
                    "resendBtnMessage": "Resend",
                    "errorMsg": "incorrect otp",
                    "successMsg": "Congratulations"
                },
                "userDetails": {
                    "heading": "User details",
                    "passport": "Do you have passport ?",
                    "name": "Name",
                    "IndustryType": "Industry to work for",
                    "address": "address",
                    "state": "state",
                    "pincode": "pincode",
                    "btnMessage": "Save"
                },
                "existingUser": {
                    "headingSuccess": "Registration Successful",
                    "headingExistingUser": "Your've already registered !!",
                    "address": "v.p.o rajganj , west bengal , jalpaiguri",
                    "phoneNumber": "123456789",
                    "mapLocation": "open in google map",
                    "actionRegisterMsg": "Register for a different person ?",
                    "actionRegisterBtnMsg": "start",
                    "actionEditMsg": "Edit your details ?",
                    "actionEditBtnMsg": "edit",
                    "companyContactMsg": "Reach out to us",
                    "message": "Our team will call you in sometime.",
                    "mapMsg": "Open in google map"
                },
                "toastError": {
                    "otpFail": "Please reload the page" 
                }
        },
      },
      hi: {
        translation: {
            "loginPage": {
                "heading": "अब आपके लिए विदेश में काम करने और बेहतर भविष्य के लिए कमाई करने का मौका है",
                "subMessage": "आगे बढ़ने के लिए अपना फ़ोन नंबर सत्यापित करें",
                "btnMessage": "ओटीपी भेजें",
                "inputPlaceholder": "फ़ोन नंबर",
                "errorMessage": "ग़लत फ़ोन नंबर"
            },
            "otpPage": {
                "heading": "ओटीपी सत्यापित करें",
                "btnMessage": "सत्यापित करें",
                "info": "यदि नहीं मिला?",
                "resendBtnMessage": "हमें बताओ",
                "errorMsg": "ग़लत ओटीपी",
                "successMsg": "बधाई हो"
            },
            "userDetails": {
                "heading": "उपयोगकर्ता विवरण",
                "passport": "क्या आपके पास पासपोर्ट है?",
                "name": "आपका नाम",
                "IndustryType": "Industry to work for",
                "address": "address",
                "state": "state",
                "pincode": "pincode",
                "btnMessage": "Save"
            },
            "existingUser": {
                "headingSuccess": "सफल पंजीकरण",
                "headingExistingUser": "आपका पंजीकरण पहले ही हो चुका है !!",
                "address": "v.p.o rajganj , west bengal , jalpaiguri",
                "phoneNumber": "123456789",
                "mapLocation": "गूगल मैप में खोलें",
                "actionRegisterMsg": "किसी भिन्न व्यक्ति के लिए पंजीकरण करें?",
                "actionRegisterBtnMsg": "शुरू",
                "actionEditMsg": "अपना विवरण संपादित करें?",
                "actionEditBtnMsg": "संपादन करना",
                "companyContactMsg": "हम तक पहुंचें",
                "message": "हमारी टीम आपको कुछ देर में कॉल करेगी.",
                "mapMsg": "गूगल मैप में खोलें"
            },
            "toastError": {
                "otpFail": "कृपया पुनः लोड करें" 
            }
        },
      },
      bn: {
        translation: {
                "loginPage": {
                    "heading": "এখন আপনার বিদেশে কাজ করার এবং একটি ভাল ভবিষ্যতের জন্য উপার্জন করার সুযোগ",
                    "subMessage": "এগিয়ে যেতে আপনার ফোন নম্বর যাচাই করুন",
                    "btnMessage": "Otp পাঠান",
                    "inputPlaceholder": "ফোন নম্বর",
                    "errorMessage": "ভুল ফোন নম্বর"
                },
                "otpPage": {
                    "heading": "Verify Otp",
                    "btnMessage": "Verify",
                    "info": "If not received ?",
                    "resendBtnMessage": "Resend",
                    "errorMsg": "incorrect otp",
                    "successMsg": "Congratulations"
                },
                "userDetails": {
                    "heading": "User details",
                    "passport": "Do you have passport ?",
                    "name": "Name",
                    "IndustryType": "Industry to work for",
                    "address": "address",
                    "state": "state",
                    "pincode": "pincode",
                    "btnMessage": "Save"
                },
                "existingUser": {
                    "headingSuccess": "Registration Successful",
                    "headingExistingUser": "Your've already registered !!",
                    "address": "v.p.o rajganj , west bengal , jalpaiguri",
                    "phoneNumber": "123456789",
                    "mapLocation": "open in google map",
                    "actionRegisterMsg": "Register for a different person ?",
                    "actionRegisterBtnMsg": "start",
                    "actionEditMsg": "Edit your details ?",
                    "actionEditBtnMsg": "edit",
                    "companyContactMsg": "Reach out to us",
                    "message": "Our team will call you in sometime."
                },
        },
      },
    },
  });

export default i18n;