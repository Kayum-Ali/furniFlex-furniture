const getItem = ()=>{
    const storedItem = localStorage.getItem('blogdata');
    if(storedItem){
        return JSON.parse(storedItem);
    }
    return [];
}

const saveItem = (id)=>{
   const storedItems = getItem();
   const exists = storedItems.find(Id => Id === id);
   if(!exists){
       storedItems.push(id);
       localStorage.setItem('blogdata', JSON.stringify(storedItems));
   }
}
export {saveItem, getItem}