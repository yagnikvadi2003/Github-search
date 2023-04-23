import React from 'react';

const Form = React.lazy(() => import('../container/common/Form'));
const Card = React.lazy(() => import('../container/common/Card'));

const API_URL = "https://api.github.com";

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
}

const UserSearch: React.FC = (): JSX.Element => {
  // 👇️ pass empty string as initial value
  const [query, setQuery] = React.useState<string>('');
  const [results, setResults] = React.useState<User[]>([]);

  async function fetchResults(query: string): Promise<User[]> {
    try {
      const response = await fetch(`${API_URL}/search/users?q=${query}`);
      const json = await response.json();
      return json.items || [];
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  /**
  * Here we restrict all handleSubmits to be exclusively on 
  * HTMLFormElement Elements
  * 
  * We're using `FormEventHandler` as type for the event.
  * with `HTMLFormElement` as a type parameter.
  * It contains properties an event can have
  * and methods (such as `preventDefault` an others).
  * be fired on an HTML <button> element.
  **/
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event: React.FormEvent<HTMLFormElement>) => {
    // 👇️ prevent page refresh
    event?.preventDefault();
    const results = await fetchResults(query);
    setResults(results);
    console.log("query: ", query);
  }

  /**
  * Here we restrict all handleChanges to be exclusively on 
  * HTMLInputElement Elements
  * 
  * We're using `ChangeEvent` as type for the event.
  * with `HTMLInputElement` as a type parameter.
  * It contains properties an event can have
  * and methods (such as `preventDefault` an others).
  **/
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 👇️ prevent page refresh
    event?.preventDefault();
    /*
    *
    * Here, 'EventTarget & HTMLInputElement' is a type that represents an object that can be both an 'EventTarget' and an 'HTMLInputElement'.
    * 
    * The 'value' property is specific to 'HTMLInputElement' objects, which  means that it may not
    * exist on all objects that implement the 'EventTarget' interface.
    * 
    */
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    setQuery(inputValue);
  };

  /**
  * Here we restrict all handleClicks to be exclusively on 
  * HTMLButtonElement Elements
  * 
  * We're using `MouseEvent` as type for the event.
  * with `HTMLButtonElement` as a type parameter.
  * It contains properties an event can have
  * and methods (such as `preventDefault` an others).
  **/
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // 👇️ prevent page refresh
    // event?.preventDefault();

    // 👇️ redirects to an external URL
    // window.open('https://github.com/yagnikvadi2003', '_blank', 'noopener noreferrer');
  // };

  /*
  * 👇️type assertion
  * ✅ value={query as string}
  */
  return (
    <React.Fragment>
      <div className="userSearchMain">
        <div className='userSearchHeading'>GitHub User Search</div>
        <Form onSubmit={handleSubmit} onChange={handleChange} value={query} InputId='userSearchInput' className='fa-solid fa-magnifying-glass' ButtonId='userSearchButton'/>
      </div>
      {
        results.map((element, index): any => {
          return (
            <Card 
              key={index}
              src='src' 
              alt='alt'
              ImageId='cardImage' 
              children='GitHub' 
              className='fa-brands fa-github'
            />
          );
        })
      }
      {/* <Card avatarUrl='../assets/images/download.jpeg' ImageId='cardImage' children='GitHub' className='fa-brands fa-github' onClick={handleClick}/> */}
    </React.Fragment>
  );
};

export default UserSearch;