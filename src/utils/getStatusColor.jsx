export function getStatusColor(status) {
  switch(status.toUpperCase()) {
      case 'ON':
          return 'green';
      case 'OFF':
          return 'red';
      case 'BLOCKED':
          return 'yellow';
  } 
}