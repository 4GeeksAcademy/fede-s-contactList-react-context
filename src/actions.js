export const get_contacts = async () => {

    
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/fede/contacts`, { method: 'GET' });

      if (!response.ok) {
        console.log("Hay error al traer los contactos")
        throw new Error("Error getting all the contacts");
      }
      const data = await response.json();
      dispatch({ type: 'show_contacts', payload: data });
      
    } catch (error) {
        console.log("Error getting contacts from api")
    }

  }