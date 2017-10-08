import axios from "axios-es6";
import { pageSize } from "../config.json"
// import _ from 'underscore';
export const LOAD_WORDS = 'words/LOAD_WORDS'
const initialState = {
    count: 0,
    searchKey: '',
    arrWords: [],
    displayIds: [],
    totalWords: 0,
    totalPages: 0,
    currentPage: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_WORDS_PENDING':
            // console.log('LOAD_WORDS_PENDING called')
            return {
                ...state,
                isLoading: true
            }

        case 'LOAD_WORDS_FULFILLED':
            // console.log('LOAD_WORDS_FULFILLED called')
            let totalIds = [];
            const arrWords = action.payload.data.words;
            console.log('pageeeeeeeeeeeeeeeeeeeeeeee111', action)

            for (let i = 0; i < arrWords.length; i++) {
                const objWord = arrWords[i];
                if (objWord.ratio < 0) {
                    continue;
                }
                totalIds.push(i);
            }
            let page = 3
            let start = page * pageSize;
            let end = start + pageSize

            return {
                ...state,
                isLoading: false,
                arrWords: arrWords,
                displayIds: totalIds.slice(start, end),
                totalWords: totalIds,
                totalPages: Math.floor(totalIds.length / pageSize) + 1
            }

        case 'LOAD_WORDS_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'SEARCH_WORDS':
            // console.log('SEARCH_WORDS called', state)
            let totalFoundIds = new Set();
            for (let i = 0; i < state.arrWords.length; i++) {
                const objWord = state.arrWords[i];
                if (
                    action.payload.searchKey !== '' &&
                    objWord.ratio >= 0 &&
                    objWord.word.indexOf(action.payload.searchKey) !== -1
                ) {
                    totalFoundIds.add(i);
                }
            }
            for (let i = 0; i < state.arrWords.length; i++) {
                const objWord = state.arrWords[i];
                if (
                    action.payload.searchKey !== '' &&
                    objWord.ratio >= 0 &&
                    objWord.meaning.indexOf(action.payload.searchKey) !== -1
                ) {
                    totalFoundIds.add(i);
                }
            }
            totalIds = [...totalFoundIds];

            return {
                ...state,
                isLoading: false,
                searchKey: action.payload.searchKey,
                displayIds:  totalIds.slice(0, 18),
                totalWords: totalIds.length,
                totalPages: Math.floor(totalIds.length / pageSize) + 1
            }
        default:
            return state
    }
}

export const loadWords = (page) => {
    console.log('load Words called')
    return dispatch => {
        dispatch({
            type: 'LOAD_WORDS',
            page: page,
            payload: axios.get('http://appsculture.com/vocab/words.json')
        })
    }
}

export const searchWords = (searchKey) => {
    // console.log('searchWords called', searchKey)
    return dispatch => {
        dispatch({
            type: 'SEARCH_WORDS',
            payload: { searchKey }
        })
    }
}