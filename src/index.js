function component() {
    const element = document.createElement('div');
  
    // Lodash, script olarak eklendiğinden dolayı bu satırın çalışması için,
    //   lodash'in daha önceden yüklenmiş olması gereklidir.
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());