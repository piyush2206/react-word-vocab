import axios from "axios-es6";
import _ from 'underscore';

export const LOAD_WORDS = 'words/LOAD_WORDS'

const initialState = {
    count: 0,
    searchKey: '',
    arrWords: [],
    displayWords: []
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
            const displayWords = [];
            const arrWords = action.payload.data.words;

            for (let i = 0; i < 18; i++) {
                const objWord = arrWords[i];
                if (objWord.ratio < 0) {
                    continue;
                }
                displayWords.push(objWord);
            }
            return {
                ...state,
                isLoading: false,
                arrWords: arrWords,
                displayWords: displayWords
            }

        case 'LOAD_WORDS_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'SEARCH_WORDS':
            // console.log('SEARCH_WORDS called', state)
            let foundWords = state.arrWords.filter(objWord => {
                return (
                    action.payload.searchKey !== '' &&
                    objWord.ratio >= 0 &&
                    objWord.word.indexOf(action.payload.searchKey) !== -1
                )
            })
            let foundMeanings = state.arrWords.filter(objWord => {
                return (
                    action.payload.searchKey !== '' &&
                    objWord.ratio >= 0 &&
                    objWord.meaning.indexOf(action.payload.searchKey) !== -1
                )
            })
            let uniqWords = _.uniq([...foundWords, ...foundMeanings], item => item.id)
            uniqWords = uniqWords.slice(0, 18)
            return {
                ...state,
                isLoading: false,
                searchKey: action.payload.searchKey,
                displayWords: uniqWords
            }
        default:
            return state
    }
}

export const loadWords = () => {
    console.log('load Words called')
    return dispatch => {
        dispatch({
            type: 'LOAD_WORDS',
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