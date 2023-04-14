const mmNumDictionary = {
    0: '၀',
    1: '၁',
    2: '၂',
    3: '၃',
    4: '၄',
    5: '၅',
    6: '၆',
    7: '၇',
    8: '၈',
    9: '၉',
}

const mmDateDictionary = {
    '01': 'ဇန်နဝါရီ',
    '02': 'ဖေဖော်ဝါရီ',
    '03': 'မတ်',
    '04': 'ဧပြီ',
    '05': 'မေ',
    '06': 'ဇွန်',
    '07': 'ဇူလိုင်',
    '08': 'ဩဂုတ်',
    '09': 'စက်တင်ဘာ',
    '10': 'အောက်တိုဘာ',
    '11': 'နိုဝင်ဘာ',
    '12': 'ဒီဇင်ဘာ',
}

function convertMMNum(engNum) {
    let mmStr = '';

    let engStr = engNum + '';

    for (let index = 0; index < engStr.length; index++) {
        let element = engStr[index];

        let num = mmNumDictionary[element]

        if (num) {
            mmStr += num;
        } else {
            mmStr += element;
        }
    }

    return mmStr;
}

function convertMMDate(engStrDate, format = 'YYYY MM DD', join = ' ') {
    if (engStrDate) {
        let engDate = new Date(engStrDate);

        let dd = String(engDate.getDate()).padStart(2, '0')
        let mm = String(engDate.getMonth() + 1).padStart(2, '0')
        let yyyy = engDate.getFullYear()

        if (!(dd && mm && yyyy)) {
            throw new Error('Invalid Date Format!')
        }

        let convertDD = convertMMNum(dd)
        let convertMM = convertMMNum(mm)
        let convertYYYY = convertMMNum(yyyy)

        if (format === 'YYYY MM DD') {
            let mmDate = convertYYYY + join + convertMM + join + convertDD

            return mmDate
        }

        if (format === 'MM DD YYYY') {
            let mmDate = convertMM + join + convertDD + join + convertYYYY

            return mmDate
        }

        if (format === 'DD MM YYYY') {
            let mmDate = convertDD + join + convertMM + join + convertYYYY

            return mmDate
        }

        let mmmm = mmDateDictionary[mm]

        if (mmmm) {
            if (format === 'YYYY MMMM DD') {
                let mmDate = convertYYYY + join + mmmm + join + convertDD

                return mmDate
            }

            if (format === 'MMMM DD YYYY') {
                let mmDate = mmmm + join + convertDD + join + convertYYYY

                return mmDate
            }

            if (format === 'DD MMMM YYYY') {
                let mmDate = convertDD + join + mmmm + join + convertYYYY

                return mmDate
            }
        } else {
            throw new Error('Invalid Date Format!')
        }
    }
    else {
        return undefined
    }
}

module.exports = {
    convertMMNum,
    convertMMDate
}