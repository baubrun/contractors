

export const getValues = (data, key) => {
    return data.map(item => item[key])
}


export const compare = (a, b) => {
    return a - b
}



export const isFalsy = (keys) => {
    const falsy = (val) => Boolean(val) === true
    return keys.some(falsy)
  }


export const isTruthy = (keys) => {
    const isTrue = (val) => Boolean(val) === true
    return keys.every(isTrue)
  }



export const sortedArray = (items) => {

    const compare = (a, b) => {
        return a - b
    }

    return items.sort(compare)

}


