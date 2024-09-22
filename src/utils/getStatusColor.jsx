export function getStatusColor(status) {
  switch(status.toUpperCase()) {
      case 'LIGADO':
          return 'green';
      case 'DESLIGADO':
          return 'red';
      case 'BLOQUEADO':
          return 'gray';
  } 
}