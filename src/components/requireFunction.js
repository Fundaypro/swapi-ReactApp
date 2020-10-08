

async function requireFunction(url) {
     
        let response = await fetch(url,{method: "GET"});
        
        if (response.status===200) {
            
            return response.json();
        }
        else {
            return 'error'
        }

}
export default requireFunction;