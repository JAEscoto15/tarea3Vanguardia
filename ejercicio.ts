interface Ejercicio {
    tagName: string;
    content?: string;
  }
  
  function crearHTML(element: Ejercicio): string {
    const { tagName, content } = element;
    return `<${tagName}>${content || ''}</${tagName}>`;
  }
  
  const htmlElement: Ejercicio = {
    tagName: 'h1',
    content: '¡Hola, TypeScript!',
  };
  
  console.log(crearHTML(htmlElement));
  