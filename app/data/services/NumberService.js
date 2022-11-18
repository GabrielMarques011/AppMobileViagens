export const NumberService = {

    currency(value){
        Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        return formatter.format(value)
    }

}