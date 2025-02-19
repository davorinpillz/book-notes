import {create} from 'zustand'

export const useReferencesStore = create((set) => ({
    references: 
        [{
            note_id: '',
        book_id: '',
        chapter_title: '',
        page_number: '',
        }]
    ,
    comment: '',
    addReference: (r) => {
        console.log(r)
        set((state) => {
            return {
                references: [...state.references, r]
            }
        })
    },
    setComment: (comment) => {
        set((state) => {
            comment: comment
        })
    },
    deleteReference: () => {
        set((state) => {
            return {references: [{
                note_id: '',
            book_id: '',
            chapter_title: '',
            page_number: '',
            }]}
        })
    }

}
))