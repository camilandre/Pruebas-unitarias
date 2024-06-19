export function getPercent (value, total) {
    if (typeof value !== 'number' || typeof total !== 'number') {
        throw new Error('Both value and total must be numbers');
    }
    if (total === 0) {
        throw new Error('Total must not be zero');
    }
    const percent = (value/total) * 100
    const percentFixed = percent.toFixed(2)
    if (isNaN(percentFixed)) {
        throw new Error('Result is not a number');
    }

    return parseFloat(percentFixed)
}

export function intValue(texto) {
    return /^\d+$/.test(texto);
}

export function isToday(datetime) {
    if (datetime === null || datetime === undefined || (typeof datetime !== 'string' && typeof datetime !== 'object') || isNaN(new Date(datetime))) {
        throw new Error('Invalid date');
    }
    const now = new Date();
    const date = new Date(datetime);
    return (date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear())
}

export function typeProject(type) {
    switch (type) {
        case 0:
            return "Consumo";
        case 1:
            return "Autoconsumo";
        case 2:
            return "Distribución";
        case 3:
            return "Producción";
        default:
            return "No definido";
    }
}