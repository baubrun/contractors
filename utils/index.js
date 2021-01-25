

export const getValues = (data, key) => {
    return data.map(item => item[key])
}


export const compare = (a, b) => {
    return a - b
}


export const sortedArray = (items) => {

    const compare = (a, b) => {
        return a - b
    }

    return items.sort(compare)

}