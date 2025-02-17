import { Theme } from './theme.d'

export const lighTheme : Theme = {
    appBackground: '#FFF',
    appColor: '#000',
    aooDefaultColor: '#E0E0E0',
    appLogo: 'dnc-logo-black.svg',
    appSkeletonTo: '#EEE',
    appSkeletonFrom: '#CCC',
    buttons:{
        alert: '#E80000',
        alertColor: '#FFFFFF',
        alertHover: '#E80000',
        disabled: '#CCC',
        disabledColor: '#666',
        primary: '#C78F2',
        primaryColor: '#FFF',
        primaryHover: '##0061D',
    },
card: {
    alert: '#E80000',
    background: '#FFF',
    border: '#E0E0E0',
    success: '##008000',
    warning: '#F7A300',
},
textInput: {
    active: '#FFF',
    activeColor: '#000',
    borderColor: '#E0E0E0',
    disabled: '#EEE',
    disabledBorderColor: '#E0E0E0',
    disabledColor:'#666',
    placeholder: '#666',
},

typographies: {
    error: '#FF0202',
    subtitle: '#666',
    success: '#008000',
}

}

export const darkTheme: Theme = {
    appBackground: '#060B26',
    appColor: '#FFF',
    aooDefaultColor: '#21497D',
    appLogo: 'dnc-logo-white.svg',
    appSkeletonFrom: '060B26',
    appSkeletonTo: '21497D',
    buttons:{
        alert: '#E80000',
        alertColor: '#FFFFFF',
        alertHover: '#E80000',
        disabled: '#313649',
        disabledColor: '#6D7B8E',
        primary: '#C78F2',
        primaryColor: '#FFF',
        primaryHover: '##0061D',
    },
card: {
    alert: '#E80000',
    background: '#0F1535',
    border: '#21497D',
    success: '##008000',
    warning: '#F7A300',
},
textInput: {
    active: '#0F1535',
    activeColor: '#FFF',
    borderColor: '#21497D',
    disabled: '#282D49',
    disabledBorderColor: '#2E3F55',
    disabledColor:'#58677C',
    placeholder: '#89A7CB',
},

typographies: {
    error: '#FF0202',
    subtitle: '#89A7CE',
    success: '#008000',
}

}