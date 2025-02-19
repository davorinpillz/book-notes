import {create} from 'zustand'

export const useReferencesStore = create((set) => ({
    idOneTrue: false,
    referenceOne: [
        {
            noteId_one: '',
        book_one: '',
        chapter_one: '',
        page_one: '',
        }
    ],
    referenceTwo: [
        {
            noteId_two: '',
        book_two: '',
        chapter_two: '',
        page_two: '',
    }
],
    comment: '',
    addFirstReference: (newReference) => {
        set((state) => {
            referenceOne: newReference
        })
    },
    addSecondReference: (newReference) => {
        set((state) => {
            referenceTwo: newReference
        })
    },
    setComment: (comment) => {
        set((state) => {
            comment: comment
        })
    },
    setFlag: (flag) => {
        set((state) => {
            idOneTrue: !idOneTrue;
        })
    }
}
))