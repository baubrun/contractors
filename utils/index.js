

export const getValues = (data, key) => {
    return data.map(item => item[key])
}


export const compare = (a, b) => {
    return a - b
}



export const disableBtn = (keys) => {
    const falsy = (val) => Boolean(val) === false
    return keys.some(falsy)
  }



export const sortedArray = (items) => {

    const compare = (a, b) => {
        return a - b
    }

    return items.sort(compare)

}


