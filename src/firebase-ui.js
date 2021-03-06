import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import { auth } from "./firebase-client";

export const uiConfig = {
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],

    tosUrl: '/tos',
    privacyPolicyUrl: '/privacy'
};

export const ui = new firebaseui.auth.AuthUI(auth);