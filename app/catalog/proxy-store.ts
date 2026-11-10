export function createStore(key,initValue = {}) {
    
    localStorage.setItem(key,JSON.stringify(initValue));

    const data = new Proxy(initValue,{
        set(target, prop, newValue, receiver) {
            target[prop] = newValue;

            document.dispatchEvent(new CustomEvent("onChange_"+key, {
                detail: { prop: {name: prop, value: newValue}, store: target },
                bubbles: true,      
                cancelable: true  
            }));
            return true;
        }
    })


   

    return {
        data,
        mutate(key: string, newValue: any){
            data[key] = newValue
        },
        onChange(f:Function){
            document.addEventListener("onChange_"+key, (event) => {
                f(event.detail)
            });
        }
    }
}

export const filterSearchStore = createStore('FILTER_SEARCH_KEY',{
    search: null,
    store: "os",
    brand:null,
    category: null,
    sort: "name",
    page: 1,
    page_size: 10
})


//  // 1. Create the custom event with optional data
// const userLoginEvent = new CustomEvent("userLogin", {
//     detail: { username: "Alice", role: "admin" },
//     bubbles: true,      // Allows the event to bubble up the DOM tree
//     cancelable: true    // Allows event.preventDefault() to be called
//   });
  
//   // 2. Listen for the event on a DOM element
//   document.addEventListener("userLogin", (event) => {
//     console.log(`Welcome back, ${event.detail.username}!`);
//   });
  
//   // 3. Dispatch (trigger) the event
//   document.dispatchEvent(userLoginEvent);