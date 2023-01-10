import {collection, getDocs, addDoc  } from 'firebase/firestore/lite';

import { db } from './config';

export const getAllFormData = async () =>   {
    const formSnapshot = await getDocs(collection(db, 'form'));
    const formList =  formSnapshot.docs.map(doc => doc.data());
    return formList;
}

export const createFormData = async (form) => {
    addDoc(collection(db, "form"), { ...form });
}




