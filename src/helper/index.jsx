export const isBoolean = (data, accessor) => {
    if (typeof data[accessor] === 'boolean') {
        return data[accessor] === false ? 'Disable' : 'Active'
    }

    return data[accessor]
}

export const stateStyles = (tData) => {
    if (tData === "Active") {
        return "active"
    }
    if (tData === "Disable") {
        return "disable"
    }

    return ''
}

export const getFormattedDate = (date) => new Intl.DateTimeFormat('uk-UA').format(new Date(date))

export const normalizeDataPoint = (dataPoint) => ({
    ...dataPoint,
    curency: dataPoint.curency === 'null' ? 0 : parseInt(dataPoint.curency)
})

export const isSubstring = (haystack, needle) =>
   haystack.toLowerCase().includes(needle.toLowerCase())

export const DAYS_IN_WEEK = 7
export const DAYS_IN_MONTH = 30
export const DAYS_IN_YEAR = 365

export const getPastDate = (referenceDate, daysAgo) => {
    const refDate = new Date(referenceDate);
    return refDate.setDate(refDate.getDate() - daysAgo);
}
