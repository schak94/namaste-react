const Contact = () => {
    return ( 
        <>
        <h1>Contact</h1>
        <form>
                <input className="border-2 border-solid border-green-300 rounded-sm p-1 hover:border-green-400 focus:outline-none focus:border-green-400" name="search-res"type="text" placeholder="First Name" />
                <input className="border-2 border-solid border-green-300 rounded-sm p-1 hover:border-green-400 focus:outline-none focus:border-green-400" name="search-res"type="text" placeholder="Last Name" />
                <button className=" mx-2 p-1 bg-green-300 rounded-sm hover:bg-green-400">Submit</button>
        </form>
        
        </> 
    );
}
 
export default Contact;