import { writable } from "svelte/store";

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhkMmPGP_UWORt2mv8CoV5gPEbJ6o-24g",
  authDomain: "enrollmentsystem-c930e.firebaseapp.com",
  projectId: "enrollmentsystem-c930e",
  storageBucket: "enrollmentsystem-c930e.appspot.com",
  messagingSenderId: "115283223082",
  appId: "1:115283223082:web:e5b569895535c94cfd1953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = writable(getAuth(app));
export const db = writable(getFirestore(app));
export const storage = writable(getStorage(app));





export const adminState = writable({

})

export const staticState = writable({
    /** nav state */
    hadStudent: false,
    hadAdmin: false,
    activeItem: "",

    staticNav: ["Admission", "Login"],
    adminNav: ["Panel", "DashBoard"],
    studentNav: ["Admission", "Status", "Interact"],
    defaultNav: ["youtube/@mikeSharesCode"],

    /**Login state */
    showRegister: false,
    showResetPass: false,

    gender: {
      boy: [
          "https://em-content.zobj.net/thumbs/120/apple/354/boy_1f466.png",
          "https://em-content.zobj.net/thumbs/120/google/350/boy_1f466.png",
          "https://em-content.zobj.net/thumbs/120/samsung/349/boy_1f466.png",
          "https://em-content.zobj.net/thumbs/120/microsoft/319/boy_1f466.png",
          "https://em-content.zobj.net/thumbs/120/whatsapp/352/boy_1f466.png",
          "https://em-content.zobj.net/thumbs/120/twitter/351/boy_1f466.png",
          "https://em-content.zobj.net/thumbs/120/facebook/355/boy_1f466.png",
          "https://em-content.zobj.net/thumbs/120/twitter/348/boy_1f466.png",
          "https://em-content.zobj.net/thumbs/120/joypixels/340/boy_1f466.png",
      ],
      girl: [
          "https://em-content.zobj.net/thumbs/120/apple/354/girl_1f467.png",
          "https://em-content.zobj.net/thumbs/120/google/350/girl_1f467.png",
          "https://em-content.zobj.net/thumbs/120/samsung/349/girl_1f467.png",
          "https://em-content.zobj.net/thumbs/120/microsoft/319/girl_1f467.png",
          "https://em-content.zobj.net/thumbs/120/whatsapp/352/girl_1f467.png",
          "https://em-content.zobj.net/thumbs/120/twitter/351/girl_1f467.png",
          "https://em-content.zobj.net/thumbs/120/facebook/355/girl_1f467.png",
          "https://em-content.zobj.net/thumbs/120/twitter/348/girl_1f467.png",
          "https://em-content.zobj.net/thumbs/120/joypixels/340/girl_1f467.png",
      ]
    },

    cc: [
        {
          name: "College of Arts & Sciences",
          offers: [
            "(ABCom)Bachelor of Arts in Communication (Masscom)",
            "(ABEng)Bachelor of Arts in English",
            "(BSM)Bachelor of Sciences in Mathematics",
            "(BSP)Bachelor of Sciences in Psychology"
          ]
        },

        {
          name: "Business & Accountancy",
          offers: [
            "(ABA)Associate in Business Administration",
            "(BSAIS)Bachelor of Science in Accounting Information System",
            "(BSA)Bachelor of Sciences in Accountancy",
            "(BSMA)Bachelor of Science in Management Accounting",
            "(BSREM)Bachelor of Science in Real Estate Management",
            "(BSIA)Bachelor of Science in Internal Auditing",
          ]
        },

        {
          name: "BS Business Administration",
          offers: [
            "(ABA)Associate in Business Administration",
            "(BSAIS)Bachelor of Science in Accounting Information System",
            "(BSA)Bachelor of Sciences in Accountancy",
            "(BSMA)Bachelor of Science in Management Accounting",
            "(BSREM)Bachelor of Science in Real Estate Management",
            "(BSIA)Bachelor of Science in Internal Auditing",
          ]
        },

        {
          name: "College of Computer Studies",
          offers: [
            "(ACT)Associate in Computer Technology",
            "(BSCS)Bachelor of Science in Computer Science",
            "(BSIT)Bachelor of Science in Information Technology",
            "(BSIS)Bachelor of Science in Information System",
          ]
        },

        {
          name: "College of Teacher Education",
          offers: [
            "(BECEd)Bachelor in Early Childhood Education",
            "(BEEd)Bachelor in Elementary Education",
          ]
        },

        {
          name: "Bachelor in Secondary Education",
          offers: [
            "(BSEd)Major in Information Management",
            "(BSEd)Major in English",
            "(BSEd)Major in Filipino",
            "(BSEd)Major in Mathematics",
            "(BSEd)Major in Science",
          ]
        },

        {
          name: "BT Vocational Teacher Education",
          offers: [
            "(BTVTEd)Major in Home Economics and Livelihood Education / HELE",
            "(BTVTEd)Major in Information Communication Technology / ICT",
          ]
        },

        {
          name: "College of Maritime Education",
          offers: [
            "(BSMT)Bachelor of Sciences in Marine Transportation",
          ]
        },

        {
          name: "College of Criminology",
          offers: [
            "BSC)Bachelor of Sciences in Criminology",
            "(BSISM)Bachelor of Sciences in Industrial Security Management",
            "(BSPA)Bachelor of Sciences in Public Administration",
          ]
        },

        {
          name: "College of Engineering",
          offers: [
            "(BSCE)Bachelor of Science in Computer Engineering",
            "(BSELE)Bachelor of Sciences in Electronics Engineering",
          ]
        },

        {
          name: "College of Health Sciences",
          offers: [
            "(BSMedTech)Bachelor of Sciences in Medical Technology",
          ]
        },

        {
          name: "Hospitality & Tourism",
          offers: [
            "(BSHM)Bachelor of Sciences in Hospitality Management",
            "(BSTM)Bachelor of Sciences in Tourism Management",
          ]
        }




    ],

    sht: [
        {
          name: "Academic Track",
          offers: [
            "(ABM)Accountancy, Business & Management Strand",
            "(STEM)Science, Technology, Engineering & Mathematics Strand",
            "(HUMSS) Humanities & Social Sciences Strand",
            "(GAS)General Academic Strand",
          ]
        },

        {
          name: "Technical-Vocational Track",
          offers: [
            "(ICT) Information & Communication Technology Strand * Specializes in Computer Programming, Digital Arts & Robotics Technology",
            "(HE) Home Economics Strand * Specializes in Hotel & Restaurant"
          ]
        }
    ],

    rqr: [
        {
          name: "Freshmen Student",
          requires: [
            "DepEd ALS Rating Certificate (COR).",
            "Certificate of Complete from ALS School/Center.",
            "Two(2) photocopies of Learner's Permanent Record (AS-5).",
          ]
        },

        {
          name: "Senior High School",
          requires: [
            "JHS Report Card (F138B) (Original copy and 2 pcs. photocopies).",
            "National Career Assessment Exam (NCAE) Result (if availabale/optional).",
            "Certificate of Good Moral Character / CGMC (Original and 2 pcs. photocopies).",
            "NSO/PSA Birth Certificate (2 pcs. photocopies).",
            "Colored 2x2 picture with white background (4 pcs).",
            "SHS Eligibility Certificate / Certificate of JHS Completion.",
          ]
        },

        {
          name: "Second Coursers",
          requires: [
            "2 Photocopies of TOR (Transcript of Records).",
            "2 Photocopies of Diploma.",
            "2 Photocopies of NSO Birth Certificate (National Statistics Office).",
            "2 Photocopies of Marriage License (if married).",
            "4 Pcs 2X2 Colored Pictures.",
          ]
        }
    ]
})

/** @type {any} */
export const studentState = writable({
    /**Admission state */
    files: [],
    course: "Select your course",
    fullname: "",
    presentAddress: "",
    religion: "",
    civilStatus: "",
    mobileNumber: "",
    dateOfbirth: "",
    fathersName: "",
    mothersName: "",
    primarySchoolName: "",
    primarySchoolAddress: "",
    primaryGraduated: "",
    secondarySchoolName: "",
    secondarySchoolAddress: "",
    secondaryGraduated: "",

    /** Interaction states */
    showPoster: false,
    showStudentPost: [],
    showStudentComments: [],

    /** status states */
    showImagesReq: [],
    showFormReq: [],


    

})




