const reformatPrice = (currency ,price) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        minimumFractionDigits: 2,
        currency
      }) 
      return formatter.format(price)
}

export const Peso = (price) => {
    return reformatPrice("CLP",price)
}
