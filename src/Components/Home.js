// import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  // useEffect is called after every render i.e. everytime the dom is re-rendered , the useEffect is called . It can be used to fetch data etc .
  // The second argument is called a dependency array , which tells when to call useEffect . An empty dependency array will lead to useEffect only running once .
  

  return (
    <div className="home">
      {/* <h2>Homepage</h2> */}
      {/* <button type='button'>CLICK ME</button><br /> */}

      {/* Here we cannot directly pass arguments , since it will invoke the function without button click */}
      {/* Rather , we wrap this argument requiring function inside another function , which will be called only when button is clicked */}
      {/* <button type='button' onClick={() => {function2('Ayush')}}>Click Again</button>
        <button type='button' onClick={likeButtonHandle}>Likes : {num}</button> */}

      {/*When we output a list using map function , we have to use a unique key for each element in the list (generally it's ID) , so that react can differentiate b/w DOM and list element . */}
      
      { error && <div>{ error }</div> }
      { isPending && <div>Loading....</div> }
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

      {/*   To show filtered blogs : eg: to show blogs of mario  */}

      {/* <BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's Blogs" /> */}
    </div>
  );
}

export default Home;
