import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc, query, where } from "firebase/firestore"
import { db } from "../config/firebaseConfig"

const cursosRef = collection(db, "cursos")

export const getCursos = async () => {
    const q = query(cursosRef, where('userId', '==', userId))
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const adicionarCurso = async (curso, userId) => {
    const docRef = await addDoc(cursosRef,
        {
            ...curso,
            userId
        }
     )
    return docRef.id 
}

export const atualizarCurso = async (id, novosDados) => {
    const cursoRef = doc(db, 'cursos', id)
    await updateDoc(cursoRef, novosDados)
}

export const deletarCurso = async (id) => {
    const cursoRef = doc(db, 'cursos', id)
    await deleteDoc(cursoRef)
}