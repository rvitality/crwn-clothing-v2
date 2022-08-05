import { takeLatest, call, all, put } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailed } from "./user.action";

import {
    getCurrentUser,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalInfo) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalInfo);
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (err) {
        yield put(signInFailed(err));
    }
}

// ! EMAIL ----------------------------------------------------------------
export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield call(signInAuthWithEmailAndPassword, email, password);
        yield call(getSnapshotFromUserAuth, user);
    } catch (err) {
        yield put(signInFailed(err));
    }
}

export function* onEmailSignIn() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}
// ! ----------------------------------------------------------------------

// ! GOOGLE ----------------------------------------------------------------
export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    } catch (err) {
        yield put(signInFailed());
    }
}

export function* onGoogleSignIn() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
// ! ----------------------------------------------------------------

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;

        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (err) {
        yield put(signInFailed(err));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
    yield all([call(onCheckUserSession), call(onGoogleSignIn), call(onEmailSignIn)]);
}
