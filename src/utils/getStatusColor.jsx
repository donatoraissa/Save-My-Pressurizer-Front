export function getStatusColor(status) {
    switch (status.toUpperCase()) {
        case 'ON':
            return 'green';
        case 'OFF':
            return 'red';
        case 'BLOCKED':
            return '#FFC222';
    }
}

export function getLabelStatus(status) {
    switch (status.toUpperCase()) {
        case 'ON':
            return 'Ligado';
        case 'OFF':
            return 'Desligado';
        case 'BLOCKED':
            return 'Bloqueado';
    }
}