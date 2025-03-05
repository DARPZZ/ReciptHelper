export  const scrollToID = (id: string) => {
      
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
    
  };