//firebase.js
import "firebase/database"
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
// firebase 설정과 관련된 개인 정보
    apiKey: "AIzaSyBoz24gF7IV4Gqmihbb9i7cJaCezH8xqtg",
    authDomain: "reactbox-26962.firebaseapp.com",
    projectId: "reactbox-26962",
    storageBucket: "reactbox-26962.appspot.com",
    messagingSenderId: "134244844703",
    appId: "1:134244844703:web:c91043d671b4b7902eceaa",
    measurementId: "G-TT6BQ0CBF6"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// storage
const storageService = firebase.storage();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore, storageService };