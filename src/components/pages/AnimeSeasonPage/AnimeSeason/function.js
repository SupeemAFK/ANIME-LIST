export function getCurrentDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    return today = yyyy + '-' + mm + '-' + dd;
}

export function getSeason(date) {
    let month = date.slice(5, 7)
    if (month[0] === "0"){
        month = date.slice(6, 7)
    }
    
    let season = '';
    switch (month) {
      case '12':
      case '1':
      case '2':
        season = 'winter';
        break;
      case '3':
      case '4':
      case '5':
        season = 'spring';
        break;
      case '6':
      case '7':
      case '8':
        season = 'summer';
        break;
      case '9':
      case '10':
      case '11':
        season = 'fall';
        break;
        
        default: break;
    }
    return season;
}